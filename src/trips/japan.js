import { u, uh } from "./images.js";

/*
  Unsplash photo IDs: replace each "REPLACE_..." value with a real ID
  (the part after /photos/ in the Unsplash URL).
  Any image that fails to load is hidden automatically by the page.
*/

const P = {
  // Japan – cinematic cover
  hero: "ZasJ7-YIK5Q",

  // TOKYO
  tokyo: "UCwbKC3GhiA",
  tokyoA1: "hVVCWXyIaQo", // Senso-ji
  tokyoA2: "9js9DyUGZ7w", // Shibuya Crossing
  tokyoA3: "n_JFPNj5cjk", // Meiji Jingu
  tokyoA4: "aXN9vYBlgqU", // Akihabara

  tokyoG1: "14nwP8vPTgA", // Tokyo skyline
  tokyoG2: "B5JCib8nTck", // Tokyo Tower
  tokyoG3: "qwuCe0xrP28", // Shibuya at night

  // HAKONE & MOUNT FUJI
  hakone: "SBK40fdKbAg",
  hakoneA1: "SBK40fdKbAg", // Lake Ashi torii
  hakoneA2: "ZasJ7-YIK5Q", // Mount Fuji & Lake Kawaguchi

  hakoneG1: "qVRnVri4gzs", // Lake Ashi
  hakoneG2: "8cG6UkixUus", // Hakone landscape

  // TAKAYAMA & SHIRAKAWA-GO
  takayama: "OpxKM8WDoUE",
  takayamaA1: "OpxKM8WDoUE", // Takayama old town
  takayamaA2: "hAxQVhhwTcw", // Shirakawa-go

  takayamaG1: "u3nj-jiSGIo", // Shirakawa village
  takayamaG2: "pbtiEKzjGJ8", // Traditional farmhouse

  // KYOTO
  kyoto: "Qiw63GpWN6w",
  kyotoA1: "aTl9dIWiltU", // Fushimi Inari
  kyotoA2: "xAMiLdoZ2E8", // Arashiyama
  kyotoA3: "3jLPsnEuqmM", // Kinkaku-ji
  kyotoA4: "gUg3rDj81ck", // Gion

  kyotoG1: "EvsuNMbZNJw", // Bamboo forest
  kyotoG2: "HtEwFnbxGEc", // Bamboo grove
  kyotoG3: "Njd1TRaJj7w", // Gion pagoda street

  // OSAKA & NARA
  osaka: "00LRyw2RytE",
  osakaA1: "DOuIhwlN9mA", // Dotonbori
  osakaA2: "rTKaXueWs6c", // Nara deer

  osakaG1: "kHuB8Ny5fNI", // Osaka neon street
  osakaG2: "wCKmdN93cPs", // Dotonbori canal

  // RETURN
  home: "S4nGzYbc1-M",
};


