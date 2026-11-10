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

function TripPage({ onClose }) {
  const trip = brazilTrip;

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
          <p className="trip-eyebrow">ACCOMMODATION ESTIMATE</p>
          <h2>Budget at a glance</h2>

          <table>
            <thead>
              <tr>
                <th>Destination</th>
                <th>Nights</th>
                <th>Cost (BRL)</th>
              </tr>
            </thead>
            <tbody>
              {trip.budget.map(([name, nights, cost]) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td>{nights}</td>
                  <td>{cost}</td>
                </tr>
              ))}
              <tr className="budget-total">
                {trip.budgetTotal.map((cell) => (
                  <td key={cell}>{cell}</td>
                ))}
              </tr>
            </tbody>
          </table>

          <p className="budget-note">
            Rio de Janeiro (7 nights) and the final night in Salvador are not
            included yet.
          </p>
        </Reveal>
      </div>
    </div>
  );
}

export default TripPage;