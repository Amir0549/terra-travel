import { useEffect, useRef, useState } from "react";
import "./trip_page.css";

/* ========================================
   TRIP DATA  (replace image URLs with your own if any fail to load)
======================================== */

// Unsplash photo by its ID (the last part of the photo page URL)
const u = (id) =>
  `https://unsplash.com/photos/${id}/download?force=true&w=1200`;

// Same, but wider (for hero images)
const uh = (id) =>
  `https://unsplash.com/photos/${id}/download?force=true&w=1800`;

const brazilTrip = {
  heroImage:
    "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1800",
  title: "Brazil in 30 Days",
  region: "SOUTH AMERICA",
  subtitle:
    "Rio de Janeiro → Paraty → São Paulo → Foz do Iguaçu → Salvador → Chapada Diamantina",
  stats: [
    { value: "30", label: "DAYS" },
    { value: "29", label: "NIGHTS" },
    { value: "6", label: "MAIN REGIONS" },
    { value: "1", label: "TRAVELER" },
  ],
  stops: [
    {
      title: "Rio de Janeiro",
      days: "Days 1 – 7",
      transport: "Arrival from Algiers",
      image:
        "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?w=1200",
      highlights: [
        ["Day 1", "Arrive, settle in and stroll Copacabana beach."],
        ["Day 2", "Christ the Redeemer and Sugarloaf Mountain at sunset.", u("OkiDIla7K8Q")],
        ["Day 3", "Copacabana and Ipanema, the seafront and Brazilian food.", u("DEnsSdJHVkk")],
        ["Day 4", "Santa Teresa and the Selarón Steps in Lapa, plus a ride on the historic tram.", u("9e0dAX1bUsA")],
        ["Day 5", "Jardim Botânico and the Tijuca Forest: trails, waterfalls and viewpoints.", u("qmF3kZBhIK0")],
        ["Day 6", "Downtown Rio: Museum of Tomorrow, Boulevard Olímpico and the Theatro Municipal."],
        ["Day 7", "Sunset from Arpoador Rock between Ipanema and Copacabana.", u("n6zdsEq8I3g")],
      ],
      stay: [],
      cost: "To be estimated",
      gallery: [u("SAEtB8c1IG0"), u("tx8TZernPi8")],
    },
    {
      title: "Paraty",
      days: "Days 8 – 10",
      transport: "Bus from Rio · 4–5 hours",
      image:
        "https://images.unsplash.com/photo-1590523278191-995cbcda646b?w=1200",
      highlights: [
        ["Day 8", "Travel to Paraty and wander the historic center.", u("CdKsn9-TNCg")],
        ["Day 9", "Boat trip to the surrounding islands and beaches.", u("UFBUCRvnJ0k")],
        ["Day 10", "Waterfalls, forests and the Trindade area.", u("i1R4TgPoZjw")],
      ],
      stay: ["Pousada Aconchego", "Pousada Cana Caiana"],
      cost: "R$ 510 · 3 nights",
    },
    {
      title: "São Paulo",
      days: "Days 11 – 13",
      transport: "Bus from Paraty · 4–6 hours",
      image:
        "https://images.unsplash.com/photo-1543059080-f9b1272213d5?w=1200",
      highlights: [
        ["Day 11", "Arrive and walk Avenida Paulista.", u("a7ccn4w-SHo")],
        ["Day 12", "Ibirapuera Park and the MASP art museum."],
        ["Day 13", "Cultural neighborhoods and the Mercado Municipal.", u("NPGMW-m1fgk")],
      ],
      stay: ["ibis budget São Paulo Paulista"],
      cost: "R$ 810 · 3 nights",
    },
    {
      title: "Foz do Iguaçu",
      days: "Days 14 – 17",
      transport: "Flight from São Paulo · about 2 hours",
      image:
        "https://images.unsplash.com/photo-1552083375-1447ce886485?w=1200",
      highlights: [
        ["Day 14", "Travel, arrive and settle into the hotel."],
        ["Day 15", "Iguaçu Falls from the Brazilian side.", u("eAEG9lf3EFs")],
        [
          "Day 16",
          "Argentine side of the falls (check entry rules for your passport first).", u("HoW89EKoiyw")],
        ["Day 17", "Parque das Aves and Itaipu Dam, if time allows."],
      ],
      stay: ["Hotel Aguas do Iguaçu", "Bella Italia", "A1 Hotel"],
      cost: "R$ 800 · 4 nights",
      gallery: [u("MQwdwP7a-EE"), u("PYS7Y4Gwrr0"), u("bBCyYxQ7EnE")],
    },
    {
      title: "Salvador",
      days: "Days 18 – 23",
      transport: "Coastal and cultural stop",
      image:
        "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=1200",
      highlights: [
        ["Day 18", "Pelourinho, the colorful UNESCO-listed historic center and its churches.", u("AJqUnu_9_VM")],
        ["Day 19", "Elevador Lacerda, the Mercado Modelo and the Cidade Baixa waterfront."],
        ["Day 20", "Farol da Barra lighthouse and the Barra seafront at sunset.", u("d7yMMVQt_Uc")],
        ["Day 21", "Day trip to Praia do Forte: beaches and the TAMAR sea turtle project."],
        ["Day 22", "Bonfim Church and its wish ribbons, then the Ribeira peninsula."],
        [
          "Day 23",
          "Possible boat trip to nearby islands and beaches, plus rest and shopping.",
        ],
      ],
      stay: ["ibis Salvador Rio Vermelho", "Hotel Bahia do Sol", "Manga Rosa Suites"],
      cost: "R$ 1,260 · 6 nights",
    },
    {
      title: "Chapada Diamantina",
      days: "Days 24 – 28",
      transport: "Salvador to Lençóis · 6–7 hours",
      image:
        "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1200",
      highlights: [
        ["Day 24", "Travel to Lençóis and explore the old town."],
        ["Day 25", "Cachoeira da Fumaça and guided nature trails."],
        ["Day 26", "Gruta da Lapa Doce, then Poço Azul or Poço Encantado."],
        ["Day 27", "Morro do Pai Inácio: a short climb for sweeping views over the plateau."],
        ["Day 28", "Free day: local markets and souvenirs."],
      ],
      stay: ["Pousada Solar Azul", "Canto no Bosque"],
      cost: "R$ 1,100 · 5 nights",
    },
    {
      title: "Return Home",
      days: "Days 29 – 30",
      transport: "Lençóis → Salvador → Algiers",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200",
      highlights: [
        ["Day 29", "Return from Lençóis to Salvador."],
        ["Day 30", "Head to the airport and fly back to Algiers."],
      ],
      stay: [],
      cost: "",
    },
  ],
  budget: [
    ["Paraty", "3", "510"],
    ["São Paulo", "3", "810"],
    ["Foz do Iguaçu", "4", "800"],
    ["Salvador", "6", "1,260"],
    ["Chapada Diamantina", "5", "1,100"],
  ],
  budgetTotal: ["Known total", "21", "4,480"],
};

