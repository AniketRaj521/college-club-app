import { useState } from "react";
import "./App.css";

const clubs = [
  {
    id: 1,
    name: "CodeCraft",
    category: "Coding",
    icon: "💻",
    members: 120,
    description:
      "Build projects, solve problems, join hackathons and grow your coding skills.",
    tags: ["React", "DSA", "Hackathons"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "AI & Robotics",
    category: "Coding",
    icon: "🤖",
    members: 110,
    description:
      "Explore artificial intelligence, machine learning, robotics and automation.",
    tags: ["AI/ML", "Python", "Robotics"],
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Sports Arena",
    category: "Sports",
    icon: "🏆",
    members: 180,
    description:
      "Play, compete and connect through football, cricket, fitness and more.",
    tags: ["Cricket", "Football", "Fitness"],
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Creative Arts",
    category: "Arts",
    icon: "🎨",
    members: 85,
    description:
      "Express yourself through photography, design, music and creative projects.",
    tags: ["Design", "Photography", "Music"],
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Startup Hub",
    category: "Entrepreneurship",
    icon: "🚀",
    members: 95,
    description:
      "Turn ideas into startups with mentorship, teamwork and innovation.",
    tags: ["Startups", "Business", "Ideas"],
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Dance Crew",
    category: "Arts",
    icon: "💃",
    members: 70,
    description:
      "Learn new moves, perform on stage and make unforgettable memories.",
    tags: ["Dance", "Events", "Performance"],
    image:
      "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = [
  { name: "All", icon: "✨" },
  { name: "Coding", icon: "💻" },
  { name: "Sports", icon: "🏆" },
  { name: "Arts", icon: "🎨" },
  { name: "Entrepreneurship", icon: "🚀" },
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [selectedClub, setSelectedClub] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const filteredClubs = clubs.filter((club) => {
    const matchesSearch =
      club.name.toLowerCase().includes(search.toLowerCase()) ||
      club.category.toLowerCase().includes(search.toLowerCase()) ||
      club.tags.some((tag) =>
        tag.toLowerCase().includes(search.toLowerCase())
      );

    const matchesCategory =
      category === "All" || club.category === category;

    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const resetFilters = () => {
    setSearch("");
    setCategory("All");
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">🎓</span>
          Club<span>Connect</span>
        </div>

        <div className="nav-actions">
          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button className="join-btn">
            Join a Club →
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section className="hero">

        {/* Decorative blobs */}
        <div className="yellow-blob blob-one"></div>
        <div className="yellow-blob blob-two"></div>
        <div className="yellow-blob blob-three"></div>

        {/* Floating images */}

        <div className="floating-image image-one">
          <img
            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=500&q=80"
            alt="Students"
          />
          <span>👋</span>
        </div>

        <div className="floating-image image-two">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80"
            alt="College students"
          />
          <span>✨</span>
        </div>

        <div className="floating-image image-three">
          <img
            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=500&q=80"
            alt="Friends"
          />
        </div>

        <div className="floating-image image-four">
          <img
            src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=500&q=80"
            alt="Students together"
          />
        </div>

        <div className="hero-content">

          <div className="hero-badge">
            <span>✨</span>
            Discover your community
          </div>

          <h1>
            Find Your
            <span>Campus Tribe</span>
          </h1>

          <p className="hero-description">
            Discover exciting college clubs, meet like-minded people,
            learn new skills and create unforgettable experiences.
          </p>

          {/* SEARCH */}

          <div className="search-box">

            <span className="search-icon">🔎</span>

            <input
              type="text"
              placeholder="Search clubs, interests, skills..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button
                className="clear-search"
                onClick={() => setSearch("")}
              >
                ✕
              </button>
            )}

          </div>

          {/* STATS */}

          <div className="hero-stats">

            <div className="stat">
              <strong>25+</strong>
              <span>Clubs</span>
            </div>

            <div className="stat">
              <strong>1.2K+</strong>
              <span>Students</span>
            </div>

            <div className="stat">
              <strong>50+</strong>
              <span>Events</span>
            </div>

          </div>

          {/* SCROLL */}

          <div className="scroll-indicator">
            <span>↓</span>
            Explore clubs
          </div>

        </div>
      </section>

      {/* ================= TRENDING ================= */}

      <section className="featured-section">

        <div className="section-header">
          <div className="small-label">
            🔥 TRENDING NOW
          </div>

          <h2>
            Find something
            <span> you love</span>
          </h2>

          <p>
            Join communities that match your interests and passion.
          </p>
        </div>

        <div className="club-grid">

          {clubs
            .filter((club) => club.id <= 3)
            .map((club) => (
              <ClubCard
                key={club.id}
                club={club}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                setSelectedClub={setSelectedClub}
              />
            ))}

        </div>
      </section>

      {/* ================= EXPLORE ================= */}

      <section className="explore-section">

        <div className="section-header">

          <div className="small-label">
            🌟 EXPLORE
          </div>

          <h2>
            Explore your
            <span> interests</span>
          </h2>

          <p>
            Find the perfect club for your college journey.
          </p>

        </div>

        {/* CATEGORY FILTER */}

        <div className="category-filter">

          {categories.map((item) => (
            <button
              key={item.name}
              className={
                category === item.name
                  ? "category-btn active"
                  : "category-btn"
              }
              onClick={() => setCategory(item.name)}
            >
              {item.icon} {item.name}
            </button>
          ))}

        </div>

        <div className="result-count">
          Showing <strong>{filteredClubs.length}</strong> clubs
        </div>

        {/* CLUBS */}

        <div className="club-grid">

          {filteredClubs.map((club) => (
            <ClubCard
              key={club.id}
              club={club}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              setSelectedClub={setSelectedClub}
            />
          ))}

        </div>

        {filteredClubs.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">🔍</div>

            <h3>No clubs found</h3>

            <p>
              Try another search or explore a different category.
            </p>

            <button
              className="reset-btn"
              onClick={resetFilters}
            >
              Reset Filters
            </button>
          </div>
        )}

      </section>

      {/* ================= MODAL ================= */}

      {selectedClub && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedClub(null)}
        >

          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="modal-close"
              onClick={() => setSelectedClub(null)}
            >
              ✕
            </button>

            <img
              className="modal-image"
              src={selectedClub.image}
              alt={selectedClub.name}
            />

            <div className="modal-content">

              <div className="modal-icon">
                {selectedClub.icon}
              </div>

              <span className="club-category">
                {selectedClub.category}
              </span>

              <h2>{selectedClub.name}</h2>

              <p>
                {selectedClub.description}
              </p>

              <div className="modal-stats">

                <div>
                  <strong>
                    {selectedClub.members}+
                  </strong>
                  <span>Members</span>
                </div>

                <div>
                  <strong>15+</strong>
                  <span>Events</span>
                </div>

                <div>
                  <strong>4.9</strong>
                  <span>Rating</span>
                </div>

              </div>

              <div className="club-tags">
                {selectedClub.tags.map((tag) => (
                  <span
                    className="club-tag"
                    key={tag}
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <button className="modal-join">
                Join {selectedClub.name} →
              </button>

            </div>

          </div>

        </div>
      )}

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-logo">
          🎓 Club<span>Connect</span>
        </div>

        <p>
          Discover. Connect. Create unforgettable college memories.
        </p>

        <div className="footer-icons">
          💛 &nbsp; ✨ &nbsp; 🎓 &nbsp; 🚀
        </div>

      </footer>

    </div>
  );
}


/* =========================
   CLUB CARD COMPONENT
========================= */

function ClubCard({
  club,
  favorites,
  toggleFavorite,
  setSelectedClub,
}) {
  return (
    <div className="club-card">

      <div className="club-image-wrapper">

        <img
          src={club.image}
          alt={club.name}
          className="club-image"
        />

        <button
          className={
            favorites.includes(club.id)
              ? "favorite-btn active"
              : "favorite-btn"
          }
          onClick={() => toggleFavorite(club.id)}
        >
          {favorites.includes(club.id) ? "❤️" : "♡"}
        </button>

        <div className="club-image-icon">
          {club.icon}
        </div>

      </div>

      <div className="club-card-content">

        <span className="club-category">
          {club.category}
        </span>

        <h3>{club.name}</h3>

        <p className="club-description">
          {club.description}
        </p>

        <div className="club-tags">

          {club.tags.map((tag) => (
            <span
              className="club-tag"
              key={tag}
            >
              {tag}
            </span>
          ))}

        </div>

        <div className="club-footer">

          <span className="members">
            👥 {club.members}+ members
          </span>

          <button
            className="explore-btn"
            onClick={() => setSelectedClub(club)}
          >
            Explore →
          </button>

        </div>

      </div>

    </div>
  );
}

export default App;