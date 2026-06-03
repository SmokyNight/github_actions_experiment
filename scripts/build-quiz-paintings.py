#!/usr/bin/env python3
"""Build quiz-paintings.js: verified Commons cache + Wikipedia thumbnails."""
import json
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CACHE = Path(__file__).resolve().parent / "resolved-paintings.json"
OUT = ROOT / "quiz-paintings.js"
UA = "github_actions_experiment/1.0"

ORIGINAL = [
    "Mona Lisa",
    "The Starry Night",
    "Girl with a Pearl Earring",
    "The Scream",
    "The Great Wave off Kanagawa",
    "American Gothic",
    "The Birth of Venus",
    "Water Lilies",
    "The Night Watch",
    "Arnolfini Portrait",
    "A Sunday on La Grande Jatte",
    "The Kiss",
    "Las Meninas",
    "Nighthawks",
    "Whistler's Mother",
]

ADDITIONS = [
    ("The Creation of Adam", "The Creation of Adam"),
    ("The Last Supper", "The Last Supper"),
    ("Guernica", "Guernica (Picasso)"),
    ("The School of Athens", "The School of Athens"),
    ("The Garden of Earthly Delights", "The Garden of Earthly Delights"),
    ("Impression, Sunrise", "Impression, Sunrise"),
    ("The Hay Wain", "The Hay Wain"),
    ("The Fighting Temeraire", "The Fighting Temeraire"),
    ("Liberty Leading the People", "Liberty Leading the People"),
    ("The Third of May 1808", "The Third of May 1808"),
    ("Saturn Devouring His Son", "Saturn Devouring His Son"),
    ("The Son of Man", "The Son of Man"),
    ("The Treachery of Images", "The Treachery of Images"),
    ("The Persistence of Memory", "The Persistence of Memory"),
    ("Campbell's Soup Cans", "Campbell's Soup Cans"),
    ("Self-Portrait with Bandaged Ear", "Self-Portrait with Bandaged Ear"),
    ("The Swing", "The Swing (Fragonard)"),
    ("The Death of Marat", "The Death of Marat"),
    ("The Oath of the Horatii", "Oath of the Horatii"),
    ("The Raft of the Medusa", "The Raft of the Medusa"),
    ("The Dance Class", "The Dance Class"),
    ("Luncheon of the Boating Party", "Luncheon of the Boating Party"),
    ("Bal du moulin de la Galette", "Bal du moulin de la Galette"),
    ("Olympia", "Olympia (Manet)"),
    ("Le Déjeuner sur l'herbe", "Le Déjeuner sur l'herbe"),
    ("A Bar at the Folies-Bergère", "A Bar at the Folies-Bergère"),
    ("The Card Players", "The Card Players (painting)"),
    ("Mont Sainte-Victoire", "Mont Sainte-Victoire (Cézanne)"),
    ("The Large Bathers", "The Large Bathers (Cézanne)"),
    ("Where Do We Come From?", "Where Do We Come From? What Are We? Where Are We Going?"),
    ("Vision After the Sermon", "Vision After the Sermon"),
    ("The Yellow Christ", "The Yellow Christ"),
    ("At the Moulin Rouge", "At the Moulin Rouge"),
    ("The Absinthe Drinker", "L'Absinthe (painting)"),
    ("Wanderer above the Sea of Fog", "Wanderer above the Sea of Fog"),
    ("The Monk by the Sea", "The Monk by the Sea"),
    ("The Anatomy Lesson of Dr. Tulp", "The Anatomy Lesson of Dr. Nicolaes Tulp"),
    ("The Jewish Bride", "The Jewish Bride"),
    ("The Storm on the Sea of Galilee", "The Storm on the Sea of Galilee"),
    ("The Milkmaid", "The Milkmaid (Vermeer)"),
    ("Girl Reading a Letter at an Open Window", "Girl Reading a Letter at an Open Window"),
    ("The Art of Painting", "The Art of Painting"),
    ("The Peasant Wedding", "The Peasant Wedding"),
    ("The Hunters in the Snow", "The Hunters in the Snow"),
    ("The Tower of Babel", "The Tower of Babel (Bruegel)"),
    ("The Ambassadors", "The Ambassadors (Holbein)"),
    ("The Ghent Altarpiece", "Ghent Altarpiece"),
    ("Primavera", "Primavera (Botticelli)"),
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
    ("Sunflowers", "Sunflowers (Van Gogh)"),
    ("The Bedroom", "The Bedroom (Van Gogh)"),
    ("Cafe Terrace at Night", "Café Terrace at Night"),
    ("Wheatfield with Crows", "Wheatfield with Crows"),
    ("Irises", "Irises (painting)"),
    ("Almond Blossoms", "Almond Blossoms"),
    ("The Night Café", "The Night Café"),
    ("Portrait of Dr. Gachet", "Portrait of Dr. Gachet"),
    ("The Church at Auvers", "The Church at Auvers"),
    ("Ophelia", "Ophelia (painting)"),
    ("The Lady of Shalott", "The Lady of Shalott"),
    ("The Birth of Venus (Bouguereau)", "The Birth of Venus (Cabanel)"),
    ("The Birth of Venus (Cabanel)", "The Birth of Venus (Cabanel)"),
    ("The Gross Clinic", "The Gross Clinic"),
    ("Breezing Up", "Breezing Up (painting)"),
    ("The Gulf Stream", "The Gulf Stream (painting)"),
    ("The Oxbow", "The Oxbow"),
    ("Kindred Spirits", "Kindred Spirits (painting)"),
    ("Heart of the Andes", "Heart of the Andes"),
    ("The Veteran in a New Field", "The Veteran in a New Field"),
    ("The Artist's Garden at Giverny", "The Artist's Garden at Giverny"),
    ("Bridge over a Pond of Water Lilies", "Bridge over a Pond of Water Lilies"),
    ("Rouen Cathedral", "Rouen Cathedral (Monet series)"),
    ("San Giorgio Maggiore at Dusk", "San Giorgio Maggiore at Dusk"),
    ("The Japanese Bridge", "The Japanese Bridge (Monet)"),
    ("The Ballet Rehearsal", "The Ballet Rehearsal on Stage"),
    ("The Bellelli Family", "The Bellelli Family"),
    ("The Tub", "The Tub (Degas)"),
    ("The Dance Foyer at the Opera", "The Dance Foyer at the Opera on the rue Le Peletier"),
    ("The Boating Party", "The Boating Party (Cassatt)"),
    ("The Child's Bath", "The Child's Bath"),
    ("A Friend in Need", "Dogs Playing Poker"),
    ("The Storm", "The Storm (Cot)"),
    ("The Death of Sardanapalus", "The Death of Sardanapalus"),
    ("The Apotheosis of Homer", "The Apotheosis of Homer (Ingres)"),
    ("The Valpinçon Bather", "The Valpinçon Bather"),
    ("The Turkish Bath", "The Turkish Bath (Ingres)"),
    ("The Coronation of Napoleon", "The Coronation of Napoleon"),
    ("Napoleon Crossing the Alps", "Napoleon Crossing the Alps"),
    ("The Intervention of the Sabine Women", "The Intervention of the Sabine Women"),
    ("The Death of Socrates", "The Death of Socrates"),
    ("The Stone Breakers", "The Stone Breakers"),
    ("A Burial at Ornans", "A Burial at Ornans"),
    ("The Artist's Studio", "The Painter's Studio"),
    ("The Angelus", "The Angelus (painting)"),
    ("The Gleaners", "The Gleaners"),
    ("The Star", "The Star (Degas)"),
    ("The Floor Scrapers", "The Floor Scrapers"),
    ("Paris Street, Rainy Day", "Paris Street; Rainy Day"),
    ("The Balcony", "The Balcony (Manet)"),
    ("Music in the Tuileries", "Music in the Tuileries"),
    ("The Fifer", "The Fifer (Manet)"),
    ("The Railway", "The Railway (Manet)"),
    ("The Umbrellas", "The Umbrellas (Renoir)"),
    ("Two Sisters (On the Terrace)", "Two Sisters (On the Terrace)"),
    ("The Swing (Renoir)", "The Swing (Renoir)"),
    ("The Cradle", "The Cradle (Morisot)"),
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
        headers={"User-Agent": UA},
    )
    for attempt in range(5):
        try:
            with urllib.request.urlopen(req, timeout=60) as resp:
                page = next(iter(json.loads(resp.read().decode())["query"]["pages"].values()))
            if "missing" in page:
                return None
            return page.get("thumbnail", {}).get("source")
        except urllib.error.HTTPError as err:
            if err.code in (429, 503) and attempt < 4:
                time.sleep(2 ** attempt + 2)
                continue
            return None


def write_js(paintings):
    lines = ["const QUIZ_PAINTINGS = ["]
    for p in paintings:
        lines.append("  {")
        lines.append(f"    title: {json.dumps(p['title'])},")
        lines.append(f"    image: {json.dumps(p['image'])},")
        lines.append("  },")
    lines.append("];")
    lines.append("")
    OUT.write_text("\n".join(lines), encoding="utf-8")


def main():
    data = json.loads(CACHE.read_text(encoding="utf-8"))
    order = []
    for title in ORIGINAL:
        if title in data:
            order.append(title)
    for quiz_title, wiki_title in ADDITIONS:
        if quiz_title in data:
            if quiz_title not in order:
                order.append(quiz_title)
            continue
        image = wiki_thumb(wiki_title)
        if image:
            data[quiz_title] = image
            order.append(quiz_title)
            print("ok", quiz_title)
        else:
            print("skip", quiz_title)
        time.sleep(2.5)
    paintings = [{"title": t, "image": data[t]} for t in order if t in data]
    write_js(paintings)
    print("wrote", len(paintings), "paintings")


if __name__ == "__main__":
    main()
