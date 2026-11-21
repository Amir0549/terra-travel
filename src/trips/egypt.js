import { u, uh } from "./images.js";

const egyptTrip = {
  heroImage: uh("Nsi6jZ9tRZo"),
  title: "Egypt in 15 Days",
  region: "NORTH AFRICA",
  subtitle:
    "Cairo & Giza → Alexandria → Aswan & Abu Simbel → Luxor → Red Sea (Hurghada)",
  stats: [
    { value: "15", label: "DAYS" },
    { value: "14", label: "NIGHTS" },
    { value: "5", label: "MAIN REGIONS" },
    { value: "1", label: "TRAVELER" },
  ],
  stops: [
    {
      title: "Cairo & Giza",
      days: "Days 1 – 4",
      transport: "Arrival from Algiers",
      image: u("7zvQNTmpgks"),
      highlights: [
        ["Day 1", "Arrive, check in and walk the Nile Corniche and downtown at dusk."],
        ["Day 2", "The Pyramids of Giza and the Sphinx, ideally at opening time before the heat.", u("H3ugdzHeh2I")],
        ["Day 3", "Grand Egyptian Museum (book ahead), then the Step Pyramid at Saqqara."],
        ["Day 4", "Islamic Cairo: Al-Azhar, Al-Muizz Street, the Citadel and Muhammad Ali Mosque, then Khan el-Khalili in the evening.", u("rrNRon_cdiQ")],
      ],
      stay: ["Downtown Cairo", "Zamalek", "Giza (pyramid views)"],
      cost: "6,000 EGP · 4 nights",
      gallery: [u("Y6SPKbVCNHg"), u("xsRuqjFJ-cI"), u("q5OrWmFtsxE"), u("TPNpxqQCcRM")],
    },
    {
      title: "Alexandria",
      days: "Days 5 – 6",
      transport: "Train from Cairo (Ramses station) · about 2.5–3 hours",
      image: u("LjniYylt4FM"),
      highlights: [
        ["Day 5", "The Corniche, the Citadel of Qaitbay on the old Pharos site and the Eastern Harbor at sunset.", u("sp22OCGxjho")],
        ["Day 6", "Bibliotheca Alexandrina, Pompey's Pillar and the Catacombs of Kom el-Shoqafa, then a seafood dinner in Anfushi."],
      ],
      stay: ["Corniche", "Downtown Alexandria"],
      cost: "2,400 EGP · 2 nights",
    },
    {
      title: "Aswan & Abu Simbel",
      days: "Days 7 – 9",
      transport: "Flight from Cairo · about 1 hour 45 minutes (train from Alexandria first)",
      image: u("7ObNCbySGGc"),
      highlights: [
        ["Day 7", "Arrive, stroll the Nile corniche and the souk, then a felucca at sunset.", u("xcSzpi6zbW0")],
        ["Day 8", "Early start for Abu Simbel, about 3 hours each way by road: the temples of Ramses II and Nefertari.", u("Zv_l0sTAp4M")],
        ["Day 9", "Philae Temple, the Unfinished Obelisk and the High Dam, then Elephantine Island and a Nubian village."],
      ],
      stay: ["Aswan corniche", "Nubian guesthouse"],
      cost: "4,200 EGP · 3 nights",
      gallery: [u("4rXHE9XeW_A"), u("qaH07ThhL5U"), u("DqDSIMNLZVU"), u("59eU1QM4znI")],
    },
    {
      title: "Luxor",
      days: "Days 10 – 12",
      transport: "Private car via Kom Ombo and Edfu (or train) · about 4–5 hours",
      image: u("TMbybaaWZCk"),
      highlights: [
        ["Day 10", "Stop at the temples of Kom Ombo and Edfu on the way, then arrive in Luxor for the evening."],
        ["Day 11", "West Bank: Valley of the Kings, Hatshepsut Temple and the Colossi of Memnon (start early).", u("lmI1572-5EI")],
        ["Day 12", "Karnak Temple in the morning and Luxor Temple lit up at dusk.", u("v4tLl97tXBY")],
      ],
      stay: ["Luxor East Bank", "West Bank guesthouse"],
      cost: "4,200 EGP · 3 nights",
      gallery: [u("dCOVEFuw8hE"), u("yEM-mhEjb7E"), u("pvFtrzwuc6g"), u("Y2Fy0trQ-VM")],
    },
    {
      title: "Red Sea (Hurghada)",
      days: "Days 13 – 14",
      transport: "Bus or private transfer from Luxor · about 5 hours",
      image: u("mcK17puG31k"),
      highlights: [
        ["Day 13", "Arrive in Hurghada, rest on the beach and walk the marina in the evening.", u("JG7qaN9xQPo")],
        ["Day 14", "Boat trip to the Giftun Islands for snorkeling in the Red Sea.", u("SaOmpIcZ6pw")],
      ],
      stay: ["Hurghada seafront", "Sahl Hasheesh"],
      cost: "4,000 EGP · 2 nights",
      gallery: [u("4wB6TZFvMHQ"), u("EitGuBFJ7l0"), u("Cv7s20kUcDw")],
    },
    {
      title: "Return Home",
      days: "Day 15",
      transport: "Hurghada → Cairo → Algiers",
      image: u("4enRBYtngzU"),
      highlights: [
        ["Day 15", "Head to Hurghada airport and fly back to Algiers via Cairo."],
      ],
      stay: [],
      cost: "",
    },
  ],
  budgetEyebrow: "ACCOMMODATION ESTIMATE",
  budgetTitle: "Budget at a glance",
  budgetHeaders: ["Destination", "Nights", "Cost (EGP)"],
  budget: [
    ["Cairo & Giza", "4", "6,000"],
    ["Alexandria", "2", "2,400"],
    ["Aswan & Abu Simbel", "3", "4,200"],
    ["Luxor", "3", "4,200"],
    ["Red Sea (Hurghada)", "2", "4,000"],
  ],
  budgetTotal: ["Estimated total", "14", "20,800"],
};

export default egyptTrip;
