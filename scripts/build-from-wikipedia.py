#!/usr/bin/env python3
"""Build quiz-paintings.js using Wikipedia thumbnails + cached Commons URLs."""

import json
import time
import urllib.parse
import urllib.request
from pathlib import Path

USER_AGENT = "github_actions_experiment/1.0 (quiz generator)"
CACHE = Path(__file__).resolve().parent / "resolved-paintings.json"
OUT = Path(__file__).resolve().parent.parent / "quiz-paintings.js"

# Quiz title -> English Wikipedia article title
WIKI_PAINTINGS = [
    ("Guernica", "Guernica (Picasso)"),
    ("The Son of Man", "The Son of Man"),
    ("The Treachery of Images", "The Treachery of Images"),
    ("The Persistence of Memory", "The Persistence of Memory"),
    ("Campbell's Soup Cans", "Campbell's Soup Cans"),
    ("Self-Portrait with Bandaged Ear", "Self-Portrait with Bandaged Ear"),
    ("The Raft of the Medusa", "The Raft of the Medusa"),
    ("Bal du moulin de la Galette", "Bal du moulin de la Galette"),
    ("Le Déjeuner sur l'herbe", "Le Déjeuner sur l'herbe"),
    ("A Bar at the Folies-Bergère", "A Bar at the Folies-Bergère"),
    ("The Card Players", "The Card Players (painting)"),
    ("Mont Sainte-Victoire", "Mont Sainte-Victoire (Cézanne)"),
    ("The Large Bathers", "The Large Bathers (Cézanne)"),
    ("Where Do We Come From?", "Where Do We Come From? What Are We? Where Are We Going?"),
    ("Vision After the Sermon", "Vision After the Sermon"),
    ("The Yellow Christ", "The Yellow Christ"),
    ("The Absinthe Drinker", "L'Absinthe (painting)"),
    ("The Monk by the Sea", "The Monk by the Sea"),
    ("The Jewish Bride", "The Jewish Bride"),
    ("Girl Reading a Letter at an Open Window", "Girl Reading a Letter at an Open Window"),
    ("The Hunters in the Snow", "The Hunters in the Snow"),
    ("The Ghent Altarpiece", "Ghent Altarpiece"),
    ("The Last Judgment", "The Last Judgment (Michelangelo)"),
    ("The Sistine Madonna", "Sistine Madonna"),
    ("The Calling of Saint Matthew", "The Calling of Saint Matthew"),
    ("Judith Beheading Holofernes", "Judith Beheading Holofernes (Caravaggio)"),
    ("The Supper at Emmaus", "Supper at Emmaus (Caravaggio, London)"),
    ("The Ecstasy of Saint Teresa", "Ecstasy of Saint Teresa"),
    ("The Elevation of the Cross", "The Elevation of the Cross (Rubens)"),
    ("The Descent from the Cross", "The Descent from the Cross (Rubens, 1612–1614)"),
    ("The Rape of the Daughters of Leucippus", "The Rape of the Daughters of Leucippus"),
    ("The Surrender of Breda", "The Surrender of Breda"),
    ("The Rokeby Venus", "Rokeby Venus"),
    ("The Embarkation for Cythera", "The Embarkation for Cythera"),
    ("The Blue Boy", "The Blue Boy"),
    ("Mr and Mrs Andrews", "Mr and Mrs Andrews"),
    ("The Death of General Wolfe", "The Death of General Wolfe"),
    ("Washington Crossing the Delaware", "Washington Crossing the Delaware"),
    ("Christina's World", "Christina's World"),
    ("Automat", "Automat (painting)"),
    ("Early Sunday Morning", "Early Sunday Morning"),
    ("Room in New York", "Room in New York"),
    ("The Two Fridas", "The Two Fridas"),
    ("Self-Portrait with Thorn Necklace", "Self-Portrait with Thorn Necklace and Hummingbird"),
    ("The Broken Column", "The Broken Column"),
    ("Number 1, 1950 (Lavender Mist)", "Number 1, 1950 (Lavender Mist)"),
    ("Autumn Rhythm", "Autumn Rhythm"),
    ("Woman I", "Woman I"),
    ("Flag", "Flag (painting)"),
    ("Whaam!", "Whaam!"),
    ("Drowning Girl", "Drowning Girl"),
    ("Marilyn Diptych", "Marilyn Diptych"),
    ("Broadway Boogie Woogie", "Broadway Boogie Woogie"),
    ("Composition with Red, Blue and Yellow", "Composition with Red, Blue and Yellow"),
    ("Black Square", "Black Square (painting)"),
    ("White on White", "White on White (painting)"),
    ("The Red Studio", "The Red Studio"),
    ("The Dance", "The Dance (Matisse)"),
    ("Goldfish", "Goldfish (Matisse)"),
    ("The Joy of Life", "Le bonheur de vivre"),
    ("Les Demoiselles d'Avignon", "Les Demoiselles d'Avignon"),
    ("Girl before a Mirror", "Girl before a Mirror"),
    ("The Weeping Woman", "The Weeping Woman"),
    ("The Old Guitarist", "The Old Guitarist"),
    ("Three Musicians", "Three Musicians"),
    ("Le Rêve", "Le Rêve (Picasso)"),
    ("The Blue Room", "The Blue Room (Picasso)"),
    ("The Potato Eaters", "The Potato Eaters"),
    ("Cafe Terrace at Night", "Café Terrace at Night"),
    ("Almond Blossoms", "Almond Blossoms"),
    ("The Night Café", "The Night Café"),
    ("Portrait of Dr. Gachet", "Portrait of Dr. Gachet"),
    ("The Church at Auvers", "The Church at Auvers"),
    ("The Birth of Venus (Bouguereau)", "The Birth of Venus (Cabanel)"),
    ("The Gross Clinic", "The Gross Clinic"),
    ("The Gulf Stream", "The Gulf Stream (painting)"),
    ("The Oxbow", "The Oxbow"),
    ("Kindred Spirits", "Kindred Spirits (painting)"),
    ("Heart of the Andes", "Heart of the Andes"),
    ("The Veteran in a New Field", "The Veteran in a New Field"),
    ("The Artist's Garden at Giverny", "The Artist's Garden at Giverny"),
    ("Bridge over a Pond of Water Lilies", "Bridge over a Pond of Water Lilies"),
    ("Rouen Cathedral", "Rouen Cathedral (Monet series)"),
    ("San Giorgio Maggiore at Dusk", "San Giorgio Maggiore at Dusk"),
    ("The Ballet Rehearsal", "The Ballet Rehearsal on Stage"),
    ("The Tub", "The Tub (Degas)"),
    ("The Dance Foyer at the Opera", "The Dance Foyer at the Opera on the rue Le Peletier"),
    ("A Friend in Need", "Dogs Playing Poker"),
    ("The Storm", "The Storm (Cot)"),
    ("The Death of Sardanapalus", "The Death of Sardanapalus"),
    ("The Apotheosis of Homer", "The Apotheosis of Homer (Ingres)"),
    ("The Valpinçon Bather", "The Valpinçon Bather"),
    ("The Turkish Bath", "The Turkish Bath (Ingres)"),
    ("The Coronation of Napoleon", "The Coronation of Napoleon"),
    ("Napoleon Crossing the Alps", "Napoleon Crossing the Alps"),
    ("The Intervention of the Sabine Women", "The Intervention of the Sabine Women"),
    ("The Stone Breakers", "The Stone Breakers"),
    ("The Artist's Studio", "The Painter's Studio"),
    ("The Gleaners", "The Gleaners"),
    ("The Star", "The Star (Degas)"),
    ("The Floor Scrapers", "The Floor Scrapers"),
    ("Paris Street, Rainy Day", "Paris Street; Rainy Day"),
    ("The Balcony", "The Balcony (Manet)"),
    ("Music in the Tuileries", "Music in the Tuileries"),
    ("The Fifer", "The Fifer (Manet)"),
    ("The Railway", "The Railway (Manet)"),
    ("The Umbrellas", "The Umbrellas (Renoir)"),
    ("The Swing (Renoir)", "The Swing (Renoir)"),
    ("The Harbor at Lorient", "The Harbor at Lorient"),
    ("The Thinker", "The Thinker"),
    ("The Kiss (Rodin)", "The Kiss (Rodin sculpture)"),
    ("The Burghers of Calais", "The Burghers of Calais"),
    ("The Snail", "The Snail (Matisse)"),
    ("The Dream (Rousseau)", "The Dream (Rousseau painting)"),
    ("The Sleeping Gypsy", "The Sleeping Gypsy"),
    ("The Banjo Lesson", "The Banjo Lesson"),
    ("Freedom from Want", "Freedom from Want"),
    ("The Empire of Light", "The Empire of Light"),
    ("Golconda", "Golconda (Magritte)"),
    ("Self-Portrait with Monkey", "Self-Portrait with Monkey"),
    ("The Flower Carrier", "The Flower Carrier"),
]