const austriaTrip = {
  heroImage:
    "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1800",
  title: "Austria in 30 Days",
  region: "EUROPE",
  subtitle:
    "Vienna → Wachau Valley → Hallstatt → Salzburg → Zell am See & Kaprun → Innsbruck → Graz",
  stats: [
    { value: "30", label: "DAYS" },
    { value: "29", label: "NIGHTS" },
    { value: "7", label: "MAIN REGIONS" },
    { value: "1", label: "TRAVELER" },
  ],
  stops: [
    {
      title: "Vienna",
      days: "Days 1 – 6",
      transport: "Arrival from Algiers",
      image:
        "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1200",
      highlights: [
        ["Day 1", "Arrive, check in and take a light stroll through the city center.", u("IiQXLbTTQCw")],
        ["Day 2", "Schönbrunn Palace, its gardens and the Imperial Carriage Museum.", u("ZkQNOEezi6k")],
        ["Day 3", "St. Stephen's Cathedral, Graben street and Hofburg Palace.", u("5SjAaqqCCmY")],
        ["Day 4", "Belvedere Palace, museums and art galleries.", u("mrUpOeaA3pE")],
        ["Day 5", "Prater park, the Ferris wheel and the Danube riverbank."],
        ["Day 6", "Vienna Woods, Grinzing village and traditional markets."],
      ],
      stay: [],
      cost: "€ 420 · 6 nights",
    },
    {
      title: "Wachau Valley",
      days: "Days 7 – 8",
      transport: "Transfer from Vienna",
      image:
        "https://images.unsplash.com/photo-1609856878074-cf31e21ccb6b?w=1200",
      highlights: [
        ["Day 7", "Melk Abbey, Dürnstein village and views over the Danube."],
        ["Day 8", "Krems, the vineyards and a boat trip on the river (seasonal)."],
      ],
      stay: ["Krems", "Melk"],
      cost: "€ 130 · 2 nights",
    },
    {
      title: "Hallstatt & Lake District",
      days: "Days 9 – 12",
      transport: "Transfer from the Wachau Valley",
      image:
        "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=1200",
      highlights: [
        ["Day 9", "Arrive in Hallstatt and explore the village and the lake.", u("nrUi73McDOA")],
        [
          "Day 10",
          "Skywalk viewpoint and the salt mines (if open), plus a boat trip.", u("g7T63Gk6ndE")],
        ["Day 11", "Dachstein Krippenstein cable car and the Giant Ice Cave in Obertraun."],
        ["Day 12", "Gosausee: a lakeside walk with views of the Dachstein glacier.", u("bCqGFzaHIjo")],
      ],
      stay: ["Hallstatt", "Bad Ischl"],
      cost: "€ 380 · 4 nights",
      gallery: [u("Zfp9ayxqw28"), u("AwXz7lGkOqM"), u("-VeCta3z6Fo")],
    },
    {
      title: "Salzburg",
      days: "Days 13 – 16",
      transport: "Transfer from Hallstatt",
      image:
        "https://unsplash.com/photos/F3ejC3VCVug/download?force=true&w=1200",
      highlights: [
        ["Day 13", "Old Town, Getreidegasse and Mozart's Birthplace.", u("aH9TO024Z1w")],
        ["Day 14", "Hohensalzburg Fortress and its views over the city.", u("xXKRiqnL_To")],
        ["Day 15", "Mirabell Palace and Gardens, then Hellbrunn Palace and its trick fountains.", u("4V0AtZF9Edo")],
        ["Day 16", "Untersberg cable car for Alpine panoramas above Salzburg.", u("WCdNfHThE18")],
      ],
      stay: [],
      cost: "€ 320 · 4 nights",
    },
    {
      title: "Zell am See & Kaprun",
      days: "Days 17 – 21",
      transport: "Transfer from Salzburg",
      image:
        "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200",
      highlights: [
        ["Day 17", "Lake Zell: the promenade, a boat trip and the old town.", u("4RV0mY8JR0Q")],
        ["Day 18", "Schmittenhöhe cable car and panoramic trails above the lake.", u("c_kViaZLpgc")],
        ["Day 19", "Kaprun and the Kitzsteinhorn glacier viewing platforms.", u("Iol3SP4KKrA")],
        ["Day 20", "Grossglockner High Alpine Road (seasonal: check that it is open).", u("wwMJ6AVR2NQ")],
        ["Day 21", "Free day: water activities, walks and relaxing by the lake.", u("iRKNl3dUgi4")],
      ],
      stay: [],
      cost: "€ 400 · 5 nights",
    },
    {
      title: "Innsbruck & Tyrol",
      days: "Days 22 – 27",
      transport: "Transfer from Zell am See",
      image:
        "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=1200",
      highlights: [
        ["Day 22", "Arrive in Innsbruck and explore the old town and the Golden Roof.", u("id6FMsmD2Gk")],
        ["Day 23", "Nordkette cable car and Alpine panoramas.", u("w9urZNaJYC4")],
        ["Day 24", "Seefeld village and the surrounding mountain areas."],
        ["Day 25", "Stubai Valley: villages and waterfalls."],
        ["Day 26", "Ambras Castle, its gardens and a stroll through the city.", u("fmdjpdYbXZE")],
        ["Day 27", "Mountain activities or a visit to nearby villages."],
      ],
      stay: [],
      cost: "€ 480 · 6 nights",
      gallery: [u("aFS9zelLmeo"), u("O2N2qh1YN5M"), u("CBKY_E94WAI")],
    },
    {
      title: "Graz",
      days: "Days 28 – 29",
      transport: "Transfer from Innsbruck",
      image:
        "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=1200",
      highlights: [
        ["Day 28", "Arrive in Graz: old town, Clock Tower and Hauptplatz.", u("I2NSOECRcxE")],
        ["Day 29", "Eggenberg Palace and gardens, markets and the surroundings."],
      ],
      stay: [],
      cost: "€ 120 · 2 nights",
    },
    {
      title: "Return Home",
      days: "Day 30",
      transport: "Graz → Vienna → Algiers",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200",
      highlights: [
        ["Day 30", "Travel from Graz to Vienna, then head to the airport and fly back to Algiers."],
      ],
      stay: [],
      cost: "",
    },
  ],
  budgetEyebrow: "ACCOMMODATION ESTIMATE",
  budgetTitle: "Budget at a glance",
  budgetHeaders: ["Destination", "Nights", "Cost (EUR)"],
  budget: [
    ["Vienna", "6", "420"],
    ["Wachau Valley", "2", "130"],
    ["Hallstatt & Lake District", "4", "380"],
    ["Salzburg", "4", "320"],
    ["Zell am See & Kaprun", "5", "400"],
    ["Innsbruck & Tyrol", "6", "480"],
    ["Graz", "2", "120"],
  ],
  budgetTotal: ["Estimated total", "29", "2,250"],
};

