#!/usr/bin/env python3
"""Build quiz-flags.js from FlagCDN's countries and territories catalog."""
import json
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "quiz-flags.js"
UA = "github_actions_experiment/1.0"
CATALOG_URL = "https://flagcdn.com/en/codes.json"
EXCLUDED_CODES = {"eu", "un"}
TITLE_OVERRIDES = {
    "ci": "Ivory Coast",
    "sz": "Eswatini",
    "va": "Vatican City",
}
IMAGE_OVERRIDES = {
    "af": "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg",
}


def fetch_countries():
    req = urllib.request.Request(CATALOG_URL, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=120) as resp:
        countries = json.loads(resp.read().decode("utf-8"))

    flags = []
    for code, catalog_title in countries.items():
        if len(code) != 2 or code in EXCLUDED_CODES:
            continue

        flags.append(
            {
                "title": TITLE_OVERRIDES.get(code, catalog_title),
                "image": IMAGE_OVERRIDES.get(
                    code,
                    f"https://flagcdn.com/w320/{code}.png",
                ),
            }
        )

    return sorted(
        flags,
        key=lambda item: item["title"].casefold(),
    )


def write_js(flags):
    lines = ["const QUIZ_FLAGS = ["]
    for flag in flags:
        lines.append("  {")
        lines.append(f"    title: {json.dumps(flag['title'])},")
        lines.append(f"    image: {json.dumps(flag['image'])},")
        lines.append("  },")
    lines.append("];")
    lines.append("")
    OUT.write_text("\n".join(lines), encoding="utf-8")


def main():
    flags = fetch_countries()
    write_js(flags)
    print(f"wrote {len(flags)} countries and territories to {OUT}")


if __name__ == "__main__":
    main()
