import { u, uh } from "./images.js";

/*
  Unsplash photo IDs: replace each "REPLACE_..." value with a real ID
  (the part after /photos/ in the Unsplash URL).
  Any image that fails to load is hidden automatically by the page.
*/
const P = {
  hero: "XtdoflZSMYI", // Uluru at sunset – cinematic Australia cover

  sydney: "LKhuawwNcpQ",
  sydneyA1: "DLbCETd599Y", // Opera House
  sydneyA2: "dm4TkjJK_jw", // Bondi Beach
  sydneyA3: "3MWyoqJOBqM", // Three Sisters
  sydneyA4: "ZXlfq5mExMs", // Sydney at night

  sydneyG1: "jK9dT34TfuI",
  sydneyG2: "xmW_c5chJys",
  sydneyG3: "CO6opG5kucQ",

  melbourne: "eQ9UXm56his", // Great Ocean Road
  melbourneA1: "melbourne-laneways", // استبدل بصورة مناسبة من البحث
  melbourneA2: "eQ9UXm56his", // Twelve Apostles
  melbourneA3: "phillip-island-penguins",

  melbourneG1: "d8pMW66yOu0",
  melbourneG2: "1JgJ_1sXimI",
  melbourneG3: "TB0GRcSiQVg",

  cairns: "great-barrier-reef",
  cairnsA1: "great-barrier-reef",
  cairnsA2: "daintree-rainforest",
  cairnsA3: "kuranda-rainforest",

  cairnsG1: "great-barrier-reef",
  cairnsG2: "daintree-rainforest",
  cairnsG3: "tropical-queensland",

  uluru: "mzToaOkamdk",
  uluruA1: "XtdoflZSMYI",
  uluruA2: "kata-tjuta",

  uluruG1: "mzToaOkamdk",
  uluruG2: "XtdoflZSMYI",

  home: "LKhuawwNcpQ",
};

const australiaTrip = {
  heroImage: uh(P.hero),
  title: "Australia in 15 Days",
  region: "OCEANIA",
  subtitle:
    "Sydney → Melbourne & Great Ocean Road → Cairns & the Great Barrier Reef → Uluru",
  stats: [
    { value: "15", label: "DAYS" },
    { value: "14", label: "NIGHTS" },
    { value: "4", label: "MAIN REGIONS" },
    { value: "1", label: "TRAVELER" },
  ],
  stops: [
    {
      title: "Sydney",
      days: "Days 1 – 4",
      transport: "Flight from Algiers with one connection · about 24–30 hours",
      image: u(P.sydney),
      highlights: [
        ["Day 1", "Arrive, rest and walk around Circular Quay at sunset."],
        ["Day 2", "Sydney Opera House tour, Royal Botanic Garden and the Harbour Bridge.", u(P.sydneyA1)],
        ["Day 3", "Ferry to Manly, or the Bondi to Coogee coastal walk.", u(P.sydneyA2)],
        ["Day 4", "Day trip to the Blue Mountains: the Three Sisters and Scenic World.", u(P.sydneyA3)],
      ],
      stay: ["The Rocks", "Darling Harbour"],
      cost: "€ 480 · 4 nights",
      gallery: [u(P.sydneyG1), u(P.sydneyG2), u(P.sydneyG3)],
    },
    {
      title: "Melbourne & Great Ocean Road",
      days: "Days 5 – 8",
      transport: "Flight from Sydney · about 1 hour 30 minutes",
      image: u(P.melbourne),
      highlights: [
        ["Day 5", "Arrive and explore the laneways, street art and cafés of the CBD.", u(P.melbourneA1)],
        ["Day 6", "Queen Victoria Market, Federation Square and the Royal Botanic Gardens."],
        ["Day 7", "Great Ocean Road: Torquay, Apollo Bay and the Twelve Apostles at sunset.", u(P.melbourneA2)],
        ["Day 8", "Phillip Island's penguin parade, or a relaxed morning before the flight.", u(P.melbourneA3)],
      ],
      stay: ["Melbourne CBD", "Southbank"],
      cost: "€ 400 · 4 nights",
      gallery: [u(P.melbourneG1), u(P.melbourneG2), u(P.melbourneG3)],
    },
    {
      title: "Cairns & the Great Barrier Reef",
      days: "Days 9 – 12",
      transport: "Flight from Melbourne · about 3 hours 30 minutes",
      image: u(P.cairns),
      highlights: [
        ["Day 9", "Arrive in Cairns and stroll the Esplanade lagoon and night markets."],
        ["Day 10", "Full-day reef trip: snorkelling or diving at the Great Barrier Reef.", u(P.cairnsA1)],
        ["Day 11", "Daintree Rainforest and Cape Tribulation, where the rainforest meets the beach.", u(P.cairnsA2)],
        ["Day 12", "Kuranda by Skyrail cable car and the scenic railway.", u(P.cairnsA3)],
      ],
      stay: ["Cairns Esplanade"],
      cost: "€ 360 · 4 nights",
      gallery: [u(P.cairnsG1), u(P.cairnsG2), u(P.cairnsG3)],
    },
    {
      title: "Uluru",
      days: "Days 13 – 14",
      transport: "Flight from Cairns to Uluru (Ayers Rock) · about 3 hours",
      image: u(P.uluru),
      highlights: [
        ["Day 13", "Uluru at sunset, then dinner under the desert stars.", u(P.uluruA1)],
        ["Day 14", "Sunrise at the Uluru base walk, then the Kata Tjuta (Olgas) domes.", u(P.uluruA2)],
      ],
      stay: ["Ayers Rock Resort"],
      cost: "€ 300 · 2 nights",
      gallery: [u(P.uluruG1), u(P.uluruG2)],
    },
    {
      title: "Return Home",
      days: "Day 15",
      transport: "Uluru → Sydney → Algiers",
      image: u(P.home),
      highlights: [
        ["Day 15", "Fly out of Uluru via Sydney and head back to Algiers."],
      ],
      stay: [],
      cost: "",
    },
  ],
  budgetEyebrow: "ACCOMMODATION ESTIMATE",
  budgetTitle: "Budget at a glance",
  budgetHeaders: ["Destination", "Nights", "Cost (EUR)"],
  budget: [
    ["Sydney", "4", "480"],
    ["Melbourne & Great Ocean Road", "4", "400"],
    ["Cairns & the Great Barrier Reef", "4", "360"],
    ["Uluru", "2", "300"],
  ],
  budgetTotal: ["Estimated total", "14", "1,540"],
};

export default australiaTrip;