const canadaTrip = {
  heroImage: uh("btaqHQwUH9M"),
  title: "Canada in 30 Days",
  region: "NORTH AMERICA",
  subtitle:
    "Toronto → Niagara Falls → Ottawa → Montréal → Québec City → Banff → Jasper → Vancouver",
  stats: [
    { value: "30", label: "DAYS" },
    { value: "29", label: "NIGHTS" },
    { value: "8", label: "MAIN REGIONS" },
    { value: "1", label: "TRAVELER" },
  ],
  stops: [
    {
      title: "Toronto",
      days: "Days 1 – 5",
      transport: "Arrival from Algiers",
      image: u("DJ_kOgH5u0o"),
      highlights: [
        ["Day 1", "Arrive, settle in and stroll the Harbourfront.", u("rOh3CJXYLoM")],
        ["Day 2", "CN Tower, the downtown skyline and the Distillery District.", u("OzqTeeo6CQA")],
        ["Day 3", "Kensington Market, Chinatown and the Art Gallery of Ontario."],
        ["Day 4", "Royal Ontario Museum, Yorkville and Casa Loma."],
        ["Day 5", "Ferry to the Toronto Islands for skyline views, beaches and bike paths.", u("6MFSdlc3p5k")],
      ],
      stay: ["Downtown", "Kensington Market area"],
      cost: "C$ 750 · 5 nights",
      gallery: [u("ToT5RFPbChA"), u("xRQ_sv2sAG8"), u("u0jSADAIKsU")],
    },
    {
      title: "Niagara Falls",
      days: "Days 6 – 7",
      transport: "Bus or train from Toronto · 1.5–2 hours",
      image: u("G-dfxw3DFYc"),
      highlights: [
        ["Day 6", "Boat cruise to the foot of Horseshoe Falls and the walkways above the gorge.", u("NKqx9yvty1U")],
        ["Day 7", "Niagara-on-the-Lake, vineyards and the Niagara Parkway; back to the Falls for the evening lights.", u("SfEr9kM13AI")],
      ],
      stay: ["Clifton Hill area", "Niagara-on-the-Lake"],
      cost: "C$ 280 · 2 nights",
      gallery: [u("rYxN1WNFzlk"), u("oa7OyUqNs5E"), u("ZCdzNqfeekc")],
    },
    {
      title: "Ottawa",
      days: "Days 8 – 9",
      transport: "Bus or train via Toronto · 6–8 hours",
      image: u("VAxCHgJvZ0g"),
      highlights: [
        ["Day 8", "Parliament Hill, ByWard Market and the Rideau Canal.", u("GOZxsk4SoHk")],
        ["Day 9", "National Gallery of Canada, the Museum of History across the river and Major's Hill Park."],
      ],
      stay: ["ByWard Market", "Centretown"],
      cost: "C$ 280 · 2 nights",
    },
    {
      title: "Montréal",
      days: "Days 10 – 13",
      transport: "Train from Ottawa · about 2 hours",
      image: u("4ErF4LnA6ag"),
      highlights: [
        ["Day 10", "Old Montréal: cobbled streets, Notre-Dame Basilica and the Old Port.", u("TSlb4zhuY4U")],
        ["Day 11", "Mount Royal Park and the Kondiaronk Belvedere, then the Plateau neighborhood.", u("fWn5B2aKjYA")],
        ["Day 12", "Jean-Talon Market, Mile End bagels and Saint Joseph's Oratory."],
        ["Day 13", "Parc Jean-Drapeau and the Biosphere, or the Museum of Fine Arts.", u("LdCpEcMQgQI")],
      ],
      stay: ["Old Montréal", "Plateau Mont-Royal"],
      cost: "C$ 560 · 4 nights",
      gallery: [u("QLW7QrVC0s4"), u("iJTXWlMmoOg")],
    },
    {
      title: "Québec City",
      days: "Days 14 – 16",
      transport: "Train or bus from Montréal · 3–3.5 hours",
      image: u("NsJXHJvzBrM"),
      highlights: [
        ["Day 14", "Château Frontenac, Dufferin Terrace and the walls of Old Québec.", u("_ReBly3gzdM")],
        ["Day 15", "Petit Champlain, Place Royale, the funicular and the Plains of Abraham."],
        ["Day 16", "Montmorency Falls and a drive around Île d'Orléans."],
      ],
      stay: ["Old Québec (Haute-Ville)"],
      cost: "C$ 450 · 3 nights",
    },
    {
      title: "Banff & Lake Louise",
      days: "Days 17 – 21",
      transport: "Flight Québec City → Calgary (with a connection), then shuttle to Banff · 1.5 hours",
      image: u("0ic2ZYeDQx4"),
      highlights: [
        ["Day 17", "Arrive, walk Banff town and Bow Falls.", u("EEZ8YHufjPc")],
        ["Day 18", "Banff Gondola up Sulphur Mountain, then the Upper Hot Springs."],
        ["Day 19", "Lake Louise and Moraine Lake (use the Parks Canada shuttle; book early).", u("I18vbegx6ss")],
        ["Day 20", "Johnston Canyon and Lake Minnewanka."],
        ["Day 21", "Free day: canoe on the lake or a sunrise at the Vermilion Lakes.", u("V6kJLt0nPJs")],
      ],
      stay: ["Banff town", "Lake Louise village"],
      cost: "C$ 1,150 · 5 nights",
      gallery: [u("-tbY8U4UE4Y"), u("OkiDIla7K8Q"), u("DEnsSdJHVkk")],
    },
    {
      title: "Jasper",
      days: "Days 22 – 25",
      transport: "Icefields Parkway from Banff · 4–5 hours (bus or car)",
      image: u("9e0dAX1bUsA"),
      highlights: [
        ["Day 22", "Drive the Icefields Parkway: Peyto Lake, Athabasca Glacier and Athabasca Falls."],
        ["Day 23", "Maligne Lake and the Spirit Island cruise.", u("qmF3kZBhIK0")],
        ["Day 24", "Jasper SkyTram, Pyramid Lake and Mount Edith Cavell."],
        ["Day 25", "Free day: Miette Hot Springs, wildlife spotting and Jasper town."],
      ],
      stay: ["Jasper town"],
      cost: "C$ 840 · 4 nights",
    },
    {
      title: "Vancouver",
      days: "Days 26 – 29",
      transport: "Train, bus or flight from Jasper · long travel day",
      image: u("n6zdsEq8I3g"),
      highlights: [
        ["Day 26", "Travel day; evening in Gastown near the steam clock."],
        ["Day 27", "Stanley Park seawall and Granville Island Public Market.", u("SAEtB8c1IG0")],
        ["Day 28", "Capilano or Lynn Canyon suspension bridge, then Grouse Mountain.", u("tx8TZernPi8")],
        ["Day 29", "Free day: Kitsilano beach, Queen Elizabeth Park and souvenirs.", u("CdKsn9-TNCg")],
      ],
      stay: ["Downtown", "Gastown"],
      cost: "C$ 720 · 4 nights",
    },
    {
      title: "Return Home",
      days: "Day 30",
      transport: "Vancouver → Algiers (with a connection)",
      image:
        u("UFBUCRvnJ0k"),
      highlights: [
        ["Day 30", "Head to the airport and fly back to Algiers."],
      ],
      stay: [],
      cost: "",
    },
  ],
  budgetEyebrow: "ACCOMMODATION ESTIMATE",
  budgetTitle: "Budget at a glance",
  budgetHeaders: ["Destination", "Nights", "Cost (CAD)"],
  budget: [
    ["Toronto", "5", "750"],
    ["Niagara Falls", "2", "280"],
    ["Ottawa", "2", "280"],
    ["Montréal", "4", "560"],
    ["Québec City", "3", "450"],
    ["Banff & Lake Louise", "5", "1,150"],
    ["Jasper", "4", "840"],
    ["Vancouver", "4", "720"],
  ],
  budgetTotal: ["Estimated total", "29", "5,030"],
};

