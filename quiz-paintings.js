const QUIZ_PAINTINGS = [
  {
    title: "Mona Lisa",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mona_Lisa.jpg/960px-Mona_Lisa.jpg",
  },
  {
    title: "The Starry Night",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/960px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
  },
  {
    title: "Girl with a Pearl Earring",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Meisje_met_de_parel.jpg/960px-Meisje_met_de_parel.jpg",
  },
  {
    title: "The Scream",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/The_Scream.jpg/960px-The_Scream.jpg",
  },
  {
    title: "The Great Wave off Kanagawa",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/The_Great_Wave_off_Kanagawa.jpg/960px-The_Great_Wave_off_Kanagawa.jpg",
  },
  {
    title: "American Gothic",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg/960px-Grant_Wood_-_American_Gothic_-_Google_Art_Project.jpg",
  },
  {
    title: "The Birth of Venus",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/La_nascita_di_Venere_%28Botticelli%29.jpg/960px-La_nascita_di_Venere_%28Botticelli%29.jpg",
  },
  {
    title: "Water Lilies",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/960px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg",
  },
  {
    title: "The Night Watch",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/960px-The_Night_Watch_-_HD.jpg",
  },
  {
    title: "Arnolfini Portrait",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Van_Eyck_-_Arnolfini_Portrait.jpg/960px-Van_Eyck_-_Arnolfini_Portrait.jpg",
  },
  {
    title: "A Sunday on La Grande Jatte",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Georges_Seurat_-_A_Sunday_on_La_Grande_Jatte_--_1884_-_Google_Art_Project.jpg/960px-Georges_Seurat_-_A_Sunday_on_La_Grande_Jatte_--_1884_-_Google_Art_Project.jpg",
  },
  {
    title: "The Kiss",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/960px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg",
  },
  {
    title: "Las Meninas",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Las_Meninas.jpg",
  },
  {
    title: "Nighthawks",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg/960px-Nighthawks_by_Edward_Hopper_1942.jpg",
  },
  {
    title: "Whistler's Mother",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Whistlers_Mother_high_res.jpg/960px-Whistlers_Mother_high_res.jpg",
  },
  {
    title: "The Creation of Adam",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/960px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
  },
  {
    title: "The Last Supper",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Leonardo_da_Vinci_-_The_Last_Supper_high_res.jpg/960px-Leonardo_da_Vinci_-_The_Last_Supper_high_res.jpg",
  },
  {
    title: "The School of Athens",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/18/The_School_of_Athens.jpg",
  },
  {
    title: "The Garden of Earthly Delights",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/The_Garden_of_earthly_delights.jpg/960px-The_Garden_of_earthly_delights.jpg",
  },
  {
    title: "Impression, Sunrise",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Claude_Monet%2C_Impression%2C_soleil_levant.jpg/960px-Claude_Monet%2C_Impression%2C_soleil_levant.jpg",
  },
  {
    title: "The Hay Wain",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/John_Constable_-_The_Hay_Wain_%281821%29.jpg/960px-John_Constable_-_The_Hay_Wain_%281821%29.jpg",
  },
  {
    title: "The Fighting Temeraire",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg/960px-The_Fighting_Temeraire%2C_JMW_Turner%2C_National_Gallery.jpg",
  },
  {
    title: "Liberty Leading the People",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg/960px-Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg",
  },
  {
    title: "The Third of May 1808",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_thin_black_margin.jpg/960px-El_Tres_de_Mayo%2C_by_Francisco_de_Goya%2C_from_Prado_thin_black_margin.jpg",
  },
  {
    title: "Saturn Devouring His Son",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg/960px-Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg",
  },
  {
    title: "The Swing",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Jean-Honor%C3%A9_Fragonard_-_The_Swing_-_Google_Art_Project.jpg/960px-Jean-Honor%C3%A9_Fragonard_-_The_Swing_-_Google_Art_Project.jpg",
  },
  {
    title: "The Death of Marat",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Death_of_Marat_by_David.jpg/960px-Death_of_Marat_by_David.jpg",
  },
  {
    title: "The Oath of the Horatii",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg/960px-Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg",
  },
  {
    title: "The Dance Class",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Edgar_Degas_The_Dance_Class.jpg/960px-Edgar_Degas_The_Dance_Class.jpg",
  },
  {
    title: "Luncheon of the Boating Party",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg/960px-Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg",
  },
  {
    title: "Olympia",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Edouard_Manet_-_Olympia_-_Google_Art_Project_3.jpg/960px-Edouard_Manet_-_Olympia_-_Google_Art_Project_3.jpg",
  },
  {
    title: "At the Moulin Rouge",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Henri_de_Toulouse-Lautrec_-_At_the_Moulin_Rouge_-_Google_Art_Project.jpg/960px-Henri_de_Toulouse-Lautrec_-_At_the_Moulin_Rouge_-_Google_Art_Project.jpg",
  },
  {
    title: "Wanderer above the Sea of Fog",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/960px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg",
  },
  {
    title: "The Anatomy Lesson of Dr. Tulp",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg/960px-Rembrandt_-_The_Anatomy_Lesson_of_Dr_Nicolaes_Tulp.jpg",
  },
  {
    title: "The Storm on the Sea of Galilee",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Rembrandt_Christ_in_the_Storm_on_the_Lake_of_Galilee.jpg/960px-Rembrandt_Christ_in_the_Storm_on_the_Lake_of_Galilee.jpg",
  },
  {
    title: "The Milkmaid",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg/960px-Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg",
  },
  {
    title: "The Art of Painting",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Jan_Vermeer_-_The_Art_of_Painting_-_Google_Art_Project.jpg/960px-Jan_Vermeer_-_The_Art_of_Painting_-_Google_Art_Project.jpg",
  },
  {
    title: "The Peasant Wedding",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Pieter_Bruegel_the_Elder_-_Peasant_Wedding_-_Google_Art_Project.jpg/960px-Pieter_Bruegel_the_Elder_-_Peasant_Wedding_-_Google_Art_Project.jpg",
  },
  {
    title: "The Tower of Babel",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project.jpg/960px-Pieter_Bruegel_the_Elder_-_The_Tower_of_Babel_%28Vienna%29_-_Google_Art_Project.jpg",
  },
  {
    title: "The Ambassadors",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Hans_Holbein_the_Younger_-_The_Ambassadors_-_Google_Art_Project.jpg/960px-Hans_Holbein_the_Younger_-_The_Ambassadors_-_Google_Art_Project.jpg",
  },
  {
    title: "Primavera",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Sandro_Botticelli_-_La_Primavera_-_Google_Art_Project.jpg/960px-Sandro_Botticelli_-_La_Primavera_-_Google_Art_Project.jpg",
  },
  {
    title: "Sunflowers",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Vincent_van_Gogh_-_Sunflowers_-_VGM_F458.jpg/960px-Vincent_van_Gogh_-_Sunflowers_-_VGM_F458.jpg",
  },
  {
    title: "The Bedroom",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Vincent_van_Gogh_-_The_Bedroom_-_Google_Art_Project.jpg/960px-Vincent_van_Gogh_-_The_Bedroom_-_Google_Art_Project.jpg",
  },
  {
    title: "Wheatfield with Crows",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Vincent_van_Gogh_-_Wheatfield_with_crows_-_Google_Art_Project.jpg/960px-Vincent_van_Gogh_-_Wheatfield_with_crows_-_Google_Art_Project.jpg",
  },
  {
    title: "Irises",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Vincent_van_Gogh_-_Irises_-_Google_Art_Project.jpg/960px-Vincent_van_Gogh_-_Irises_-_Google_Art_Project.jpg",
  },
  {
    title: "Ophelia",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/John_Everett_Millais_-_Ophelia_-_Google_Art_Project.jpg/960px-John_Everett_Millais_-_Ophelia_-_Google_Art_Project.jpg",
  },
  {
    title: "The Lady of Shalott",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/John_William_Waterhouse_-_The_Lady_of_Shalott_-_Google_Art_Project.jpg/960px-John_William_Waterhouse_-_The_Lady_of_Shalott_-_Google_Art_Project.jpg",
  },
  {
    title: "Breezing Up",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Winslow_Homer_-_Breezing_Up_%28A_Fair_Wind%29_-_Google_Art_Project.jpg/960px-Winslow_Homer_-_Breezing_Up_%28A_Fair_Wind%29_-_Google_Art_Project.jpg",
  },
  {
    title: "The Japanese Bridge",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Claude_Monet_-_The_Japanese_Bridge_-_Google_Art_Project.jpg/960px-Claude_Monet_-_The_Japanese_Bridge_-_Google_Art_Project.jpg",
  },
  {
    title: "The Bellelli Family",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Edgar_Degas_-_The_Bellelli_Family_-_Google_Art_Project.jpg/960px-Edgar_Degas_-_The_Bellelli_Family_-_Google_Art_Project.jpg",
  },
  {
    title: "The Boating Party",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Mary_Cassatt_-_The_Boating_Party_-_Google_Art_Project.jpg/960px-Mary_Cassatt_-_The_Boating_Party_-_Google_Art_Project.jpg",
  },
  {
    title: "The Child's Bath",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Mary_Cassatt_-_The_Child%27s_Bath_-_Google_Art_Project.jpg/960px-Mary_Cassatt_-_The_Child%27s_Bath_-_Google_Art_Project.jpg",
  },
  {
    title: "The Birth of Venus (Cabanel)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Alexandre_Cabanel_-_The_Birth_of_Venus_-_Google_Art_Project.jpg/960px-Alexandre_Cabanel_-_The_Birth_of_Venus_-_Google_Art_Project.jpg",
  },
  {
    title: "The Death of Socrates",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Jacques-Louis_David_-_The_Death_of_Socrates_-_Google_Art_Project.jpg/960px-Jacques-Louis_David_-_The_Death_of_Socrates_-_Google_Art_Project.jpg",
  },
  {
    title: "A Burial at Ornans",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Gustave_Courbet_-_A_Burial_at_Ornans_-_Google_Art_Project.jpg/960px-Gustave_Courbet_-_A_Burial_at_Ornans_-_Google_Art_Project.jpg",
  },
  {
    title: "The Angelus",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Jean-Fran%C3%A7ois_Millet_-_The_Angelus_-_Google_Art_Project.jpg/960px-Jean-Fran%C3%A7ois_Millet_-_The_Angelus_-_Google_Art_Project.jpg",
  },
  {
    title: "Two Sisters (On the Terrace)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Pierre-Auguste_Renoir_-_Two_Sisters_%28On_the_Terrace%29_-_Google_Art_Project.jpg/960px-Pierre-Auguste_Renoir_-_Two_Sisters_%28On_the_Terrace%29_-_Google_Art_Project.jpg",
  },
  {
    title: "The Cradle",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Berthe_Morisot_-_The_Cradle_-_Google_Art_Project.jpg/960px-Berthe_Morisot_-_The_Cradle_-_Google_Art_Project.jpg",
  },
  {
    title: "The Treachery of Images",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b9/MagrittePipe.jpg",
  },
  {
    title: "Campbell's Soup Cans",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Campbell%27s_Soup_Cans_by_Andy_Warhol.jpg/960px-Campbell%27s_Soup_Cans_by_Andy_Warhol.jpg",
  },
  {
    title: "Self-Portrait with Bandaged Ear",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Vincent_van_Gogh_-_Self-portrait_with_bandaged_ear_%281889%2C_Courtauld_Institute%29.jpg/960px-Vincent_van_Gogh_-_Self-portrait_with_bandaged_ear_%281889%2C_Courtauld_Institute%29.jpg",
  },
  {
    title: "The Raft of the Medusa",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg/960px-JEAN_LOUIS_TH%C3%89ODORE_G%C3%89RICAULT_-_La_Balsa_de_la_Medusa_%28Museo_del_Louvre%2C_1818-19%29.jpg",
  },
  {
    title: "Bal du moulin de la Galette",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Renoir%2C_Pierre-Auguste_-_Dance_at_Le_Moulin_de_la_Galette%2C_1876.jpg/960px-Renoir%2C_Pierre-Auguste_-_Dance_at_Le_Moulin_de_la_Galette%2C_1876.jpg",
  },
  {
    title: "Le D\u00e9jeuner sur l'herbe",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg/960px-Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg",
  },
  {
    title: "A Bar at the Folies-Berg\u00e8re",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/%22Un_Bar_aux_Folies-Berg%C3%A8re%22_by_%C3%89douard_Manet_%281882%29.jpg/960px-%22Un_Bar_aux_Folies-Berg%C3%A8re%22_by_%C3%89douard_Manet_%281882%29.jpg",
  },
  {
    title: "Mont Sainte-Victoire",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Paul_C%C3%A9zanne_-_Montagne_Saint-victoire_-_Google_Art_Project.jpg/960px-Paul_C%C3%A9zanne_-_Montagne_Saint-victoire_-_Google_Art_Project.jpg",
  },
  {
    title: "Where Do We Come From?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Paul_Gauguin_-_D%27ou_venons-nous.jpg/960px-Paul_Gauguin_-_D%27ou_venons-nous.jpg",
  },
  {
    title: "Vision After the Sermon",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/La_vision_apr%C3%A8s_le_sermon_%28Paul_Gauguin%29.jpg/960px-La_vision_apr%C3%A8s_le_sermon_%28Paul_Gauguin%29.jpg",
  },
  {
    title: "The Yellow Christ",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Paul_Gauguin_-_The_Yellow_Christ_%28Le_Christ_jaune%29_1889.jpg/960px-Paul_Gauguin_-_The_Yellow_Christ_%28Le_Christ_jaune%29_1889.jpg",
  },
  {
    title: "The Monk by the Sea",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Caspar_David_Friedrich_-_Der_M%C3%B6nch_am_Meer_-_Google_Art_Project.jpg/960px-Caspar_David_Friedrich_-_Der_M%C3%B6nch_am_Meer_-_Google_Art_Project.jpg",
  },
  {
    title: "The Jewish Bride",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Rembrandt_Harmensz._van_Rijn_-_Portret_van_een_paar_als_oudtestamentische_figuren%2C_genaamd_%27Het_Joodse_bruidje%27_-_Google_Art_Project.jpg/960px-Rembrandt_Harmensz._van_Rijn_-_Portret_van_een_paar_als_oudtestamentische_figuren%2C_genaamd_%27Het_Joodse_bruidje%27_-_Google_Art_Project.jpg",
  },
  {
    title: "Girl Reading a Letter at an Open Window",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Jan_Vermeer_van_Delft_-_Brieflezend_meisje_bij_het_venster_%28ca._1657-59%29.jpg/960px-Jan_Vermeer_van_Delft_-_Brieflezend_meisje_bij_het_venster_%28ca._1657-59%29.jpg",
  },
  {
    title: "The Hunters in the Snow",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Pieter_Bruegel_the_Elder_-_Hunters_in_the_Snow_%28Winter%29_-_Google_Art_Project.jpg/960px-Pieter_Bruegel_the_Elder_-_Hunters_in_the_Snow_%28Winter%29_-_Google_Art_Project.jpg",
  },
  {
    title: "The Ghent Altarpiece",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Ghent_Altarpiece_Google_Art_Project.jpg/960px-Ghent_Altarpiece_Google_Art_Project.jpg",
  },
  {
    title: "The Last Judgment",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Last_Judgement_%28Michelangelo%29.jpg/960px-Last_Judgement_%28Michelangelo%29.jpg",
  },
  {
    title: "The Sistine Madonna",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/RAFAEL_-_Madonna_Sixtina_%28Gem%C3%A4ldegalerie_Alter_Meister%2C_Dresden%2C_1513-14._%C3%93leo_sobre_lienzo%2C_265_x_196_cm%29.jpg/960px-RAFAEL_-_Madonna_Sixtina_%28Gem%C3%A4ldegalerie_Alter_Meister%2C_Dresden%2C_1513-14._%C3%93leo_sobre_lienzo%2C_265_x_196_cm%29.jpg",
  },
  {
    title: "The Calling of Saint Matthew",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Caravaggio_%E2%80%94_The_Calling_of_Saint_Matthew.jpg/960px-Caravaggio_%E2%80%94_The_Calling_of_Saint_Matthew.jpg",
  },
  {
    title: "Judith Beheading Holofernes",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Caravaggio_-_Giuditta_e_Oloferne_%28ca._1599%29.jpg/960px-Caravaggio_-_Giuditta_e_Oloferne_%28ca._1599%29.jpg",
  },
  {
    title: "The Supper at Emmaus",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/1602-3_Caravaggio%2CSupper_at_Emmaus_National_Gallery%2C_London.jpg/960px-1602-3_Caravaggio%2CSupper_at_Emmaus_National_Gallery%2C_London.jpg",
  },
  {
    title: "The Ecstasy of Saint Teresa",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Ecstasy_of_St._Teresa_HDR.jpg/960px-Ecstasy_of_St._Teresa_HDR.jpg",
  },
  {
    title: "The Elevation of the Cross",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Peter_Paul_Rubens_-_Raising_of_the_Cross_%28Antwerp_Cathedral%29.JPG/960px-Peter_Paul_Rubens_-_Raising_of_the_Cross_%28Antwerp_Cathedral%29.JPG",
  },
  {
    title: "The Descent from the Cross",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Peter_Paul_Rubens_-_The_Descent_from_the_Cross_%28Antwerp_Cathedral%29.%2C_c._1613.jpg/960px-Peter_Paul_Rubens_-_The_Descent_from_the_Cross_%28Antwerp_Cathedral%29.%2C_c._1613.jpg",
  },
  {
    title: "The Rape of the Daughters of Leucippus",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Peter_Paul_Rubens_%26_Jan_Wildens_-_De_ontvoering_van_de_Dochters_van_Leucippus.jpg/960px-Peter_Paul_Rubens_%26_Jan_Wildens_-_De_ontvoering_van_de_Dochters_van_Leucippus.jpg",
  },
  {
    title: "The Surrender of Breda",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Velazquez-The_Surrender_of_Breda.jpg/960px-Velazquez-The_Surrender_of_Breda.jpg",
  },
  {
    title: "The Rokeby Venus",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Diego_Vel%C3%A1zquez_-_Rokeby_Venus.jpg/960px-Diego_Vel%C3%A1zquez_-_Rokeby_Venus.jpg",
  },
  {
    title: "The Embarkation for Cythera",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/L%27Embarquement_pour_Cyth%C3%A8re%2C_by_Antoine_Watteau%2C_from_C2RMF_retouched.jpg/960px-L%27Embarquement_pour_Cyth%C3%A8re%2C_by_Antoine_Watteau%2C_from_C2RMF_retouched.jpg",
  },
  {
    title: "The Blue Boy",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b6/The_Blue_Boy.jpg",
  },
  {
    title: "Mr and Mrs Andrews",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Thomas_Gainsborough_-_Mr_and_Mrs_Andrews.jpg/960px-Thomas_Gainsborough_-_Mr_and_Mrs_Andrews.jpg",
  },
  {
    title: "The Death of General Wolfe",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Benjamin_West_005.jpg/960px-Benjamin_West_005.jpg",
  },
  {
    title: "Early Sunday Morning",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Early_Sunday_Morning%2C_by_Edward_Hopper.jpg/960px-Early_Sunday_Morning%2C_by_Edward_Hopper.jpg",
  },
  {
    title: "Room in New York",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Room-in-new-york-edward-hopper-1932.jpg/960px-Room-in-new-york-edward-hopper-1932.jpg",
  },
  {
    title: "Number 1, 1950 (Lavender Mist)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Regarding_Lavender_Mist.jpg/960px-Regarding_Lavender_Mist.jpg",
  },
  {
    title: "Broadway Boogie Woogie",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Piet_Mondrian%2C_1942_-_Broadway_Boogie_Woogie.jpg/960px-Piet_Mondrian%2C_1942_-_Broadway_Boogie_Woogie.jpg",
  },
  {
    title: "Composition with Red, Blue and Yellow",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg/960px-Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg",
  },
  {
    title: "The Red Studio",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/L%27Atelier_rouge%2C_par_Henri_Matisse.jpg/960px-L%27Atelier_rouge%2C_par_Henri_Matisse.jpg",
  },
  {
    title: "Goldfish",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Goldfish_Matisse.jpg",
  },
  {
    title: "The Joy of Life",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Bonheur_Matisse.jpg/960px-Bonheur_Matisse.jpg",
  },
  {
    title: "Les Demoiselles d'Avignon",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Les_Demoiselles_d%27Avignon.jpg/960px-Les_Demoiselles_d%27Avignon.jpg",
  },
  {
    title: "The Old Guitarist",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Old_guitarist_chicago.jpg/960px-Old_guitarist_chicago.jpg",
  },
  {
    title: "The Blue Room",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Picasso%27s_Blue_Room_1901.jpg/960px-Picasso%27s_Blue_Room_1901.jpg",
  },
  {
    title: "The Potato Eaters",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/De_aardappeleters_-_s0005V1962_-_Van_Gogh_Museum.jpg/960px-De_aardappeleters_-_s0005V1962_-_Van_Gogh_Museum.jpg",
  },
  {
    title: "Cafe Terrace at Night",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Van_Gogh_-_Terrace_of_a_Caf%C3%A9_at_Night_%28Place_du_Forum%29_1888.jpg/960px-Van_Gogh_-_Terrace_of_a_Caf%C3%A9_at_Night_%28Place_du_Forum%29_1888.jpg",
  },
  {
    title: "Almond Blossoms",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg/960px-Vincent_van_Gogh_-_Almond_blossom_-_Google_Art_Project.jpg",
  },
  {
    title: "The Night Caf\u00e9",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vincent_Willem_van_Gogh_076.jpg/960px-Vincent_Willem_van_Gogh_076.jpg",
  },
  {
    title: "Portrait of Dr. Gachet",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Portrait_of_Dr._Gachet.jpg",
  },
  {
    title: "The Church at Auvers",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Vincent_van_Gogh_-_The_Church_in_Auvers-sur-Oise%2C_View_from_the_Chevet_-_Google_Art_Project.jpg/960px-Vincent_van_Gogh_-_The_Church_in_Auvers-sur-Oise%2C_View_from_the_Chevet_-_Google_Art_Project.jpg",
  },
  {
    title: "The Birth of Venus (Bouguereau)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Alexandre_Cabanel_-_The_Birth_of_Venus_-_Google_Art_Project_2.jpg/960px-Alexandre_Cabanel_-_The_Birth_of_Venus_-_Google_Art_Project_2.jpg",
  },
  {
    title: "The Gross Clinic",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Thomas_Eakins%2C_American_-_Portrait_of_Dr._Samuel_D._Gross_%28The_Gross_Clinic%29_-_Google_Art_Project.jpg/960px-Thomas_Eakins%2C_American_-_Portrait_of_Dr._Samuel_D._Gross_%28The_Gross_Clinic%29_-_Google_Art_Project.jpg",
  },
  {
    title: "The Gulf Stream",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Winslow_Homer_-_The_Gulf_Stream_-_Metropolitan_Museum_of_Art.jpg/960px-Winslow_Homer_-_The_Gulf_Stream_-_Metropolitan_Museum_of_Art.jpg",
  },
  {
    title: "The Oxbow",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Cole_Thomas_The_Oxbow_%28The_Connecticut_River_near_Northampton_1836%29.jpg/960px-Cole_Thomas_The_Oxbow_%28The_Connecticut_River_near_Northampton_1836%29.jpg",
  },
  {
    title: "Kindred Spirits",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Asher_Durand_Kindred_Spirits.jpg/960px-Asher_Durand_Kindred_Spirits.jpg",
  },
  {
    title: "The Veteran in a New Field",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/The_Veteran_in_a_New_Field_1865_Winslow_Homer.jpg/960px-The_Veteran_in_a_New_Field_1865_Winslow_Homer.jpg",
  },
  {
    title: "The Artist's Garden at Giverny",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Monet_-_Monets_Garten_in_Giverny.jpg/960px-Monet_-_Monets_Garten_in_Giverny.jpg",
  },
  {
    title: "Rouen Cathedral",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/30/RouenCathedral_Monet_1894.jpg",
  },
  {
    title: "San Giorgio Maggiore at Dusk",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Amgueddfa_Cymru_-_San_Giorgio_Maggiore_yn_y_Gwyll_-_San_Giorgio_Maggiore%2C_Twilight_-_220983.jpeg/960px-Amgueddfa_Cymru_-_San_Giorgio_Maggiore_yn_y_Gwyll_-_San_Giorgio_Maggiore%2C_Twilight_-_220983.jpeg",
  },
  {
    title: "A Friend in Need",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Cassius_Marcellus_Coolidge_-_Poker_Game_%281894%29.png/960px-Cassius_Marcellus_Coolidge_-_Poker_Game_%281894%29.png",
  },
  {
    title: "The Storm",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/1880_Pierre_Auguste_Cot_-_The_Storm.jpg/960px-1880_Pierre_Auguste_Cot_-_The_Storm.jpg",
  },
  {
    title: "The Death of Sardanapalus",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/La_Mort_de_Sardanapale_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_2346.jpg/960px-La_Mort_de_Sardanapale_-_Eug%C3%A8ne_Delacroix_-_Mus%C3%A9e_du_Louvre_Peintures_RF_2346.jpg",
  },
  {
    title: "The Apotheosis of Homer",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Hom%C3%A8re_d%C3%A9ifi%C3%A9%2C_dit_aussi_L%27apoth%C3%A9ose_d%27Hom%C3%A8re_-_Jean-Auguste_Dominique_Ingres_-_Mus%C3%A9e_du_Louvre_Peintures_INV_5417_%3B_C_196.jpg/960px-Hom%C3%A8re_d%C3%A9ifi%C3%A9%2C_dit_aussi_L%27apoth%C3%A9ose_d%27Hom%C3%A8re_-_Jean-Auguste_Dominique_Ingres_-_Mus%C3%A9e_du_Louvre_Peintures_INV_5417_%3B_C_196.jpg",
  },
  {
    title: "The Valpin\u00e7on Bather",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Jean-Auguste-Dominique_Ingres_-_La_Baigneuse_Valpin%C3%A7on.jpg/960px-Jean-Auguste-Dominique_Ingres_-_La_Baigneuse_Valpin%C3%A7on.jpg",
  },
  {
    title: "The Coronation of Napoleon",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Jacques-Louis_David_-_The_Coronation_of_Napoleon_%281805-1807%29.jpg/960px-Jacques-Louis_David_-_The_Coronation_of_Napoleon_%281805-1807%29.jpg",
  },
  {
    title: "Napoleon Crossing the Alps",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/David_-_Napoleon_crossing_the_Alps_-_Malmaison2.jpg/960px-David_-_Napoleon_crossing_the_Alps_-_Malmaison2.jpg",
  },
  {
    title: "The Intervention of the Sabine Women",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/The_Intervention_of_the_Sabine_Women_-_David_%28Louvre_INV_3691%29.jpg/960px-The_Intervention_of_the_Sabine_Women_-_David_%28Louvre_INV_3691%29.jpg",
  },
  {
    title: "The Stone Breakers",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Gustave_Courbet_-_The_Stonebreakers_-_WGA05457.jpg/960px-Gustave_Courbet_-_The_Stonebreakers_-_WGA05457.jpg",
  },
  {
    title: "The Artist's Studio",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Courbet_LAtelier_du_peintre.jpg/960px-Courbet_LAtelier_du_peintre.jpg",
  },
  {
    title: "The Gleaners",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project_2.jpg/960px-Jean-Fran%C3%A7ois_Millet_-_Gleaners_-_Google_Art_Project_2.jpg",
  },
  {
    title: "Paris Street, Rainy Day",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Gustave_Caillebotte_-_Paris_Street%3B_Rainy_Day_-_Google_Art_Project.jpg/960px-Gustave_Caillebotte_-_Paris_Street%3B_Rainy_Day_-_Google_Art_Project.jpg",
  },
  {
    title: "The Balcony",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Edouard_Manet_-_The_Balcony_-_Google_Art_Project.jpg/960px-Edouard_Manet_-_The_Balcony_-_Google_Art_Project.jpg",
  },
  {
    title: "Music in the Tuileries",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/MANET_-_M%C3%BAsica_en_las_Tuller%C3%ADas_%28National_Gallery%2C_Londres%2C_1862%29.jpg/960px-MANET_-_M%C3%BAsica_en_las_Tuller%C3%ADas_%28National_Gallery%2C_Londres%2C_1862%29.jpg",
  },
  {
    title: "The Umbrellas",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Pierre-Auguste_Renoir%2C_The_Umbrellas%2C_ca._1881-86.jpg/960px-Pierre-Auguste_Renoir%2C_The_Umbrellas%2C_ca._1881-86.jpg",
  },
  {
    title: "The Swing (Renoir)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Swing-Renoir.jpeg/960px-Swing-Renoir.jpeg",
  },
  {
    title: "The Harbor at Lorient",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Berthe_Morisot_The_Harbor_at_Lorient.jpg/960px-Berthe_Morisot_The_Harbor_at_Lorient.jpg",
  },
  {
    title: "The Thinker",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Le_Penseur_by_Rodin_%28Kunsthalle_Bielefeld%29_2014-04-10.JPG/960px-Le_Penseur_by_Rodin_%28Kunsthalle_Bielefeld%29_2014-04-10.JPG",
  },
  {
    title: "The Kiss (Rodin)",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Rodin_-_Le_Baiser_06.jpg/960px-Rodin_-_Le_Baiser_06.jpg",
  },
  {
    title: "The Burghers of Calais",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Statue_bourgeois_calais_rodin.jpg/960px-Statue_bourgeois_calais_rodin.jpg",
  },
  {
    title: "The Sleeping Gypsy",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/La_Boh%C3%A9mienne_endormie.jpg/960px-La_Boh%C3%A9mienne_endormie.jpg",
  },
  {
    title: "The Banjo Lesson",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Henry_Ossawa_Tanner%2C_The_Banjo_Lesson_%28darker%29.jpg/960px-Henry_Ossawa_Tanner%2C_The_Banjo_Lesson_%28darker%29.jpg",
  },
  {
    title: "Freedom from Want",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/%22Freedom_From_Want%22_-_NARA_-_513539.jpg/960px-%22Freedom_From_Want%22_-_NARA_-_513539.jpg",
  },
];
