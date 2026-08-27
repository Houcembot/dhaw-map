// ===== Données consolidées du site (générée depuis data/ le 2026-08-26) =====
// Sources: Open-Meteo, NASA GRACE-FO, Sentinel-2, Fanack/MARHP 2017, TD Jaziri 2016,
// TWAP/IGRAC, SlideShare Zaouali, Wikipedia

const BARRAGES = [
  {nom:"Sidi Salem", lat:36.4833, lon:9.1667, cap:762, capNote:"stockage utile (capacité théorique 1580)", gouv:"Béja"},
  {nom:"Sidi Saad", lat:35.2333, lon:9.5167, cap:580, gouv:"Kairouan"},
  {nom:"Beni M'tir", lat:36.5000, lon:8.7500, cap:130, gouv:"Jendouba"},
  {nom:"Joumine", lat:36.9833, lon:9.3333, cap:120, gouv:"Bizerte"},
  {nom:"Sidi El Barrak", lat:37.0167, lon:9.1667, cap:115, gouv:"Béja"},
  {nom:"Lakhmess", lat:36.5167, lon:9.4167, cap:105, gouv:"Nabeul"},
  {nom:"Sejnane", lat:37.0667, lon:9.5500, cap:100, gouv:"Bizerte"},
  {nom:"El Haouareb", lat:35.5500, lon:10.0167, cap:95, gouv:"Kairouan"},
  {nom:"Nebhana", lat:35.5833, lon:10.0000, cap:75, gouv:"Sousse"},
  {nom:"Melah", lat:35.7167, lon:9.8833, cap:60, gouv:"Siliana"},
  {nom:"Oued El Hajar", lat:36.8167, lon:9.0833, cap:50, gouv:"Bizerte"},
  {nom:"SM Ben Abdallah", lat:36.5167, lon:9.5500, cap:40, gouv:"Siliana"},
  {nom:"Sidi Abdelmonem", lat:36.4167, lon:9.9167, cap:30, gouv:"Siliana"},
  {nom:"Kasseb", lat:36.3667, lon:9.2667, cap:25, gouv:"Béja"},
  {nom:"Sidi Abderrahim", lat:35.8500, lon:10.5833, cap:25, gouv:"Kairouan"}
];

const PLUIE = {
  "Sidi Salem":      {pluie:{2002:340,2003:666,2004:499,2005:415,2006:356,2007:404,2008:318,2009:562,2010:405,2011:524,2012:397,2013:326,2014:378,2015:319,2016:304,2017:486,2018:656,2019:812,2020:565,2021:448,2022:463,2023:606,2024:447,2025:582,2026:412}, et0moy:1370},
  "Sidi Saad":       {et0moy:1542},
  "El Haouareb":     {et0moy:1585},
  "Nebhana":         {et0moy:1577},
  "Melah":           {et0moy:1551}
};

const SALEM_SURFACE = {
  "2019":{km2:41.0,pct:37}, "2020":{km2:39.0,pct:35}, "2021":{km2:31.1,pct:28},
  "2022":{km2:27.8,pct:25}, "2023":{km2:24.1,pct:22}, "2024":{km2:26.7,pct:24},
  "2025":{km2:22.2,pct:20}, "2026":{km2:33.4,pct:30,date:"2026-05-19"}
};

const GRACE = {
  baseline:"moyenne 2004-2009",
  anomalies:{ // cm équivalent-eau vs baseline
    2002:-0.7,2003:0.3,2004:1.0,2005:1.0,2006:0.6,2007:-0.2,2008:-1.2,2009:-1.2,
    2010:-3.0,2011:-3.2,2012:-3.6,2013:-5.2,2014:-5.7,2015:-7.4,2016:-9.3,2017:-10.4,
    2018:-10.0,2019:-11.1,2020:-12.6,2021:-13.9,2022:-15.3,2023:-16.2,2024:-16.7,
    2025:-17.9,2026:-17.2
  }
};