const italyTrip = {
  heroImage: uh("75XHJzEIeUc"),
  title: "Italy in 30 Days",
  region: "EUROPE",
  subtitle:
    "Rome → Naples & Pompeii → Amalfi Coast → Tuscany → Florence → Cinque Terre → Venice → Lake Como & Milan",
  stats: [
    { value: "30", label: "DAYS" },
    { value: "29", label: "NIGHTS" },
    { value: "8", label: "MAIN REGIONS" },
    { value: "1", label: "TRAVELER" },
  ],
  stops: [
    {
      title: "Rome",
      days: "Days 1 – 6",
      transport: "Arrival from Algiers",
      image: u("YShUHC93ztU"),
      highlights: [
        ["Day 1", "Arrive, check in and walk to the Trevi Fountain in the evening.", u("TOZHEkLb4dQ")],
        ["Day 2", "Colosseum, Roman Forum and Palatine Hill.", u("8II5_smwol4")],
        ["Day 3", "Vatican Museums, Sistine Chapel and St. Peter's Basilica.", u("sTw6bd3Lzow")],
        ["Day 4", "Pantheon, Piazza Navona and the Spanish Steps.", u("XUWDEXX0Ye0")],
        ["Day 5", "Trastevere, then Villa Borghese gardens and the Borghese Gallery (book ahead)."],
        ["Day 6", "Appian Way and the catacombs, then dinner in Testaccio."],
      ],
      stay: ["Monti", "Trastevere"],
      cost: "€ 480 · 6 nights",
      gallery: [u("QKY5bAo5_Kc"), u("LfzwrFqOFOk"), u("deB8hUHsrf0")],
    },
    {
      title: "Naples & Pompeii",
      days: "Days 7 – 9",
      transport: "High-speed train from Rome · about 1 hour 10 minutes",
      image: u("JScLh0lXsAY"),
      highlights: [
        ["Day 7", "Arrive, wander Spaccanapoli and the historic center, and eat pizza where it was born."],
        ["Day 8", "A full day at Pompeii beneath Mount Vesuvius.", u("kNozWYJ_tB8")],
        ["Day 9", "National Archaeological Museum and the Castel dell'Ovo seafront.", u("h5cYy5OHDWM")],
      ],
      stay: ["Naples historic center"],
      cost: "€ 210 · 3 nights",
      gallery: [u("kMPy9wQujzk"), u("ZaMDdINBpY0")],
    },
    {
      title: "Amalfi Coast",
      days: "Days 10 – 13",
      transport: "Train to Sorrento or Salerno, then bus or ferry · 3–4 hours",
      image: u("sqrnQMEy7VQ"),
      highlights: [
        ["Day 10", "Arrive in Positano: the beach and its stepped lanes.", u("wAc98mIvqrE")],
        ["Day 11", "Amalfi town and its cathedral, then the gardens of Ravello."],
        ["Day 12", "Ferry to Capri: the Blue Grotto and the Anacapri chairlift."],
        ["Day 13", "Path of the Gods hike, then beach time.", u("kzz0tGgcGQQ")],
      ],
      stay: ["Positano", "Praiano", "Sorrento"],
      cost: "€ 520 · 4 nights",
      gallery: [u("aa9NPs94bO8"), u("1Zc8SfYHJaw"), u("sE8rUvWHnhY")],
    },
    {
      title: "Tuscany",
      days: "Days 14 – 17",
      transport: "Train via Florence to Siena, then bus · about 6 hours",
      image: u("cs-fGIqlKQs"),
      highlights: [
        ["Day 14", "Arrive in Siena: Piazza del Campo and the Torre del Mangia."],
        ["Day 15", "Siena Cathedral, then San Gimignano and its medieval towers."],
        ["Day 16", "Val d'Orcia: Pienza, Montepulciano and the cypress-lined roads.", u("47We_cJTwoU")],
        ["Day 17", "Chianti or Montalcino wine tasting and a sunset in the hills.", u("q7HbYWRxedY")],
      ],
      stay: ["Siena"],
      cost: "€ 340 · 4 nights",
      gallery: [u("rknrvCrfS1k"), u("tEGGxeTuClY"), u("McH4ksbcCyE")],
    },
    {
      title: "Florence",
      days: "Days 18 – 21",
      transport: "Train or bus from Siena · 1.5–2 hours",
      image: u("5GVy9JS9usY"),
      highlights: [
        ["Day 18", "The Duomo, Brunelleschi's dome and the Baptistery.", u("hFXZ5cNfkOk")],
        ["Day 19", "Uffizi Gallery, Ponte Vecchio and Piazza della Signoria.", u("eJ61aOqe7Lo")],
        ["Day 20", "Accademia (Michelangelo's David), San Lorenzo market and Oltrarno workshops; sunset at Piazzale Michelangelo."],
        ["Day 21", "Day trip to Pisa for the Leaning Tower, or to Lucca."],
      ],
      stay: ["Santa Maria Novella", "Oltrarno"],
      cost: "€ 400 · 4 nights",
    },
    {
      title: "Cinque Terre",
      days: "Days 22 – 24",
      transport: "Train from Florence via La Spezia · about 3 hours",
      image: u("mgrfzB5wfWs"),
      highlights: [
        ["Day 22", "Arrive in Monterosso al Mare: beach and old town."],
        ["Day 23", "Hop between Vernazza, Corniglia and Manarola by train or trail (check which paths are open).", u("h8YvejOBoUU")],
        ["Day 24", "Riomaggiore, a boat trip and sunset over Manarola.", u("xQAqulpYhqw")],
      ],
      stay: ["Monterosso", "La Spezia"],
      cost: "€ 330 · 3 nights",
    },
    {
      title: "Venice",
      days: "Days 25 – 27",
      transport: "Trains from La Spezia · 5–6 hours",
      image: u("L1nx-Mmn8YU"),
      highlights: [
        ["Day 25", "Arrive and ride the vaporetto down the Grand Canal at dusk.", u("x9Qixy7lbzo")],
        ["Day 26", "St. Mark's Basilica, the Doge's Palace and the Rialto Bridge and market.", u("6ZP5jDgq_qM")],
        ["Day 27", "Murano and Burano by vaporetto."],
      ],
      stay: ["Cannaregio", "Dorsoduro"],
      cost: "€ 330 · 3 nights",
      gallery: [u("i1R4TgPoZjw"), u("a7ccn4w-SHo")],
    },
    {
      title: "Lake Como & Milan",
      days: "Days 28 – 29",
      transport: "Train from Venice to Milan (2.5–3 hours), then train to Varenna",
      image: u("NPGMW-m1fgk"),
      highlights: [
        ["Day 28", "Varenna, a ferry to Bellagio and the gardens of Villa Monastero.", u("eAEG9lf3EFs")],
        ["Day 29", "Milan: Duomo rooftop, Galleria Vittorio Emanuele II and The Last Supper (book far ahead).", u("HoW89EKoiyw")],
      ],
      stay: ["Varenna", "Milano Centrale area"],
      cost: "€ 200 · 2 nights",
      gallery: [u("MQwdwP7a-EE"), u("PYS7Y4Gwrr0"), u("bBCyYxQ7EnE")],
    },
    {
      title: "Return Home",
      days: "Day 30",
      transport: "Milan → Algiers",
      image:
        u("AJqUnu_9_VM"),
      highlights: [
        ["Day 30", "Head to the airport and fly back to Algiers."],
      ],
      stay: [],
      cost: "",
    },
  ],
  budgetEyebrow: "ACCOMMODATION ESTIMATE",
  budgetTitle: "Budget at a glance",
  budgetHeaders: ["Destination", "Nights", "Cost (EUR)"],
  budget: [
    ["Rome", "6", "480"],
    ["Naples & Pompeii", "3", "210"],
    ["Amalfi Coast", "4", "520"],
    ["Tuscany", "4", "340"],
    ["Florence", "4", "400"],
    ["Cinque Terre", "3", "330"],
    ["Venice", "3", "330"],
    ["Lake Como & Milan", "2", "200"],
  ],
  budgetTotal: ["Estimated total", "29", "2,810"],
};

