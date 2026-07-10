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
    title: "Le Déjeuner sur l'herbe",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg/960px-Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg",
  },
  {
    title: "A Bar at the Folies-Bergère",
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
    title: "The Night Café",
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
    title: "The Valpinçon Bather",
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
  {
    title: "Nathaniel Hurd",
    image: "https://openaccess-cdn.clevelandart.org/1915.534/1915.534_web.jpg",
  },
  {
    title: "Portrait of Dora Wheeler",
    image: "https://openaccess-cdn.clevelandart.org/1921.1239/1921.1239_web.jpg",
  },
  {
    title: "Stag at Sharkey's",
    image: "https://openaccess-cdn.clevelandart.org/1922.1133/1922.1133_web.jpg",
  },
  {
    title: "The Biglin Brothers Turning the Stake",
    image: "https://openaccess-cdn.clevelandart.org/1927.1984/1927.1984_web.jpg",
  },
  {
    title: "The Race Track (Death on a Pale Horse)",
    image: "https://openaccess-cdn.clevelandart.org/1928.8/1928.8_web.jpg",
  },
  {
    title: "Mme L . . . (Laure Borreau)",
    image: "https://openaccess-cdn.clevelandart.org/1962.2/1962.2_web.jpg",
  },
  {
    title: "Twilight in the Wilderness",
    image: "https://openaccess-cdn.clevelandart.org/1965.233/1965.233_web.jpg",
  },
  {
    title: "In the Waves (Dans les Vagues)",
    image: "https://openaccess-cdn.clevelandart.org/1978.63/1978.63_web.jpg",
  },
  {
    title: "Church Street El",
    image: "https://openaccess-cdn.clevelandart.org/1977.43/1977.43_web.jpg",
  },
  {
    title: "The Large Plane Trees (Road Menders at Saint-Rémy)",
    image: "https://openaccess-cdn.clevelandart.org/1947.209/1947.209_web.jpg",
  },
  {
    title: "Adeline Ravoux",
    image: "https://openaccess-cdn.clevelandart.org/1958.31/1958.31_web.jpg",
  },
  {
    title: "View of Schroon Mountain, Essex County, New York, After a Storm",
    image: "https://openaccess-cdn.clevelandart.org/1917.1335/1917.1335_web.jpg",
  },
  {
    title: "The Red Kerchief",
    image: "https://openaccess-cdn.clevelandart.org/1958.39/1958.39_web.jpg",
  },
  {
    title: "Portrait of a Family Playing Music",
    image: "https://openaccess-cdn.clevelandart.org/1951.355/1951.355_web.jpg",
  },
  {
    title: "A Woman's Work",
    image: "https://openaccess-cdn.clevelandart.org/1964.160/1964.160_web.jpg",
  },
  {
    title: "Frieze of Dancers",
    image: "https://openaccess-cdn.clevelandart.org/1946.83/1946.83_web.jpg",
  },
  {
    title: "Cupid and Psyche",
    image: "https://openaccess-cdn.clevelandart.org/1962.37/1962.37_web.jpg",
  },
  {
    title: "Portrait of a Man, Possibly Girolamo Rosati",
    image: "https://openaccess-cdn.clevelandart.org/1950.250/1950.250_web.jpg",
  },
  {
    title: "Elizabeth Shewell West and Her Son, Raphael",
    image: "https://openaccess-cdn.clevelandart.org/1927.393/1927.393_web.jpg",
  },
  {
    title: "Portrait of the Ladies Amabel and Mary Jemima Yorke",
    image: "https://openaccess-cdn.clevelandart.org/1942.645/1942.645_web.jpg",
  },
  {
    title: "Portrait of Tieleman Roosterman",
    image: "https://openaccess-cdn.clevelandart.org/1999.173/1999.173_web.jpg",
  },
  {
    title: "Peregrine Falcons (Duck Hawks)",
    image: "https://openaccess-cdn.clevelandart.org/1964.351/1964.351_web.jpg",
  },
  {
    title: "The Sacrifice of Isaac",
    image: "https://openaccess-cdn.clevelandart.org/1937.577/1937.577_web.jpg",
  },
  {
    title: "Hunting near Hartenfels Castle",
    image: "https://openaccess-cdn.clevelandart.org/1958.425/1958.425_web.jpg",
  },
  {
    title: "A Genoese Lady with Her Child",
    image: "https://openaccess-cdn.clevelandart.org/1954.392/1954.392_web.jpg",
  },
  {
    title: "The Holy Family on the Steps",
    image: "https://openaccess-cdn.clevelandart.org/1981.18/1981.18_web.jpg",
  },
  {
    title: "The Crucifixion of Saint Andrew",
    image: "https://openaccess-cdn.clevelandart.org/1976.2/1976.2_web.jpg",
  },
  {
    title: "Wineglass and a Bowl of Fruit",
    image: "https://openaccess-cdn.clevelandart.org/1962.292/1962.292_web.jpg",
  },
  {
    title: "George Washington at Princeton",
    image: "https://openaccess-cdn.clevelandart.org/1917.946/1917.946_web.jpg",
  },
  {
    title: "The Burning of the Houses of Lords and Commons, 16 October 1834",
    image: "https://openaccess-cdn.clevelandart.org/1942.647/1942.647_web.jpg",
  },
  {
    title: "Fight Between a Tiger and a Buffalo",
    image: "https://openaccess-cdn.clevelandart.org/1949.186/1949.186_web.jpg",
  },
  {
    title: "Diana and Her Nymphs Departing for the Hunt",
    image: "https://openaccess-cdn.clevelandart.org/1959.190/1959.190_web.jpg",
  },
  {
    title: "The Troubadour",
    image: "https://openaccess-cdn.clevelandart.org/1958.23/1958.23_web.jpg",
  },
  {
    title: "Portrait of a Couple",
    image: "https://openaccess-cdn.clevelandart.org/1916.793/1916.793_web.jpg",
  },
  {
    title: "Sunny Autumn Day",
    image: "https://openaccess-cdn.clevelandart.org/1956.578/1956.578_web.jpg",
  },
  {
    title: "Portrait of a Woman",
    image: "https://openaccess-cdn.clevelandart.org/1944.90/1944.90_web.jpg",
  },
  {
    title: "Water Lilies (Agapanthus)",
    image: "https://openaccess-cdn.clevelandart.org/1960.81/1960.81_web.jpg",
  },
  {
    title: "The Power of Music",
    image: "https://openaccess-cdn.clevelandart.org/1991.110/1991.110_web.jpg",
  },
  {
    title: "View of Florence",
    image: "https://openaccess-cdn.clevelandart.org/1961.39/1961.39_web.jpg",
  },
  {
    title: "Branch Hill Pond, Hampstead",
    image: "https://openaccess-cdn.clevelandart.org/1972.48/1972.48_web.jpg",
  },
  {
    title: "Low Waterfall in a Wooded Landscape with a Dead Beech Tree",
    image: "https://openaccess-cdn.clevelandart.org/1967.63/1967.63_web.jpg",
  },
  {
    title: "Saint John the Baptist in a Landscape",
    image: "https://openaccess-cdn.clevelandart.org/1979.80/1979.80_web.jpg",
  },
  {
    title: "The Annunciation",
    image: "https://openaccess-cdn.clevelandart.org/1942.635/1942.635_web.jpg",
  },
  {
    title: "Ruin by the Sea",
    image: "https://openaccess-cdn.clevelandart.org/1979.57/1979.57_web.jpg",
  },
  {
    title: "Vale of Kashmir",
    image: "https://openaccess-cdn.clevelandart.org/2014.12/2014.12_web.jpg",
  },
  {
    title: "Edge of the Woods Near L'Hermitage, Pontoise",
    image: "https://openaccess-cdn.clevelandart.org/1951.356/1951.356_web.jpg",
  },
  {
    title: "Saint Peter Repentant",
    image: "https://openaccess-cdn.clevelandart.org/1951.454/1951.454_web.jpg",
  },
  {
    title: "Interior of the Pantheon, Rome",
    image: "https://openaccess-cdn.clevelandart.org/1974.39/1974.39_web.jpg",
  },
  {
    title: "Portrait of Machtelt Suijs",
    image: "https://openaccess-cdn.clevelandart.org/1987.136/1987.136_web.jpg",
  },
  {
    title: "The Young Eastern Woman",
    image: "https://openaccess-cdn.clevelandart.org/1991.163/1991.163_web.jpg",
  },
  {
    title: "Portrait of Lisa Colt Curtis",
    image: "https://openaccess-cdn.clevelandart.org/1998.168/1998.168_web.jpg",
  },
  {
    title: "Wrestlers in a Circus",
    image: "https://openaccess-cdn.clevelandart.org/1966.49/1966.49_web.jpg",
  },
  {
    title: "Icon of the New Testament Trinity",
    image: "https://openaccess-cdn.clevelandart.org/2016.32/2016.32_web.jpg",
  },
  {
    title: "Elizabeth Beltzhoover Mason",
    image: "https://openaccess-cdn.clevelandart.org/1921.428/1921.428_web.jpg",
  },
  {
    title: "La Cervara, the Roman Campagna",
    image: "https://openaccess-cdn.clevelandart.org/1963.91/1963.91_web.jpg",
  },
  {
    title: "Interior of a Church",
    image: "https://openaccess-cdn.clevelandart.org/1971.1/1971.1_web.jpg",
  },
  {
    title: "Basket of Plums",
    image: "https://openaccess-cdn.clevelandart.org/1971.47/1971.47_web.jpg",
  },
  {
    title: "The Holy Family with Saint John the Baptist and Saint Margaret",
    image: "https://openaccess-cdn.clevelandart.org/1932.227/1932.227_web.jpg",
  },
  {
    title: "Mount Starr King, Yosemite",
    image: "https://openaccess-cdn.clevelandart.org/1922.684/1922.684_web.jpg",
  },
  {
    title: "Danaë",
    image: "https://openaccess-cdn.clevelandart.org/1971.101/1971.101_web.jpg",
  },
  {
    title: "Crucifix with Scenes of the Passion",
    image: "https://openaccess-cdn.clevelandart.org/1995.5/1995.5_web.jpg",
  },
  {
    title: "Early Morning After a Storm at Sea",
    image: "https://openaccess-cdn.clevelandart.org/1924.195/1924.195_web.jpg",
  },
  {
    title: "The Pigeon Tower at Bellevue",
    image: "https://openaccess-cdn.clevelandart.org/1936.19/1936.19_web.jpg",
  },
  {
    title: "Two Poplars in the Alpilles near Saint-Rémy",
    image: "https://openaccess-cdn.clevelandart.org/1958.32/1958.32_web.jpg",
  },
  {
    title: "A Hare and a Leg of Lamb",
    image: "https://openaccess-cdn.clevelandart.org/1969.53/1969.53_web.jpg",
  },
  {
    title: "Icon of the Mother of God and Infant Christ (Virgin Eleousa)",
    image: "https://openaccess-cdn.clevelandart.org/2010.154/2010.154_web.jpg",
  },
  {
    title: "Berthe Morisot with a Muff",
    image: "https://openaccess-cdn.clevelandart.org/1958.34/1958.34_web.jpg",
  },
  {
    title: "Saint Jerome",
    image: "https://openaccess-cdn.clevelandart.org/1961.219/1961.219_web.jpg",
  },
  {
    title: "Mount Sainte-Victoire",
    image: "https://openaccess-cdn.clevelandart.org/1958.21/1958.21_web.jpg",
  },
  {
    title: "Romaine Lacaux",
    image: "https://openaccess-cdn.clevelandart.org/1942.1065/1942.1065_web.jpg",
  },
  {
    title: "The Call",
    image: "https://openaccess-cdn.clevelandart.org/1943.392/1943.392_web.jpg",
  },
  {
    title: "Samuel Williams",
    image: "https://openaccess-cdn.clevelandart.org/1965.474/1965.474_web.jpg",
  },
  {
    title: "Christ and the Virgin in the House at Nazareth",
    image: "https://openaccess-cdn.clevelandart.org/1960.117/1960.117_web.jpg",
  },
  {
    title: "Morning Glory with Black",
    image: "https://openaccess-cdn.clevelandart.org/1958.42/1958.42_web.jpg",
  },
  {
    title: "Green Tara",
    image: "https://openaccess-cdn.clevelandart.org/1970.156/1970.156_web.jpg",
  },
  {
    title: "Virgin and Child",
    image: "https://openaccess-cdn.clevelandart.org/1934.29/1934.29_web.jpg",
  },
  {
    title: "Antiochus and Stratonice",
    image: "https://openaccess-cdn.clevelandart.org/1966.13/1966.13_web.jpg",
  },
  {
    title: "George III",
    image: "https://openaccess-cdn.clevelandart.org/1952.17/1952.17_web.jpg",
  },
  {
    title: "The Kiss of Peace and Justice",
    image: "https://openaccess-cdn.clevelandart.org/1971.102/1971.102_web.jpg",
  },
  {
    title: "Scenes of Witchcraft: Morning",
    image: "https://openaccess-cdn.clevelandart.org/1977.37.1/1977.37.1_web.jpg",
  },
  {
    title: "Scenes of Witchcraft: Evening",
    image: "https://openaccess-cdn.clevelandart.org/1977.37.3/1977.37.3_web.jpg",
  },
  {
    title: "The Holy Family with Mary Magdalen",
    image: "https://openaccess-cdn.clevelandart.org/1926.247/1926.247_web.jpg",
  },
  {
    title: "Scenes of Witchcraft: Night",
    image: "https://openaccess-cdn.clevelandart.org/1977.37.4/1977.37.4_web.jpg",
  },
  {
    title: "Rest",
    image: "https://openaccess-cdn.clevelandart.org/1915.722/1915.722_web.jpg",
  },
  {
    title: "Panel from a Cassone: The Race of the Palio in the Streets of Florence",
    image: "https://openaccess-cdn.clevelandart.org/1916.801/1916.801_web.jpg",
  },
  {
    title: "Terminus, the Device of Erasmus",
    image: "https://openaccess-cdn.clevelandart.org/1971.166/1971.166_web.jpg",
  },
  {
    title: "Virgin and Child Enthroned",
    image: "https://openaccess-cdn.clevelandart.org/1954.834/1954.834_web.jpg",
  },
  {
    title: "Reading",
    image: "https://openaccess-cdn.clevelandart.org/1950.89/1950.89_web.jpg",
  },
  {
    title: "Noah: The Eve of the Deluge",
    image: "https://openaccess-cdn.clevelandart.org/1972.119/1972.119_web.jpg",
  },
  {
    title: "Under the Trees (from \"The Public Gardens\")",
    image: "https://openaccess-cdn.clevelandart.org/1953.212/1953.212_web.jpg",
  },
  {
    title: "British Manufactory; A Sketch",
    image: "https://openaccess-cdn.clevelandart.org/1919.1018/1919.1018_web.jpg",
  },
  {
    title: "Virgin and Child with Angels",
    image: "https://openaccess-cdn.clevelandart.org/1916.802/1916.802_web.jpg",
  },
  {
    title: "Maine Coast",
    image: "https://openaccess-cdn.clevelandart.org/1922.1132/1922.1132_web.jpg",
  },
  {
    title: "Scenes of Witchcraft: Day",
    image: "https://openaccess-cdn.clevelandart.org/1977.37.2/1977.37.2_web.jpg",
  },
  {
    title: "The Birth and Naming of John the Baptist",
    image: "https://openaccess-cdn.clevelandart.org/1975.3/1975.3_web.jpg",
  },
  {
    title: "John the Baptist",
    image: "https://openaccess-cdn.clevelandart.org/1966.238/1966.238_web.jpg",
  },
  {
    title: "Jeremiah Belknap",
    image: "https://openaccess-cdn.clevelandart.org/1919.1016/1919.1016_web.jpg",
  },
  {
    title: "Holiday on the Hudson",
    image: "https://openaccess-cdn.clevelandart.org/1933.2291/1933.2291_web.jpg",
  },
  {
    title: "Portrait of Isabella Brant",
    image: "https://openaccess-cdn.clevelandart.org/1947.207/1947.207_web.jpg",
  },
  {
    title: "The Large Tree",
    image: "https://openaccess-cdn.clevelandart.org/1975.263/1975.263_web.jpg",
  },
  {
    title: "Nymphs and a Satyr (Amor Vincit Omnia)",
    image: "https://openaccess-cdn.clevelandart.org/1926.26/1926.26_web.jpg",
  },
  {
    title: "The Miracles of Saint James the Greater",
    image: "https://openaccess-cdn.clevelandart.org/1929.96/1929.96_web.jpg",
  },
  {
    title: "On the Beach, No. 3",
    image: "https://openaccess-cdn.clevelandart.org/1926.1653/1926.1653_web.jpg",
  },
  {
    title: "Altarpiece with The Passion of Christ",
    image: "https://openaccess-cdn.clevelandart.org/1951.453/1951.453_web.jpg",
  },
  {
    title: "Portrait of Colonel Charles Heathcote",
    image: "https://openaccess-cdn.clevelandart.org/2017.100/2017.100_web.jpg",
  },
  {
    title: "The Return of the Holy Family to Nazareth",
    image: "https://openaccess-cdn.clevelandart.org/1953.156/1953.156_web.jpg",
  },
  {
    title: "Charles Apthorp",
    image: "https://openaccess-cdn.clevelandart.org/1919.1006/1919.1006_web.jpg",
  },
  {
    title: "Café Wepler",
    image: "https://openaccess-cdn.clevelandart.org/1950.90/1950.90_web.jpg",
  },
  {
    title: "Apollo, God of Light, Eloquence, Poetry, and the Fine Arts with Urania, Muse of Astronomy",
    image: "https://openaccess-cdn.clevelandart.org/2003.6.3/2003.6.3_web.jpg",
  },
  {
    title: "Calliope, Muse of Epic Poetry",
    image: "https://openaccess-cdn.clevelandart.org/2003.6.4/2003.6.4_web.jpg",
  },
  {
    title: "The Rathskeller",
    image: "https://openaccess-cdn.clevelandart.org/1946.164/1946.164_web.jpg",
  },
  {
    title: "Portrait of Agostino Barbarigo",
    image: "https://openaccess-cdn.clevelandart.org/1928.16/1928.16_web.jpg",
  },
  {
    title: "A Bridal Couple",
    image: "https://openaccess-cdn.clevelandart.org/1932.179/1932.179_web.jpg",
  },
  {
    title: "Lazarus and the Rich Man",
    image: "https://openaccess-cdn.clevelandart.org/1939.68/1939.68_web.jpg",
  },
  {
    title: "Portrait of the Jester Calabazas",
    image: "https://openaccess-cdn.clevelandart.org/1965.15/1965.15_web.jpg",
  },
  {
    title: "Samson and Delilah",
    image: "https://openaccess-cdn.clevelandart.org/1968.23/1968.23_web.jpg",
  },
  {
    title: "On Bos'n's Hill",
    image: "https://openaccess-cdn.clevelandart.org/1992.398/1992.398_web.jpg",
  },
  {
    title: "The Brook",
    image: "https://openaccess-cdn.clevelandart.org/1958.20/1958.20_web.jpg",
  },
  {
    title: "Sophie Crouzet",
    image: "https://openaccess-cdn.clevelandart.org/1943.659/1943.659_web.jpg",
  },
  {
    title: "A Young Man with a Chain",
    image: "https://openaccess-cdn.clevelandart.org/1942.644/1942.644_web.jpg",
  },
  {
    title: "Portrait of King Charles II of England",
    image: "https://openaccess-cdn.clevelandart.org/1959.38/1959.38_web.jpg",
  },
  {
    title: "The Illustrated Miraculous Origins of the Yūzū Nenbutsu School",
    image: "https://openaccess-cdn.clevelandart.org/1956.87/1956.87_web.jpg",
  },
  {
    title: "Portrait of Catherine Grey, Lady Manners",
    image: "https://openaccess-cdn.clevelandart.org/1961.220/1961.220_web.jpg",
  },
  {
    title: "Virgin and Child with Saints",
    image: "https://openaccess-cdn.clevelandart.org/1961.40/1961.40_web.jpg",
  },
  {
    title: "Flowers in a Glass",
    image: "https://openaccess-cdn.clevelandart.org/1960.108/1960.108_web.jpg",
  },
  {
    title: "Travelers in Hilly Countryside",
    image: "https://openaccess-cdn.clevelandart.org/1942.637/1942.637_web.jpg",
  },
  {
    title: "Summer",
    image: "https://openaccess-cdn.clevelandart.org/1916.1056/1916.1056_web.jpg",
  },
  {
    title: "Portrait of Jean-Gabriel du Theil at the Signing of the Treaty of Vienna",
    image: "https://openaccess-cdn.clevelandart.org/1964.89/1964.89_web.jpg",
  },
  {
    title: "Blessing of a Yacht on the Belon River",
    image: "https://openaccess-cdn.clevelandart.org/2020.110/2020.110_web.jpg",
  },
  {
    title: "Young Woman with a Turban",
    image: "https://openaccess-cdn.clevelandart.org/1952.542/1952.542_web.jpg",
  },
  {
    title: "Silver Wine Jug, Ham, and Fruit",
    image: "https://openaccess-cdn.clevelandart.org/1960.80/1960.80_web.jpg",
  },
  {
    title: "Mural Fragment with Elite Male and Maguey Cactus Leaves",
    image: "https://openaccess-cdn.clevelandart.org/1963.252/1963.252_web.jpg",
  },
  {
    title: "Madeleine Lerolle and Her Daughter Yvonne",
    image: "https://openaccess-cdn.clevelandart.org/1977.120/1977.120_web.jpg",
  },
  {
    title: "The White Path Between Two Rivers",
    image: "https://openaccess-cdn.clevelandart.org/1955.44/1955.44_web.jpg",
  },
  {
    title: "Composition with Red, Yellow, and Blue",
    image: "https://openaccess-cdn.clevelandart.org/1967.215/1967.215_web.jpg",
  },
  {
    title: "The Dutton Family in the Drawing Room of Sherborne Park, Gloucestershire",
    image: "https://openaccess-cdn.clevelandart.org/2023.122/2023.122_web.jpg",
  },
  {
    title: "Pan and Syrinx",
    image: "https://openaccess-cdn.clevelandart.org/1973.212/1973.212_web.jpg",
  },
  {
    title: "Death of the Virgin",
    image: "https://openaccess-cdn.clevelandart.org/1936.496/1936.496_web.jpg",
  },
  {
    title: "Panoramic View of the Alps, Les Dents du Midi",
    image: "https://openaccess-cdn.clevelandart.org/1964.420/1964.420_web.jpg",
  },
  {
    title: "Portrait of a Woman as Diana",
    image: "https://openaccess-cdn.clevelandart.org/1942.643/1942.643_web.jpg",
  },
  {
    title: "Portrait of a Youth as Saint Sebastian",
    image: "https://openaccess-cdn.clevelandart.org/1986.9/1986.9_web.jpg",
  },
  {
    title: "Mountain Market, Clear with Rising Mist",
    image: "https://openaccess-cdn.clevelandart.org/2015.517/2015.517_web.jpg",
  },
  {
    title: "Portrait of George Pitt, First Baron Rivers",
    image: "https://openaccess-cdn.clevelandart.org/1971.2/1971.2_web.jpg",
  },
  {
    title: "Portrait of Jean Terford David",
    image: "https://openaccess-cdn.clevelandart.org/1916.1979.1/1916.1979.1_web.jpg",
  },
  {
    title: "Rest on the Flight into Egypt",
    image: "https://openaccess-cdn.clevelandart.org/1962.151/1962.151_web.jpg",
  },
  {
    title: "Coronation of the Virgin",
    image: "https://openaccess-cdn.clevelandart.org/1929.920/1929.920_web.jpg",
  },
  {
    title: "Pair of Panels from a Triptych: The Archangel Michael and St. Anthony Abbot",
    image: "https://openaccess-cdn.clevelandart.org/1964.150/1964.150_web.jpg",
  },
  {
    title: "Samson",
    image: "https://openaccess-cdn.clevelandart.org/1972.50/1972.50_web.jpg",
  },
  {
    title: "Gardener's House at Antibes",
    image: "https://openaccess-cdn.clevelandart.org/1916.1044/1916.1044_web.jpg",
  },
  {
    title: "A Cottage in the Woods",
    image: "https://openaccess-cdn.clevelandart.org/1942.641/1942.641_web.jpg",
  },
  {
    title: "Portrait of Cardinal Guillaume Dubois",
    image: "https://openaccess-cdn.clevelandart.org/1967.17/1967.17_web.jpg",
  },
  {
    title: "Villerville Seen from Le Ratier",
    image: "https://openaccess-cdn.clevelandart.org/1951.323/1951.323_web.jpg",
  },
  {
    title: "A Painter",
    image: "https://openaccess-cdn.clevelandart.org/1982.247/1982.247_web.jpg",
  },
  {
    title: "Virgin and Child with Saint Jerome and Saint Catherine of Alexandria",
    image: "https://openaccess-cdn.clevelandart.org/1956.719/1956.719_web.jpg",
  },
  {
    title: "A Home in the Wilderness",
    image: "https://openaccess-cdn.clevelandart.org/1970.162/1970.162_web.jpg",
  },
  {
    title: "Paul Lafond and Alphonse Cherfils Examining a Painting",
    image: "https://openaccess-cdn.clevelandart.org/1958.25/1958.25_web.jpg",
  },
  {
    title: "Seaside (July: Specimen of a Portrait)",
    image: "https://openaccess-cdn.clevelandart.org/1980.288/1980.288_web.jpg",
  },
  {
    title: "Sleep",
    image: "https://openaccess-cdn.clevelandart.org/1963.502/1963.502_web.jpg",
  },
  {
    title: "Point Judith, Rhode Island",
    image: "https://openaccess-cdn.clevelandart.org/1970.161/1970.161_web.jpg",
  },
  {
    title: "Virgin and Child with the Young Saint John the Baptist",
    image: "https://openaccess-cdn.clevelandart.org/1970.160/1970.160_web.jpg",
  },
  {
    title: "Rocky, Wooded Landscape with a Dell and Weir",
    image: "https://openaccess-cdn.clevelandart.org/1984.59/1984.59_web.jpg",
  },
  {
    title: "Portrait of a Man",
    image: "https://openaccess-cdn.clevelandart.org/2009.157/2009.157_web.jpg",
  },
  {
    title: "Cupid (Amor)",
    image: "https://openaccess-cdn.clevelandart.org/1971.100/1971.100_web.jpg",
  },
  {
    title: "Countess Széchenyi",
    image: "https://openaccess-cdn.clevelandart.org/1988.57/1988.57_web.jpg",
  },
  {
    title: "Portrait of Mary Anne Jolliffe",
    image: "https://openaccess-cdn.clevelandart.org/1942.640/1942.640_web.jpg",
  },
  {
    title: "Greek Cavalry Men Resting in Forest",
    image: "https://openaccess-cdn.clevelandart.org/1916.1032/1916.1032_web.jpg",
  },
  {
    title: "David: \"Oh, that I had wings like a Dove! For then would I fly away, and be at rest.\" Psalm 55:6",
    image: "https://openaccess-cdn.clevelandart.org/1986.74/1986.74_web.jpg",
  },
  {
    title: "Boy Drinking",
    image: "https://openaccess-cdn.clevelandart.org/1994.4/1994.4_web.jpg",
  },
  {
    title: "The Crucifixion with a Carthusian Monk",
    image: "https://openaccess-cdn.clevelandart.org/1931.449/1931.449_web.jpg",
  },
  {
    title: "Winding Yarn (Interior of a Nantucket Kitchen)",
    image: "https://openaccess-cdn.clevelandart.org/1915.682/1915.682_web.jpg",
  },
  {
    title: "Wood Interior",
    image: "https://openaccess-cdn.clevelandart.org/1926.488/1926.488_web.jpg",
  },
  {
    title: "Villas at Trouville",
    image: "https://openaccess-cdn.clevelandart.org/2020.105/2020.105_web.jpg",
  },
  {
    title: "Nathaniel Olds",
    image: "https://openaccess-cdn.clevelandart.org/1991.134.2/1991.134.2_web.jpg",
  },
  {
    title: "The Trinity",
    image: "https://openaccess-cdn.clevelandart.org/1996.26/1996.26_web.jpg",
  },
  {
    title: "Study, North Conway, New Hampshire",
    image: "https://openaccess-cdn.clevelandart.org/1967.125/1967.125_web.jpg",
  },
  {
    title: "Landscape with a Windmill",
    image: "https://openaccess-cdn.clevelandart.org/1967.19/1967.19_web.jpg",
  },
  {
    title: "Posthumous portrait of Raja Chhatar Singh of Chamba smoking a hookah with his brother and son",
    image: "https://openaccess-cdn.clevelandart.org/1960.47/1960.47_web.jpg",
  },
  {
    title: "Seventy-Two Peaks Under the Blue Sky with Mount Furong",
    image: "https://openaccess-cdn.clevelandart.org/1980.28/1980.28_web.jpg",
  },
  {
    title: "Spring Flowers",
    image: "https://openaccess-cdn.clevelandart.org/1953.155/1953.155_web.jpg",
  },
  {
    title: "The Building of the Dam",
    image: "https://openaccess-cdn.clevelandart.org/1927.171/1927.171_web.jpg",
  },
  {
    title: "An October Day in the White Mountains",
    image: "https://openaccess-cdn.clevelandart.org/1967.5/1967.5_web.jpg",
  },
  {
    title: "Portrait of Mrs. Leneve",
    image: "https://openaccess-cdn.clevelandart.org/1942.247/1942.247_web.jpg",
  },
  {
    title: "Hermes Ordering Calypso to Release Odysseus",
    image: "https://openaccess-cdn.clevelandart.org/1992.2/1992.2_web.jpg",
  },
  {
    title: "Oedipus at Colonus",
    image: "https://openaccess-cdn.clevelandart.org/2002.3/2002.3_web.jpg",
  },
  {
    title: "Memento Mori, \"To This Favour\"",
    image: "https://openaccess-cdn.clevelandart.org/1965.235/1965.235_web.jpg",
  },
  {
    title: "Adoration of the Shepherds",
    image: "https://openaccess-cdn.clevelandart.org/1968.100/1968.100_web.jpg",
  },
  {
    title: "Self-Portrait with Five Muses",
    image: "https://openaccess-cdn.clevelandart.org/2012.30/2012.30_web.jpg",
  },
  {
    title: "Books and Scholars’ Accoutrements",
    image: "https://openaccess-cdn.clevelandart.org/2011.37/2011.37_web.jpg",
  },
  {
    title: "Calligraphy and Painting Party",
    image: "https://openaccess-cdn.clevelandart.org/1983.88/1983.88_web.jpg",
  },
  {
    title: "The Hunt",
    image: "https://openaccess-cdn.clevelandart.org/1957.141/1957.141_web.jpg",
  },
  {
    title: "Low Tide at Pourville, near Dieppe, 1882",
    image: "https://openaccess-cdn.clevelandart.org/1947.196/1947.196_web.jpg",
  },
  {
    title: "Mary Walker Waugh",
    image: "https://openaccess-cdn.clevelandart.org/1984.41/1984.41_web.jpg",
  },
  {
    title: "Cloudy Mountains",
    image: "https://openaccess-cdn.clevelandart.org/1933.220/1933.220_web.jpg",
  },
  {
    title: "Anna Dummer Powell",
    image: "https://openaccess-cdn.clevelandart.org/1980.202/1980.202_web.jpg",
  },
  {
    title: "Portrait of Francesca Gommi Maratti",
    image: "https://openaccess-cdn.clevelandart.org/2018.1/2018.1_web.jpg",
  },
  {
    title: "Sweet Melancholy",
    image: "https://openaccess-cdn.clevelandart.org/1996.1/1996.1_web.jpg",
  },
  {
    title: "The Adoration of the Magi",
    image: "https://openaccess-cdn.clevelandart.org/1942.536/1942.536_web.jpg",
  },
  {
    title: "The Virgin Crowned by Angels",
    image: "https://openaccess-cdn.clevelandart.org/1968.20/1968.20_web.jpg",
  },
  {
    title: "The Madonna of Humility with the Temptation of Eve",
    image: "https://openaccess-cdn.clevelandart.org/1916.795/1916.795_web.jpg",
  },
  {
    title: "Adoration of the Magi",
    image: "https://openaccess-cdn.clevelandart.org/1936.18/1936.18_web.jpg",
  },
  {
    title: "Dancers in a Pavilion",
    image: "https://openaccess-cdn.clevelandart.org/1938.392/1938.392_web.jpg",
  },
  {
    title: "Pond at Ville-d'Avray",
    image: "https://openaccess-cdn.clevelandart.org/1944.80/1944.80_web.jpg",
  },
  {
    title: "The Kill",
    image: "https://openaccess-cdn.clevelandart.org/1957.139/1957.139_web.jpg",
  },
  {
    title: "Kitchen Utensils with Leeks, Fish, and Eggs",
    image: "https://openaccess-cdn.clevelandart.org/1980.37/1980.37_web.jpg",
  },
  {
    title: "Trees on a Rocky Hillside",
    image: "https://openaccess-cdn.clevelandart.org/1968.21/1968.21_web.jpg",
  },
  {
    title: "Portrait of Jean-Baptiste Lemoyne the Younger",
    image: "https://openaccess-cdn.clevelandart.org/2011.49/2011.49_web.jpg",
  },
  {
    title: "Portrait of Mary Wise",
    image: "https://openaccess-cdn.clevelandart.org/1944.82/1944.82_web.jpg",
  },
  {
    title: "A Bearded Man Wearing a Hat",
    image: "https://openaccess-cdn.clevelandart.org/1950.252/1950.252_web.jpg",
  },
  {
    title: "Laban Searching for His Stolen Household Gods",
    image: "https://openaccess-cdn.clevelandart.org/1965.469/1965.469_web.jpg",
  },
  {
    title: "Madonna of Humility",
    image: "https://openaccess-cdn.clevelandart.org/1963.500/1963.500_web.jpg",
  },
  {
    title: "Portrait of Charlotte and Sarah Carteret-Hardy",
    image: "https://openaccess-cdn.clevelandart.org/1942.642/1942.642_web.jpg",
  },
  {
    title: "Lucy",
    image: "https://openaccess-cdn.clevelandart.org/2021.148/2021.148_web.jpg",
  },
  {
    title: "Catherine Greene",
    image: "https://openaccess-cdn.clevelandart.org/1915.527/1915.527_web.jpg",
  },
  {
    title: "Landscape with Gentle Peaks",
    image: "https://openaccess-cdn.clevelandart.org/1978.7/1978.7_web.jpg",
  },
  {
    title: "The Mass of Saint Gregory",
    image: "https://openaccess-cdn.clevelandart.org/1952.112/1952.112_web.jpg",
  },
  {
    title: "St. Matthew",
    image: "https://openaccess-cdn.clevelandart.org/2017.4/2017.4_web.jpg",
  },
  {
    title: "Welcoming Descent of Jizō",
    image: "https://openaccess-cdn.clevelandart.org/1983.75/1983.75_web.jpg",
  },
  {
    title: "Marie-Yolande de Fitz-James",
    image: "https://openaccess-cdn.clevelandart.org/1982.256/1982.256_web.jpg",
  },
  {
    title: "Esther, Ahasuerus, and Haman",
    image: "https://openaccess-cdn.clevelandart.org/1964.153/1964.153_web.jpg",
  },
  {
    title: "St. Catherine of Siena and the Beggar",
    image: "https://openaccess-cdn.clevelandart.org/1966.3/1966.3_web.jpg",
  },
  {
    title: "Susanna Anderson Rose",
    image: "https://openaccess-cdn.clevelandart.org/1979.81/1979.81_web.jpg",
  },
  {
    title: "Lion on the Watch",
    image: "https://openaccess-cdn.clevelandart.org/1945.25/1945.25_web.jpg",
  },
  {
    title: "The Brierwood Pipe",
    image: "https://openaccess-cdn.clevelandart.org/1944.524/1944.524_web.jpg",
  },
  {
    title: "Fish and Rocks",
    image: "https://openaccess-cdn.clevelandart.org/1953.247/1953.247_web.jpg",
  },
  {
    title: "The Poet Lin Bu Wandering in the Moonlight",
    image: "https://openaccess-cdn.clevelandart.org/1954.582/1954.582_web.jpg",
  },
  {
    title: "The Apple Seller",
    image: "https://openaccess-cdn.clevelandart.org/1958.47/1958.47_web.jpg",
  },
  {
    title: "Nine Songs",
    image: "https://openaccess-cdn.clevelandart.org/1959.138/1959.138_web.jpg",
  },
  {
    title: "Arrival of the \"Southern Barbarians\"",
    image: "https://openaccess-cdn.clevelandart.org/1960.193/1960.193_web.jpg",
  },
  {
    title: "Predella Panel from an Altarpiece: St. Catherine of Siena Invested with the Dominican Habit",
    image: "https://openaccess-cdn.clevelandart.org/1966.2/1966.2_web.jpg",
  },
  {
    title: "Bamboo and Rocks in Clearing Skies",
    image: "https://openaccess-cdn.clevelandart.org/1958.337/1958.337_web.jpg",
  },
  {
    title: "Storm in the Mountains",
    image: "https://openaccess-cdn.clevelandart.org/1969.52/1969.52_web.jpg",
  },
  {
    title: "Farmer Returning Home in Autumn",
    image: "https://openaccess-cdn.clevelandart.org/1970.77/1970.77_web.jpg",
  },
  {
    title: "Vase of Flowers",
    image: "https://openaccess-cdn.clevelandart.org/1935.233/1935.233_web.jpg",
  },
  {
    title: "Bacchus and Ariadne",
    image: "https://openaccess-cdn.clevelandart.org/2013.51/2013.51_web.jpg",
  },
  {
    title: "Tannhäuser",
    image: "https://openaccess-cdn.clevelandart.org/1916.1038/1916.1038_web.jpg",
  },
  {
    title: "Baron FitzGibbon",
    image: "https://openaccess-cdn.clevelandart.org/1919.910/1919.910_web.jpg",
  },
  {
    title: "Oath of the Peach Garden, from Romance of the Three Kingdoms",
    image: "https://openaccess-cdn.clevelandart.org/1987.35/1987.35_web.jpg",
  },
  {
    title: "The Lantern Night Excursion of Zhong Kui",
    image: "https://openaccess-cdn.clevelandart.org/1961.206/1961.206_web.jpg",
  },
  {
    title: "The Crucifixion",
    image: "https://openaccess-cdn.clevelandart.org/1916.776/1916.776_web.jpg",
  },
  {
    title: "A Eunuch's Dream",
    image: "https://openaccess-cdn.clevelandart.org/1991.173/1991.173_web.jpg",
  },
  {
    title: "Interior of a Synagogue",
    image: "https://openaccess-cdn.clevelandart.org/1930.22/1930.22_web.jpg",
  },
  {
    title: "On a Terrace",
    image: "https://openaccess-cdn.clevelandart.org/1986.68/1986.68_web.jpg",
  },
  {
    title: "River and Mountains on a Clear Autumn Day",
    image: "https://openaccess-cdn.clevelandart.org/1959.46/1959.46_web.jpg",
  },
  {
    title: "The Park-Winter",
    image: "https://openaccess-cdn.clevelandart.org/1923.1339/1923.1339_web.jpg",
  },
  {
    title: "Banks of the Oise at Dawn",
    image: "https://openaccess-cdn.clevelandart.org/2019.18/2019.18_web.jpg",
  },
  {
    title: "Tarquinius Priscus Entering Rome",
    image: "https://openaccess-cdn.clevelandart.org/1942.646/1942.646_web.jpg",
  },
  {
    title: "Scenes of Witchcraft",
    image: "https://openaccess-cdn.clevelandart.org/1977.37/1977.37_web.jpg",
  },
  {
    title: "Study for \"The Bear Hunt\" (for the Alcázar, Madrid)",
    image: "https://openaccess-cdn.clevelandart.org/1983.69/1983.69_web.jpg",
  },
  {
    title: "Seven Leaves from a Manuscript of the Gandavyuha-sutra (Scripture of the Supreme Array)",
    image: "https://openaccess-cdn.clevelandart.org/1955.49/1955.49_web.jpg",
  },
  {
    title: "Album of Seasonal Landscapes, Leaf D (previous leaf 2)",
    image: "https://openaccess-cdn.clevelandart.org/1955.302.2/1955.302.2_web.jpg",
  },
  {
    title: "Album of Seasonal Landscapes, Leaf A (previous leaf 4)",
    image: "https://openaccess-cdn.clevelandart.org/1955.302.4/1955.302.4_web.jpg",
  },
  {
    title: "Album of Seasonal Landscapes, Leaf G (previous leaf 7)",
    image: "https://openaccess-cdn.clevelandart.org/1955.302.7/1955.302.7_web.jpg",
  },
  {
    title: "Album of Seasonal Landscapes, Leaf H (previous leaf 8)",
    image: "https://openaccess-cdn.clevelandart.org/1955.302.8/1955.302.8_web.jpg",
  },
  {
    title: "Processional Cross",
    image: "https://openaccess-cdn.clevelandart.org/1943.280/1943.280_web.jpg",
  },
  {
    title: "Mt. Qingbian",
    image: "https://openaccess-cdn.clevelandart.org/1980.10/1980.10_web.jpg",
  },
  {
    title: "The Lock at Pontoise",
    image: "https://openaccess-cdn.clevelandart.org/1990.7/1990.7_web.jpg",
  },
  {
    title: "Seated Arhat with Two Attendants",
    image: "https://openaccess-cdn.clevelandart.org/1976.91/1976.91_web.jpg",
  },
  {
    title: "Woman Ironing",
    image: "https://openaccess-cdn.clevelandart.org/2020.119/2020.119_web.jpg",
  },
  {
    title: "Still Life",
    image: "https://openaccess-cdn.clevelandart.org/1926.1664/1926.1664_web.jpg",
  },
  {
    title: "Moon Viewing, from The Tale of Heike",
    image: "https://openaccess-cdn.clevelandart.org/1971.233/1971.233_web.jpg",
  },
  {
    title: "Landscape",
    image: "https://openaccess-cdn.clevelandart.org/1963.262/1963.262_web.jpg",
  },
  {
    title: "In the Palace",
    image: "https://openaccess-cdn.clevelandart.org/1976.1/1976.1_web.jpg",
  },
  {
    title: "White Flower",
    image: "https://openaccess-cdn.clevelandart.org/1930.2162/1930.2162_web.jpg",
  },
  {
    title: "Nur Jahan holding a portrait of Emperor Jahangir",
    image: "https://openaccess-cdn.clevelandart.org/2013.325/2013.325_web.jpg",
  },
  {
    title: "English Warship Firing a Salute",
    image: "https://openaccess-cdn.clevelandart.org/1975.80/1975.80_web.jpg",
  },
  {
    title: "Head of Saint John the Baptist",
    image: "https://openaccess-cdn.clevelandart.org/1953.424/1953.424_web.jpg",
  },
  {
    title: "Arhat",
    image: "https://openaccess-cdn.clevelandart.org/1979.71/1979.71_web.jpg",
  },
  {
    title: "Egyptian Family (Sketch for \"The Battle of the Pyramids\")",
    image: "https://openaccess-cdn.clevelandart.org/1972.17.2/1972.17.2_web.jpg",
  },
  {
    title: "The Colonnade of St. Peter's, Rome, during the Conclave",
    image: "https://openaccess-cdn.clevelandart.org/1976.97.1/1976.97.1_web.jpg",
  },
  {
    title: "Rock at Sea",
    image: "https://openaccess-cdn.clevelandart.org/2009.269/2009.269_web.jpg",
  },
  {
    title: "Pine Tree",
    image: "https://openaccess-cdn.clevelandart.org/1982.124/1982.124_web.jpg",
  },
  {
    title: "Raja Dilip Singh of Guler on a dais",
    image: "https://openaccess-cdn.clevelandart.org/1960.49/1960.49_web.jpg",
  },
  {
    title: "Shurpanakha demands vengeance, from the \"Shangri\" Ramayana",
    image: "https://openaccess-cdn.clevelandart.org/2018.107/2018.107_web.jpg",
  },
  {
    title: "Streams and Mountains without End",
    image: "https://openaccess-cdn.clevelandart.org/1953.126/1953.126_web.jpg",
  },
  {
    title: "Portrait of King Louis XIII of France",
    image: "https://openaccess-cdn.clevelandart.org/2003.225/2003.225_web.jpg",
  },
  {
    title: "Funerary Portrait of a Young Girl",
    image: "https://openaccess-cdn.clevelandart.org/1971.137/1971.137_web.jpg",
  },
  {
    title: "Portraits of the Qianlong Emperor and His Twelve Consorts",
    image: "https://openaccess-cdn.clevelandart.org/1969.31/1969.31_web.jpg",
  },
  {
    title: "Mountains of the Immortals",
    image: "https://openaccess-cdn.clevelandart.org/1997.95/1997.95_web.jpg",
  },
  {
    title: "Portrait of an Official",
    image: "https://openaccess-cdn.clevelandart.org/1999.45/1999.45_web.jpg",
  },
  {
    title: "René-Charles Dassy and His Brother Jean-Baptiste-Claude-Amédé Dassy",
    image: "https://openaccess-cdn.clevelandart.org/2000.17/2000.17_web.jpg",
  },
  {
    title: "Horse Stable",
    image: "https://openaccess-cdn.clevelandart.org/1934.373/1934.373_web.jpg",
  },
  {
    title: "Scholar Reclining and Watching Rising Clouds; Poem by Wang Wei",
    image: "https://openaccess-cdn.clevelandart.org/1961.421/1961.421_web.jpg",
  },
  {
    title: "Portrait of the Marquise d'Aguirandes",
    image: "https://openaccess-cdn.clevelandart.org/1942.638/1942.638_web.jpg",
  },
  {
    title: "Study for \"The Martyrdom of Saint Sebastian\" (for the Augustinian monastery at Diessen, Germany)",
    image: "https://openaccess-cdn.clevelandart.org/1946.277/1946.277_web.jpg",
  },
  {
    title: "The Parrot Addresses Khujasta at the Beginning of the Seventh Night, from a Tuti-nama (Tales of a Parrot)",
    image: "https://openaccess-cdn.clevelandart.org/1962.279.43.a/1962.279.43.a_web.jpg",
  },
  {
    title: "The Crucifixion of St. Andrew, with St. Francis and St. Paul below",
    image: "https://openaccess-cdn.clevelandart.org/1966.237.b/1966.237.b_web.jpg",
  },
  {
    title: "The Seine at Bas-Meudon",
    image: "https://openaccess-cdn.clevelandart.org/1993.236/1993.236_web.jpg",
  },
  {
    title: "Beggars and Street Characters",
    image: "https://openaccess-cdn.clevelandart.org/1964.94/1964.94_web.jpg",
  },
  {
    title: "Virgin and Child with Saints and Donors",
    image: "https://openaccess-cdn.clevelandart.org/1942.636/1942.636_web.jpg",
  },
  {
    title: "Card Rack with a Jack of Hearts",
    image: "https://openaccess-cdn.clevelandart.org/1973.30/1973.30_web.jpg",
  },
  {
    title: "Dragon; Tiger",
    image: "https://openaccess-cdn.clevelandart.org/1958.427/1958.427_web.jpg",
  },
  {
    title: "Declaration of Love",
    image: "https://openaccess-cdn.clevelandart.org/1944.86/1944.86_web.jpg",
  },
  {
    title: "Saint Mary Magdalen",
    image: "https://openaccess-cdn.clevelandart.org/1988.108/1988.108_web.jpg",
  },
  {
    title: "Saint John the Baptist",
    image: "https://openaccess-cdn.clevelandart.org/1951.354/1951.354_web.jpg",
  },
  {
    title: "Stefanina Primicile Carafa, Marchioness of Cicerale and Duchess of Montejasi",
    image: "https://openaccess-cdn.clevelandart.org/1958.28/1958.28_web.jpg",
  },
  {
    title: "Mlle. Alexandrine-Julie de la Boutraye",
    image: "https://openaccess-cdn.clevelandart.org/1962.3/1962.3_web.jpg",
  },
  {
    title: "Scholar Reclining and Watching Rising Clouds, Poem by Wang Wei",
    image: "https://openaccess-cdn.clevelandart.org/1961.421.1/1961.421.1_web.jpg",
  },
  {
    title: "The Orange Christ",
    image: "https://openaccess-cdn.clevelandart.org/2020.107/2020.107_web.jpg",
  },
  {
    title: "Young Woman Arranging Her Earring",
    image: "https://openaccess-cdn.clevelandart.org/1951.324/1951.324_web.jpg",
  },
  {
    title: "Still Life with Herrings",
    image: "https://openaccess-cdn.clevelandart.org/1974.1/1974.1_web.jpg",
  },
  {
    title: "Salome with the Head of Saint John the Baptist",
    image: "https://openaccess-cdn.clevelandart.org/1975.79/1975.79_web.jpg",
  },
  {
    title: "Saint Paul the Hermit",
    image: "https://openaccess-cdn.clevelandart.org/1969.109/1969.109_web.jpg",
  },
  {
    title: "Snow Landscape",
    image: "https://openaccess-cdn.clevelandart.org/1997.111/1997.111_web.jpg",
  },
  {
    title: "A Builder of Boats",
    image: "https://openaccess-cdn.clevelandart.org/1972.905/1972.905_web.jpg",
  },
  {
    title: "View of the Gulf of Pozzuoli from Solfatara",
    image: "https://openaccess-cdn.clevelandart.org/1983.14/1983.14_web.jpg",
  },
  {
    title: "Conversation in Autumn",
    image: "https://openaccess-cdn.clevelandart.org/1954.263/1954.263_web.jpg",
  },
  {
    title: "The Ninth Day Literary Gathering at Xing’an [Temporary Retreat]",
    image: "https://openaccess-cdn.clevelandart.org/1979.72/1979.72_web.jpg",
  },
  {
    title: "Saints Presenting a Devout Woman to the Virgin and Child",
    image: "https://openaccess-cdn.clevelandart.org/1982.36/1982.36_web.jpg",
  },
  {
    title: "Self-Portrait",
    image: "https://openaccess-cdn.clevelandart.org/1937.575/1937.575_web.jpg",
  },
  {
    title: "Triptych with the Adoration of the Magi",
    image: "https://openaccess-cdn.clevelandart.org/1941.68/1941.68_web.jpg",
  },
  {
    title: "Operating on Guan Yu's Arm",
    image: "https://openaccess-cdn.clevelandart.org/1998.178/1998.178_web.jpg",
  },
  {
    title: "A Calm Watering Place--Extensive and Boundless Scene with Cattle",
    image: "https://openaccess-cdn.clevelandart.org/1994.106/1994.106_web.jpg",
  },
  {
    title: "Bodhidharma Crossing the Yangzi on a Reed",
    image: "https://openaccess-cdn.clevelandart.org/1964.44/1964.44_web.jpg",
  },
  {
    title: "Shakyamuni Emerging from the Mountains",
    image: "https://openaccess-cdn.clevelandart.org/1970.2/1970.2_web.jpg",
  },
  {
    title: "The Venetian Girl",
    image: "https://openaccess-cdn.clevelandart.org/1922.173/1922.173_web.jpg",
  },
  {
    title: "Tiger",
    image: "https://openaccess-cdn.clevelandart.org/1958.427.2/1958.427.2_web.jpg",
  },
  {
    title: "Allegorical Figure",
    image: "https://openaccess-cdn.clevelandart.org/1929.133/1929.133_web.jpg",
  },
  {
    title: "Calvary with a Carthusian Monk",
    image: "https://openaccess-cdn.clevelandart.org/1964.454/1964.454_web.jpg",
  },
  {
    title: "The Resurrection of Christ",
    image: "https://openaccess-cdn.clevelandart.org/2017.192/2017.192_web.jpg",
  },
  {
    title: "July",
    image: "https://openaccess-cdn.clevelandart.org/1966.387/1966.387_web.jpg",
  },
  {
    title: "Three Horses and Four Grooms",
    image: "https://openaccess-cdn.clevelandart.org/1960.181/1960.181_web.jpg",
  },
  {
    title: "The Autumn Hunt",
    image: "https://openaccess-cdn.clevelandart.org/1930.314/1930.314_web.jpg",
  },
  {
    title: "Dragon and Tiger",
    image: "https://openaccess-cdn.clevelandart.org/1959.136/1959.136_web.jpg",
  },
  {
    title: "The Artist in His Room at the Villa Medici, Rome",
    image: "https://openaccess-cdn.clevelandart.org/1978.51/1978.51_web.jpg",
  },
  {
    title: "Christ in a Mandorla, with the instruments of the Passion, with St. Stephen and St. Lawrence below",
    image: "https://openaccess-cdn.clevelandart.org/1966.237.c/1966.237.c_web.jpg",
  },
  {
    title: "The Monastery of San Pedro (Our Lady of the Snows)",
    image: "https://openaccess-cdn.clevelandart.org/1915.684/1915.684_web.jpg",
  },
  {
    title: "Christ on the Cross",
    image: "https://openaccess-cdn.clevelandart.org/1952.222/1952.222_web.jpg",
  },
  {
    title: "Swift Bull from the Ten Swift Bulls",
    image: "https://openaccess-cdn.clevelandart.org/1952.286/1952.286_web.jpg",
  },
  {
    title: "Portrait of a Government Official",
    image: "https://openaccess-cdn.clevelandart.org/2020.259/2020.259_web.jpg",
  },
  {
    title: "Dragon",
    image: "https://openaccess-cdn.clevelandart.org/1958.427.1/1958.427.1_web.jpg",
  },
  {
    title: "Thirty-Six Poetic Immortals",
    image: "https://openaccess-cdn.clevelandart.org/1960.183/1960.183_web.jpg",
  },
  {
    title: "Bamboo in the Wind",
    image: "https://openaccess-cdn.clevelandart.org/1953.246/1953.246_web.jpg",
  },
  {
    title: "Bamboo, Rocks and Lonely Orchids",
    image: "https://openaccess-cdn.clevelandart.org/1963.515/1963.515_web.jpg",
  },
  {
    title: "Interior",
    image: "https://openaccess-cdn.clevelandart.org/1982.6/1982.6_web.jpg",
  },
  {
    title: "Buddhist Retreat by Stream and Mountains",
    image: "https://openaccess-cdn.clevelandart.org/1959.348/1959.348_web.jpg",
  },
  {
    title: "Still Life with Meat, Fish, Vegetables, and Fruit",
    image: "https://openaccess-cdn.clevelandart.org/2018.258/2018.258_web.jpg",
  },
  {
    title: "The Pink Cloud",
    image: "https://openaccess-cdn.clevelandart.org/2020.106/2020.106_web.jpg",
  },
  {
    title: "Willows and Farmhouse at Sainte-Catherine-lès-Arras",
    image: "https://openaccess-cdn.clevelandart.org/1916.1047/1916.1047_web.jpg",
  },
  {
    title: "Charity",
    image: "https://openaccess-cdn.clevelandart.org/1994.10/1994.10_web.jpg",
  },
  {
    title: "Cottages in a Misty Grove in Autumn",
    image: "https://openaccess-cdn.clevelandart.org/1963.588/1963.588_web.jpg",
  },
  {
    title: "Orchid Blossoms",
    image: "https://openaccess-cdn.clevelandart.org/1915.461/1915.461_web.jpg",
  },
  {
    title: "Clouds and Waves at the Wu Gorge",
    image: "https://openaccess-cdn.clevelandart.org/1968.213/1968.213_web.jpg",
  },
  {
    title: "The Five Hundred Arhats",
    image: "https://openaccess-cdn.clevelandart.org/1971.16/1971.16_web.jpg",
  },
  {
    title: "Tiger Family",
    image: "https://openaccess-cdn.clevelandart.org/1997.148/1997.148_web.jpg",
  },
  {
    title: "Prince and ascetics, from the Late Shah Jahan Album",
    image: "https://openaccess-cdn.clevelandart.org/1971.79/1971.79_web.jpg",
  },
  {
    title: "The Bird's Nest Patriarch",
    image: "https://openaccess-cdn.clevelandart.org/1958.289/1958.289_web.jpg",
  },
  {
    title: "Wisdom and Destiny",
    image: "https://openaccess-cdn.clevelandart.org/1928.580/1928.580_web.jpg",
  },
  {
    title: "Prater Landscape",
    image: "https://openaccess-cdn.clevelandart.org/1983.155/1983.155_web.jpg",
  },
  {
    title: "The Life of Buckingham",
    image: "https://openaccess-cdn.clevelandart.org/2014.373/2014.373_web.jpg",
  },
  {
    title: "Diptych with the Passion of Christ",
    image: "https://openaccess-cdn.clevelandart.org/1945.115/1945.115_web.jpg",
  },
  {
    title: "Portrait of a Woman, possibly Elizabeth Boothby",
    image: "https://openaccess-cdn.clevelandart.org/1973.185/1973.185_web.jpg",
  },
  {
    title: "The Farm at the Entrance of the Wood",
    image: "https://openaccess-cdn.clevelandart.org/1978.73/1978.73_web.jpg",
  },
  {
    title: "Hunting Scene",
    image: "https://openaccess-cdn.clevelandart.org/1993.239/1993.239_web.jpg",
  },
  {
    title: "Portrait of Hugh Hope",
    image: "https://openaccess-cdn.clevelandart.org/1991.133/1991.133_web.jpg",
  },
  {
    title: "Harbor of Boston, with the City in the Distance",
    image: "https://openaccess-cdn.clevelandart.org/2004.35/2004.35_web.jpg",
  },
  {
    title: "The Beach at Sumiyoshi from the Tales of Ise",
    image: "https://openaccess-cdn.clevelandart.org/1951.398/1951.398_web.jpg",
  },
  {
    title: "The Bistro",
    image: "https://openaccess-cdn.clevelandart.org/2020.114/2020.114_web.jpg",
  },
  {
    title: "The Ghost Story",
    image: "https://openaccess-cdn.clevelandart.org/1923.416/1923.416_web.jpg",
  },
  {
    title: "Pure Tones among Hills and Waters",
    image: "https://openaccess-cdn.clevelandart.org/1954.262/1954.262_web.jpg",
  },
  {
    title: "Mary Holland Bacher",
    image: "https://openaccess-cdn.clevelandart.org/1966.388/1966.388_web.jpg",
  },
  {
    title: "Paintings after Ancient Masters",
    image: "https://openaccess-cdn.clevelandart.org/1979.27/1979.27_web.jpg",
  },
  {
    title: "Susuki Grass",
    image: "https://openaccess-cdn.clevelandart.org/1984.43/1984.43_web.jpg",
  },
  {
    title: "Haverstraw Bay",
    image: "https://openaccess-cdn.clevelandart.org/2011.43/2011.43_web.jpg",
  },
  {
    title: "Landscape with Peasants Dancing",
    image: "https://openaccess-cdn.clevelandart.org/1996.271/1996.271_web.jpg",
  },
  {
    title: "Portrait of Don Juan Antonio Cuervo",
    image: "https://openaccess-cdn.clevelandart.org/1943.90/1943.90_web.jpg",
  },
  {
    title: "The Story of Fukutomi",
    image: "https://openaccess-cdn.clevelandart.org/1953.358/1953.358_web.jpg",
  },
  {
    title: "The Boatyard",
    image: "https://openaccess-cdn.clevelandart.org/1977.123/1977.123_web.jpg",
  },
  {
    title: "Portrait of Genio C. Scott",
    image: "https://openaccess-cdn.clevelandart.org/1965.475/1965.475_web.jpg",
  },
  {
    title: "The Doge's Palace, Venice",
    image: "https://openaccess-cdn.clevelandart.org/1985.56/1985.56_web.jpg",
  },
  {
    title: "Royal women shooting from a pavilion",
    image: "https://openaccess-cdn.clevelandart.org/1955.48/1955.48_web.jpg",
  },
  {
    title: "Horse Race at the Kamo Shrine",
    image: "https://openaccess-cdn.clevelandart.org/1976.95/1976.95_web.jpg",
  },
  {
    title: "Madonna and Child",
    image: "https://openaccess-cdn.clevelandart.org/1952.110/1952.110_web.jpg",
  },
  {
    title: "Portrait of Anne Louis Goislard de Montsabert, Comte de Richbourg-le-Toureil",
    image: "https://openaccess-cdn.clevelandart.org/1970.31/1970.31_web.jpg",
  },
  {
    title: "Shah Jahan",
    image: "https://openaccess-cdn.clevelandart.org/1920.1969/1920.1969_web.jpg",
  },
  {
    title: "Portrait of Juan Maria Osorio",
    image: "https://openaccess-cdn.clevelandart.org/1946.431/1946.431_web.jpg",
  },
  {
    title: "Chrysanthemums and Cabbage",
    image: "https://openaccess-cdn.clevelandart.org/1960.40/1960.40_web.jpg",
  },
  {
    title: "Portrait of Count Jean-Antoine Chaptal",
    image: "https://openaccess-cdn.clevelandart.org/1964.54/1964.54_web.jpg",
  },
  {
    title: "Rishyashringa addresses the courtesans, from the \"Shangri\" Ramayana",
    image: "https://openaccess-cdn.clevelandart.org/2002.6/2002.6_web.jpg",
  },
  {
    title: "The Contemplator",
    image: "https://openaccess-cdn.clevelandart.org/1946.283/1946.283_web.jpg",
  },
  {
    title: "The Beach at Deauville",
    image: "https://openaccess-cdn.clevelandart.org/1946.71/1946.71_web.jpg",
  },
  {
    title: "King Bana in his court, from an Usha-Aniruddha",
    image: "https://openaccess-cdn.clevelandart.org/1986.62/1986.62_web.jpg",
  },
  {
    title: "Snowscape with Figures",
    image: "https://openaccess-cdn.clevelandart.org/1987.187/1987.187_web.jpg",
  },
  {
    title: "A View of Naples through a Window",
    image: "https://openaccess-cdn.clevelandart.org/1994.198/1994.198_web.jpg",
  },
  {
    title: "Symbolic Head",
    image: "https://openaccess-cdn.clevelandart.org/1988.91/1988.91_web.jpg",
  },
  {
    title: "The Pie Wagon",
    image: "https://openaccess-cdn.clevelandart.org/1953.371/1953.371_web.jpg",
  },
  {
    title: "River Village: Fisherman's Joy",
    image: "https://openaccess-cdn.clevelandart.org/1978.66/1978.66_web.jpg",
  },
  {
    title: "General Jean-Baptiste Kléber and Egyptian Family (Sketches for \"The Battle of the Pyramids\")",
    image: "https://openaccess-cdn.clevelandart.org/1972.17/1972.17_web.jpg",
  },
  {
    title: "Saint Ambrose",
    image: "https://openaccess-cdn.clevelandart.org/1969.23/1969.23_web.jpg",
  },
  {
    title: "Preparation for the Crucifixion",
    image: "https://openaccess-cdn.clevelandart.org/1916.816/1916.816_web.jpg",
  },
  {
    title: "One Hundred Children at Play",
    image: "https://openaccess-cdn.clevelandart.org/1961.261/1961.261_web.jpg",
  },
  {
    title: "Bodhidharma Meditating Facing a Cliff",
    image: "https://openaccess-cdn.clevelandart.org/1972.41/1972.41_web.jpg",
  },
  {
    title: "Quails and Sparrows in an Autumn Scene",
    image: "https://openaccess-cdn.clevelandart.org/1997.91/1997.91_web.jpg",
  },
  {
    title: "Landscape after Guo Zhongshu",
    image: "https://openaccess-cdn.clevelandart.org/1955.36/1955.36_web.jpg",
  },
  {
    title: "Tall Bamboo and Distant Mountains, after Wang Meng",
    image: "https://openaccess-cdn.clevelandart.org/1953.629/1953.629_web.jpg",
  },
  {
    title: "Fishermen-Hermits in Stream and Mountain",
    image: "https://openaccess-cdn.clevelandart.org/1997.93/1997.93_web.jpg",
  },
  {
    title: "Streams and Mountains",
    image: "https://openaccess-cdn.clevelandart.org/1997.96/1997.96_web.jpg",
  },
  {
    title: "Piazza San Marco, Venice",
    image: "https://openaccess-cdn.clevelandart.org/1962.169/1962.169_web.jpg",
  },
  {
    title: "Portrait of Pope Sixtus IV della Rovere",
    image: "https://openaccess-cdn.clevelandart.org/1916.815/1916.815_web.jpg",
  },
  {
    title: "Birds and Flowers",
    image: "https://openaccess-cdn.clevelandart.org/1948.128/1948.128_web.jpg",
  },
  {
    title: "Outskirts of Paris",
    image: "https://openaccess-cdn.clevelandart.org/1929.951/1929.951_web.jpg",
  },
  {
    title: "River Village in a Rainstorm",
    image: "https://openaccess-cdn.clevelandart.org/1970.76/1970.76_web.jpg",
  },
  {
    title: "Portrait of a Woman, probably Aeltje Dircksdr. Pater",
    image: "https://openaccess-cdn.clevelandart.org/1948.137/1948.137_web.jpg",
  },
  {
    title: "Ancestor Group Portrait",
    image: "https://openaccess-cdn.clevelandart.org/2019.82/2019.82_web.jpg",
  },
  {
    title: "The Triumph of the Church",
    image: "https://openaccess-cdn.clevelandart.org/1916.1037/1916.1037_web.jpg",
  },
  {
    title: "A Prunus in the Moonlight",
    image: "https://openaccess-cdn.clevelandart.org/1974.26/1974.26_web.jpg",
  },
  {
    title: "Madame Lerolle",
    image: "https://openaccess-cdn.clevelandart.org/1969.54/1969.54_web.jpg",
  },
  {
    title: "St. Francis Kneeling before Christ on the Cross",
    image: "https://openaccess-cdn.clevelandart.org/1962.36/1962.36_web.jpg",
  },
  {
    title: "Saint-Mammès, Loing Canal",
    image: "https://openaccess-cdn.clevelandart.org/1961.262/1961.262_web.jpg",
  },
  {
    title: "Shri Raga, from a Ragamala",
    image: "https://openaccess-cdn.clevelandart.org/1931.451/1931.451_web.jpg",
  },
  {
    title: "Garden for Solitary Enjoyment",
    image: "https://openaccess-cdn.clevelandart.org/1978.67/1978.67_web.jpg",
  },
  {
    title: "King Dasharatha confers with Kaikeyi, from the “Shangri” Ramayana",
    image: "https://openaccess-cdn.clevelandart.org/1996.361/1996.361_web.jpg",
  },
  {
    title: "Aurora and Cephalus",
    image: "https://openaccess-cdn.clevelandart.org/2002.101/2002.101_web.jpg",
  },
  {
    title: "Krishna celebrates Holi",
    image: "https://openaccess-cdn.clevelandart.org/2018.104/2018.104_web.jpg",
  },
  {
    title: "Heroine with attendant and a pair of deer",
    image: "https://openaccess-cdn.clevelandart.org/2018.108/2018.108_web.jpg",
  },
  {
    title: "Descent of the Ganges",
    image: "https://openaccess-cdn.clevelandart.org/2018.111/2018.111_web.jpg",
  },
  {
    title: "Breton Landscape",
    image: "https://openaccess-cdn.clevelandart.org/2020.117/2020.117_web.jpg",
  },
  {
    title: "Mandala of the Three Shrines at Kumano",
    image: "https://openaccess-cdn.clevelandart.org/1953.16/1953.16_web.jpg",
  },
  {
    title: "Lady Xuanwen Giving Instruction on the Rites of Zhou",
    image: "https://openaccess-cdn.clevelandart.org/1961.89/1961.89_web.jpg",
  },
  {
    title: "Baptism of Christ",
    image: "https://openaccess-cdn.clevelandart.org/1950.400/1950.400_web.jpg",
  },
  {
    title: "Hampstead Heath, Looking Toward Harrow",
    image: "https://openaccess-cdn.clevelandart.org/1916.1027/1916.1027_web.jpg",
  },
  {
    title: "Still Life with Sweets",
    image: "https://openaccess-cdn.clevelandart.org/1980.6/1980.6_web.jpg",
  },
  {
    title: "Winter and Summer Flowers",
    image: "https://openaccess-cdn.clevelandart.org/1987.40/1987.40_web.jpg",
  },
  {
    title: "Ruins of an Ancient City",
    image: "https://openaccess-cdn.clevelandart.org/1981.13/1981.13_web.jpg",
  },
  {
    title: "Pine Wind from Myriad Villages",
    image: "https://openaccess-cdn.clevelandart.org/1954.584/1954.584_web.jpg",
  },
  {
    title: "Ink Flowers",
    image: "https://openaccess-cdn.clevelandart.org/1967.36/1967.36_web.jpg",
  },
  {
    title: "Alamshah cleaving asunder the chain of the wheel, from volume 11 of a Hamza-nama (Adventures of Hamza)",
    image: "https://openaccess-cdn.clevelandart.org/1976.74/1976.74_web.jpg",
  },
  {
    title: "Morning Sun over Heavenly Citadel Peak",
    image: "https://openaccess-cdn.clevelandart.org/1965.28/1965.28_web.jpg",
  },
  {
    title: "Portrait of Ōzora Buzaemon",
    image: "https://openaccess-cdn.clevelandart.org/1980.177/1980.177_web.jpg",
  },
  {
    title: "Still-Life with Crayfish, Oysters, and Fruit",
    image: "https://openaccess-cdn.clevelandart.org/2008.290/2008.290_web.jpg",
  },
  {
    title: "Woman Meditating",
    image: "https://openaccess-cdn.clevelandart.org/1949.189/1949.189_web.jpg",
  },
  {
    title: "Drying the Linen, or Moonrise at the Priory",
    image: "https://openaccess-cdn.clevelandart.org/2020.109/2020.109_web.jpg",
  },
  {
    title: "Xu Jingyang Moving His Family",
    image: "https://openaccess-cdn.clevelandart.org/1961.90/1961.90_web.jpg",
  },
  {
    title: "Zhao Mengfu Writing the Heart (Hridaya) Sutra in Exchange for Tea",
    image: "https://openaccess-cdn.clevelandart.org/1963.102/1963.102_web.jpg",
  },
  {
    title: "The Knickknack Peddler",
    image: "https://openaccess-cdn.clevelandart.org/1963.582/1963.582_web.jpg",
  },
  {
    title: "Shakyamuni with the Sixteen Benevolent Deities",
    image: "https://openaccess-cdn.clevelandart.org/1941.279/1941.279_web.jpg",
  },
  {
    title: "Shamsa (sunburst) with portrait of Aurangzeb (1618–1707), from the Emperor's Album (the Kevorkian Album)",
    image: "https://openaccess-cdn.clevelandart.org/2013.331/2013.331_web.jpg",
  },
  {
    title: "Bathers Playing with a Crab",
    image: "https://openaccess-cdn.clevelandart.org/1939.269/1939.269_web.jpg",
  },
  {
    title: "Portrait of An Qi",
    image: "https://openaccess-cdn.clevelandart.org/1971.17/1971.17_web.jpg",
  },
  {
    title: "Portrait of Priest Dazhi (1048–1116), Master of Law",
    image: "https://openaccess-cdn.clevelandart.org/1974.29/1974.29_web.jpg",
  },
  {
    title: "Raja Sansar Chand attacking Kangra Fort",
    image: "https://openaccess-cdn.clevelandart.org/2018.120/2018.120_web.jpg",
  },
  {
    title: "Krishna and Balarama touching the feet of Vasudeva and Devaki, from the “Vertical” Bhagavata Purana",
    image: "https://openaccess-cdn.clevelandart.org/2018.85/2018.85_web.jpg",
  },
  {
    title: "Taking of the toll, Dana-Lila",
    image: "https://openaccess-cdn.clevelandart.org/2018.86/2018.86_web.jpg",
  },
  {
    title: "Sindhu (Saindhava) Ragaputra of Shri Raga, from a Ragamala",
    image: "https://openaccess-cdn.clevelandart.org/2018.90/2018.90_web.jpg",
  },
  {
    title: "Adoration of young Krishna",
    image: "https://openaccess-cdn.clevelandart.org/2018.97/2018.97_web.jpg",
  },
  {
    title: "Feige Waterfall (Feigefossen), Lysterfjord, Norway",
    image: "https://openaccess-cdn.clevelandart.org/2019.76/2019.76_web.jpg",
  },
  {
    title: "Dream Journey among Rivers and Mountains, no. 90",
    image: "https://openaccess-cdn.clevelandart.org/1960.182/1960.182_web.jpg",
  },
  {
    title: "Jain Ascetic Walking Along a Riverbank",
    image: "https://openaccess-cdn.clevelandart.org/1967.244/1967.244_web.jpg",
  },
  {
    title: "Tuti-Nama (Tales of a Parrot)",
    image: "https://openaccess-cdn.clevelandart.org/1962.279/1962.279_web.jpg",
  },
  {
    title: "White Pansy",
    image: "https://openaccess-cdn.clevelandart.org/1987.139/1987.139_web.jpg",
  },
  {
    title: "Fishmarket",
    image: "https://openaccess-cdn.clevelandart.org/2020.113/2020.113_web.jpg",
  },
  {
    title: "The Parrot Addresses Khujasta at the Beginning of the Tenth Night, from a Tuti-nama (Tales of a Parrot)",
    image: "https://openaccess-cdn.clevelandart.org/1962.279.80.b/1962.279.80.b_web.jpg",
  },
  {
    title: "The Triumph of Neptune and Amphitrite",
    image: "https://openaccess-cdn.clevelandart.org/1982.245/1982.245_web.jpg",
  },
  {
    title: "The Judgment of Paris",
    image: "https://openaccess-cdn.clevelandart.org/1984.14/1984.14_web.jpg",
  },
  {
    title: "Cordelia Parting from her Sisters",
    image: "https://openaccess-cdn.clevelandart.org/2013.261/2013.261_web.jpg",
  },
  {
    title: "Strandgade, Sunshine",
    image: "https://openaccess-cdn.clevelandart.org/2023.38/2023.38_web.jpg",
  },
  {
    title: "Cho Hyun-myeong from Punhyang Cho Family",
    image: "https://openaccess-cdn.clevelandart.org/1999.15.1/1999.15.1_web.jpg",
  },
  {
    title: "The Apple Gatherers",
    image: "https://openaccess-cdn.clevelandart.org/1926.485/1926.485_web.jpg",
  },
  {
    title: "Boy in a Blue Coat",
    image: "https://openaccess-cdn.clevelandart.org/1938.45/1938.45_web.jpg",
  },
  {
    title: "Birds Gather under the Spring Willow",
    image: "https://openaccess-cdn.clevelandart.org/1974.31/1974.31_web.jpg",
  },
  {
    title: "Study for \"Bathers at Asnières\"",
    image: "https://openaccess-cdn.clevelandart.org/1958.51/1958.51_web.jpg",
  },
  {
    title: "The Hermit Xu You Resting by a Stream",
    image: "https://openaccess-cdn.clevelandart.org/1974.45/1974.45_web.jpg",
  },
  {
    title: "Boats at Anchor on West Lake at the City Gate",
    image: "https://openaccess-cdn.clevelandart.org/1978.68/1978.68_web.jpg",
  },
  {
    title: "Winter Landscape",
    image: "https://openaccess-cdn.clevelandart.org/1986.45/1986.45_web.jpg",
  },
  {
    title: "The Garden of the Rousseau Family",
    image: "https://openaccess-cdn.clevelandart.org/1950.582/1950.582_web.jpg",
  },
  {
    title: "Seven Jeweled Mountain",
    image: "https://openaccess-cdn.clevelandart.org/1989.6/1989.6_web.jpg",
  },
  {
    title: "Landscape with Venus and Adonis",
    image: "https://openaccess-cdn.clevelandart.org/1962.293/1962.293_web.jpg",
  },
  {
    title: "Abraham Welcoming the Three Angels",
    image: "https://openaccess-cdn.clevelandart.org/1952.235.4/1952.235.4_web.jpg",
  },
  {
    title: "The Vision of Saint Jerome",
    image: "https://openaccess-cdn.clevelandart.org/1951.334/1951.334_web.jpg",
  },
  {
    title: "Tobias and the Angel",
    image: "https://openaccess-cdn.clevelandart.org/1952.235.2/1952.235.2_web.jpg",
  },
  {
    title: "The Nativity",
    image: "https://openaccess-cdn.clevelandart.org/1958.320/1958.320_web.jpg",
  },
  {
    title: "View of Emmerich",
    image: "https://openaccess-cdn.clevelandart.org/1959.351/1959.351_web.jpg",
  },
  {
    title: "A Winter Sky",
    image: "https://openaccess-cdn.clevelandart.org/1927.388/1927.388_web.jpg",
  },
  {
    title: "Lormes: Goat-Girl Sitting Beside a Stream in a Forest",
    image: "https://openaccess-cdn.clevelandart.org/1962.35/1962.35_web.jpg",
  },
  {
    title: "Chrysanthemums by a Stream",
    image: "https://openaccess-cdn.clevelandart.org/1958.206/1958.206_web.jpg",
  },
  {
    title: "Man, Buffalo, and Calf",
    image: "https://openaccess-cdn.clevelandart.org/1960.41/1960.41_web.jpg",
  },
  {
    title: "A royal ram with a gold chain",
    image: "https://openaccess-cdn.clevelandart.org/2013.298/2013.298_web.jpg",
  },
  {
    title: "Portrait of Elizabeth Spiegel",
    image: "https://openaccess-cdn.clevelandart.org/1975.81/1975.81_web.jpg",
  },
  {
    title: "Sanjo Kantaro II in the Role of Urashima Taro",
    image: "https://openaccess-cdn.clevelandart.org/1961.41/1961.41_web.jpg",
  },
  {
    title: "Hell Courtesan",
    image: "https://openaccess-cdn.clevelandart.org/1985.268/1985.268_web.jpg",
  },
  {
    title: "Venus Discovering the Dead Adonis",
    image: "https://openaccess-cdn.clevelandart.org/1965.19/1965.19_web.jpg",
  },
  {
    title: "Medicine Master Buddha and the Twelve Divine Generals",
    image: "https://openaccess-cdn.clevelandart.org/1938.422/1938.422_web.jpg",
  },
  {
    title: "Still Life with Rayfish",
    image: "https://openaccess-cdn.clevelandart.org/1951.357/1951.357_web.jpg",
  },
  {
    title: "White-Robed Guanyin",
    image: "https://openaccess-cdn.clevelandart.org/1978.47.1/1978.47.1_web.jpg",
  },
  {
    title: "Shamsher Sen of Mandi with a youth",
    image: "https://openaccess-cdn.clevelandart.org/2012.302/2012.302_web.jpg",
  },
  {
    title: "Samantabhadra",
    image: "https://openaccess-cdn.clevelandart.org/1962.161/1962.161_web.jpg",
  },
  {
    title: "Paulownias and Chrysanthemums",
    image: "https://openaccess-cdn.clevelandart.org/1964.386/1964.386_web.jpg",
  },
  {
    title: "Corn Fields",
    image: "https://openaccess-cdn.clevelandart.org/2020.115/2020.115_web.jpg",
  },
  {
    title: "Barbarian Royalty Worshiping the Buddha",
    image: "https://openaccess-cdn.clevelandart.org/1957.358/1957.358_web.jpg",
  },
  {
    title: "Landscape of the Four Seasons",
    image: "https://openaccess-cdn.clevelandart.org/1976.92/1976.92_web.jpg",
  },
  {
    title: "Perseus's Last Duty",
    image: "https://openaccess-cdn.clevelandart.org/2013.7/2013.7_web.jpg",
  },
  {
    title: "Virgin and Child in a Landscape",
    image: "https://openaccess-cdn.clevelandart.org/1972.47/1972.47_web.jpg",
  },
  {
    title: "Royal Women Celebrating Diwali",
    image: "https://openaccess-cdn.clevelandart.org/1971.82/1971.82_web.jpg",
  },
  {
    title: "Saint Nicholas of Bari",
    image: "https://openaccess-cdn.clevelandart.org/1952.111/1952.111_web.jpg",
  },
  {
    title: "The Circus",
    image: "https://openaccess-cdn.clevelandart.org/1958.56/1958.56_web.jpg",
  },
  {
    title: "Tantric Buddha Vairochana as Vajrasattva",
    image: "https://openaccess-cdn.clevelandart.org/1989.104/1989.104_web.jpg",
  },
  {
    title: "Landscape with Saint John the Baptist",
    image: "https://openaccess-cdn.clevelandart.org/1967.20/1967.20_web.jpg",
  },
  {
    title: "Zhongli Quan Crossing the Ocean",
    image: "https://openaccess-cdn.clevelandart.org/1976.13/1976.13_web.jpg",
  },
  {
    title: "Eagle on a Tree Trunk",
    image: "https://openaccess-cdn.clevelandart.org/1977.31/1977.31_web.jpg",
  },
  {
    title: "Scenes from Essays in Idleness",
    image: "https://openaccess-cdn.clevelandart.org/1971.43/1971.43_web.jpg",
  },
  {
    title: "John the Baptist being carried to Zacharias",
    image: "https://openaccess-cdn.clevelandart.org/1944.91/1944.91_web.jpg",
  },
  {
    title: "Lily and Butterflies",
    image: "https://openaccess-cdn.clevelandart.org/1971.132/1971.132_web.jpg",
  },
  {
    title: "Self-Portrait in Rome",
    image: "https://openaccess-cdn.clevelandart.org/1977.171/1977.171_web.jpg",
  },
  {
    title: "Herbaceous Peony",
    image: "https://openaccess-cdn.clevelandart.org/1967.192/1967.192_web.jpg",
  },
  {
    title: "Purification at the Orchid Pavilion",
    image: "https://openaccess-cdn.clevelandart.org/1977.47/1977.47_web.jpg",
  },
  {
    title: "The Four Accomplishments",
    image: "https://openaccess-cdn.clevelandart.org/1979.46/1979.46_web.jpg",
  },
  {
    title: "Hunting with falcons in a landscape (recto)",
    image: "https://openaccess-cdn.clevelandart.org/2013.292.a/2013.292.a_web.jpg",
  },
  {
    title: "Posthumous portrait of Raja Chhatar Singh of Chamba smoking a hookah",
    image: "https://openaccess-cdn.clevelandart.org/2018.109/2018.109_web.jpg",
  },
  {
    title: "Stone sculptures in a Shiva temple",
    image: "https://openaccess-cdn.clevelandart.org/2018.112/2018.112_web.jpg",
  },
  {
    title: "A group of women in ecstasy before Madhava, folio 4 from a Madhavanala-Kamakandala",
    image: "https://openaccess-cdn.clevelandart.org/2018.91/2018.91_web.jpg",
  },
  {
    title: "King Vikrama summons Madhava, folio 15 from a Madhavanala-Kamakandala",
    image: "https://openaccess-cdn.clevelandart.org/2018.92/2018.92_web.jpg",
  },
  {
    title: "Madhava plays his vina before five women drawing water from a well, folio 3 from a Madhavanala-Kamakandala",
    image: "https://openaccess-cdn.clevelandart.org/2018.93/2018.93_web.jpg",
  },
  {
    title: "Kamakandala dies on hearing the news of Madhava’s death, folio 19 from a Madhavanala-Kamakandala of Alam",
    image: "https://openaccess-cdn.clevelandart.org/2018.94/2018.94_web.jpg",
  },
  {
    title: "Madhava faces a man holding a scale, folio 1 from a Madhavanala-Kamakandala",
    image: "https://openaccess-cdn.clevelandart.org/2018.95/2018.95_web.jpg",
  },
  {
    title: "Goddess standing on a mountaintop",
    image: "https://openaccess-cdn.clevelandart.org/2018.98/2018.98_web.jpg",
  },
  {
    title: "Battle between monkeys and demons, from the “Shangri” Ramayana",
    image: "https://openaccess-cdn.clevelandart.org/2025.9/2025.9_web.jpg",
  },
  {
    title: "Portrait Study of Seigen",
    image: "https://openaccess-cdn.clevelandart.org/1982.55/1982.55_web.jpg",
  },
  {
    title: "Peafowl and Phoenixes",
    image: "https://openaccess-cdn.clevelandart.org/1986.2/1986.2_web.jpg",
  },
  {
    title: "View of Lake Pepin, Minnesota",
    image: "https://openaccess-cdn.clevelandart.org/1947.198/1947.198_web.jpg",
  },
  {
    title: "The Immaculate Conception",
    image: "https://openaccess-cdn.clevelandart.org/1959.189/1959.189_web.jpg",
  },
  {
    title: "Panel from a Triptych: The Archangel Michael",
    image: "https://openaccess-cdn.clevelandart.org/1964.150.1/1964.150.1_web.jpg",
  },
  {
    title: "Antelope and deer hunt",
    image: "https://openaccess-cdn.clevelandart.org/1939.66/1939.66_web.jpg",
  },
  {
    title: "Roses in a Vase",
    image: "https://openaccess-cdn.clevelandart.org/1941.14/1941.14_web.jpg",
  },
  {
    title: "The Secret Five Bodhisattvas (Gohimitsu Bosatsu)",
    image: "https://openaccess-cdn.clevelandart.org/1961.423/1961.423_web.jpg",
  },
  {
    title: "Manjushri",
    image: "https://openaccess-cdn.clevelandart.org/1989.67/1989.67_web.jpg",
  },
  {
    title: "The Haven of the Peach-Blossom Spring",
    image: "https://openaccess-cdn.clevelandart.org/1952.283/1952.283_web.jpg",
  },
  {
    title: "The Bodhisattvas of the Ten Stages in Attaining the Most Perfect Knowledge",
    image: "https://openaccess-cdn.clevelandart.org/1973.70.1/1973.70.1_web.jpg",
  },
  {
    title: "The Eight Hosts of Deva, Naga, and Yakshi",
    image: "https://openaccess-cdn.clevelandart.org/1973.70.2/1973.70.2_web.jpg",
  },
  {
    title: "Saint Catherine and Saint Barbara (pair)",
    image: "https://openaccess-cdn.clevelandart.org/1942.633/1942.633_web.jpg",
  },
  {
    title: "Music and Dance and Cupids in Conspiracy",
    image: "https://openaccess-cdn.clevelandart.org/1948.181/1948.181_web.jpg",
  },
  {
    title: "Study for \"The Presentation of Christ in the Temple\" (for Saint Ulrich, Vienna)",
    image: "https://openaccess-cdn.clevelandart.org/1963.326/1963.326_web.jpg",
  },
  {
    title: "Holy Family with the Mystic Marriage of Saint Catherine",
    image: "https://openaccess-cdn.clevelandart.org/2019.168/2019.168_web.jpg",
  },
  {
    title: "Paintings after Ancient Masters: Volume 1",
    image: "https://openaccess-cdn.clevelandart.org/1979.27.1/1979.27.1_web.jpg",
  },
  {
    title: "Paintings after Ancient Masters: Volume 2",
    image: "https://openaccess-cdn.clevelandart.org/1979.27.2/1979.27.2_web.jpg",
  },
  {
    title: "Reminiscences of Qinhuai River",
    image: "https://openaccess-cdn.clevelandart.org/1966.31.8/1966.31.8_web.jpg",
  },
  {
    title: "Saint Barbara",
    image: "https://openaccess-cdn.clevelandart.org/1942.633.2/1942.633.2_web.jpg",
  },
  {
    title: "Portrait of a Woman as Saint Catherine",
    image: "https://openaccess-cdn.clevelandart.org/1916.825/1916.825_web.jpg",
  },
  {
    title: "The Second Coming of the Fifth Patriarch",
    image: "https://openaccess-cdn.clevelandart.org/1967.211/1967.211_web.jpg",
  },
  {
    title: "Nine Dragon Pool",
    image: "https://openaccess-cdn.clevelandart.org/1979.50/1979.50_web.jpg",
  },
  {
    title: "The heroine who waits anxiously for her absent lover (Utka Nayika)",
    image: "https://openaccess-cdn.clevelandart.org/1932.118/1932.118_web.jpg",
  },
  {
    title: "Panel from a Triptych: St. Anthony Abbot",
    image: "https://openaccess-cdn.clevelandart.org/1964.150.2/1964.150.2_web.jpg",
  },
  {
    title: "Portrait of a Woman, Possibly a Novice of San Secondo",
    image: "https://openaccess-cdn.clevelandart.org/1976.9/1976.9_web.jpg",
  },
  {
    title: "Gathering of Poetic Immortals with Poem Drafts",
    image: "https://openaccess-cdn.clevelandart.org/1983.188/1983.188_web.jpg",
  },
  {
    title: "A Boy in a Red-lined Cloak",
    image: "https://openaccess-cdn.clevelandart.org/1942.49/1942.49_web.jpg",
  },
  {
    title: "Saying Farewell at Xunyang (Song of the Pipa)",
    image: "https://openaccess-cdn.clevelandart.org/1954.581/1954.581_web.jpg",
  },
  {
    title: "Sericulture (The Process of Making Silk)",
    image: "https://openaccess-cdn.clevelandart.org/1977.5/1977.5_web.jpg",
  },
  {
    title: "Listening to the Qin (Zither)",
    image: "https://openaccess-cdn.clevelandart.org/1983.85/1983.85_web.jpg",
  },
  {
    title: "Writing Books under the Pine Trees",
    image: "https://openaccess-cdn.clevelandart.org/1997.94/1997.94_web.jpg",
  },
  {
    title: "Night Café",
    image: "https://openaccess-cdn.clevelandart.org/2006.139/2006.139_web.jpg",
  },
  {
    title: "Sita asks Rama to fetch the golden deer, from the “Shangri” Ramayana",
    image: "https://openaccess-cdn.clevelandart.org/2025.7/2025.7_web.jpg",
  },
  {
    title: "Hanuman spies Sita in the Ashoka Grove, from the “Shangri” Ramayana",
    image: "https://openaccess-cdn.clevelandart.org/2025.8/2025.8_web.jpg",
  },
  {
    title: "At the Café",
    image: "https://openaccess-cdn.clevelandart.org/1958.57/1958.57_web.jpg",
  },
  {
    title: "Zhi and Xu's Pure Conversation",
    image: "https://openaccess-cdn.clevelandart.org/1970.128/1970.128_web.jpg",
  },
  {
    title: "Squirrels on the Chestnut Tree",
    image: "https://openaccess-cdn.clevelandart.org/1979.70/1979.70_web.jpg",
  },
  {
    title: "Saint Catherine",
    image: "https://openaccess-cdn.clevelandart.org/1942.633.1/1942.633.1_web.jpg",
  },
  {
    title: "West Lake",
    image: "https://openaccess-cdn.clevelandart.org/1970.69/1970.69_web.jpg",
  },
  {
    title: "Violin Player with a Wine Glass",
    image: "https://openaccess-cdn.clevelandart.org/2018.25/2018.25_web.jpg",
  },
  {
    title: "Portrait of Renoir",
    image: "https://openaccess-cdn.clevelandart.org/2021.134/2021.134_web.jpg",
  },
  {
    title: "The Lovers",
    image: "https://openaccess-cdn.clevelandart.org/2022.140/2022.140_web.jpg",
  },
  {
    title: "Buddha's Conversion of Five Bhiksu",
    image: "https://openaccess-cdn.clevelandart.org/1997.92/1997.92_web.jpg",
  },
  {
    title: "Virgin and Child, with Saints Anthony Abbott, Mark, Severino, and Sebastian",
    image: "https://openaccess-cdn.clevelandart.org/1916.800/1916.800_web.jpg",
  },
  {
    title: "Gazing at a Waterfall",
    image: "https://openaccess-cdn.clevelandart.org/1977.30/1977.30_web.jpg",
  },
  {
    title: "Procession or Pardon at Perros-Guirec",
    image: "https://openaccess-cdn.clevelandart.org/2020.108/2020.108_web.jpg",
  },
  {
    title: "A floral fantasy of animals and birds (Waq-waq)",
    image: "https://openaccess-cdn.clevelandart.org/2013.319/2013.319_web.jpg",
  },
  {
    title: "The Coronation of the Virgin with the Trinity",
    image: "https://openaccess-cdn.clevelandart.org/1947.208/1947.208_web.jpg",
  },
  {
    title: "Autumn, a Wood Path",
    image: "https://openaccess-cdn.clevelandart.org/1922.220/1922.220_web.jpg",
  },
  {
    title: "Hindola Raga",
    image: "https://openaccess-cdn.clevelandart.org/1975.9/1975.9_web.jpg",
  },
  {
    title: "Scene from the Tale of the Wisteria Robe",
    image: "https://openaccess-cdn.clevelandart.org/1985.132/1985.132_web.jpg",
  },
  {
    title: "The Umbrian Valley, Italy",
    image: "https://openaccess-cdn.clevelandart.org/1915.88/1915.88_web.jpg",
  },
  {
    title: "A Young, Angry Heroine, Folio 28 from a Rasamanjari",
    image: "https://openaccess-cdn.clevelandart.org/1960.52/1960.52_web.jpg",
  },
  {
    title: "Distant View of Tiger Hill from the Canal Mooring, from Twelve Views of Tiger Hill, Suzhou",
    image: "https://openaccess-cdn.clevelandart.org/1964.371.1/1964.371.1_web.jpg",
  },
  {
    title: "Kasuga Deer Mandala",
    image: "https://openaccess-cdn.clevelandart.org/1988.19/1988.19_web.jpg",
  },
  {
    title: "Hall of Lofty Pines",
    image: "https://openaccess-cdn.clevelandart.org/1997.106/1997.106_web.jpg",
  },
  {
    title: "Queen Mab's Cave",
    image: "https://openaccess-cdn.clevelandart.org/1916.1036/1916.1036_web.jpg",
  },
  {
    title: "Plum Tree",
    image: "https://openaccess-cdn.clevelandart.org/1983.10/1983.10_web.jpg",
  },
  {
    title: "Sophie Guillemette, Grand Duchess of Baden (1801-1865)",
    image: "https://openaccess-cdn.clevelandart.org/1979.43/1979.43_web.jpg",
  },
  {
    title: "Manuscript of the Perfection of Wisdom in Eight Thousand Lines (Ashtasahasrika Prajnaparamita-sutra)",
    image: "https://openaccess-cdn.clevelandart.org/1938.301/1938.301_web.jpg",
  },
  {
    title: "The Fourth King of Hell",
    image: "https://openaccess-cdn.clevelandart.org/2019.224/2019.224_web.jpg",
  },
  {
    title: "Cupids in Conspiracy",
    image: "https://openaccess-cdn.clevelandart.org/1948.181.2/1948.181.2_web.jpg",
  },
  {
    title: "Gooseberries on a Table",
    image: "https://openaccess-cdn.clevelandart.org/1987.32/1987.32_web.jpg",
  },
  {
    title: "Drinking in the Moonlight",
    image: "https://openaccess-cdn.clevelandart.org/1997.89/1997.89_web.jpg",
  },
  {
    title: "Eight Views of the Xiao and Xiang Rivers",
    image: "https://openaccess-cdn.clevelandart.org/1960.284/1960.284_web.jpg",
  },
  {
    title: "Puppies, Sparrows, and Chrysanthemums",
    image: "https://openaccess-cdn.clevelandart.org/1970.71/1970.71_web.jpg",
  },
  {
    title: "Krishna sporting with the gopis in the Jumna River, from a Bhagavata Purana",
    image: "https://openaccess-cdn.clevelandart.org/1971.171/1971.171_web.jpg",
  },
  {
    title: "Five Pine Trees",
    image: "https://openaccess-cdn.clevelandart.org/1976.112/1976.112_web.jpg",
  },
  {
    title: "The Birth of Krishna, from a Sursagar of Surdas (Indian, c. 1480–1580)",
    image: "https://openaccess-cdn.clevelandart.org/1984.65/1984.65_web.jpg",
  },
  {
    title: "Iconographical Sketch (Zuzō) for the \"Benevolent Kings Sutra Mandala\"",
    image: "https://openaccess-cdn.clevelandart.org/1987.39/1987.39_web.jpg",
  },
  {
    title: "Old Woman",
    image: "https://openaccess-cdn.clevelandart.org/1988.94/1988.94_web.jpg",
  },
  {
    title: "Evening Mood-Lidingö",
    image: "https://openaccess-cdn.clevelandart.org/2005.4/2005.4_web.jpg",
  },
  {
    title: "Landscape Album in Various Styles: The Stream of Wuling",
    image: "https://openaccess-cdn.clevelandart.org/1955.37.4/1955.37.4_web.jpg",
  },
  {
    title: "A Vignette of Life on the Frontier",
    image: "https://openaccess-cdn.clevelandart.org/1979.18/1979.18_web.jpg",
  },
  {
    title: "Shakyamuni with two attendants",
    image: "https://openaccess-cdn.clevelandart.org/1982.25/1982.25_web.jpg",
  },
  {
    title: "Gathering of Otsu-e Subjects",
    image: "https://openaccess-cdn.clevelandart.org/1982.9/1982.9_web.jpg",
  },
  {
    title: "Lotuses, Insects, and Birds",
    image: "https://openaccess-cdn.clevelandart.org/1985.18/1985.18_web.jpg",
  },
  {
    title: "A Beauty",
    image: "https://openaccess-cdn.clevelandart.org/1985.271/1985.271_web.jpg",
  },
  {
    title: "Welcoming Descent of Amida with Twenty-Five Bodhisattvas",
    image: "https://openaccess-cdn.clevelandart.org/2025.138/2025.138_web.jpg",
  },
  {
    title: "Landscape at Saint-André, Near Marseilles",
    image: "https://openaccess-cdn.clevelandart.org/1980.265/1980.265_web.jpg",
  },
  {
    title: "Cleansing Medicinal Herbs in the Stream on a Spring Day",
    image: "https://openaccess-cdn.clevelandart.org/2000.69/2000.69_web.jpg",
  },
  {
    title: "Hare, Spoonbill, and Fish",
    image: "https://openaccess-cdn.clevelandart.org/1916.1001/1916.1001_web.jpg",
  },
  {
    title: "Album of Seasonal Landscapes, Leaf E (previous leaf 3)",
    image: "https://openaccess-cdn.clevelandart.org/1955.302.3/1955.302.3_web.jpg",
  },
  {
    title: "The Risen Christ Appearing to the Virgin",
    image: "https://openaccess-cdn.clevelandart.org/1971.63/1971.63_web.jpg",
  },
  {
    title: "Portrait of Jean Léglise, Merchant, Mayor of Saint-Martin-de-Seignanx",
    image: "https://openaccess-cdn.clevelandart.org/1980.232/1980.232_web.jpg",
  },
  {
    title: "Village Festival",
    image: "https://openaccess-cdn.clevelandart.org/1977.122/1977.122_web.jpg",
  },
  {
    title: "Paintings after Ancient Masters: A Lohan [after Guanxiu]",
    image: "https://openaccess-cdn.clevelandart.org/1979.27.2.13/1979.27.2.13_web.jpg",
  },
  {
    title: "Boats at Berck-sur-Mer",
    image: "https://openaccess-cdn.clevelandart.org/1940.534/1940.534_web.jpg",
  },
  {
    title: "The Death of Sophonisba",
    image: "https://openaccess-cdn.clevelandart.org/2008.71/2008.71_web.jpg",
  },
  {
    title: "Rooster",
    image: "https://openaccess-cdn.clevelandart.org/1944.501/1944.501_web.jpg",
  },
  {
    title: "Playing the Qin in a Secluded Valley",
    image: "https://openaccess-cdn.clevelandart.org/1969.60/1969.60_web.jpg",
  },
  {
    title: "Mountain View and Blue Water",
    image: "https://openaccess-cdn.clevelandart.org/1985.250/1985.250_web.jpg",
  },
  {
    title: "The Thousand Acres of Clouds, from Twelve Views of Tiger Hill, Suzhou",
    image: "https://openaccess-cdn.clevelandart.org/1964.371.9/1964.371.9_web.jpg",
  },
  {
    title: "Still Life with Fish, Bread, and Kettle",
    image: "https://openaccess-cdn.clevelandart.org/1983.97/1983.97_web.jpg",
  },
  {
    title: "Bejeweled Buddha Preaching",
    image: "https://openaccess-cdn.clevelandart.org/1973.69/1973.69_web.jpg",
  },
  {
    title: "Album of Seasonal Landscapes, Leaf B (previous leaf 1)",
    image: "https://openaccess-cdn.clevelandart.org/1955.302.1/1955.302.1_web.jpg",
  },
  {
    title: "Album of Seasonal Landscapes, Leaf F (previous leaf 5)",
    image: "https://openaccess-cdn.clevelandart.org/1955.302.5/1955.302.5_web.jpg",
  },
  {
    title: "Album of Seasonal Landscapes, Leaf C (previous leaf 6)",
    image: "https://openaccess-cdn.clevelandart.org/1955.302.6/1955.302.6_web.jpg",
  },
  {
    title: "The Five Sages Terrace, from Twelve Views of Tiger Hill, Suzhou",
    image: "https://openaccess-cdn.clevelandart.org/1964.371.8/1964.371.8_web.jpg",
  },
  {
    title: "Leaping Carp",
    image: "https://openaccess-cdn.clevelandart.org/1977.55/1977.55_web.jpg",
  },
  {
    title: "\"Seventh Month\" from the Odes of Bin",
    image: "https://openaccess-cdn.clevelandart.org/1980.187/1980.187_web.jpg",
  },
  {
    title: "Portraits of Two Lineage Masters of the Kagyu Order: Phagmo Drupa (1110–1170) and Tashipel (1142–1210)",
    image: "https://openaccess-cdn.clevelandart.org/1987.146/1987.146_web.jpg",
  },
  {
    title: "The Angels Appearing to Abraham",
    image: "https://openaccess-cdn.clevelandart.org/1952.235.3/1952.235.3_web.jpg",
  },
  {
    title: "Portrait of Infante Don Luis de Borbon",
    image: "https://openaccess-cdn.clevelandart.org/1966.14/1966.14_web.jpg",
  },
  {
    title: "Spring Landscape",
    image: "https://openaccess-cdn.clevelandart.org/1966.367/1966.367_web.jpg",
  },
  {
    title: "Landscapes in Various Styles after Old Masters",
    image: "https://openaccess-cdn.clevelandart.org/1962.157/1962.157_web.jpg",
  },
  {
    title: "An Elderly Man in Prayer",
    image: "https://openaccess-cdn.clevelandart.org/1967.16/1967.16_web.jpg",
  },
  {
    title: "Christ with Joseph of Arimathea",
    image: "https://openaccess-cdn.clevelandart.org/1952.512/1952.512_web.jpg",
  },
  {
    title: "View of Bordeaux, from the Quai des Chartrons",
    image: "https://openaccess-cdn.clevelandart.org/1986.73/1986.73_web.jpg",
  },
  {
    title: "Thirty-Six Poetic Immortals of the Buddhist Clergy",
    image: "https://openaccess-cdn.clevelandart.org/1985.88/1985.88_web.jpg",
  },
  {
    title: "Sketch of Ibaraki-dōji",
    image: "https://openaccess-cdn.clevelandart.org/1990.6/1990.6_web.jpg",
  },
  {
    title: "Leisure Enough to Spare",
    image: "https://openaccess-cdn.clevelandart.org/1954.791/1954.791_web.jpg",
  },
  {
    title: "Ivy Lane",
    image: "https://openaccess-cdn.clevelandart.org/1954.127/1954.127_web.jpg",
  },
  {
    title: "Portrait of Maria Kitscher, Frau von Freyberg",
    image: "https://openaccess-cdn.clevelandart.org/1944.88/1944.88_web.jpg",
  },
  {
    title: "Nine-Dragon Falls",
    image: "https://openaccess-cdn.clevelandart.org/1915.215/1915.215_web.jpg",
  },
  {
    title: "Shakyamuni under the Bodhi Tree",
    image: "https://openaccess-cdn.clevelandart.org/1971.68/1971.68_web.jpg",
  },
  {
    title: "Glaucus and Nydia",
    image: "https://openaccess-cdn.clevelandart.org/1977.128/1977.128_web.jpg",
  },
  {
    title: "Orchid Pavilion Gathering",
    image: "https://openaccess-cdn.clevelandart.org/1979.53/1979.53_web.jpg",
  },
  {
    title: "Orchard",
    image: "https://openaccess-cdn.clevelandart.org/2020.120/2020.120_web.jpg",
  },
  {
    title: "A Royal Picnic on a Terrace",
    image: "https://openaccess-cdn.clevelandart.org/1920.1966/1920.1966_web.jpg",
  },
  {
    title: "Expulsion of Adam and Eve",
    image: "https://openaccess-cdn.clevelandart.org/1980.258/1980.258_web.jpg",
  },
  {
    title: "Bacchante on a Panther",
    image: "https://openaccess-cdn.clevelandart.org/1980.238.2/1980.238.2_web.jpg",
  },
  {
    title: "Portrait of the Great Master Yeongwoldang Eungjin",
    image: "https://openaccess-cdn.clevelandart.org/1990.16/1990.16_web.jpg",
  },
  {
    title: "Amitābha Triad",
    image: "https://openaccess-cdn.clevelandart.org/1961.135/1961.135_web.jpg",
  },
  {
    title: "Lovers Embracing",
    image: "https://openaccess-cdn.clevelandart.org/1971.91/1971.91_web.jpg",
  },
  {
    title: "Buddha Amitābha with Two Attending Bodhisattvas",
    image: "https://openaccess-cdn.clevelandart.org/1974.35/1974.35_web.jpg",
  },
  {
    title: "Landscape with a Distant Temple",
    image: "https://openaccess-cdn.clevelandart.org/1979.52/1979.52_web.jpg",
  },
  {
    title: "Plum Blossoms and Peonies",
    image: "https://openaccess-cdn.clevelandart.org/1980.13/1980.13_web.jpg",
  },
  {
    title: "Album of Miscellaneous Subjects, Leaf 9",
    image: "https://openaccess-cdn.clevelandart.org/1975.22.9/1975.22.9_web.jpg",
  },
  {
    title: "Tao Yuanming's Return Home",
    image: "https://openaccess-cdn.clevelandart.org/1982.152/1982.152_web.jpg",
  },
  {
    title: "A mendicant bowing before a holy man, from the Prince Salim Album",
    image: "https://openaccess-cdn.clevelandart.org/2013.296/2013.296_web.jpg",
  },
  {
    title: "Luncheon (Annette and Her Grandmother)",
    image: "https://openaccess-cdn.clevelandart.org/2020.118/2020.118_web.jpg",
  },
  {
    title: "Painting of One Hundred Themes",
    image: "https://openaccess-cdn.clevelandart.org/1998.286/1998.286_web.jpg",
  },
  {
    title: "Shakyamuni Triad: Buddha Attended by Manjushri and Samantabhadra",
    image: "https://openaccess-cdn.clevelandart.org/2009.342/2009.342_web.jpg",
  },
  {
    title: "The Furnace",
    image: "https://openaccess-cdn.clevelandart.org/2013.66/2013.66_web.jpg",
  },
  {
    title: "Happy Forest, from Water Margin",
    image: "https://openaccess-cdn.clevelandart.org/1986.95/1986.95_web.jpg",
  },
  {
    title: "The Virgin and Child Appearing to Saint Francis of Assisi",
    image: "https://openaccess-cdn.clevelandart.org/1966.125/1966.125_web.jpg",
  },
  {
    title: "Apple Blossoms",
    image: "https://openaccess-cdn.clevelandart.org/1915.687/1915.687_web.jpg",
  },
  {
    title: "Shakyamuni Triad: Buddha Attended by Manjushri and Samantabhadra (Bodhisattva with Lion)",
    image: "https://openaccess-cdn.clevelandart.org/2009.342.1/2009.342.1_web.jpg",
  },
  {
    title: "Shakyamuni Triad: Buddha Attended by Manjushri and Samantabhadra (Buddha)",
    image: "https://openaccess-cdn.clevelandart.org/2009.342.2/2009.342.2_web.jpg",
  },
  {
    title: "Shakyamuni Triad: Buddha Attended by Manjushri and Samantabhadra (Bodhisattva with Elephant)",
    image: "https://openaccess-cdn.clevelandart.org/2009.342.3/2009.342.3_web.jpg",
  },
  {
    title: "A Bishop Saint with a Donor (Saint Louis of Toulouse?)",
    image: "https://openaccess-cdn.clevelandart.org/1927.197/1927.197_web.jpg",
  },
  {
    title: "Fountain of Venus",
    image: "https://openaccess-cdn.clevelandart.org/1979.55/1979.55_web.jpg",
  },
  {
    title: "Princes hunting in a rocky landscape",
    image: "https://openaccess-cdn.clevelandart.org/1940.1197/1940.1197_web.jpg",
  },
  {
    title: "Gunakali Ragini",
    image: "https://openaccess-cdn.clevelandart.org/1954.261/1954.261_web.jpg",
  },
  {
    title: "Scenes from the Tales of Ise",
    image: "https://openaccess-cdn.clevelandart.org/1969.127/1969.127_web.jpg",
  },
  {
    title: "Monju with Five Hair Knots",
    image: "https://openaccess-cdn.clevelandart.org/1971.21/1971.21_web.jpg",
  },
  {
    title: "Grotesque Dancers Performing",
    image: "https://openaccess-cdn.clevelandart.org/1971.88/1971.88_web.jpg",
  },
  {
    title: "Album of Miscellaneous Subjects, Leaf 2",
    image: "https://openaccess-cdn.clevelandart.org/1975.22.2/1975.22.2_web.jpg",
  },
  {
    title: "Album of Miscellaneous Subjects, Leaf 8",
    image: "https://openaccess-cdn.clevelandart.org/1975.22.8/1975.22.8_web.jpg",
  },
  {
    title: "Bird on a Flowering Branch",
    image: "https://openaccess-cdn.clevelandart.org/1985.371/1985.371_web.jpg",
  },
  {
    title: "Listening to the Wind in the Pines",
    image: "https://openaccess-cdn.clevelandart.org/1985.89/1985.89_web.jpg",
  },
  {
    title: "Eighteen Views of Huzhou",
    image: "https://openaccess-cdn.clevelandart.org/1998.78/1998.78_web.jpg",
  },
  {
    title: "Posthumous portrait of the Mughal emperor Muhammad Shah (reigned 1719–1748) holding a falcon (recto)",
    image: "https://openaccess-cdn.clevelandart.org/2013.347.a/2013.347.a_web.jpg",
  },
  {
    title: "Returning Sails off a Distant Shore, from Eight Views of Xiao-Xiang",
    image: "https://openaccess-cdn.clevelandart.org/2015.589/2015.589_web.jpg",
  },
  {
    title: "Sunset Glow over a Fishing Village, from Eight Views of Xiao-Xiang",
    image: "https://openaccess-cdn.clevelandart.org/2015.590/2015.590_web.jpg",
  },
  {
    title: "Monk Mending Clothes in the Morning Sun (Chōyō Hotetsuzu)",
    image: "https://openaccess-cdn.clevelandart.org/1962.163/1962.163_web.jpg",
  },
  {
    title: "Oval portrait of a woman in a Chaghtai hat",
    image: "https://openaccess-cdn.clevelandart.org/1920.1967/1920.1967_web.jpg",
  },
  {
    title: "Mount Vesuvius at Midnight",
    image: "https://openaccess-cdn.clevelandart.org/1949.541/1949.541_web.jpg",
  },
  {
    title: "Paintings after Ancient Masters: Chrysanthemum and Rock",
    image: "https://openaccess-cdn.clevelandart.org/1979.27.1.9/1979.27.1.9_web.jpg",
  },
  {
    title: "Study of a Reclining Nude",
    image: "https://openaccess-cdn.clevelandart.org/1939.63/1939.63_web.jpg",
  },
  {
    title: "Battle between Manuchihr and Tur, from a Shah-nama (Book of Kings) of Firdausi (Persian, c. 934–1020)",
    image: "https://openaccess-cdn.clevelandart.org/1945.171/1945.171_web.jpg",
  },
  {
    title: "Beneath the Willow",
    image: "https://openaccess-cdn.clevelandart.org/1985.273/1985.273_web.jpg",
  },
  {
    title: "Sakhi persuades Radha to meet Krishna, from a Gita Govinda (Song of the Cowherd) of Jayadeva",
    image: "https://openaccess-cdn.clevelandart.org/1989.334/1989.334_web.jpg",
  },
  {
    title: "Dog Walker",
    image: "https://openaccess-cdn.clevelandart.org/1992.143/1992.143_web.jpg",
  },
  {
    title: "View of Rome",
    image: "https://openaccess-cdn.clevelandart.org/1970.55/1970.55_web.jpg",
  },
  {
    title: "Count Demetrius de Palatiano in Suliot Costume",
    image: "https://openaccess-cdn.clevelandart.org/1973.33/1973.33_web.jpg",
  },
  {
    title: "Rama and Lakshmana Fighting Ravana, from a Dashavatara (Ten Incarnations [of Vishnu]) series",
    image: "https://openaccess-cdn.clevelandart.org/1953.357/1953.357_web.jpg",
  },
  {
    title: "Two nuns teaching lay women, colophon page of folio 167 (recto) from a Kalpa-sutra and Story of Kalakacharya",
    image: "https://openaccess-cdn.clevelandart.org/1971.126.a/1971.126.a_web.jpg",
  },
  {
    title: "Paintings after Ancient Masters: Laozi Riding an Ox",
    image: "https://openaccess-cdn.clevelandart.org/1979.27.1.2/1979.27.1.2_web.jpg",
  },
  {
    title: "Autumn Evening with Full Moon on Musashino Plain",
    image: "https://openaccess-cdn.clevelandart.org/2000.4/2000.4_web.jpg",
  },
  {
    title: "Lineage Portrait of Buddhist Monks",
    image: "https://openaccess-cdn.clevelandart.org/2003.352/2003.352_web.jpg",
  },
  {
    title: "Shah Jahan holding a spinel and a long Deccan sword, from the Late Shah Jahan Album",
    image: "https://openaccess-cdn.clevelandart.org/2013.328/2013.328_web.jpg",
  },
  {
    title: "Pontifical Ceremony in SS. Giovanni e Paolo, Venice, 1782",
    image: "https://openaccess-cdn.clevelandart.org/1949.187.2/1949.187.2_web.jpg",
  },
  {
    title: "The merchant’s daughter meets the gardener, from a Tuti-nama (Tales of a Parrot): Twelfth Night",
    image: "https://openaccess-cdn.clevelandart.org/1962.279.100.b/1962.279.100.b_web.jpg",
  },
  {
    title: "Dog with pups",
    image: "https://openaccess-cdn.clevelandart.org/1969.77/1969.77_web.jpg",
  },
  {
    title: "Girls Spraying Each Other at Holi",
    image: "https://openaccess-cdn.clevelandart.org/1971.83/1971.83_web.jpg",
  },
  {
    title: "The Saltmaker's Story",
    image: "https://openaccess-cdn.clevelandart.org/1972.12/1972.12_web.jpg",
  },
  {
    title: "Still Life with Vegetables, Partridge, and a Jug",
    image: "https://openaccess-cdn.clevelandart.org/1980.242/1980.242_web.jpg",
  },
  {
    title: "Li Tieguai; Liu Haichan",
    image: "https://openaccess-cdn.clevelandart.org/1982.29/1982.29_web.jpg",
  },
  {
    title: "Li Tieguai",
    image: "https://openaccess-cdn.clevelandart.org/1982.29.1/1982.29.1_web.jpg",
  },
  {
    title: "Lady with a Parasol",
    image: "https://openaccess-cdn.clevelandart.org/1985.257/1985.257_web.jpg",
  },
  {
    title: "Raja Sansar Chand of Kangra and courtiers",
    image: "https://openaccess-cdn.clevelandart.org/1986.63/1986.63_web.jpg",
  },
  {
    title: "Bamboo in Moonlight",
    image: "https://openaccess-cdn.clevelandart.org/1987.186/1987.186_web.jpg",
  },
  {
    title: "Tiger Hunt of Ram Singh II",
    image: "https://openaccess-cdn.clevelandart.org/1991.168/1991.168_web.jpg",
  },
  {
    title: "Rana Amar Singh II (reigned 1698–1710) smoking a hookah",
    image: "https://openaccess-cdn.clevelandart.org/1991.170/1991.170_web.jpg",
  },
  {
    title: "The Peaceable Kingdom",
    image: "https://openaccess-cdn.clevelandart.org/1945.38/1945.38_web.jpg",
  },
  {
    title: "A Musical Company",
    image: "https://openaccess-cdn.clevelandart.org/1991.23/1991.23_web.jpg",
  },
  {
    title: "Madame Case",
    image: "https://openaccess-cdn.clevelandart.org/1967.126/1967.126_web.jpg",
  },
  {
    title: "Drawing of an Elephant",
    image: "https://openaccess-cdn.clevelandart.org/1969.65/1969.65_web.jpg",
  },
  {
    title: "Ink Plum",
    image: "https://openaccess-cdn.clevelandart.org/1970.80/1970.80_web.jpg",
  },
  {
    title: "Elephant, Horse, and Hare",
    image: "https://openaccess-cdn.clevelandart.org/1985.71.1/1985.71.1_web.jpg",
  },
  {
    title: "Banana Plants",
    image: "https://openaccess-cdn.clevelandart.org/1985.71.11/1985.71.11_web.jpg",
  },
  {
    title: "Cat and Butterfly",
    image: "https://openaccess-cdn.clevelandart.org/1985.71.5/1985.71.5_web.jpg",
  },
  {
    title: "Su Dongpo",
    image: "https://openaccess-cdn.clevelandart.org/1985.71.6/1985.71.6_web.jpg",
  },
  {
    title: "Poet Fisherman",
    image: "https://openaccess-cdn.clevelandart.org/1990.70/1990.70_web.jpg",
  },
  {
    title: "Painting of One Hundred Themes (obverse)",
    image: "https://openaccess-cdn.clevelandart.org/1998.286.a/1998.286.a_web.jpg",
  },
  {
    title: "Pipa (Loquats)",
    image: "https://openaccess-cdn.clevelandart.org/1999.6/1999.6_web.jpg",
  },
  {
    title: "Flowers and Trees of the Four Seasons",
    image: "https://openaccess-cdn.clevelandart.org/2021.132/2021.132_web.jpg",
  },
  {
    title: "Flowers and Trees of the Four Seasons (right screen)",
    image: "https://openaccess-cdn.clevelandart.org/2021.132.1/2021.132.1_web.jpg",
  },
  {
    title: "General Jean-Baptiste Kléber (Sketch for \"The Battle of the Pyramids\")",
    image: "https://openaccess-cdn.clevelandart.org/1972.17.1/1972.17.1_web.jpg",
  },
  {
    title: "The Grotto of Posillipo",
    image: "https://openaccess-cdn.clevelandart.org/1976.97.2/1976.97.2_web.jpg",
  },
  {
    title: "Hanshan and Shide",
    image: "https://openaccess-cdn.clevelandart.org/1979.49/1979.49_web.jpg",
  },
  {
    title: "Landscape with Fishermen",
    image: "https://openaccess-cdn.clevelandart.org/2015.516/2015.516_web.jpg",
  },
  {
    title: "Mme. Dufresne",
    image: "https://openaccess-cdn.clevelandart.org/1964.292/1964.292_web.jpg",
  },
  {
    title: "The Mountain of Five Cataracts",
    image: "https://openaccess-cdn.clevelandart.org/1966.366/1966.366_web.jpg",
  },
  {
    title: "Funerary Panel of a Man",
    image: "https://openaccess-cdn.clevelandart.org/1971.135/1971.135_web.jpg",
  },
  {
    title: "Still Life with Asparagus",
    image: "https://openaccess-cdn.clevelandart.org/1980.284/1980.284_web.jpg",
  },
  {
    title: "Top cover, from a Manuscript of the Perfection of Wisdom in Eight Thousand Lines (Ashtasahasrika Prajnaparamita-sutra)",
    image: "https://openaccess-cdn.clevelandart.org/1938.301.a/1938.301.a_web.jpg",
  },
  {
    title: "Portrait of a Monk",
    image: "https://openaccess-cdn.clevelandart.org/1942.632/1942.632_web.jpg",
  },
  {
    title: "The Continence of Scipio",
    image: "https://openaccess-cdn.clevelandart.org/1968.207/1968.207_web.jpg",
  },
  {
    title: "The Marriage of Pradyumna and Rukmavati, page from a Bhagavata Purana",
    image: "https://openaccess-cdn.clevelandart.org/1976.26/1976.26_web.jpg",
  },
  {
    title: "A Mounted Prince Hunting Lion in a Rocky Landscape",
    image: "https://openaccess-cdn.clevelandart.org/2013.310/2013.310_web.jpg",
  },
  {
    title: "Sketch for \"The Revolt at Cairo\"",
    image: "https://openaccess-cdn.clevelandart.org/1965.310/1965.310_web.jpg",
  },
  {
    title: "The Woodcutter of Luofu",
    image: "https://openaccess-cdn.clevelandart.org/1964.156/1964.156_web.jpg",
  },
  {
    title: "Album of Daoist and Buddhist Themes: Search the Mountain: Leaf 41",
    image: "https://openaccess-cdn.clevelandart.org/2004.1.41/2004.1.41_web.jpg",
  },
  {
    title: "Orchids and Rocks",
    image: "https://openaccess-cdn.clevelandart.org/2015.138/2015.138_web.jpg",
  },
  {
    title: "Singers",
    image: "https://openaccess-cdn.clevelandart.org/1977.127/1977.127_web.jpg",
  },
  {
    title: "Old Pine Tree",
    image: "https://openaccess-cdn.clevelandart.org/1964.43/1964.43_web.jpg",
  },
  {
    title: "The Tired Gleaner",
    image: "https://openaccess-cdn.clevelandart.org/1915.721/1915.721_web.jpg",
  },
  {
    title: "Bhima’s consultation with the astrologer, from a Nala-Damayanti",
    image: "https://openaccess-cdn.clevelandart.org/1936.684/1936.684_web.jpg",
  },
  {
    title: "Portrait Jewel of Emperor Jahangir",
    image: "https://openaccess-cdn.clevelandart.org/1944.496/1944.496_web.jpg",
  },
  {
    title: "Princess and attendant in trompe l’oeil window",
    image: "https://openaccess-cdn.clevelandart.org/1955.297/1955.297_web.jpg",
  },
  {
    title: "The hunter offers the mother parrot to the king of Kamarupa, from a Tuti-nama (Tales of a Parrot): Fifth Night",
    image: "https://openaccess-cdn.clevelandart.org/1962.279.36.b/1962.279.36.b_web.jpg",
  },
  {
    title: "The Parrot Addresses Khujasta at the Beginning of the Eighth Night, from a Tuti-nama (Tales of a Parrot)",
    image: "https://openaccess-cdn.clevelandart.org/1962.279.51.b/1962.279.51.b_web.jpg",
  },
  {
    title: "Album of Miscellaneous Subjects, Leaf 10",
    image: "https://openaccess-cdn.clevelandart.org/1975.22.10/1975.22.10_web.jpg",
  },
  {
    title: "Album of Miscellaneous Subjects, Leaf 3",
    image: "https://openaccess-cdn.clevelandart.org/1975.22.3/1975.22.3_web.jpg",
  },
  {
    title: "Album of Miscellaneous Subjects, Leaf 4",
    image: "https://openaccess-cdn.clevelandart.org/1975.22.4/1975.22.4_web.jpg",
  },
  {
    title: "Album of Miscellaneous Subjects, Leaf 5",
    image: "https://openaccess-cdn.clevelandart.org/1975.22.5/1975.22.5_web.jpg",
  },
  {
    title: "Album of Miscellaneous Subjects, Leaf 6",
    image: "https://openaccess-cdn.clevelandart.org/1975.22.6/1975.22.6_web.jpg",
  },
  {
    title: "Album of Miscellaneous Subjects, Leaf 7",
    image: "https://openaccess-cdn.clevelandart.org/1975.22.7/1975.22.7_web.jpg",
  },
  {
    title: "Listening to the Qin",
    image: "https://openaccess-cdn.clevelandart.org/1977.199/1977.199_web.jpg",
  },
  {
    title: "Water Village",
    image: "https://openaccess-cdn.clevelandart.org/1985.370/1985.370_web.jpg",
  },
  {
    title: "Landscape with Woodcutters Returning Home",
    image: "https://openaccess-cdn.clevelandart.org/1988.20/1988.20_web.jpg",
  },
  {
    title: "Eva Meurier in a Green Dress",
    image: "https://openaccess-cdn.clevelandart.org/2002.92/2002.92_web.jpg",
  },
  {
    title: "Painting from a Kalpa-sutra: Queen Trishala Reclining",
    image: "https://openaccess-cdn.clevelandart.org/1925.1340/1925.1340_web.jpg",
  },
  {
    title: "Peonies",
    image: "https://openaccess-cdn.clevelandart.org/1964.105/1964.105_web.jpg",
  },
  {
    title: "Krishna Vanquishing the Crane-Demon Bakasura",
    image: "https://openaccess-cdn.clevelandart.org/1966.29/1966.29_web.jpg",
  },
  {
    title: "Emperor Yao Visiting Yu Chonghua",
    image: "https://openaccess-cdn.clevelandart.org/1968.105/1968.105_web.jpg",
  },
  {
    title: "Brahman Rishabhadatta's speech, folio 5 from a Kalpa-sutra",
    image: "https://openaccess-cdn.clevelandart.org/1979.23/1979.23_web.jpg",
  },
  {
    title: "Paintings after Ancient Masters: Portrait of Tao Yuanming",
    image: "https://openaccess-cdn.clevelandart.org/1979.27.1.5/1979.27.1.5_web.jpg",
  },
  {
    title: "Sacrificial Fire, from the \"Tula Ram\" Bhagavata Purana",
    image: "https://openaccess-cdn.clevelandart.org/1990.40/1990.40_web.jpg",
  },
  {
    title: "Madonna and Child Enthroned",
    image: "https://openaccess-cdn.clevelandart.org/1968.206/1968.206_web.jpg",
  },
  {
    title: "The Fall of Simon Magus",
    image: "https://openaccess-cdn.clevelandart.org/1983.217/1983.217_web.jpg",
  },
  {
    title: "Madhu Madhavi Ragini",
    image: "https://openaccess-cdn.clevelandart.org/1925.1336/1925.1336_web.jpg",
  },
  {
    title: "Summer Mountains (after Dong Yuan [active c. 937–75])",
    image: "https://openaccess-cdn.clevelandart.org/1992.1/1992.1_web.jpg",
  },
  {
    title: "Gathering among the Members of Office Censor-General",
    image: "https://openaccess-cdn.clevelandart.org/1997.147/1997.147_web.jpg",
  },
  {
    title: "The Assembly of Tejaprabha Buddha",
    image: "https://openaccess-cdn.clevelandart.org/1998.120/1998.120_web.jpg",
  },
  {
    title: "Herdboys and Buffalo in Landscapes",
    image: "https://openaccess-cdn.clevelandart.org/1999.216/1999.216_web.jpg",
  },
  {
    title: "Layered Peaks and Splashing Waterfall: Portrait of Hua Yan as a Young Man",
    image: "https://openaccess-cdn.clevelandart.org/2001.120/2001.120_web.jpg",
  },
  {
    title: "Descent of the Nine Luminaries and the Seven Stars at Kasuga",
    image: "https://openaccess-cdn.clevelandart.org/2015.63/2015.63_web.jpg",
  },
  {
    title: "Munja-Chaekgeori Screen (Character-Books Screen)",
    image: "https://openaccess-cdn.clevelandart.org/2017.6/2017.6_web.jpg",
  },
  {
    title: "Music and Dance",
    image: "https://openaccess-cdn.clevelandart.org/1948.181.1/1948.181.1_web.jpg",
  },
  {
    title: "Landscape after Ni Zan",
    image: "https://openaccess-cdn.clevelandart.org/1954.583/1954.583_web.jpg",
  },
  {
    title: "The Oath of Abraham’s Servant",
    image: "https://openaccess-cdn.clevelandart.org/1969.1/1969.1_web.jpg",
  },
  {
    title: "The First Adventure of the White Horse, Page from the Khan Khanan's Razm Nama (Book of Wars)",
    image: "https://openaccess-cdn.clevelandart.org/1964.52/1964.52_web.jpg",
  },
  {
    title: "Landscape with Travelers",
    image: "https://openaccess-cdn.clevelandart.org/1916.823/1916.823_web.jpg",
  },
  {
    title: "Beach Scene",
    image: "https://openaccess-cdn.clevelandart.org/1917.63/1917.63_web.jpg",
  },
  {
    title: "Haboku (Flung-ink) Landscape",
    image: "https://openaccess-cdn.clevelandart.org/1976.59/1976.59_web.jpg",
  },
  {
    title: "Funerary Portrait of a Woman",
    image: "https://openaccess-cdn.clevelandart.org/1971.136/1971.136_web.jpg",
  },
  {
    title: "Ramblers over a Winding Stream",
    image: "https://openaccess-cdn.clevelandart.org/1915.536/1915.536_web.jpg",
  },
  {
    title: "Boating in Moonlight",
    image: "https://openaccess-cdn.clevelandart.org/1989.87/1989.87_web.jpg",
  },
  {
    title: "Herdboys and Buffalo in Landscape",
    image: "https://openaccess-cdn.clevelandart.org/1999.216.1/1999.216.1_web.jpg",
  },
  {
    title: "Le Dévouement des Citoyennes de Paris (The Dedication of the Citizens of Paris)",
    image: "https://openaccess-cdn.clevelandart.org/2022.40/2022.40_web.jpg",
  },
  {
    title: "The Old Road to the Sea",
    image: "https://openaccess-cdn.clevelandart.org/1938.333/1938.333_web.jpg",
  },
  {
    title: "Banks of the Seine",
    image: "https://openaccess-cdn.clevelandart.org/1940.540/1940.540_web.jpg",
  },
  {
    title: "Markandeya Viewing Krishna in the Cosmic Ocean",
    image: "https://openaccess-cdn.clevelandart.org/1967.241/1967.241_web.jpg",
  },
  {
    title: "Kakinomoto no Hitomaro",
    image: "https://openaccess-cdn.clevelandart.org/1977.203/1977.203_web.jpg",
  },
  {
    title: "Châteauvieux-sur-Suran",
    image: "https://openaccess-cdn.clevelandart.org/1980.251/1980.251_web.jpg",
  },
  {
    title: "André Bénac",
    image: "https://openaccess-cdn.clevelandart.org/1981.63/1981.63_web.jpg",
  },
  {
    title: "Sylvia Gosse",
    image: "https://openaccess-cdn.clevelandart.org/1982.125/1982.125_web.jpg",
  },
  {
    title: "Liu Haichan",
    image: "https://openaccess-cdn.clevelandart.org/1982.29.2/1982.29.2_web.jpg",
  },
  {
    title: "Augury of the crow (Vasakasajja Nayika)",
    image: "https://openaccess-cdn.clevelandart.org/1989.337/1989.337_web.jpg",
  },
  {
    title: "Geese Returning Home",
    image: "https://openaccess-cdn.clevelandart.org/1993.159/1993.159_web.jpg",
  },
  {
    title: "Grapes",
    image: "https://openaccess-cdn.clevelandart.org/1999.43/1999.43_web.jpg",
  },
  {
    title: "Portrait of Murad Bakhsh (1624–61)",
    image: "https://openaccess-cdn.clevelandart.org/2013.327/2013.327_web.jpg",
  },
  {
    title: "Spring",
    image: "https://openaccess-cdn.clevelandart.org/1951.486/1951.486_web.jpg",
  },
  {
    title: "Kalpa-sutra manuscript with 24 illuminations",
    image: "https://openaccess-cdn.clevelandart.org/1932.119/1932.119_web.jpg",
  },
  {
    title: "The Cliffs at Beg-ar-Fry, Saint-Jean-du-Doigt",
    image: "https://openaccess-cdn.clevelandart.org/1966.382/1966.382_web.jpg",
  },
  {
    title: "Arion on a Sea Horse",
    image: "https://openaccess-cdn.clevelandart.org/1980.238.1/1980.238.1_web.jpg",
  },
  {
    title: "Virgin and Child with a Goldfinch",
    image: "https://openaccess-cdn.clevelandart.org/1980.101/1980.101_web.jpg",
  },
  {
    title: "Herengracht, Amsterdam",
    image: "https://openaccess-cdn.clevelandart.org/1964.419/1964.419_web.jpg",
  },
  {
    title: "Flowering Crab Apple",
    image: "https://openaccess-cdn.clevelandart.org/1997.101/1997.101_web.jpg",
  },
  {
    title: "Portraits of Cho Hyun-myeong and Cho Jae-ho",
    image: "https://openaccess-cdn.clevelandart.org/1999.15/1999.15_web.jpg",
  },
  {
    title: "Cho Jae-ho from Punhyang Cho Family",
    image: "https://openaccess-cdn.clevelandart.org/1999.15.2/1999.15.2_web.jpg",
  },
  {
    title: "Blessed Lord Buddha",
    image: "https://openaccess-cdn.clevelandart.org/1949.152/1949.152_web.jpg",
  },
  {
    title: "Folio 1, from a Great Poem about Twos (Dvyashraya Mahakavya) of Hemachandra with Commentary by Abhayatilaka",
    image: "https://openaccess-cdn.clevelandart.org/1971.130/1971.130_web.jpg",
  },
  {
    title: "Paintings after Ancient Masters: Lotus and Rocks",
    image: "https://openaccess-cdn.clevelandart.org/1979.27.1.6/1979.27.1.6_web.jpg",
  },
  {
    title: "Radha and Krishna meet in the forest during a storm",
    image: "https://openaccess-cdn.clevelandart.org/2013.352/2013.352_web.jpg",
  },
  {
    title: "The Waterfalls at Tivoli",
    image: "https://openaccess-cdn.clevelandart.org/1984.175/1984.175_web.jpg",
  },
  {
    title: "Midnight",
    image: "https://openaccess-cdn.clevelandart.org/1923.602/1923.602_web.jpg",
  },
  {
    title: "The dervish brings the King of Kings before the king of Bahilistan, from a Tuti-nama (Tales of a Parrot): Seventh Night",
    image: "https://openaccess-cdn.clevelandart.org/1962.279.46.a/1962.279.46.a_web.jpg",
  },
  {
    title: "The king of Bahilistan offers his daughter to the King of Kings, from a Tuti-nama (Tales of a Parrot): Seventh Night",
    image: "https://openaccess-cdn.clevelandart.org/1962.279.46.b/1962.279.46.b_web.jpg",
  },
  {
    title: "The Heroine Who is Faithfully Loved: Madhya Svadhinapatika Nayika, from a Rasamanjari of Bhanudatta",
    image: "https://openaccess-cdn.clevelandart.org/1967.239/1967.239_web.jpg",
  },
  {
    title: "Su Wu the Shepherd",
    image: "https://openaccess-cdn.clevelandart.org/1985.71.10/1985.71.10_web.jpg",
  },
  {
    title: "Lu Tong and Servant",
    image: "https://openaccess-cdn.clevelandart.org/1985.71.2/1985.71.2_web.jpg",
  },
  {
    title: "Peaches",
    image: "https://openaccess-cdn.clevelandart.org/1985.71.9/1985.71.9_web.jpg",
  },
  {
    title: "Krishna summoning the cows",
    image: "https://openaccess-cdn.clevelandart.org/1989.339/1989.339_web.jpg",
  },
  {
    title: "Scholar Playing a Qin",
    image: "https://openaccess-cdn.clevelandart.org/1990.69/1990.69_web.jpg",
  },
  {
    title: "Sindhu Raga",
    image: "https://openaccess-cdn.clevelandart.org/2004.110/2004.110_web.jpg",
  },
  {
    title: "Flowers and Trees of the Four Seasons (left screen)",
    image: "https://openaccess-cdn.clevelandart.org/2021.132.2/2021.132.2_web.jpg",
  },
  {
    title: "Landscape after Jing Hao and Guan Tong",
    image: "https://openaccess-cdn.clevelandart.org/1952.588/1952.588_web.jpg",
  },
  {
    title: "Twelve Views of Tiger Hill",
    image: "https://openaccess-cdn.clevelandart.org/1964.371/1964.371_web.jpg",
  },
  {
    title: "Procession of the Magi",
    image: "https://openaccess-cdn.clevelandart.org/1916.790/1916.790_web.jpg",
  },
  {
    title: "Portrait of Duli Xingyi",
    image: "https://openaccess-cdn.clevelandart.org/1965.31/1965.31_web.jpg",
  },
  {
    title: "The Dead Christ with Angels",
    image: "https://openaccess-cdn.clevelandart.org/1916.806/1916.806_web.jpg",
  },
  {
    title: "Pope Pius VI Descending the Throne to Take Leave of the Doge in the Hall of SS. Giovanni e Paolo, 1782",
    image: "https://openaccess-cdn.clevelandart.org/1949.187.1/1949.187.1_web.jpg",
  },
  {
    title: "Portrait of Emperor Alamgir (Aurangzeb)",
    image: "https://openaccess-cdn.clevelandart.org/1944.498/1944.498_web.jpg",
  },
  {
    title: "Shōtoku Taishi at Sixteen",
    image: "https://openaccess-cdn.clevelandart.org/1964.278/1964.278_web.jpg",
  },
  {
    title: "Krishna Stealing Curds",
    image: "https://openaccess-cdn.clevelandart.org/1966.28/1966.28_web.jpg",
  },
  {
    title: "Field with Young Trees in the Foreground",
    image: "https://openaccess-cdn.clevelandart.org/1971.220/1971.220_web.jpg",
  },
  {
    title: "Birth of Mahavira, folio 40 (verso) from a Kalpa-sutra",
    image: "https://openaccess-cdn.clevelandart.org/1976.27.b/1976.27.b_web.jpg",
  },
  {
    title: "Persian calligraphy framed by an ornamental border of flowers, birds, and deer, from the Late Shah Jahan Album",
    image: "https://openaccess-cdn.clevelandart.org/1977.207/1977.207_web.jpg",
  },
  {
    title: "Paintings after Ancient Masters: Landscape in the Style of Ni Zan",
    image: "https://openaccess-cdn.clevelandart.org/1979.27.1.10/1979.27.1.10_web.jpg",
  },
  {
    title: "Paintings after Ancient Masters: Portrait of Zhongqing in a Landscape",
    image: "https://openaccess-cdn.clevelandart.org/1979.27.1.8/1979.27.1.8_web.jpg",
  },
  {
    title: "Capri",
    image: "https://openaccess-cdn.clevelandart.org/1980.5/1980.5_web.jpg",
  },
  {
    title: "Monkeys by a Stream",
    image: "https://openaccess-cdn.clevelandart.org/1985.192/1985.192_web.jpg",
  },
  {
    title: "Rama, Sita, and Lakshmana in the forest",
    image: "https://openaccess-cdn.clevelandart.org/1989.332/1989.332_web.jpg",
  },
  {
    title: "Miracle of the Dragon",
    image: "https://openaccess-cdn.clevelandart.org/1991.9/1991.9_web.jpg",
  },
  {
    title: "Sketch Copy of Natural Disasters, from the Seven Fortunes and Misfortunes",
    image: "https://openaccess-cdn.clevelandart.org/1993.132/1993.132_web.jpg",
  },
  {
    title: "Waves",
    image: "https://openaccess-cdn.clevelandart.org/1999.90/1999.90_web.jpg",
  },
  {
    title: "The game of wolf-running in Tabriz, from an Akbar-nama (Book of Akbar)",
    image: "https://openaccess-cdn.clevelandart.org/2003.38/2003.38_web.jpg",
  },
  {
    title: "Timur distributes gifts from his grandson, the Prince of Multan, from a Zafar-nama (Book of Victories)",
    image: "https://openaccess-cdn.clevelandart.org/2012.301/2012.301_web.jpg",
  },
  {
    title: "Portrait of a kneeling holy man, from the Prince Salim Album",
    image: "https://openaccess-cdn.clevelandart.org/2013.295/2013.295_web.jpg",
  },
  {
    title: "The Holy Family",
    image: "https://openaccess-cdn.clevelandart.org/2013.312/2013.312_web.jpg",
  },
  {
    title: "Portrait of Suraj Singh Rathor, Raja of Marwar and Maternal Uncle of Shah Jahan: A Page from the Prince Khurram Album",
    image: "https://openaccess-cdn.clevelandart.org/2013.313/2013.313_web.jpg",
  },
  {
    title: "A prince celebrating Holi with palace women on a terrace at night (recto); calligraphy of a quatrain (verso)",
    image: "https://openaccess-cdn.clevelandart.org/2013.342/2013.342_web.jpg",
  },
  {
    title: "A prince celebrating Holi with palace women on a terrace at night (recto)",
    image: "https://openaccess-cdn.clevelandart.org/2013.342.a/2013.342.a_web.jpg",
  },
  {
    title: "A night scene of Shiva puja (recto); Calligraphy (verso)",
    image: "https://openaccess-cdn.clevelandart.org/2013.350/2013.350_web.jpg",
  },
  {
    title: "A Night Scene of Shiva Puja (recto)",
    image: "https://openaccess-cdn.clevelandart.org/2013.350.a/2013.350.a_web.jpg",
  },
  {
    title: "Ruins in a Rocky Landscape",
    image: "https://openaccess-cdn.clevelandart.org/1958.472/1958.472_web.jpg",
  },
  {
    title: "St. Francis of Assisi Receiving the Stigmata",
    image: "https://openaccess-cdn.clevelandart.org/1916.787/1916.787_web.jpg",
  },
  {
    title: "Portraits of Jean Terford David and Mary Sicard David",
    image: "https://openaccess-cdn.clevelandart.org/1916.1979/1916.1979_web.jpg",
  },
  {
    title: "Temple Banner with pilgrimage sites and scenes from the \"Svayambhu-purana\" (Ancient Text of the Primordial Buddha)",
    image: "https://openaccess-cdn.clevelandart.org/1954.788/1954.788_web.jpg",
  },
  {
    title: "Genealogical text, folio 167 (verso) from a Kalpa-sutra and Story of Kalakacharya",
    image: "https://openaccess-cdn.clevelandart.org/1971.126.b/1971.126.b_web.jpg",
  },
  {
    title: "Tiered Court Scene",
    image: "https://openaccess-cdn.clevelandart.org/1973.237/1973.237_web.jpg",
  },
  {
    title: "Scholar Watching the Waterfall",
    image: "https://openaccess-cdn.clevelandart.org/1975.95/1975.95_web.jpg",
  },
  {
    title: "Maharao Kishor Singh II of Kota (r. 1819–28) Worshiping Krishna as Brij Rajji",
    image: "https://openaccess-cdn.clevelandart.org/1978.71/1978.71_web.jpg",
  },
  {
    title: "Willows",
    image: "https://openaccess-cdn.clevelandart.org/1985.365/1985.365_web.jpg",
  },
  {
    title: "Calligraphy (reverse)",
    image: "https://openaccess-cdn.clevelandart.org/1998.286.b/1998.286.b_web.jpg",
  },
  {
    title: "Album of Daoist and Buddhist Themes: Search the Mountain: Leaf 43",
    image: "https://openaccess-cdn.clevelandart.org/2004.1.43/2004.1.43_web.jpg",
  },
  {
    title: "Layla and Majnun in the wilderness with animals, from a Khamsa (Quintet) of Amir Khusrau Dihlavi",
    image: "https://openaccess-cdn.clevelandart.org/2013.301/2013.301_web.jpg",
  },
  {
    title: "Court Lady Pouring Wine (recto); Calligraphy of Lyrical Quatrains (verso)",
    image: "https://openaccess-cdn.clevelandart.org/2013.348/2013.348_web.jpg",
  },
  {
    title: "Court Lady Pouring Wine (recto)",
    image: "https://openaccess-cdn.clevelandart.org/2013.348.a/2013.348.a_web.jpg",
  },
  {
    title: "Court lady singing and playing the vina",
    image: "https://openaccess-cdn.clevelandart.org/2013.349/2013.349_web.jpg",
  },
  {
    title: "Court lady singing and playing the vina (recto)",
    image: "https://openaccess-cdn.clevelandart.org/2013.349.a/2013.349.a_web.jpg",
  },
  {
    title: "Krishna Playing with the Gopis in the Yamuna",
    image: "https://openaccess-cdn.clevelandart.org/2018.118/2018.118_web.jpg",
  },
  {
    title: "Shvetambara Jain Teacher Giving Instruction",
    image: "https://openaccess-cdn.clevelandart.org/2018.171/2018.171_web.jpg",
  },
  {
    title: "Poems and Pictures of the Eight Views of Xiao-Xiang",
    image: "https://openaccess-cdn.clevelandart.org/2020.258/2020.258_web.jpg",
  },
  {
    title: "Album of Seasonal Landscapes",
    image: "https://openaccess-cdn.clevelandart.org/1955.37/1955.37_web.jpg",
  },
  {
    title: "Travelers in Autumn Mountains",
    image: "https://openaccess-cdn.clevelandart.org/1963.589/1963.589_web.jpg",
  },
  {
    title: "Krishna Awaiting Radha",
    image: "https://openaccess-cdn.clevelandart.org/1936.685/1936.685_web.jpg",
  },
  {
    title: "Taira no Kanemori of the Thirty-Six Poetic Immortals",
    image: "https://openaccess-cdn.clevelandart.org/1951.397/1951.397_web.jpg",
  },
  {
    title: "A Pair of Peafowl",
    image: "https://openaccess-cdn.clevelandart.org/1964.242/1964.242_web.jpg",
  },
  {
    title: "Bird Sleeping on a Plum Tree",
    image: "https://openaccess-cdn.clevelandart.org/1998.31/1998.31_web.jpg",
  },
  {
    title: "Album of Daoist and Buddhist Themes: Procession of Daoist Deities: Leaf 1",
    image: "https://openaccess-cdn.clevelandart.org/2004.1.1/2004.1.1_web.jpg",
  },
  {
    title: "Landscape with a Church by a Torrent",
    image: "https://openaccess-cdn.clevelandart.org/1962.256/1962.256_web.jpg",
  },
  {
    title: "Painting from a Kalpa-sutra: Indra Praises the Embryo of Mahavira in the Womb of the Brahman Woman Devananda",
    image: "https://openaccess-cdn.clevelandart.org/1925.1339/1925.1339_web.jpg",
  },
  {
    title: "Krishna being dressed in women’s clothes for the spring festival Holi",
    image: "https://openaccess-cdn.clevelandart.org/1933.453/1933.453_web.jpg",
  },
  {
    title: "The emir slays the snake after giving it shelter, from a Tuti-nama (Tales of a Parrot): Forty-fifth Night",
    image: "https://openaccess-cdn.clevelandart.org/1962.279.287.b/1962.279.287.b_web.jpg",
  },
  {
    title: "Radha's hair being dressed",
    image: "https://openaccess-cdn.clevelandart.org/1969.35/1969.35_web.jpg",
  },
  {
    title: "Rain-coming Pavilion by the Stone Bridge at Mt. Tiantai",
    image: "https://openaccess-cdn.clevelandart.org/1979.54/1979.54_web.jpg",
  },
  {
    title: "Alpine Landscape: The Handegg, Switzerland",
    image: "https://openaccess-cdn.clevelandart.org/1980.262/1980.262_web.jpg",
  },
  {
    title: "Juggler",
    image: "https://openaccess-cdn.clevelandart.org/1982.119/1982.119_web.jpg",
  },
  {
    title: "Willow-and-Moon Kannon (Yōryū Kannon)",
    image: "https://openaccess-cdn.clevelandart.org/1985.110/1985.110_web.jpg",
  },
  {
    title: "Yang Guifei Leaving the Bath",
    image: "https://openaccess-cdn.clevelandart.org/2017.65/2017.65_web.jpg",
  },
  {
    title: "Raja Bikram Singh of Guler smoking a hookah",
    image: "https://openaccess-cdn.clevelandart.org/2018.89/2018.89_web.jpg",
  },
  {
    title: "Yusuf and Zulaykha meeting",
    image: "https://openaccess-cdn.clevelandart.org/1939.164/1939.164_web.jpg",
  },
  {
    title: "Preparation for the marriage of Mahmuda to the Young Vizier, from a Tuti-nama (Tales of a Parrot): Thirty-third Night",
    image: "https://openaccess-cdn.clevelandart.org/1962.279.219.b/1962.279.219.b_web.jpg",
  },
  {
    title: "Weizheng Riding on an Ox",
    image: "https://openaccess-cdn.clevelandart.org/1973.86/1973.86_web.jpg",
  },
  {
    title: "Sugriva",
    image: "https://openaccess-cdn.clevelandart.org/1975.73/1975.73_web.jpg",
  },
  {
    title: "Fujiwara no Muchimaro",
    image: "https://openaccess-cdn.clevelandart.org/1983.5/1983.5_web.jpg",
  },
  {
    title: "Krishna asks for sweets, from a Sursagar of Surdas (Indian, c. 1480–1580)",
    image: "https://openaccess-cdn.clevelandart.org/1984.172/1984.172_web.jpg",
  },
  {
    title: "Album of Daoist and Buddhist Themes: Search the Mountain: Leaf 46",
    image: "https://openaccess-cdn.clevelandart.org/2004.1.46/2004.1.46_web.jpg",
  },
  {
    title: "Maharana Jagat Singh Attending the Raslila",
    image: "https://openaccess-cdn.clevelandart.org/2011.141/2011.141_web.jpg",
  },
  {
    title: "Women bathing before an architectural panorama",
    image: "https://openaccess-cdn.clevelandart.org/2013.344/2013.344_web.jpg",
  },
  {
    title: "Lovers and beloveds: A composite of scenes from Persian, Urdu, and Sanskrit literature",
    image: "https://openaccess-cdn.clevelandart.org/2013.345/2013.345_web.jpg",
  },
  {
    title: "Vase with flower arrangement and scrollwork",
    image: "https://openaccess-cdn.clevelandart.org/2013.354/2013.354_web.jpg",
  },
  {
    title: "The Heroine Who Waits Anxiously for Her Absent Lover: Utka Nayika",
    image: "https://openaccess-cdn.clevelandart.org/2018.114/2018.114_web.jpg",
  },
  {
    title: "Babur meeting with Sultan Ali Mirza at the Kohik River, from a Babur-nama (Memoirs of Babur)",
    image: "https://openaccess-cdn.clevelandart.org/1971.85/1971.85_web.jpg",
  },
  {
    title: "The lovelorn heroine, from a Sat Sai of Bihari",
    image: "https://openaccess-cdn.clevelandart.org/1971.86/1971.86_web.jpg",
  },
  {
    title: "Green Parrot",
    image: "https://openaccess-cdn.clevelandart.org/1972.285/1972.285_web.jpg",
  },
  {
    title: "Maharao Chattar Sal (reigned 1758–64) of Kota in a Palanquin",
    image: "https://openaccess-cdn.clevelandart.org/1989.344/1989.344_web.jpg",
  },
  {
    title: "Krishna quells the serpent Kaliya (verso), from a Kalighat album",
    image: "https://openaccess-cdn.clevelandart.org/2003.113.b/2003.113.b_web.jpg",
  },
  {
    title: "Shiva and Devi on Gajasura's hide",
    image: "https://openaccess-cdn.clevelandart.org/1952.587/1952.587_web.jpg",
  },
  {
    title: "Arion on a Sea Horse and Bacchante on a Panther (pair)",
    image: "https://openaccess-cdn.clevelandart.org/1980.238/1980.238_web.jpg",
  },
  {
    title: "Children Dancing",
    image: "https://openaccess-cdn.clevelandart.org/1957.489/1957.489_web.jpg",
  },
  {
    title: "The Little Milkmaid",
    image: "https://openaccess-cdn.clevelandart.org/1973.31/1973.31_web.jpg",
  },
  {
    title: "The Devil and Tom Walker",
    image: "https://openaccess-cdn.clevelandart.org/1967.18/1967.18_web.jpg",
  },
  {
    title: "Seated Manjusri",
    image: "https://openaccess-cdn.clevelandart.org/1919.1020/1919.1020_web.jpg",
  },
  {
    title: "Dream Journey to Mt. Tiantai",
    image: "https://openaccess-cdn.clevelandart.org/1975.75/1975.75_web.jpg",
  },
  {
    title: "Sketch for a Ceiling",
    image: "https://openaccess-cdn.clevelandart.org/1916.780/1916.780_web.jpg",
  },
  {
    title: "Greeting the Spring",
    image: "https://openaccess-cdn.clevelandart.org/1959.45/1959.45_web.jpg",
  },
  {
    title: "White-Robed Kannon (Byakue Kannon)",
    image: "https://openaccess-cdn.clevelandart.org/1951.540/1951.540_web.jpg",
  },
  {
    title: "Old Trees by a Wintry Brook",
    image: "https://openaccess-cdn.clevelandart.org/1997.102/1997.102_web.jpg",
  },
  {
    title: "Return from the Fields",
    image: "https://openaccess-cdn.clevelandart.org/1972.19/1972.19_web.jpg",
  },
  {
    title: "Literary Gathering in the Orchid Pavilion",
    image: "https://openaccess-cdn.clevelandart.org/1977.1/1977.1_web.jpg",
  },
  {
    title: "Lazarillo de Tormes and His Blind Master",
    image: "https://openaccess-cdn.clevelandart.org/1980.282/1980.282_web.jpg",
  },
  {
    title: "Hunting on Horses",
    image: "https://openaccess-cdn.clevelandart.org/1915.680/1915.680_web.jpg",
  },
  {
    title: "Raja Gulab Singh (1792–1857) of Jammu and Kashmir",
    image: "https://openaccess-cdn.clevelandart.org/1925.1338/1925.1338_web.jpg",
  },
  {
    title: "The Pond at the Entrance of the Woods",
    image: "https://openaccess-cdn.clevelandart.org/1951.330/1951.330_web.jpg",
  },
  {
    title: "Pradyumna and Samvara fight with maces, from the \"Large Basohli Bhagavata Purana\"",
    image: "https://openaccess-cdn.clevelandart.org/1960.184/1960.184_web.jpg",
  },
  {
    title: "Rishabha enthroned, folio 1 (verso) from a Yoga-shastra of Hemachandra",
    image: "https://openaccess-cdn.clevelandart.org/1971.128/1971.128_web.jpg",
  },
  {
    title: "Folio 2, from a Great Poem about Twos (Dvyashraya Mahakavya) of Hemachandra with Commentary by Abhayatilaka",
    image: "https://openaccess-cdn.clevelandart.org/1971.131/1971.131_web.jpg",
  },
  {
    title: "Krishna returns with the cowherds to Braj, from a Bhagavata Purana",
    image: "https://openaccess-cdn.clevelandart.org/1971.301/1971.301_web.jpg",
  },
  {
    title: "Folio 40 from a Kalpa-sutra: Text (recto); Birth of Mahavira (verso)",
    image: "https://openaccess-cdn.clevelandart.org/1976.27/1976.27_web.jpg",
  },
  {
    title: "Paintings after Ancient Masters: Daoist and Crane in Autumn Landscape",
    image: "https://openaccess-cdn.clevelandart.org/1979.27.1.7/1979.27.1.7_web.jpg",
  },
  {
    title: "Paintings after Ancient Masters: Mr. Five Willows (Wuliu), Tao Yuanming",
    image: "https://openaccess-cdn.clevelandart.org/1979.27.2.12/1979.27.2.12_web.jpg",
  },
  {
    title: "Paintings after Ancient Masters: Scholar Reading in a Thatched Hut by a Waterfall",
    image: "https://openaccess-cdn.clevelandart.org/1979.27.2.18/1979.27.2.18_web.jpg",
  },
  {
    title: "Harem night-bathing scene, from the Late Shah Jahan Album (recto)",
    image: "https://openaccess-cdn.clevelandart.org/1987.153.a/1987.153.a_web.jpg",
  },
  {
    title: "Section of an Illustrated Tale of Genji Poetry Contest",
    image: "https://openaccess-cdn.clevelandart.org/1989.119/1989.119_web.jpg",
  },
  {
    title: "Raja with his beloved",
    image: "https://openaccess-cdn.clevelandart.org/1989.336/1989.336_web.jpg",
  },
  {
    title: "Minamoto no Nakakuni Visits Lady Kogō",
    image: "https://openaccess-cdn.clevelandart.org/1992.77/1992.77_web.jpg",
  },
  {
    title: "Seated Amitābha",
    image: "https://openaccess-cdn.clevelandart.org/1994.94/1994.94_web.jpg",
  },
  {
    title: "The Sunlight",
    image: "https://openaccess-cdn.clevelandart.org/1996.274/1996.274_web.jpg",
  },
  {
    title: "A Ruler Presents a Document to Visiting Nobles",
    image: "https://openaccess-cdn.clevelandart.org/1996.296/1996.296_web.jpg",
  },
  {
    title: "Hanuman with Rama and Lakshmana on his shoulders, from a Kalighat album",
    image: "https://openaccess-cdn.clevelandart.org/2003.120/2003.120_web.jpg",
  },
  {
    title: "A prince riding a composite elephant",
    image: "https://openaccess-cdn.clevelandart.org/2013.282/2013.282_web.jpg",
  },
  {
    title: "A female figure standing in a landscape holding a four-stringed “khuuchir” and a lotus",
    image: "https://openaccess-cdn.clevelandart.org/2013.311/2013.311_web.jpg",
  },
  {
    title: "Portrait of Raja Jagat Singh of Nurpur (reigned 1618–46)",
    image: "https://openaccess-cdn.clevelandart.org/2013.324/2013.324_web.jpg",
  },
  {
    title: "A prince conversing with a woman while taking refreshments on a terrace (recto)",
    image: "https://openaccess-cdn.clevelandart.org/2013.335.a/2013.335.a_web.jpg",
  },
  {
    title: "A princess on a terrace with attendants at night (recto); Calligraphy (verso)",
    image: "https://openaccess-cdn.clevelandart.org/2013.341/2013.341_web.jpg",
  },
  {
    title: "The Morning Toilette",
    image: "https://openaccess-cdn.clevelandart.org/2018.115/2018.115_web.jpg",
  },
  {
    title: "Folio 167, from a Kalpa-sutra and Story of Kalakacharya: two nuns teaching lay women (recto); genealogical text (verso)",
    image: "https://openaccess-cdn.clevelandart.org/1971.126/1971.126_web.jpg",
  },
  {
    title: "Royal lovers watching rain clouds: The month of Bhadon, from a Barahmasa",
    image: "https://openaccess-cdn.clevelandart.org/1973.104/1973.104_web.jpg",
  },
  {
    title: "Gibbons in a Landscape",
    image: "https://openaccess-cdn.clevelandart.org/1996.256/1996.256_web.jpg",
  },
  {
    title: "Album of Daoist and Buddhist Themes: Search the Mountain: Leaf 50",
    image: "https://openaccess-cdn.clevelandart.org/2004.1.50/2004.1.50_web.jpg",
  },
  {
    title: "The dream of Zulaykha, from the Amber Album",
    image: "https://openaccess-cdn.clevelandart.org/2013.332/2013.332_web.jpg",
  },
  {
    title: "Kasuga Shrine Mandala",
    image: "https://openaccess-cdn.clevelandart.org/2015.137/2015.137_web.jpg",
  },
  {
    title: "Rustam Takes Aim at Ashkabus, from a Shah-nama (Book of Kings)",
    image: "https://openaccess-cdn.clevelandart.org/2020.204/2020.204_web.jpg",
  },
  {
    title: "Portrait of Vincenzo Guarignoni",
    image: "https://openaccess-cdn.clevelandart.org/1962.1/1962.1_web.jpg",
  },
  {
    title: "Construction Site in Amsterdam",
    image: "https://openaccess-cdn.clevelandart.org/1985.145/1985.145_web.jpg",
  },
  {
    title: "Landscape in the Style of Dong Yuan and Juran",
    image: "https://openaccess-cdn.clevelandart.org/1969.123/1969.123_web.jpg",
  },
  {
    title: "Portrait of Mrs. George Collier",
    image: "https://openaccess-cdn.clevelandart.org/1920.514/1920.514_web.jpg",
  },
  {
    title: "The Parrot Addresses Khujasta at the Beginning of the Fifteenth Night, from a Tuti-nama (Tales of a Parrot)",
    image: "https://openaccess-cdn.clevelandart.org/1962.279.112.a/1962.279.112.a_web.jpg",
  },
  {
    title: "The king’s handmaiden takes the prince away to the harem, from a Tuti-nama (Tales of a Parrot): Eighth Night",
    image: "https://openaccess-cdn.clevelandart.org/1962.279.55.a/1962.279.55.a_web.jpg",
  },
  {
    title: "The deceitful wife ejects the procuress after blackening her face, from a Tuti-nama (Tales of a Parrot): Eighth Night",
    image: "https://openaccess-cdn.clevelandart.org/1962.279.67.b/1962.279.67.b_web.jpg",
  },
  {
    title: "The handmaiden again pleads for the death of the prince, from a Tuti-nama (Tales of a Parrot): Eighth Night",
    image: "https://openaccess-cdn.clevelandart.org/1962.279.71.b/1962.279.71.b_web.jpg",
  },
  {
    title: "The young prince is crowned and the wicked handmaiden is executed, from a Tuti-nama (Tales of a Parrot): Eighth Night",
    image: "https://openaccess-cdn.clevelandart.org/1962.279.73.a/1962.279.73.a_web.jpg",
  },
  {
    title: "The Parrot Addresses Khujasta at the Beginning of the Eleventh Night, from a Tuti-nama (Tales of a Parrot)",
    image: "https://openaccess-cdn.clevelandart.org/1962.279.87.a/1962.279.87.a_web.jpg",
  },
  {
    title: "Buddhist Deities",
    image: "https://openaccess-cdn.clevelandart.org/1999.119/1999.119_web.jpg",
  },
  {
    title: "Album of Daoist and Buddhist Themes: Kings of Hells: Leaf 29",
    image: "https://openaccess-cdn.clevelandart.org/2004.1.29/2004.1.29_web.jpg",
  },
  {
    title: "Album of Daoist and Buddhist Themes: Search the Mountain: Leaf 42",
    image: "https://openaccess-cdn.clevelandart.org/2004.1.42/2004.1.42_web.jpg",
  },
  {
    title: "Album of Daoist and Buddhist Themes: Search the Mountain: Leaf 44",
    image: "https://openaccess-cdn.clevelandart.org/2004.1.44/2004.1.44_web.jpg",
  },
  {
    title: "Album of Daoist and Buddhist Themes: Search the Mountain: Leaf 45",
    image: "https://openaccess-cdn.clevelandart.org/2004.1.45/2004.1.45_web.jpg",
  },
  {
    title: "Egret and Reeds",
    image: "https://openaccess-cdn.clevelandart.org/2015.509/2015.509_web.jpg",
  },
];
