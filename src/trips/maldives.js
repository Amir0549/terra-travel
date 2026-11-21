import { u, uh } from "./images.js";

const maldivesTrip = {
  heroImage: uh("WcWKXlPysA0"),
  title: "Maldives in 10 Days",
  region: "INDIAN OCEAN",
  subtitle:
    "Malé & Hulhumalé → Maafushi → Dhigurah (Ari Atoll) → Overwater Resort Island",
  stats: [
    { value: "10", label: "DAYS" },
    { value: "9", label: "NIGHTS" },
    { value: "4", label: "MAIN STOPS" },
    { value: "1", label: "TRAVELER" },
  ],
  stops: [
    {
      title: "Malé & Hulhumalé",
      days: "Day 1",
      transport: "Arrival from Algiers via a connecting flight to Velana International Airport",
      image: u("Fcopy8szaoM"),
      highlights: [
        ["Day 1", "Land on Hulhumalé, check in, then take the ferry or a taxi to Malé for the fish market, the Grand Friday Mosque and the waterfront at dusk.", u("UQv-UWm-F0s")],
      ],
      stay: ["Hulhumalé guesthouse"],
      cost: "$ 60 · 1 night",
      gallery: [u("n0S5_bJX_oU"), u("OmYPXzBcIc0"), u("9ACy91TaMew")],
    },
    {
      title: "Maafushi",
      days: "Days 2 – 4",
      transport: "Public ferry or speedboat from Malé · 45 minutes to 1.5 hours",
      image: u("x58soEovG_M"),
      highlights: [
        ["Day 2", "Arrive on a local island, settle into a guesthouse and swim at the bikini beach.", u("eqxubO9q_9c")],
        ["Day 3", "Sandbank picnic and a snorkeling trip over the reef, with sea turtles and reef sharks.", u("wUjvmB-EMjs")],
        ["Day 4", "Dolphin cruise at sunset, then a fish dinner on the island.", u("sWkP3CeoCxk")],
      ],
      stay: ["Maafushi guesthouse"],
      cost: "$ 270 · 3 nights",
      gallery: [u("vfR7hx06wVk"), u("q79ZzOkbQJ8"), u("uWpggIb3iHs")],
    },
    {
      title: "Dhigurah",
      days: "Days 5 – 7",
      transport: "Speedboat via Malé, or a domestic flight to Maamigili and a short boat ride · about 4 hours",
      image: u("23a7jJ1trDM"),
      highlights: [
        ["Day 5", "Arrive on a long, narrow island in South Ari Atoll and walk its white sand beach.", u("ncrAKoqG2hA")],
        ["Day 6", "Snorkel with whale sharks in the open water of the atoll (sightings are not guaranteed).", u("wXt0DiISf38")],
        ["Day 7", "A manta ray and reef snorkel, a visit to a nearby uninhabited island and a barbecue on the beach.", u("7i5HMCGupVw")],
      ],
      stay: ["Dhigurah guesthouse"],
      cost: "$ 300 · 3 nights",
      gallery: [u("jFP6fXCVspg"), u("O0xQcGATOw4"), u("uGPBqF1Yls0")],
    },
    {
      title: "Resort Island",
      days: "Days 8 – 9",
      transport: "Speedboat or seaplane transfer arranged by the resort · 30–60 minutes",
      image: u("DcS6Ge40DZ0"),
      highlights: [
        ["Day 8", "Fly over the atolls by seaplane, then check in to an overwater villa and swim off the deck.", u("hXxgCOocQos")],
        ["Day 9", "A free day: house reef snorkeling, a spa session and dinner on the beach.", u("iPqIfcfMOms")],
      ],
      stay: ["Overwater villa (entry-level resort)"],
      cost: "$ 900 · 2 nights",
      gallery: [u("lXgIBqTwOLY"), u("gj5X0fC6hY0"), u("z1dGIghGc9A")],
    },
    {
      title: "Return Home",
      days: "Day 10",
      transport: "Resort → Malé → Algiers via a connecting flight",
      image: u("MQsXf7unktc"),
      highlights: [
        ["Day 10", "Transfer back to Velana International Airport and fly home to Algiers."],
      ],
      stay: [],
      cost: "",
    },
  ],
  budgetEyebrow: "ACCOMMODATION ESTIMATE",
  budgetTitle: "Budget at a glance",
  budgetHeaders: ["Destination", "Nights", "Cost (USD)"],
  budget: [
    ["Malé & Hulhumalé", "1", "60"],
    ["Maafushi", "3", "270"],
    ["Dhigurah", "3", "300"],
    ["Resort Island", "2", "900"],
  ],
  budgetTotal: ["Estimated total", "9", "1,530"],
};

export default maldivesTrip;