const trips = {
  brazil: brazilTrip,
  austria: austriaTrip,
  canada: canadaTrip,
  italy: italyTrip,
};

/* ========================================
   SMALL HELPERS
======================================== */

function Reveal({ children, className = "", delay = 0, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </div>
  );
}

// Activity photo: simply disappears if the image fails to load
function ActivityPhoto({ src, alt }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  return (
    <div className="detail-activity-photo">
      <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
    </div>
  );
}

function SafeImage({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className="img-fallback">{alt}</div>;
  }

  return <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}

/* ========================================
   STOP DETAIL (expands from the clicked image)
======================================== */

const DETAIL_ANIMATION_MS = 850;

function StopDetail({ stop, index, total, rect, onClose }) {
  const [open, setOpen] = useState(false);
  const closing = useRef(false);

  // Start from the clicked image's rectangle, then expand to full screen
  useEffect(() => {
    const timeout = setTimeout(() => setOpen(true), 30);
    return () => clearTimeout(timeout);
  }, []);

  function handleClose() {
    if (closing.current) return;
    closing.current = true;
    setOpen(false);
    setTimeout(onClose, DETAIL_ANIMATION_MS);
  }

  // Close with the Escape key
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const collapsedClip = `inset(${rect.top}px ${
    window.innerWidth - rect.right
  }px ${window.innerHeight - rect.bottom}px ${rect.left}px)`;

  return (
    <div
      className={`stop-detail ${open ? "stop-detail-open" : ""}`}
      style={{ clipPath: open ? "inset(0px 0px 0px 0px)" : collapsedClip }}
      role="dialog"
      aria-label={stop.title}
    >
      <button className="trip-back" onClick={handleClose}>
        ← Back to trip
      </button>

      <div className="stop-detail-scroll">
        <div className="detail-hero">
          <SafeImage src={stop.image} alt={stop.title} />
          <div className="trip-hero-overlay" />

          <div className="detail-hero-text">
            <p className="trip-eyebrow">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")} · {stop.days}
            </p>
            <h1>{stop.title}</h1>
            <p className="trip-subtitle">{stop.transport}</p>
          </div>
        </div>

        <div className="detail-body">
          <section className="detail-section">
            <p className="trip-eyebrow">DAY BY DAY</p>

            <ol className="detail-timeline">
              {stop.highlights.map(([day, text, photo]) => (
                <li key={day}>
                  <span className="detail-day">{day}</span>
                  <div className="detail-activity">
                    <p>{text}</p>
                    {photo && (
                      <ActivityPhoto src={photo} alt={`${stop.title} · ${day}`} />
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <aside className="detail-side">
            {stop.stay.length > 0 && (
              <div className="detail-card">
                <span>SUGGESTED STAY</span>
                <ul>
                  {stop.stay.map((place) => (
                    <li key={place}>{place}</li>
                  ))}
                </ul>
              </div>
            )}

            {stop.cost && (
              <div className="detail-card">
                <span>ACCOMMODATION</span>
                <strong>{stop.cost}</strong>
              </div>
            )}

            <div className="detail-card">
              <span>GETTING THERE</span>
              <p>{stop.transport}</p>
            </div>
          </aside>
        </div>

        {stop.gallery && stop.gallery.length > 0 && (
          <section className="detail-gallery">
            <p className="trip-eyebrow">GALLERY</p>

            <div className="detail-gallery-grid">
              {stop.gallery.map((src, i) => (
                <div className="detail-photo" key={src}>
                  <SafeImage src={src} alt={`${stop.title} ${i + 1}`} />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

/* ========================================
   TRIP PAGE
======================================== */

function TripPage({ onClose, tripId = "brazil" }) {
  const trip = trips[tripId] || brazilTrip;
  const budgetHeaders = trip.budgetHeaders || [
    "Destination",
    "Nights",
    "Cost (BRL)",
  ];

  // { index, rect } of the stop whose image was clicked
  const [detail, setDetail] = useState(null);

  function openDetail(index, element) {
    setDetail({ index, rect: element.getBoundingClientRect() });
  }

  return (
    <div className="trip-shell">
      {detail && (
        <StopDetail
          stop={trip.stops[detail.index]}
          index={detail.index}
          total={trip.stops.length}
          rect={detail.rect}
          onClose={() => setDetail(null)}
        />
      )}

      <button className="trip-back" onClick={onClose}>
        ← Back
      </button>

      <div className="trip-scroll">
        {/* HERO */}
        <header className="trip-hero">
          <img className="trip-hero-image" src={trip.heroImage} alt={trip.title} />
          <div className="trip-hero-overlay" />

          <div className="trip-hero-text">
            <p className="trip-eyebrow">{trip.region}</p>
            <h1>{trip.title}</h1>
            <p className="trip-subtitle">{trip.subtitle}</p>
          </div>
        </header>

        {/* STATS */}
        <section className="trip-stats">
          {trip.stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 120} className="trip-stat">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </Reveal>
          ))}
        </section>

        {/* STOPS */}
        {trip.stops.map((stop, index) => (
          <section
            key={stop.title}
            className={`trip-stop ${index % 2 ? "trip-stop-flip" : ""}`}
          >
            <Reveal
              className="stop-media stop-media-clickable"
              role="button"
              tabIndex={0}
              aria-label={`Open details for ${stop.title}`}
              onClick={(event) => openDetail(index, event.currentTarget)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openDetail(index, event.currentTarget);
                }
              }}
            >
              <SafeImage src={stop.image} alt={stop.title} />
              <span className="stop-number">0{index + 1}</span>
              <span className="stop-view">VIEW DETAILS ↗</span>
            </Reveal>

            <Reveal className="stop-body" delay={200}>
              <p className="trip-eyebrow">{stop.days}</p>
              <h2>{stop.title}</h2>
              <p className="stop-transport">{stop.transport}</p>

              <ul className="stop-list">
                {stop.highlights.map(([day, text]) => (
                  <li key={day}>
                    <span>{day}</span>
                    <p>{text}</p>
                  </li>
                ))}
              </ul>

              {stop.stay.length > 0 && (
                <div className="stop-stay">
                  <span>SUGGESTED STAY</span>
                  <p>{stop.stay.join(" · ")}</p>
                </div>
              )}

              {stop.cost && <p className="stop-cost">{stop.cost}</p>}
            </Reveal>
          </section>
        ))}

        {/* BUDGET */}
        <Reveal className="trip-budget">
          <p className="trip-eyebrow">
            {trip.budgetEyebrow || "ACCOMMODATION ESTIMATE"}
          </p>
          <h2>{trip.budgetTitle || "Budget at a glance"}</h2>

          <table>
            <thead>
              <tr>
                {budgetHeaders.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {trip.budget.map((row) => (
                <tr key={row[0]}>
                  {row.map((cell, i) => (
                    <td key={i}>{cell}</td>
                  ))}
                </tr>
              ))}
              <tr className="budget-total">
                {trip.budgetTotal.map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            </tbody>
          </table>

          {/* <p className="budget-note">
            Rio de Janeiro (7 nights) and the final night in Salvador are not
            included yet.
          </p> */}
        </Reveal>
      </div>
    </div>
  );
}

export default TripPage;