const japanTrip = {
  heroImage: uh(P.hero),
  title: "Japan in 15 Days",
  region: "ASIA",
  subtitle:
    "Tokyo → Hakone & Mount Fuji → Takayama & Shirakawa-go → Kyoto → Osaka & Nara",
  stats: [
    { value: "15", label: "DAYS" },
    { value: "14", label: "NIGHTS" },
    { value: "5", label: "MAIN REGIONS" },
    { value: "1", label: "TRAVELER" },
  ],
  stops: [
    {
      title: "Tokyo",
      days: "Days 1 – 5",
      transport: "Flight from Algiers with one connection · about 16–20 hours",
      image: u(P.tokyo),
      highlights: [
        ["Day 1", "Arrive, get a Suica card, check in and rest; an evening stroll nearby."],
        ["Day 2", "Asakusa and Senso-ji Temple, Nakamise Street, then Tokyo Skytree.", u(P.tokyoA1)],
        ["Day 3", "Meiji Shrine and Harajuku, then Shibuya Crossing and Shibuya Sky at sunset.", u(P.tokyoA3)],
        ["Day 4", "Tsukiji Outer Market breakfast, Ginza, then Akihabara's electronics and arcades.", u(P.tokyoA4)],
        ["Day 5", "Shinjuku: Gyoen garden by day, Omoide Yokocho and neon streets by night.", u(P.tokyoA2)],
      ],
      stay: ["Asakusa", "Shinjuku"],
      cost: "€ 475 · 5 nights",
      gallery: [u(P.tokyoG1), u(P.tokyoG2), u(P.tokyoG3)],
    },
    {
      title: "Hakone & Mount Fuji",
      days: "Days 6 – 7",
      transport: "Romancecar from Shinjuku to Hakone-Yumoto · about 1 hour 30 minutes",
      image: u(P.hakone),
      highlights: [
        ["Day 6", "Hakone loop: ropeway over Owakudani, a pirate-ship cruise on Lake Ashi, then a night in a ryokan with an onsen.", u(P.hakoneA1)],
        ["Day 7", "Bus to Lake Kawaguchiko for views of Mount Fuji, then return to Tokyo or continue onward.", u(P.hakoneA2)],
      ],
      stay: ["Hakone-Yumoto ryokan"],
      cost: "€ 260 · 2 nights",
      gallery: [u(P.hakoneG1), u(P.hakoneG2)],
    },
    {
      title: "Takayama & Shirakawa-go",
      days: "Days 8 – 9",
      transport: "Train via Nagoya to Takayama (Hida Express) · about 5–6 hours",
      image: u(P.takayama),
      highlights: [
        ["Day 8", "Arrive in Takayama: the Sanmachi Suji old town, sake breweries and the morning market.", u(P.takayamaA1)],
        ["Day 9", "Bus to Shirakawa-go's thatched gassho-zukuri farmhouses, then back to Takayama.", u(P.takayamaA2)],
      ],
      stay: ["Takayama old town"],
      cost: "€ 170 · 2 nights",
      gallery: [u(P.takayamaG1), u(P.takayamaG2)],
    },
    {
      title: "Kyoto",
      days: "Days 10 – 12",
      transport: "Train via Nagoya from Takayama · about 4 hours",
      image: u(P.kyoto),
      highlights: [
        ["Day 10", "Arrive and head to Fushimi Inari's thousands of red torii gates at dusk.", u(P.kyotoA1)],
        ["Day 11", "Arashiyama bamboo grove, Tenryu-ji and the Togetsukyo Bridge, then Kinkaku-ji's golden pavilion.", u(P.kyotoA2)],
        ["Day 12", "Kiyomizu-dera, the lanes of Higashiyama, and an evening in Gion.", u(P.kyotoA4)],
      ],
      stay: ["Gion", "Kyoto Station area"],
      cost: "€ 300 · 3 nights",
      gallery: [u(P.kyotoG1), u(P.kyotoG2), u(P.kyotoG3)],
    },
    {
      title: "Osaka & Nara",
      days: "Days 13 – 14",
      transport: "Train from Kyoto to Osaka · about 15–30 minutes",
      image: u(P.osaka),
      highlights: [
        ["Day 13", "Day trip to Nara: Todai-ji's Great Buddha and the friendly deer of Nara Park.", u(P.osakaA2)],
        ["Day 14", "Osaka Castle, then street food along Dotonbori in the evening.", u(P.osakaA1)],
      ],
      stay: ["Namba", "Umeda"],
      cost: "€ 170 · 2 nights",
      gallery: [u(P.osakaG1), u(P.osakaG2)],
    },
    {
      title: "Return Home",
      days: "Day 15",
      transport: "Osaka (Kansai Airport) → Algiers",
      image: u(P.home),
      highlights: [
        ["Day 15", "Head to Kansai International Airport and fly back to Algiers."],
      ],
      stay: [],
      cost: "",
    },
  ],
  budgetEyebrow: "ACCOMMODATION ESTIMATE",
  budgetTitle: "Budget at a glance",
  budgetHeaders: ["Destination", "Nights", "Cost (EUR)"],
  budget: [
    ["Tokyo", "5", "475"],
    ["Hakone & Mount Fuji", "2", "260"],
    ["Takayama & Shirakawa-go", "2", "170"],
    ["Kyoto", "3", "300"],
    ["Osaka & Nara", "2", "170"],
  ],
  budgetTotal: ["Estimated total", "14", "1,375"],
};

export default japanTrip;
