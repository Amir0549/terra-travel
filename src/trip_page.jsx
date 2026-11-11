import { useEffect, useRef, useState } from "react";
import "./trip_page.css";

/* ========================================
   TRIP DATA  (replace image URLs with your own if any fail to load)
======================================== */

const brazilTrip = {
  heroImage:
    "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1800",
  title: "Brazil in 30 Days",
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
        ["Day 2", "Christ the Redeemer and Sugarloaf Mountain at sunset."],
        ["Day 3", "Copacabana and Ipanema, the seafront and Brazilian food."],
        ["Days 4–7", "Activities to be added."],
      ],
      stay: [],
      cost: "To be estimated",
    },
    {
      title: "Paraty",
      days: "Days 8 – 10",
      transport: "Bus from Rio · 4–5 hours",
      image:
        "https://images.unsplash.com/photo-1590523278191-995cbcda646b?w=1200",
      highlights: [
        ["Day 8", "Travel to Paraty and wander the historic center."],
        ["Day 9", "Boat trip to the surrounding islands and beaches."],
        ["Day 10", "Waterfalls, forests and the Trindade area."],
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
        ["Day 11", "Arrive and walk Avenida Paulista."],
        ["Day 12", "Ibirapuera Park and the MASP art museum."],
        ["Day 13", "Cultural neighborhoods and the Mercado Municipal."],
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
        ["Day 15", "Iguaçu Falls from the Brazilian side."],
        [
          "Day 16",
          "Argentine side of the falls (check entry rules for your passport first).",
        ],
        ["Day 17", "Parque das Aves and Itaipu Dam, if time allows."],
      ],
      stay: ["Hotel Aguas do Iguaçu", "Bella Italia", "A1 Hotel"],
      cost: "R$ 800 · 4 nights",
    },
    {
      title: "Salvador",
      days: "Days 18 – 23",
      transport: "Coastal and cultural stop",
      image:
        "https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=1200",
      highlights: [
        ["Days 18–22", "Daily activities to be added."],
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
        ["Day 27", "Activity to be added."],
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
        ["Day 1", "Arrive, check in and take a light stroll through the city center."],
        ["Day 2", "Schönbrunn Palace, its gardens and the Imperial Carriage Museum."],
        ["Day 3", "St. Stephen's Cathedral, Graben street and Hofburg Palace."],
        ["Day 4", "Belvedere Palace, museums and art galleries."],
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
        ["Day 9", "Arrive in Hallstatt and explore the village and the lake."],
        [
          "Day 10",
          "Skywalk viewpoint and the salt mines (if open), plus a boat trip.",
        ],
        ["Days 11–12", "Activities to be added."],
      ],
      stay: ["Hallstatt", "Bad Ischl"],
      cost: "€ 380 · 4 nights",
    },
    {
      title: "Salzburg",
      days: "Days 13 – 16",
      transport: "Transfer from Hallstatt",
      image:
        "https://unsplash.com/photos/F3ejC3VCVug/download?force=true&w=1200",
      highlights: [["Days 13–16", "Daily activities to be added."]],
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
        ["Days 17–20", "Activities to be added."],
        ["Day 21", "Free day: water activities, walks and relaxing by the lake."],
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
        ["Day 22", "Arrive in Innsbruck and explore the old town and the Golden Roof."],
        ["Day 23", "Nordkette cable car and Alpine panoramas."],
        ["Day 24", "Seefeld village and the surrounding mountain areas."],
        ["Day 25", "Stubai Valley: villages and waterfalls."],
        ["Day 26", "Ambras Castle, its gardens and a stroll through the city."],
        ["Day 27", "Mountain activities or a visit to nearby villages."],
      ],
      stay: [],
      cost: "€ 480 · 6 nights",
    },
    {
      title: "Graz",
      days: "Days 28 – 29",
      transport: "Transfer from Innsbruck",
      image:
        "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?w=1200",
      highlights: [
        ["Day 28", "Arrive in Graz: old town, Clock Tower and Hauptplatz."],
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

const trips = {
  brazil: brazilTrip,
  austria: austriaTrip,
};

/* ========================================
   SMALL HELPERS
======================================== */

function Reveal({ children, className = "", delay = 0 }) {
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
    >
      {children}
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
   TRIP PAGE
======================================== */

function TripPage({ onClose, tripId = "brazil" }) {
  const trip = trips[tripId] || brazilTrip;
  const budgetHeaders = trip.budgetHeaders || [
    "Destination",
    "Nights",
    "Cost (BRL)",
  ];

  return (
    <div className="trip-shell">
      <button className="trip-back" onClick={onClose}>
        ← Back
      </button>

      <div className="trip-scroll">
        {/* HERO */}
        <header className="trip-hero">
          <img className="trip-hero-image" src={trip.heroImage} alt="Brazil" />
          <div className="trip-hero-overlay" />

          <div className="trip-hero-text">
            <p className="trip-eyebrow">SOUTH AMERICA</p>
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
            <Reveal className="stop-media">
              <SafeImage src={stop.image} alt={stop.title} />
              <span className="stop-number">0{index + 1}</span>
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