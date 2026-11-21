import { u, uh } from "./images.js";

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

export default brazilTrip;
