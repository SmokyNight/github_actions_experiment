#!/usr/bin/env python3
"""Validate the generated painting quiz dataset and its image URLs."""

import argparse
import concurrent.futures
import json
import re
import time
import urllib.error
import urllib.request
from pathlib import Path

DATASET = Path(__file__).resolve().parent.parent / "quiz-paintings.js"
MINIMUM_PAINTINGS = 1_000
SAMPLE_SIZE = 50
MAX_WORKERS = 4
USER_AGENT = (
    "github_actions_experiment/1.0 "
    "(https://github.com/SmokyNight/github_actions_experiment)"
)
ENTRY_PATTERN = re.compile(
    r"\{\s*title:\s*(\"(?:\\.|[^\"\\])*\")"
    r",\s*image:\s*(\"(?:\\.|[^\"\\])*\")\s*,?\s*\}",
)


def read_entries():
    text = DATASET.read_text(encoding="utf-8")
    return [
        {"title": json.loads(title), "image": json.loads(image)}
        for title, image in ENTRY_PATTERN.findall(text)
    ]


def validate_dataset(entries):
    errors = []
    titles = [entry["title"].casefold() for entry in entries]
    images = [entry["image"] for entry in entries]

    if len(entries) < MINIMUM_PAINTINGS:
        errors.append(
            f"expected at least {MINIMUM_PAINTINGS} paintings, found {len(entries)}"
        )
    if len(set(titles)) != len(titles):
        errors.append("painting titles must be unique")
    if len(set(images)) != len(images):
        errors.append("painting image URLs must be unique")
    if any(not image.startswith("https://") for image in images):
        errors.append("all painting images must use HTTPS")

    if errors:
        raise RuntimeError("; ".join(errors))


def check_url(url):
    request = urllib.request.Request(
        url,
        method="HEAD",
        headers={"User-Agent": USER_AGENT},
    )
    for attempt in range(4):
        try:
            with urllib.request.urlopen(request, timeout=30) as response:
                content_type = response.headers.get_content_type()
                if response.status != 200:
                    return f"HTTP {response.status}: {url}"
                if not content_type.startswith("image/"):
                    return f"unexpected content type {content_type}: {url}"
                return None
        except urllib.error.HTTPError as error:
            if error.code in (429, 503) and attempt < 3:
                time.sleep(2 ** attempt)
                continue
            return f"{error}: {url}"
        except Exception as error:
            return f"{error}: {url}"
    return None


def select_urls(entries, check_all):
    urls = [entry["image"] for entry in entries]
    if check_all or len(urls) <= SAMPLE_SIZE:
        return urls

    step = max(1, len(urls) // SAMPLE_SIZE)
    return urls[::step][:SAMPLE_SIZE]


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--all",
        action="store_true",
        help="check every image URL instead of a representative sample",
    )
    args = parser.parse_args()

    entries = read_entries()
    validate_dataset(entries)
    urls = select_urls(entries, args.all)

    with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_WORKERS) as pool:
        failures = [failure for failure in pool.map(check_url, urls) if failure]

    print(
        f"validated {len(entries)} paintings and "
        f"{len(urls)} image URLs; failures: {len(failures)}"
    )
    for failure in failures[:20]:
        print(failure)

    if failures:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
