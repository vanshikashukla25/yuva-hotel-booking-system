
import { useState } from "react";
import {
  Search,
  MapPin,
  CalendarDays,
  Users,
  Menu,
  ArrowRight,
  Star,
  Wifi,
  Coffee,
  Waves,
  Sparkles,
} from "lucide-react";

import "./App.css";

const hotels = [
  {
    name: "The Grand Aurelia",
    location: "South Mumbai, Maharashtra",
    price: "₹8,500",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900",
    tag: "MOST POPULAR",
  },
  {
    name: "Azure Bay Retreat",
    location: "Bandra, Mumbai",
    price: "₹6,200",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900",
    tag: "SEA VIEW",
  },
  {
    name: "The Ivory Residence",
    location: "Colaba, Mumbai",
    price: "₹7,400",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=900",
    tag: "LUXURY STAY",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [booking, setBooking] = useState({
    destination: "Mumbai",
    checkIn: "",
    checkOut: "",
    guests: "2 Guests",
  });

  const handleSearch = (e) => {
    e.preventDefault();
    alert(
      `Searching hotels in ${booking.destination}\nCheck-in: ${booking.checkIn}\nCheck-out: ${booking.checkOut}\nGuests: ${booking.guests}`
    );
  };

  return (
    <div className="website">

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="brand">
          <Sparkles size={25} />
          <span>
            THE KAD
            <small>STAYS & EXPERIENCES</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <Menu />
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#properties" onClick={() => setMenuOpen(false)}>Our Hotels</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <a href="#booking" className="nav-button">
          Book Your Stay <ArrowRight size={16} />
        </a>
      </header>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span className="eyebrow">
            <Sparkles size={15} /> A NEW WAY TO EXPERIENCE LUXURY
          </span>

          <h1>
            Your escape.
            <br />
            <span>Our hospitality.</span>
          </h1>

          <p>
            Discover thoughtfully designed stays, exceptional comfort
            and unforgettable experiences in the heart of Mumbai.
          </p>

          <a href="#properties" className="hero-button">
            Explore Our Hotels <ArrowRight size={17} />
          </a>
        </div>

        <div className="hero-bottom">
          <span>CRAFTED FOR YOUR COMFORT</span>
          <span>MUMBAI · INDIA</span>
        </div>
      </section>

      {/* BOOKING SEARCH */}
      <section className="booking-section" id="booking">
        <form className="booking-bar" onSubmit={handleSearch}>

          <div className="booking-field">
            <MapPin />
            <div>
              <label>DESTINATION</label>
              <input
                type="text"
                value={booking.destination}
                onChange={(e) =>
                  setBooking({ ...booking, destination: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="booking-field">
            <CalendarDays />
            <div>
              <label>CHECK IN</label>
              <input
                type="date"
                value={booking.checkIn}
                onChange={(e) =>
                  setBooking({ ...booking, checkIn: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="booking-field">
            <CalendarDays />
            <div>
              <label>CHECK OUT</label>
              <input
                type="date"
                min={booking.checkIn || undefined}
                value={booking.checkOut}
                onChange={(e) =>
                  setBooking({ ...booking, checkOut: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div className="booking-field">
            <Users />
            <div>
              <label>GUESTS</label>
              <select
                value={booking.guests}
                onChange={(e) =>
                  setBooking({ ...booking, guests: e.target.value })
                }
              >
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5+ Guests</option>
              </select>
            </div>
          </div>

          <button className="search-button" type="submit">
            <Search size={18} /> Search
          </button>

        </form>
      </section>

      {/* INTRODUCTION */}
      <section className="intro-section" id="experience">
        <div className="section-label">THE KAD EXPERIENCE</div>

        <h2>
          More than a stay.
          <br />
          <span>A feeling to remember.</span>
        </h2>

        <p>
          Every detail is thoughtfully curated to make your journey
          special. From warm welcomes to memorable moments, experience
          hospitality that feels like home.
        </p>

        <div className="amenities">
          <div><Wifi /> Complimentary Wi-Fi</div>
          <div><Coffee /> Fine Dining</div>
          <div><Waves /> Relaxation & Wellness</div>
        </div>
      </section>

      {/* HOTEL PROPERTIES */}
      <section className="properties-section" id="properties">
        <div className="properties-heading">
          <div>
            <div className="section-label">FIND YOUR PERFECT STAY</div>
            <h2>Our <span>Properties</span></h2>
          </div>

          <a href="#booking" className="view-all">
            Explore all stays <ArrowRight size={17} />
          </a>
        </div>

        <div className="hotel-grid">
          {hotels.map((hotel) => (
            <article className="hotel-card" key={hotel.name}>
              <div className="hotel-image">
                <img src={hotel.image} alt={hotel.name} />
                <span className="hotel-tag">{hotel.tag}</span>
              </div>

              <div className="hotel-details">
                <div className="hotel-location">
                  <MapPin size={14} /> {hotel.location}
                </div>

                <h3>{hotel.name}</h3>

                <div className="hotel-bottom">
                  <div className="hotel-rating">
                    <Star size={15} fill="currentColor" />
                    {hotel.rating}
                  </div>

                  <div className="hotel-price">
                    <strong>{hotel.price}</strong>
                    <small>/ night</small>
                  </div>
                </div>

                <a href="#booking" className="hotel-link">
                  View Details <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" id="contact">
        <div className="footer-brand">
          <Sparkles size={25} />
          THE KAD Stays
        </div>

        <p>Thoughtful stays. Timeless experiences.</p>

        <div className="footer-bottom">
          <span>© 2026 THE KAD Stays. All rights reserved.</span>
          <span>Made with hospitality in mind.</span>
        </div>
      </footer>

    </div>
  );
}

export default App;