const MARQUES = [
  {nom:"Safia", lat:35.899, lon:8.881, grp:"SFBT", src:"Aïn Mizeb/Aïn Ksiba (Le Kef)"},
  {nom:"Sabrine", lat:35.659, lon:9.928, grp:"SFBT", src:"Oued Kharroub (Chebika, Kairouan)"},
  {nom:"La Pétillante", lat:35.659, lon:9.928, grp:"SFBT", src:"même source Sabrine"},
  {nom:"Hayet", lat:35.329, lon:9.395, grp:"indép", src:"Baten El Ghazel (Jilma, Sidi Bouzid)"},
  {nom:"Marwa", lat:36.878, lon:9.447, grp:"SFBT", src:"Kef Ghrab (Joumine, Bizerte)"},
  {nom:"Fourat", lat:35.848, lon:9.593, grp:"indép", src:"Ksar Lemsa (Oueslatia, Kairouan)"},
  {nom:"Jannet", lat:35.617, lon:9.736, grp:"indép", src:"Haffouz (Kairouan)"},
  {nom:"Jektiss", lat:33.461, lon:10.331, grp:"indép", src:"Koutine (Médenine)"},
  {nom:"Primaqua", lat:33.461, lon:10.331, grp:"SFBT", src:"Koutine (Médenine)"},
  {nom:"Melliti", lat:36.462, lon:9.243, grp:"SFBT", src:"Aïn El Beidha (Téboursouk, Béja)"},
  {nom:"Melina", lat:36.091, lon:9.567, grp:"indép", src:"Jbel Guitoune (Bargou, Siliana)"},
  {nom:"Bargou", lat:36.091, lon:9.567, grp:"indép", src:"Bargou (Siliana)"},
  {nom:"Dima", lat:35.115, lon:8.370, grp:"indép", src:"Kalaat Senan (Kasserine)", approx:true},
  {nom:"Aqualine", lat:36.332, lon:10.045, grp:"indép", src:"Zaghouan"},
  {nom:"Cristal", lat:35.972, lon:9.358, grp:"indép", src:"Aïn Sokra (SE Siliana)"},
  {nom:"Maïn", lat:31.732, lon:9.770, grp:"indép", src:"nappe Tataouine ⚠️ SASS", sass:true},
  {nom:"Royale", lat:35.972, lon:9.358, grp:"indép", src:"Aïn Soukra (Siliana)"},
  {nom:"Elixir", lat:36.724, lon:9.185, grp:"Rayan", src:"Aïn El Brika (Béja)"},
  {nom:"Baya", lat:35.697, lon:9.850, grp:"indép", src:"Aïn Chrichira", approx:true},
  {nom:"Oktor", lat:36.816, lon:10.569, grp:"SFBT", src:"Korbous (Nabeul, depuis 1904)"},
  {nom:"Garci", lat:36.118, lon:10.335, grp:"SFBT", src:"Enfida (Sousse, depuis 1900)"}
];

const GRP_COLORS = {"SFBT":"#c084fc","Rayan":"#fbbf24","indép":"#38bdf8"};
const GRP_NAMES = {"SFBT":"Groupe SFBT (~70% marché)","Rayan":"Société Rayan","indép":"Indépendantes"};

const NAPPES_GEOJSON = {"type":"FeatureCollection","features":[
  {"type":"Feature","properties":{"n":"SASS / NWSAS (Continental Intercalaire + Complexe Terminal)","surexp":"×2.8"},"geometry":{"type":"Polygon","coordinates":[[[7.5,30.2],[10.5,30.2],[11.5,32],[11,34],[9,35],[7.5,34.5],[7.5,30.2]]]}},
  {"type":"Feature","properties":{"n":"Djeffara (Gabès-Zarzis)","surexp":"×2.3"},"geometry":{"type":"Polygon","coordinates":[[[9.5,33.2],[11.4,33.2],[11.4,30.5],[10,30.5],[9.5,33.2]]]}}
]};

const DESSALEMENT = [
  {nom:"Djerba (mer)", lat:33.7736, lon:10.7587},
  {nom:"Sousse (mer)", lat:35.8288, lon:10.6369},
  {nom:"Zarat/Gabès (mer)", lat:33.6655, lon:10.4800},
  {nom:"Sfax (mer)", lat:34.7394, lon:10.7603},
  {nom:"Kerkennah (mer)", lat:34.6434, lon:11.1800}
];