def wiki_thumb(article):
    params = urllib.parse.urlencode(
        {
            "action": "query",
            "titles": article,
            "prop": "pageimages",
            "pithumbsize": 960,
            "format": "json",
        }
    )
    req = urllib.request.Request(
        "https://en.wikipedia.org/w/api.php?" + params,
        headers={"User-Agent": USER_AGENT},
    )
    with urllib.request.urlopen(req, timeout=60) as resp:
        data = json.loads(resp.read().decode())
    page = next(iter(data["query"]["pages"].values()))
    if "missing" in page:
        return None
    return page.get("thumbnail", {}).get("source")


def write_js(paintings):
    lines = ["const QUIZ_PAINTINGS = ["]
    for painting in paintings:
        lines.append("  {")
        lines.append(f"    title: {json.dumps(painting['title'])},")
        lines.append(f"    image: {json.dumps(painting['image'])},")
        lines.append("  },")
    lines.append("];")
    lines.append("")
    with open(OUT, "w", encoding="utf-8", newline="\n") as handle:
        handle.write("\n".join(lines))


def main():
    resolved = {}
    if CACHE.exists():
        resolved = json.loads(CACHE.read_text(encoding="utf-8"))

    for quiz_title, wiki_title in WIKI_PAINTINGS:
        if quiz_title in resolved:
            continue
        image = wiki_thumb(wiki_title)
        if image:
            resolved[quiz_title] = image
            print(f"ok: {quiz_title}")
        else:
            print(f"missing: {quiz_title} ({wiki_title})")
        time.sleep(1.0)

    CACHE.write_text(json.dumps(resolved, ensure_ascii=False, indent=2), encoding="utf-8")

    # Preserve order: cached first in original order, then wiki additions
    order = list(resolved.keys())
    paintings = [{"title": t, "image": resolved[t]} for t in order]
    write_js(paintings)
    print(f"Wrote {len(paintings)} paintings to {OUT}")


if __name__ == "__main__":
    main()
