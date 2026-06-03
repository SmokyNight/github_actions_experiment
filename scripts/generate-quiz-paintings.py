#!/usr/bin/env python3
"""Resolve painting images one at a time to avoid batch/rate-limit issues."""

import json
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path

API = "https://commons.wikimedia.org/w/api.php"
USER_AGENT = "github_actions_experiment/1.0 (quiz generator; contact: local dev)"

EXISTING = [
    ("Mona Lisa", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mona_Lisa.jpg/960px-Mona_Lisa.jpg"),
    ("The Starry Night", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/960px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg"),
    ("Girl with a Pearl Earring", "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/960px-Meisje_met_de_parel.jpg"),
    ("The Scream", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/The_Scream.jpg/960px-The_Scream.jpg"),
    ("The Great Wave off Kanagawa", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/The_Great_Wave_off_Kanagawa.jpg/960px-The_Great_Wave_off_Kanagawa.jpg"),
    ("American Gothic", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/960px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg"),
    ("The Birth of Venus", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/La_nascita_di_Venere_%28Botticelli%29.jpg/960px-La_nascita_di_Venere_%28Botticelli%29.jpg"),
    ("Water Lilies", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/960px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg"),
    ("The Night Watch", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/960px-The_Night_Watch_-_HD.jpg"),
    ("Arnolfini Portrait", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Van_Eyck_-_Arnolfini_Portrait.jpg/960px-Van_Eyck_-_Arnolfini_Portrait.jpg"),
    ("A Sunday on La Grande Jatte", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Georges_Seurat_-_A_Sunday_on_La_Grande_Jatte_--_1884_-_Google_Art_Project.jpg/960px-Georges_Seurat_-_A_Sunday_on_La_Grande_Jatte_--_1884_-_Google_Art_Project.jpg"),
    ("The Kiss", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/960px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg"),
    ("Las Meninas", "https://upload.wikimedia.org/wikipedia/commons/e/e5/Las_Meninas.jpg"),
    ("Nighthawks", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/960px-Nighthawks_by_Edward_Hopper_1942.jpg"),
    ("Whistler's Mother", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Whistlers_Mother_high_res.jpg/960px-Whistlers_Mother_high_res.jpg"),
]

# title, preferred Commons file name (exact)
NEW = [
    ("The Creation of Adam", "File:Michelangelo - Creation of Adam (cropped).jpg"),
    ("The Last Supper", "File:Leonardo da Vinci - The Last Supper high res.jpg"),
    ("Guernica", "File:PicassoGuernica.jpg"),
    ("The School of Athens", "File:The School of Athens.jpg"),
    ("The Garden of Earthly Delights", "File:The Garden of earthly delights.jpg"),
    ("Impression, Sunrise", "File:Claude Monet, Impression, soleil levant.jpg"),
    ("The Hay Wain", "File:John Constable - The Hay Wain (1821).jpg"),
    ("The Fighting Temeraire", "File:The Fighting Temeraire, JMW Turner, National Gallery.jpg"),
    ("Liberty Leading the People", "File:Eugène Delacroix - La liberté guidant le peuple.jpg"),
    ("The Third of May 1808", "File:El Tres de Mayo, by Francisco de Goya, from Prado thin black margin.jpg"),
    ("Saturn Devouring His Son", "File:Francisco de Goya, Saturno devorando a su hijo (1819-1823).jpg"),
    ("The Son of Man", "File:Magritte - The Son of Man.jpg"),
    ("The Treachery of Images", "File:MagrittePipe.jpg"),
    ("The Persistence of Memory", "File:Salvador Dali - The Persistence of Memory - Google Art Project.jpg"),
    ("Campbell's Soup Cans", "File:Campbell's Soup Cans by Andy Warhol, MoMA.jpg"),
    ("Self-Portrait with Bandaged Ear", "File:Vincent van Gogh - Self-Portrait with Bandaged Ear - Google Art Project.jpg"),
    ("The Swing", "File:Jean-Honoré Fragonard - The Swing - Google Art Project.jpg"),
    ("The Death of Marat", "File:Death of Marat by David.jpg"),
    ("The Oath of the Horatii", "File:Jacques-Louis David, Le Serment des Horaces.jpg"),
    ("The Raft of the Medusa", "File:Géricault, Raft of the Medusa.jpg"),
    ("The Dance Class", "File:Edgar Degas The Dance Class.jpg"),
    ("Luncheon of the Boating Party", "File:Pierre-Auguste Renoir - Luncheon of the Boating Party - Google Art Project.jpg"),
    ("Bal du moulin de la Galette", "File:Pierre-Auguste Renoir - Dance at Le Moulin de la Galette - Google Art Project.jpg"),
    ("Olympia", "File:Edouard Manet - Olympia - Google Art Project 3.jpg"),
    ("Le Déjeuner sur l'herbe", "File:Édouard Manet - Le Déjeuner sur l'herbe (The Luncheon on the Grass) - Google Art Project.jpg"),
    ("A Bar at the Folies-Bergère", "File:Edouard Manet - A Bar at the Folies-Bergere (1882).jpg"),
    ("The Card Players", "File:Paul Cézanne - The Card Players - Google Art Project.jpg"),
    ("Mont Sainte-Victoire", "File:Paul Cézanne - Mont Sainte-Victoire (1904-1906).jpg"),
    ("The Large Bathers", "File:Paul Cézanne - The Large Bathers - Google Art Project.jpg"),
    ("Where Do We Come From?", "File:Paul Gauguin - Where Do We Come From? What Are We? Where Are We Going? - Google Art Project.jpg"),
    ("Vision After the Sermon", "File:Paul Gauguin - Vision After the Sermon (Jacob Wrestling with the Angel) - Google Art Project.jpg"),
    ("The Yellow Christ", "File:Paul Gauguin - The Yellow Christ - Google Art Project.jpg"),
    ("At the Moulin Rouge", "File:Henri de Toulouse-Lautrec - At the Moulin Rouge - Google Art Project.jpg"),
    ("The Absinthe Drinker", "File:Edgar Degas - L'Absinthe - Google Art Project.jpg"),
    ("Wanderer above the Sea of Fog", "File:Caspar David Friedrich - Wanderer above the sea of fog.jpg"),
    ("The Monk by the Sea", "File:Caspar David Friedrich, The monk by the sea, 1808-10.jpg"),
    ("The Anatomy Lesson of Dr. Tulp", "File:Rembrandt - The Anatomy Lesson of Dr Nicolaes Tulp.jpg"),
    ("The Jewish Bride", "File:Rembrandt - The Jewish Bride - Google Art Project.jpg"),
    ("The Storm on the Sea of Galilee", "File:Rembrandt Christ in the Storm on the Lake of Galilee.jpg"),
    ("The Milkmaid", "File:Johannes Vermeer - Het melkmeisje - Google Art Project.jpg"),
    ("Girl Reading a Letter at an Open Window", "File:Vermeer - Girl reading a letter at an open window.jpg"),
    ("The Art of Painting", "File:Jan Vermeer - The Art of Painting - Google Art Project.jpg"),
    ("The Peasant Wedding", "File:Pieter Bruegel the Elder - Peasant Wedding - Google Art Project.jpg"),
    ("The Hunters in the Snow", "File:Pieter Brueghel the Elder - The Hunters in the Snow (Winter) - Google Art Project.jpg"),
    ("The Tower of Babel", "File:Pieter Bruegel the Elder - The Tower of Babel (Vienna) - Google Art Project.jpg"),
    ("The Ambassadors", "File:Hans Holbein the Younger - The Ambassadors - Google Art Project.jpg"),
    ("The Ghent Altarpiece", "File:Van Eyck - Ghent Altarpiece - Adoration of the Lamb - Google Art Project.jpg"),
    ("Primavera", "File:Sandro Botticelli - La Primavera - Google Art Project.jpg"),
    ("The Last Judgment", "File:Michelangelo Buonarroti - The Last Judgment - Google Art Project.jpg"),
    ("The Sistine Madonna", "File:Raffaello Sanzio - Madonna Sistina - Google Art Project.jpg"),
    ("The Calling of Saint Matthew", "File:The Calling of Saint Matthew-Caravaggio (1599-1600).jpg"),
    ("Judith Beheading Holofernes", "File:Caravaggio - Judith Beheading Holofernes - Google Art Project.jpg"),
    ("The Supper at Emmaus", "File:Caravaggio - Supper at Emmaus (London).jpg"),
    ("The Ecstasy of Saint Teresa", "File:Bernini - Ecstasy of Saint Teresa - Google Art Project.jpg"),
    ("The Elevation of the Cross", "File:Peter Paul Rubens - The Elevation of the Cross - Google Art Project.jpg"),
    ("The Descent from the Cross", "File:Peter Paul Rubens - The Descent from the Cross - Google Art Project.jpg"),
    ("The Rape of the Daughters of Leucippus", "File:Peter Paul Rubens - The Rape of the Daughters of Leucippus - Google Art Project.jpg"),
    ("The Surrender of Breda", "File:Diego Velázquez - La rendición de Breda (Las Lanzas) - Google Art Project.jpg"),
    ("The Rokeby Venus", "File:Diego Velázquez - Rokeby Venus - Google Art Project.jpg"),
    ("The Embarkation for Cythera", "File:Jean-Antoine Watteau - The Embarkation for Cythera - Google Art Project.jpg"),
    ("The Blue Boy", "File:Thomas Gainsborough - The Blue Boy.jpg"),
    ("Mr and Mrs Andrews", "File:Thomas Gainsborough - Mr and Mrs Andrews - Google Art Project.jpg"),
    ("The Death of General Wolfe", "File:Benjamin West - The Death of General Wolfe - Google Art Project.jpg"),
    ("Washington Crossing the Delaware", "File:Washington Crossing the Delaware by Emanuel Leutze, MMA.jpg"),
    ("Christina's World", "File:ChristinasWorld.jpg"),
    ("Automat", "File:Edward Hopper - Automat - Google Art Project.jpg"),
    ("Early Sunday Morning", "File:Edward Hopper - Early Sunday Morning - Google Art Project.jpg"),
    ("Room in New York", "File:Edward Hopper - Room in New York - Google Art Project.jpg"),
    ("The Two Fridas", "File:Frida Kahlo - The Two Fridas - Google Art Project.jpg"),
    ("Self-Portrait with Thorn Necklace", "File:Frida Kahlo - Self-portrait with Thorn Necklace and Hummingbird - Google Art Project.jpg"),
    ("The Broken Column", "File:Frida Kahlo - The Broken Column - Google Art Project.jpg"),
    ("Number 1, 1950 (Lavender Mist)", "File:Number 1 (Lavender Mist) by Jackson Pollock, 1950.jpg"),
    ("Autumn Rhythm", "File:Autumn Rhythm (Number 30) by Jackson Pollock, 1950.jpg"),
    ("Woman I", "File:Willem de Kooning - Woman I - Google Art Project.jpg"),
    ("Flag", "File:Flag (1954-55) by Jasper Johns, MoMA.jpg"),
    ("Whaam!", "File:Roy Lichtenstein - Whaam!.jpg"),
    ("Drowning Girl", "File:Roy Lichtenstein Drowning Girl.jpg"),
    ("Marilyn Diptych", "File:Andy Warhol - Marilyn Diptych - Google Art Project.jpg"),
    ("Broadway Boogie Woogie", "File:Piet Mondrian - Broadway Boogie Woogie - Google Art Project.jpg"),
    ("Composition with Red, Blue and Yellow", "File:Piet Mondrian, Composition with Red, Blue and Yellow, 1930.jpg"),
    ("Black Square", "File:Kazimir Malevich - Black Square - Google Art Project.jpg"),
    ("White on White", "File:Kazimir Malevich - White on White - Google Art Project.jpg"),
    ("The Red Studio", "File:Henri Matisse - The Red Studio - Google Art Project.jpg"),
    ("The Dance", "File:Henri Matisse - The Dance - Google Art Project.jpg"),
    ("Goldfish", "File:Henri Matisse - Goldfish - Google Art Project.jpg"),
    ("The Joy of Life", "File:Henri Matisse - Le bonheur de vivre - Google Art Project.jpg"),
    ("Les Demoiselles d'Avignon", "File:Les Demoiselles d'Avignon.jpg"),
    ("Girl before a Mirror", "File:Picasso - Girl before a Mirror - Google Art Project.jpg"),
    ("The Weeping Woman", "File:Picasso - The Weeping Woman - Google Art Project.jpg"),
    ("The Old Guitarist", "File:Pablo Picasso - The Old Guitarist - Google Art Project.jpg"),
    ("Three Musicians", "File:Picasso - Three Musicians - Google Art Project.jpg"),
    ("Le Rêve", "File:Pablo Picasso - Le Rêve - Google Art Project.jpg"),
    ("The Blue Room", "File:Pablo Picasso - The Blue Room - Google Art Project.jpg"),
    ("The Potato Eaters", "File:Van Gogh - The Potato Eaters - Google Art Project.jpg"),
    ("Sunflowers", "File:Vincent van Gogh - Sunflowers - VGM F458.jpg"),
    ("The Bedroom", "File:Vincent van Gogh - The Bedroom - Google Art Project.jpg"),
    ("Cafe Terrace at Night", "File:Vincent van Gogh - Cafe Terrace at Night - Google Art Project.jpg"),
    ("Wheatfield with Crows", "File:Vincent van Gogh - Wheatfield with crows - Google Art Project.jpg"),
    ("Irises", "File:Vincent van Gogh - Irises - Google Art Project.jpg"),
    ("Almond Blossoms", "File:Vincent van Gogh - Almond Blossoms - Google Art Project.jpg"),
    ("The Night Café", "File:Vincent van Gogh - The Night Café - Google Art Project.jpg"),
    ("Portrait of Dr. Gachet", "File:Portrait of Dr. Gachet - Vincent van Gogh - Google Art Project.jpg"),
    ("The Church at Auvers", "File:Vincent van Gogh - The Church at Auvers - Google Art Project.jpg"),
    ("Ophelia", "File:John Everett Millais - Ophelia - Google Art Project.jpg"),
    ("The Lady of Shalott", "File:John William Waterhouse - The Lady of Shalott - Google Art Project.jpg"),
    ("The Birth of Venus (Bouguereau)", "File:William-Adolphe Bouguereau - The Birth of Venus - Google Art Project.jpg"),
    ("The Gross Clinic", "File:Thomas Eakins - The Gross Clinic - Google Art Project.jpg"),
    ("Breezing Up", "File:Winslow Homer - Breezing Up (A Fair Wind) - Google Art Project.jpg"),
    ("The Gulf Stream", "File:Winslow Homer - The Gulf Stream - Google Art Project.jpg"),
    ("The Oxbow", "File:Thomas Cole - The Oxbow - Google Art Project.jpg"),
    ("Kindred Spirits", "File:Asher Brown Durand - Kindred Spirits - Google Art Project.jpg"),
    ("Heart of the Andes", "File:Frederic Edwin Church - The Heart of the Andes - Google Art Project.jpg"),
    ("The Veteran in a New Field", "File:Winslow Homer - The Veteran in a New Field - Google Art Project.jpg"),
    ("The Artist's Garden at Giverny", "File:Claude Monet - The Artist's Garden at Giverny - Google Art Project.jpg"),
    ("Bridge over a Pond of Water Lilies", "File:Claude Monet - Bridge over a Pond of Water Lilies - Google Art Project.jpg"),
    ("Rouen Cathedral", "File:Claude Monet - Rouen Cathedral, Facade (Sunset) - Google Art Project.jpg"),
    ("San Giorgio Maggiore at Dusk", "File:Claude Monet - San Giorgio Maggiore at Dusk - Google Art Project.jpg"),
    ("The Japanese Bridge", "File:Claude Monet - The Japanese Bridge - Google Art Project.jpg"),
    ("The Ballet Rehearsal", "File:Edgar Degas - The Ballet Rehearsal - Google Art Project.jpg"),
    ("The Bellelli Family", "File:Edgar Degas - The Bellelli Family - Google Art Project.jpg"),
    ("The Tub", "File:Edgar Degas - The Tub - Google Art Project.jpg"),
    ("The Dance Foyer at the Opera", "File:Edgar Degas - The Dance Foyer at the Opera - Google Art Project.jpg"),
    ("The Boating Party", "File:Mary Cassatt - The Boating Party - Google Art Project.jpg"),
    ("The Child's Bath", "File:Mary Cassatt - The Child's Bath - Google Art Project.jpg"),
    ("A Friend in Need", "File:Cassius Marcellus Coolidge - A Friend in Need.jpg"),
    ("The Storm", "File:Pierre-Auguste Cot - The Storm - Google Art Project.jpg"),
    ("The Birth of Venus (Cabanel)", "File:Alexandre Cabanel - The Birth of Venus - Google Art Project.jpg"),
    ("The Death of Sardanapalus", "File:Eugène Delacroix - The Death of Sardanapalus - Google Art Project.jpg"),
    ("The Apotheosis of Homer", "File:Jean-Auguste-Dominique Ingres - The Apotheosis of Homer - Google Art Project.jpg"),
    ("The Valpinçon Bather", "File:Jean-Auguste-Dominique Ingres - The Valpinçon Bather - Google Art Project.jpg"),
    ("The Turkish Bath", "File:Jean-Auguste-Dominique Ingres - The Turkish Bath - Google Art Project.jpg"),
    ("The Coronation of Napoleon", "File:Jacques-Louis David - The Coronation of Napoleon - Google Art Project.jpg"),
    ("Napoleon Crossing the Alps", "File:Jacques-Louis David - Napoleon Crossing the Alps - Google Art Project.jpg"),
    ("The Death of Socrates", "File:Jacques-Louis David - The Death of Socrates - Google Art Project.jpg"),
    ("The Intervention of the Sabine Women", "File:Jacques-Louis David - The Intervention of the Sabine Women - Google Art Project.jpg"),
    ("The Stone Breakers", "File:Gustave Courbet - The Stone Breakers - Google Art Project.jpg"),
    ("A Burial at Ornans", "File:Gustave Courbet - A Burial at Ornans - Google Art Project.jpg"),
    ("The Artist's Studio", "File:Gustave Courbet - The Artist's Studio - Google Art Project.jpg"),
    ("The Angelus", "File:Jean-François Millet - The Angelus - Google Art Project.jpg"),
    ("The Gleaners", "File:Jean-François Millet - The Gleaners - Google Art Project.jpg"),
    ("The Star", "File:Edgar Degas - The Star (Dancer on Stage) - Google Art Project.jpg"),
    ("The Floor Scrapers", "File:Gustave Caillebotte - The Floor Scrapers - Google Art Project.jpg"),
    ("Paris Street, Rainy Day", "File:Gustave Caillebotte - Paris Street, Rainy Day - Google Art Project.jpg"),
    ("The Balcony", "File:Édouard Manet - The Balcony - Google Art Project.jpg"),
    ("Music in the Tuileries", "File:Édouard Manet - Music in the Tuileries - Google Art Project.jpg"),
    ("The Fifer", "File:Édouard Manet - The Fifer - Google Art Project.jpg"),
    ("The Railway", "File:Édouard Manet - The Railway - Google Art Project.jpg"),
    ("The Umbrellas", "File:Pierre-Auguste Renoir - The Umbrellas - Google Art Project.jpg"),
    ("Two Sisters (On the Terrace)", "File:Pierre-Auguste Renoir - Two Sisters (On the Terrace) - Google Art Project.jpg"),
    ("The Swing (Renoir)", "File:Pierre-Auguste Renoir - The Swing - Google Art Project.jpg"),
    ("The Cradle", "File:Berthe Morisot - The Cradle - Google Art Project.jpg"),
    ("The Harbor at Lorient", "File:Berthe Morisot - The Harbor at Lorient - Google Art Project.jpg"),
    ("The Thinker", "File:Auguste Rodin - The Thinker - Google Art Project.jpg"),
    ("The Kiss (Rodin)", "File:Auguste Rodin - The Kiss - Google Art Project.jpg"),
    ("The Burghers of Calais", "File:Auguste Rodin - The Burghers of Calais - Google Art Project.jpg"),
    ("The Snail", "File:Henri Matisse - The Snail - Google Art Project.jpg"),
    ("The Dream (Rousseau)", "File:Henri Rousseau - The Dream - Google Art Project.jpg"),
    ("The Sleeping Gypsy", "File:Henri Rousseau - The Sleeping Gypsy - Google Art Project.jpg"),
    ("The Banjo Lesson", "File:Henry Ossawa Tanner - The Banjo Lesson - Google Art Project.jpg"),
    ("Freedom from Want", "File:Norman Rockwell - Freedom from Want - Google Art Project.jpg"),
    ("The Empire of Light", "File:René Magritte - The Empire of Light - Google Art Project.jpg"),
    ("Golconda", "File:René Magritte - Golconda - Google Art Project.jpg"),
    ("Self-Portrait with Monkey", "File:Frida Kahlo - Self-Portrait with Monkey - Google Art Project.jpg"),
    ("The Flower Carrier", "File:Diego Rivera - The Flower Carrier - Google Art Project.jpg"),
]


def api(params, retries=6):
    url = API + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
    for attempt in range(retries):
        try:
            with urllib.request.urlopen(req, timeout=60) as resp:
                return json.loads(resp.read().decode())
        except urllib.error.HTTPError as err:
            if err.code in (429, 503) and attempt < retries - 1:
                wait = min(30, 2 ** attempt + 2)
                print(f"  wait {wait}s ({err.code})")
                time.sleep(wait)
                continue
            raise


def thumb_for_file(file_title):
    data = api(
        {
            "action": "query",
            "titles": file_title,
            "prop": "imageinfo",
            "iiprop": "url",
            "iiurlwidth": 960,
            "format": "json",
        }
    )
    for page in data["query"]["pages"].values():
        if "missing" in page:
            return None
        info = page.get("imageinfo", [{}])[0]
        return info.get("thumburl") or info.get("url")
    return None


def write_js(paintings, path):
    lines = ["const QUIZ_PAINTINGS = ["]
    for p in paintings:
        lines.append("  {")
        lines.append(f"    title: {json.dumps(p['title'])},")
        lines.append(f"    image: {json.dumps(p['image'])},")
        lines.append("  },")
    lines.append("];")
    lines.append("")
    with open(path, "w", encoding="utf-8", newline="\n") as f:
        f.write("\n".join(lines))


def main():
    out_path = Path(__file__).resolve().parent.parent / "quiz-paintings.js"
    cache_path = Path(__file__).resolve().parent / "resolved-paintings.json"
    resolved = {t: u for t, u in EXISTING}
    if cache_path.exists():
        resolved.update(json.loads(cache_path.read_text(encoding="utf-8")))

    total = len(NEW)
    for index, (title, file_title) in enumerate(NEW, start=1):
        if title in resolved:
            continue
        print(f"[{index}/{total}] {title}")
        image = thumb_for_file(file_title)
        if image:
            resolved[title] = image
            cache_path.write_text(json.dumps(resolved, ensure_ascii=False, indent=2), encoding="utf-8")
            print(f"  ok")
        else:
            print(f"  MISSING: {file_title}")
        time.sleep(2.5)

    ordered = [{"title": t, "image": resolved[t]} for t, _ in EXISTING]
    for title, _ in NEW:
        if title in resolved and title not in {p["title"] for p in ordered}:
            ordered.append({"title": title, "image": resolved[title]})

    write_js(ordered, str(out_path))
    print(f"Wrote {len(ordered)} paintings")


if __name__ == "__main__":
    main()