// ===== Les faits révélateurs (cliquables) =====
const FACTS = [
  {num:"-17 cm", cls:"c-red", lbl:"L'eau totale de la Tunisie a baissé de 17 cm d'équivalent-eau depuis 2004 (satellite NASA).",
   detail:"Le satellite GRACE-FO mesure la perte de masse en eau (nappes + barrages + humidité). La chute est continue depuis 2010, sans rebond : on puise plus vite que la pluie ne recharge.<br><a href='https://grace.jpl.nasa.gov/data/get-data/jpl-global-mascons/' target='_blank'>Source NASA JPL GRACE-FO ↗</a>", layer:"time"},
  {num:"30%", cls:"c-red", lbl:"de l'eau potable est PERDUE dans les tuyaux avant d'arriver chez toi.",
   detail:"Rendement réseau AEP 2017 : 70,3%. Réparer les fuites économiserait 86 Mm³/an — l'équivalent de 4 usines de dessalement d'eau de mer !<br><a href='https://water.fanack.com/tunisia/water-challenges-tunisia/' target='_blank'>Source MARHP 2017 via Fanack ↗</a>"},
  {num:"×2.8", cls:"c-purple", lbl:"Le Sud pompe dans ses nappes 2,8 fois plus vite que la pluie ne les remplit.",
   detail:"Système Aquifère du Sahara Septentrional (partagé avec l'Algérie et la Libye). L'eau y est fossile : elle a entre 25 et 45 500 ans (moyenne 18 000 ans). Une fois vidée, il n'y a pas de rechargement à notre échelle.<br><a href='https://water.fanack.com/tunisia/shared-water-resources-tunisia/' target='_blank'>Source Fanack/TWAP ↗</a>"},
  {num:"81%", cls:"c-amber", lbl:"de l'eau consommée en Tunisie va à l'agriculture.",
   detail:"L'irrigation a ×7 depuis 1960 (60 000 → 420 000 ha). Mais l'efficience moyenne des réseaux d'irrigation n'est que 59% (norme 80%) : beaucoup d'eau irrigue... les canaux qui fuient.<br><a href='https://water.fanack.com/tunisia/water-challenges-tunisia/' target='_blank'>Source MARHP/ITES ↗</a>"},
  {num:"-46%", cls:"c-amber", lbl:"La surface d'eau du barrage Sidi Salem a fondu de moitié entre 2019 et 2025 — avec une pluie normale.",
   detail:"Mesuré par satellite Sentinel-2 (images tous les 5 jours, méthode NDWI). La pluie sur le barrage a varié normalement (±40%) mais la surface d'eau a continué de baisser : évaporation + prélèvements.<br><a href='https://sentinels.copernicus.eu/web/sentinel/missions/sentinel-2' target='_blank'>Source Copernicus Sentinel-2 (calcul indépendant) ↗</a>", layer:"salem"},
  {num:"93%", cls:"c-blue", lbl:"du potentiel d'eau de surface est déjà capté par les barrages. On ne peut plus construire grand-chose.",
   detail:"4,4 km³ mobilisés sur ~4,8 km³ potentiels. La stratégie passe désormais au dessalement et à la réutilisation des eaux usées (ONAS en traite 242 Mm³ mais seulement 20% sont réutilisés).<br><a href='https://water.fanack.com/tunisia/water-infrastructure-tunisia/' target='_blank'>Source MARHP 2017 ↗</a>"},
  {num:"70%", cls:"c-purple", lbl:"du marché de l'eau en bouteille appartient à un seul groupe : SFBT.",
   detail:"SFBT détient Safia, Sabrine, Marwa, Hayet, Fourat, Jannet, Oktor, Garci... La production nationale est passée de 110 millions de bouteilles (1995) à 483 millions (2007). Chaque bouteille = eau pompée localement, souvent dans des zones de stress hydrique agricole.<br><a href='https://fr.wikipedia.org/wiki/Eaux_min%C3%A9rales_en_Tunisie' target='_blank'>Source Wikipedia (réfs presse) ↗</a>"}
];
