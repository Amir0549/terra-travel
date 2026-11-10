
import { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import "./App.css";

const destinations = [
  {
    id: "brazil",
    name: "Brazil",
    country: "South America",
    city: "Rio de Janeiro",
    lat: -22.9068,
    lng: -43.1729,
    duration: "7 Days",
    price: "$1,450",
    description:
      "Discover vibrant beaches, tropical landscapes and the unforgettable rhythm of Rio.",
    image:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=900",
    featured: true,
  },
  {
    id: "austria",
    name: "Austria",
    country: "Europe",
    city: "Vienna",
    lat: 48.2082,
    lng: 16.3738,
    duration: "5 Days",
    price: "$1,200",
    description:
      "Experience elegant architecture, alpine scenery and the timeless charm of Vienna.",
    image:
      "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=900",
    featured: true,
  },
  {
    id: "japan",
    name: "Japan",
    country: "Asia",
    city: "Tokyo",
    lat: 35.6762,
    lng: 139.6503,
    duration: "8 Days",
    price: "$1,800",
    description: "Explore a fascinating blend of tradition and modern life.",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900",
    featured: false,
  },
  {
    id: "italy",
    name: "Italy",
    country: "Europe",
    city: "Rome",
    lat: 41.9028,
    lng: 12.4964,
    duration: "6 Days",
    price: "$1,350",
    description: "Discover historic streets, art and remarkable cuisine.",
    image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=900",
    featured: false,
  },
  {
    id: "egypt",
    name: "Egypt",
    country: "Africa",
    city: "Cairo",
    lat: 30.0444,
    lng: 31.2357,
    duration: "5 Days",
    price: "$950",
    description: "Explore ancient history along the banks of the Nile.",
    image: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=900",
    featured: false,
  },
  {
    id: "morocco",
    name: "Morocco",
    country: "Africa",
    city: "Marrakech",
    lat: 31.6295,
    lng: -7.9811,
    duration: "4 Days",
    price: "$780",
    description: "Discover colorful markets and beautiful desert landscapes.",
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=900",
    featured: false,
  },
  {
    id: "canada",
    name: "Canada",
    country: "North America",
    city: "Toronto",
    lat: 43.6532,
    lng: -79.3832,
    duration: "7 Days",
    price: "$1,650",
    description: "Enjoy vibrant cities and extraordinary natural scenery.",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56cd7b4?w=900",
    featured: false,
  },
  {
    id: "australia",
    name: "Australia",
    country: "Oceania",
    city: "Sydney",
    lat: -33.8688,
    lng: 151.2093,
    duration: "9 Days",
    price: "$2,100",
    description: "Experience coastal beauty and exciting city life.",
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=900",
    featured: false,
  },
  {
    id: "maldives",
    name: "Maldives",
    country: "Asia",
    city: "Malé",
    lat: 4.1755,
    lng: 73.5093,
    duration: "6 Days",
    price: "$1,900",
    description: "Relax among turquoise waters and beautiful tropical islands.",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=900",
    featured: false,
  },
];

const destinationClickRadius = 4;

function getAngularDistance(first, second) {
  const toRadians = (degrees) => (degrees * Math.PI) / 180;
  const firstLat = toRadians(first.lat);
  const secondLat = toRadians(second.lat);
  const latDifference = secondLat - firstLat;
  const lngDifference = toRadians(second.lng - first.lng);
  const haversine =
    Math.sin(latDifference / 2) ** 2 +
    Math.cos(firstLat) *
    Math.cos(secondLat) *
    Math.sin(lngDifference / 2) ** 2;

  return (2 * Math.asin(Math.sqrt(haversine)) * 180) / Math.PI;
}

function App() {
  const globeRef = useRef();

  const [progress, setProgress] = useState(0);
  const [introFinished, setIntroFinished] = useState(false);
  const [globeActive, setGlobeActive] = useState(false);
  const [selectedDestination, setSelectedDestination] = useState(null);

  // إعداد دوران الكرة
  useEffect(() => {
    if (!globeRef.current) return;

    const controls = globeRef.current.controls();
    controls.autoRotate = !selectedDestination;
    controls.autoRotateSpeed = 0.35;
  }, [selectedDestination, globeActive]);

  // محاكاة التحميل
  useEffect(() => {
    if (introFinished) return;

    const interval = setInterval(() => {
      setProgress((previous) => Math.min(previous + 1, 100));
    }, 35);

    return () => clearInterval(interval);
  }, [introFinished]);

  // إنهاء شاشة الترحيب
  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setIntroFinished(true);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [progress]);

  // الانتقال بالكاميرا إلى الوجهة
  function handleDestinationClick(destination) {
    setGlobeActive(true);
    setSelectedDestination(destination);

    if (globeRef.current) {
      globeRef.current.pointOfView(
        {
          lat: destination.lat,
          lng: destination.lng,
          altitude: 1.7,
        },
        1200
      );
    }
  }

  function handleGlobeClick(coordinates) {
    if (!globeActive) {
      setGlobeActive(true);
      globeRef.current?.pointOfView({ ...coordinates, altitude: 1.9 }, 1200);
      return;
    }

    const destination = destinations.find(
      (item) => getAngularDistance(coordinates, item) <= destinationClickRadius
    );

    if (destination) {
      handleDestinationClick(destination);
    }
  }

  // العودة إلى الواجهة الرئيسية
  function handleBack() {
    setSelectedDestination(null);
    setGlobeActive(false);

    if (globeRef.current) {
      globeRef.current.pointOfView(
        { lat: 20, lng: 0, altitude: 2.5 },
        1000
      );
    }
  }

  const [globeSize, setGlobeSize] = useState(
    window.innerWidth <= 900 ? 440 : 650
  );

  useEffect(() => {
    const onResize = () => setGlobeSize(window.innerWidth <= 900 ? 440 : 650);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <main className="app-shell">

      {/* الكرة الأرضية */}
      <div
        className={`globe-container ${globeActive ? "globe-active" : ""}`}
        style={{ width: globeSize, height: globeSize }}

      >
        <Globe
          ref={globeRef}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundColor="rgba(0,0,0,0)"
          width={globeSize}
          height={globeSize}
          pointsData={globeActive ? destinations : []}

          pointLat="lat"
          pointLng="lng"
          pointColor={() => "#C18B51"}
          pointAltitude={0.03}
          pointRadius={0.6}
          pointResolution={12}
          pointLabel={(point) => `${point.name} — ${point.country}`}
          onGlobeClick={handleGlobeClick}
          onPointClick={handleDestinationClick}
        />
      </div>

      {/* الواجهة الرئيسية */}
      <div className={`main-content ${globeActive ? "main-hidden" : ""}`}>
        <header className="site-header">
          <span className="brand">TERRA TRAVEL</span>
          <span className="header-tagline">
            BEYOND EVERY HORIZON
          </span>
        </header>

        <section className="hero-content">
          <p className="eyebrow">THE WORLD IS WAITING</p>

          <h2>
            Discover beyond
            <br />
            every horizon.
          </h2>

          <p className="hero-description">
            Explore remarkable destinations.
            Your next journey starts here.
          </p>
        </section>


      </div>

      {/* أدوات وضع الكرة الأرضية */}
      {globeActive && (
        <div className="globe-top-bar">
          <button className="back-button" onClick={handleBack}>
            ← Back
          </button>

          <span>SELECT YOUR NEXT DESTINATION</span>
        </div>
      )}

      {/* نافذة معلومات الوجهة */}
      <aside
        className={`destination-drawer ${selectedDestination ? "drawer-open" : ""
          }`}
      >
        {selectedDestination && (
          <>
            <button
              className="drawer-close"
              onClick={() => setSelectedDestination(null)}
              aria-label="Close destination details"
            >
              ×
            </button>

            {selectedDestination.image && (
              <img
                className="drawer-image"
                src={selectedDestination.image}
                alt={selectedDestination.name}
              />
            )}

            <div className="drawer-content">
              <p className="drawer-eyebrow">
                {selectedDestination.country}
              </p>

              <h2>{selectedDestination.name}</h2>

              <p className="drawer-city">
                {selectedDestination.city}
              </p>

              <p className="drawer-description">
                {selectedDestination.description}
              </p>

              <div className="drawer-divider" />

              <div className="trip-info">
                <div>
                  <span>DURATION</span>
                  <strong>{selectedDestination.duration}</strong>
                </div>

                <div>
                  <span>STARTING FROM</span>
                  <strong>{selectedDestination.price}</strong>
                </div>
              </div>

              {selectedDestination.featured ? (
                <div className="drawer-status">
                  AVAILABLE DESTINATION
                </div>
              ) : (
                <div className="drawer-status coming-soon">
                  COMING SOON
                </div>
              )}
            </div>
          </>
        )}
      </aside>

      {/* شاشة الترحيب */}
      <section
        className={`intro-overlay ${introFinished ? "intro-hidden" : ""
          }`}
      >
        <div className="intro-brand">
          <h1>TERRA TRAVEL</h1>
          <p>BEYOND EVERY HORIZON</p>
        </div>

        <div className="loading-area">
          <div className="loading-label">
            <span>PREPARING YOUR JOURNEY</span>
            <span>{progress}%</span>
          </div>

          <div className="loading-track">
            <div
              className="loading-progress"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </section>

    </main>
  );
}

export default App;
