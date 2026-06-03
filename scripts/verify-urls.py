import re
import urllib.request
from pathlib import Path

text = Path(__file__).resolve().parent.parent / "quiz-paintings.js"
urls = re.findall(r'image: "(https://[^"]+)"', text.read_text(encoding="utf-8"))
bad = []
for index, url in enumerate(urls):
    if index % 5 != 0:
        continue
    try:
        req = urllib.request.Request(url, method="HEAD", headers={"User-Agent": "quiz/1.0"})
        urllib.request.urlopen(req, timeout=15)
    except Exception as error:
        bad.append((url, str(error)[:80]))
print(f"sampled {len(range(0, len(urls), 5))} urls, failures: {len(bad)}")
for url, error in bad[:20]:
    print(error)
    print(" ", url[:100])
