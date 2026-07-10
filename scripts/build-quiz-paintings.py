#!/usr/bin/env python3
"""Build a 1,100-work quiz from curated and open-access paintings."""

import json
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CURATED = Path(__file__).resolve().parent / "resolved-paintings.json"
OUT = ROOT / "quiz-paintings.js"

API = "https://openaccess-api.clevelandart.org/api/artworks/"
USER_AGENT = "github_actions_experiment/1.0 (painting quiz generator)"
TARGET_COUNT = 1_100
BATCH_SIZE = 1_000
MAX_TITLE_LENGTH = 120
FIELDS = "id,title,type,share_license_status,images"


def fetch_museum_batch(skip):
    query = urllib.parse.urlencode(
        {
            "type": "Painting",
            "has_image": "1",
            "cc0": "1",
            "limit": BATCH_SIZE,
            "skip": skip,
            "fields": FIELDS,
        }
    )
    request = urllib.request.Request(
        f"{API}?{query}",
        headers={"User-Agent": USER_AGENT},
    )
    with urllib.request.urlopen(request, timeout=120) as response:
        payload = json.loads(response.read().decode("utf-8"))

    if not isinstance(payload.get("data"), list):
        raise RuntimeError("The museum API returned an unexpected response")

    return payload["data"], payload.get("info", {}).get("total", 0)


def normalize_title(value):
    return " ".join(str(value or "").split())


def add_painting(paintings, seen_titles, seen_images, title, image):
    title = normalize_title(title)
    image = str(image or "").strip()
    normalized_title = title.casefold()

    if (
        not title
        or len(title) > MAX_TITLE_LENGTH
        or not image.startswith("https://")
        or normalized_title in seen_titles
        or image in seen_images
    ):
        return False

    paintings.append({"title": title, "image": image})
    seen_titles.add(normalized_title)
    seen_images.add(image)
    return True


def load_curated_paintings():
    curated = json.loads(CURATED.read_text(encoding="utf-8"))
    paintings = []
    seen_titles = set()
    seen_images = set()

    for title, image in curated.items():
        add_painting(
            paintings,
            seen_titles,
            seen_images,
            title,
            image,
        )

    return paintings, seen_titles, seen_images


def museum_image(record):
    return ((record.get("images") or {}).get("web") or {}).get("url")


def collect_paintings():
    paintings, seen_titles, seen_images = load_curated_paintings()
    skip = 0
    available = None

    while len(paintings) < TARGET_COUNT and (
        available is None or skip < available
    ):
        records, available = fetch_museum_batch(skip)
        if not records:
            break

        for record in records:
            if (
                record.get("type") != "Painting"
                or record.get("share_license_status") != "CC0"
            ):
                continue

            add_painting(
                paintings,
                seen_titles,
                seen_images,
                record.get("title"),
                museum_image(record),
            )
            if len(paintings) == TARGET_COUNT:
                break

        skip += len(records)
        print(f"collected {len(paintings)}/{TARGET_COUNT} paintings")

    if len(paintings) < TARGET_COUNT:
        raise RuntimeError(
            f"Only found {len(paintings)} eligible paintings; "
            f"{TARGET_COUNT} required"
        )

    return paintings


def write_js(paintings):
    lines = ["const QUIZ_PAINTINGS = ["]
    for painting in paintings:
        lines.append("  {")
        lines.append(
            f"    title: {json.dumps(painting['title'], ensure_ascii=False)},"
        )
        lines.append(f"    image: {json.dumps(painting['image'])},")
        lines.append("  },")
    lines.append("];")
    lines.append("")
    OUT.write_text("\n".join(lines), encoding="utf-8")


def main():
    paintings = collect_paintings()
    write_js(paintings)
    print(f"wrote {len(paintings)} paintings to {OUT}")


if __name__ == "__main__":
    main()
