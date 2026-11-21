import { u, uh } from "./images.js";

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

export default austriaTrip;
