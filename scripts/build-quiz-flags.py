#!/usr/bin/env python3
"""Build quiz-flags.js from REST Countries (independent states + Palestine)."""
import json
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "quiz-flags.js"
UA = "github_actions_experiment/1.0"
API = "https://restcountries.com/v3.1/independent?fields=name,flags"


def fetch_countries():
    req = urllib.request.Request(API, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=120) as resp:
        countries = json.loads(resp.read().decode())

    by_name = {
        entry["name"]["common"]: entry["flags"]["png"] for entry in countries
    }

    if "Palestine" not in by_name:
        palestine_url = (
            "https://restcountries.com/v3.1/name/palestine?fields=name,flags"
        )
        req = urllib.request.Request(palestine_url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=60) as resp:
            palestine = json.loads(resp.read().decode())[0]
        by_name[palestine["name"]["common"]] = palestine["flags"]["png"]

    return sorted(
        ({"title": name, "image": image} for name, image in by_name.items()),
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
    print(f"wrote {len(flags)} countries to {OUT}")


if __name__ == "__main__":
    main()
