import { useEffect, useRef, useState } from "react";
import "./trip_page.css";
import brazilTrip, { trips } from "./trips/index.js";

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