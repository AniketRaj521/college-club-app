import { useState } from "react";
import "./App.css";

const initialClubs = [
  {
    id: 1,
    name: "CodeCraft",
    category: "Coding",
    icon: "💻",
    members: 120,
    events: 18,
    rating: 4.8,
    description:
      "Build projects, improve coding skills and participate in hackathons.",
    tags: ["React", "DSA", "Hackathons"],
    color: "#6366f1",
    nextEvent: "Web Development Workshop",
    date: "September 26",
    time: "11:00 AM",
    location: "Computer Lab 2",
  },
  {
    id: 2,
    name: "AI & Robotics",
    category: "Coding",
    icon: "🤖",
    members: 110,
    events: 15,
    rating: 4.9,
    description:
      "Explore artificial intelligence, machine learning, robotics and automation.",
    tags: ["AI/ML", "Python", "Robotics"],
    color: "#f5b400",
    nextEvent: "AI Innovation Workshop",
    date: "September 28",
    time: "2:00 PM",
    location: "Innovation Lab",
  },
  {
    id: 3,
    name: "Sports Arena",
    category: "Sports",
    icon: "🏆",
    members: 180,
    events: 22,
    rating: 4.7,
    description:
      "Stay active, compete with others and participate in exciting sports events.",
    tags: ["Cricket", "Football", "Fitness"],
    color: "#10b981",
    nextEvent: "Inter-College Sports Meet",
    date: "October 2",
    time: "9:00 AM",
    location: "College Ground",
  },
  {
    id: 4,
    name: "Creative Arts",
    category: "Arts",
    icon: "🎨",
    members: 85,
    events: 12,
    rating: 4.6,
    description:
      "Express creativity through design, photography, music and visual arts.",
    tags: ["Design", "Photography", "Music"],
    color: "#ec4899",
    nextEvent: "Creative Design Showcase",
    date: "October 5",
    time: "12:00 PM",
    location: "Art Studio",
  },
  {
    id: 5,
    name: "Startup Hub",
    category: "Entrepreneurship",
    icon: "🚀",
    members: 95,
    events: 14,
    rating: 4.8,
    description:
      "Turn ideas into real products through entrepreneurship and innovation.",
    tags: ["Startups", "Business", "Ideas"],
    color: "#f59e0b",
    nextEvent: "Startup Pitch Day",
    date: "October 8",
    time: "3:00 PM",
    location: "Seminar Hall",
  },
  {
    id: 6,
    name: "Dance Crew",
    category: "Arts",
    icon: "💃",
    members: 70,
    events: 10,
    rating: 4.7,
    description:
      "Learn, perform and enjoy different styles of dance with fellow students.",
    tags: ["Dance", "Events", "Performance"],
    color: "#f43f5e",
    nextEvent: "Campus Dance Battle",
    date: "October 10",
    time: "5:00 PM",
    location: "Open Auditorium",
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
  const [clubs, setClubs] = useState(initialClubs);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [selectedClub, setSelectedClub] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [joinedClub, setJoinedClub] = useState(null);
  const [activePage, setActivePage] = useState("home");

  const filteredClubs = clubs.filter((club) => {
    const matchesCategory =
      category === "All" || club.category === category;

    const searchText = search.toLowerCase();

    const matchesSearch =
      club.name.toLowerCase().includes(searchText) ||
      club.category.toLowerCase().includes(searchText) ||
      club.tags.some((tag) =>
        tag.toLowerCase().includes(searchText)
      );

    return matchesCategory && matchesSearch;
  });

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const openClub = (club) => {
    setSelectedClub(club);
    setJoinedClub(null);
  };

  const joinClub = (club) => {
    setClubs((prev) =>
      prev.map((item) =>
        item.id === club.id
          ? {
              ...item,
              members: item.members + 1,
              events: item.events + 1,
            }
          : item
      )
    );

    setJoinedClub({
      ...club,
      members: club.members + 1,
      events: club.events + 1,
    });
  };

  const closeModal = () => {
    setSelectedClub(null);
    setJoinedClub(null);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>

      {/* NAVBAR */}
      <nav className="navbar">
        <div
          className="logo"
          onClick={() => setActivePage("home")}
        >
          <span className="logo-icon">✦</span>
          <span>ClubConnect</span>
        </div>

        <div className="nav-links">
          <button
            className={activePage === "home" ? "active" : ""}
            onClick={() => setActivePage("home")}
          >
            Home
          </button>

          <button
            onClick={() => {
              setActivePage("clubs");
              document
                .getElementById("explore")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Explore Clubs
          </button>

          <button
            onClick={() =>
              document
                .getElementById("events")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Events
          </button>
        </div>

        <div className="nav-actions">
          <button
            className="theme-btn"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <button
            className="join-nav-btn"
            onClick={() =>
              document
                .getElementById("explore")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Find a Club
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">

        <div className="hero-content">
          <div className="hero-badge">
            ✨ Your campus. Your community.
          </div>

          <h1>
            Find Your
            <span> Campus Tribe.</span>
          </h1>

          <p>
            Discover clubs, connect with students and participate
            in activities that match your interests.
          </p>

          <div className="hero-search">
            <span>🔍</span>

            <input
              type="text"
              placeholder="Search clubs, interests or activities..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button onClick={() => setSearch("")}>
                ✕
              </button>
            )}
          </div>

          <div className="hero-stats">
            <div>
              <strong>{clubs.length}</strong>
              <span>Clubs</span>
            </div>

            <div>
              <strong>700+</strong>
              <span>Members</span>
            </div>

            <div>
              <strong>90+</strong>
              <span>Events</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-one">💻</div>
          <div className="floating-card card-two">🎨</div>
          <div className="floating-card card-three">🏆</div>

          <div className="hero-circle">
            <span>🤝</span>
          </div>
        </div>

      </section>

      {/* DASHBOARD */}
      <section className="dashboard">

        <div className="dashboard-heading">
          <div>
            <span className="small-label">YOUR CAMPUS</span>
            <h2>Explore Your Community</h2>
          </div>

          <div className="dashboard-mini-stats">
            <div>
              <strong>{favorites.length}</strong>
              <span>Saved Clubs</span>
            </div>

            <div>
              <strong>{joinedClub ? 1 : 0}</strong>
              <span>Joined</span>
            </div>
          </div>
        </div>

        <div className="dashboard-grid">

          <div className="dashboard-feature">
            <div className="feature-icon">🎯</div>

            <div>
              <span>PERSONALIZED</span>
              <h3>Find something you love</h3>
              <p>
                Explore clubs based on your interests and
                discover your next campus experience.
              </p>
            </div>

            <button
              onClick={() =>
                document
                  .getElementById("explore")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Start Exploring →
            </button>
          </div>

          <div className="dashboard-feature yellow">
            <div className="feature-icon">❤️</div>

            <div>
              <span>YOUR FAVORITES</span>
              <h3>{favorites.length} clubs saved</h3>
              <p>
                Save clubs that interest you and easily
                find them later.
              </p>
            </div>

            <button
              onClick={() =>
                document
                  .getElementById("explore")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Clubs →
            </button>
          </div>

        </div>
      </section>

      {/* TRENDING */}
      <section className="section trending">
        <div className="section-heading">
          <div>
            <span className="small-label">TRENDING NOW</span>
            <h2>Popular Clubs</h2>
          </div>

          <span className="result-count">
            {filteredClubs.length} clubs available
          </span>
        </div>

        <div className="club-grid trending-grid">
          {clubs.slice(0, 3).map((club) => (
            <ClubCard
              key={club.id}
              club={club}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              openClub={openClub}
            />
          ))}
        </div>
      </section>

      {/* EXPLORE */}
      <section className="section explore-section" id="explore">

        <div className="section-heading">
          <div>
            <span className="small-label">DISCOVER</span>
            <h2>Explore Clubs</h2>
            <p>
              Find the community that matches your interests.
            </p>
          </div>
        </div>

        {/* CATEGORY FILTER */}
        <div className="category-bar">
          {categories.map((item) => (
            <button
              key={item.name}
              className={category === item.name ? "selected" : ""}
              onClick={() => setCategory(item.name)}
            >
              <span>{item.icon}</span>
              {item.name}
            </button>
          ))}
        </div>

        {/* CLUB GRID */}
        <div className="club-grid">

          {filteredClubs.map((club) => (
            <ClubCard
              key={club.id}
              club={club}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              openClub={openClub}
            />
          ))}

        </div>

        {filteredClubs.length === 0 && (
          <div className="empty-state">
            <div>🔎</div>
            <h3>No clubs found</h3>
            <p>Try another search or category.</p>

            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
            >
              Reset Filters
            </button>
          </div>
        )}

      </section>

      {/* EVENTS */}
      <section className="section events-section" id="events">

        <div className="section-heading">
          <div>
            <span className="small-label">WHAT'S HAPPENING</span>
            <h2>Upcoming Events</h2>
          </div>
        </div>

        <div className="events-grid">

          {clubs.slice(0, 4).map((club, index) => (
            <div className="event-card" key={club.id}>

              <div className="event-date">
                <strong>{25 + index}</strong>
                <span>SEP</span>
              </div>

              <div className="event-info">
                <span>{club.category}</span>
                <h3>{club.nextEvent}</h3>
                <p>
                  📍 {club.location}
                </p>
                <p>
                  🕒 {club.time}
                </p>
              </div>

              <button onClick={() => openClub(club)}>
                View →
              </button>

            </div>
          ))}

        </div>

      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">
          <span>✦</span> ClubConnect
        </div>

        <p>
          Discover. Connect. Participate.
        </p>

        <span>
          © 2026 ClubConnect
        </span>
      </footer>

      {/* CLUB MODAL */}
      {selectedClub && (
        <div
          className="modal-overlay"
          onClick={closeModal}
        >

          <div
            className="club-modal"
            onClick={(e) => e.stopPropagation()}
          >

            {!joinedClub ? (

              <>
                <button
                  className="modal-close"
                  onClick={closeModal}
                >
                  ✕
                </button>

                <div className="modal-cover">
                  <div className="modal-robot">
                    {selectedClub.icon}
                  </div>
                </div>

                <div className="modal-content">

                  <span className="club-category">
                    {selectedClub.category}
                  </span>

                  <h2>{selectedClub.name}</h2>

                  <p className="modal-description">
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
                      <strong>
                        {selectedClub.events}+
                      </strong>
                      <span>Events</span>
                    </div>

                    <div>
                      <strong>
                        {selectedClub.rating}
                      </strong>
                      <span>Rating</span>
                    </div>

                  </div>

                  <div className="tags">
                    {selectedClub.tags.map((tag) => (
                      <span key={tag}>#{tag}</span>
                    ))}
                  </div>

                  <div className="next-event-box">
                    <div className="event-icon">📅</div>

                    <div>
                      <span>NEXT EVENT</span>
                      <strong>
                        {selectedClub.nextEvent}
                      </strong>

                      <p>
                        {selectedClub.date} •{" "}
                        {selectedClub.time}
                      </p>

                      <small>
                        📍 {selectedClub.location}
                      </small>
                    </div>
                  </div>

                  <button
                    className="join-main-btn"
                    onClick={() => joinClub(selectedClub)}
                  >
                    Join {selectedClub.name} →
                  </button>

                </div>
              </>

            ) : (

              /* SUCCESS SCREEN */
              <div className="success-screen">

                <div className="success-animation">
                  ✓
                </div>

                <span className="success-badge">
                  🎉 Membership Confirmed
                </span>

                <h2>
                  You're officially in!
                </h2>

                <p>
                  You successfully joined{" "}
                  <strong>{joinedClub.name}</strong>.
                </p>

                <div className="success-stats">

                  <div>
                    <strong>
                      {joinedClub.members}
                    </strong>
                    <span>Members</span>
                  </div>

                  <div>
                    <strong>
                      {joinedClub.events}
                    </strong>
                    <span>Events</span>
                  </div>

                  <div>
                    <strong>
                      ⭐ {joinedClub.rating}
                    </strong>
                    <span>Rating</span>
                  </div>

                </div>

                <div className="membership-status">
                  <span>✓</span>

                  <div>
                    <strong>
                      Membership Status
                    </strong>
                    <p>Active Member</p>
                  </div>
                </div>

                <div className="joined-event">

                  <div className="joined-event-icon">
                    📅
                  </div>

                  <div>
                    <span>NEXT EVENT</span>

                    <h3>
                      {joinedClub.nextEvent}
                    </h3>

                    <p>
                      {joinedClub.date} •{" "}
                      {joinedClub.time}
                    </p>

                    <small>
                      📍 {joinedClub.location}
                    </small>
                  </div>

                </div>

                <div className="success-actions">

                  <button
                    className="dashboard-btn"
                    onClick={() => {
                      closeModal();

                      document
                        .getElementById("events")
                        ?.scrollIntoView({
                          behavior: "smooth",
                        });
                    }}
                  >
                    View Club Dashboard →
                  </button>

                  <button
                    className="continue-btn"
                    onClick={closeModal}
                  >
                    Continue Exploring
                  </button>

                </div>

              </div>

            )}

          </div>

        </div>
      )}

    </div>
  );
}


/* CLUB CARD */
function ClubCard({
  club,
  favorites,
  toggleFavorite,
  openClub,
}) {
  const isFavorite = favorites.includes(club.id);

  return (
    <div
      className="club-card"
      style={{ "--club-color": club.color }}
    >

      <div className="card-top">

        <div className="club-icon">
          {club.icon}
        </div>

        <button
          className={
            isFavorite
              ? "favorite active"
              : "favorite"
          }
          onClick={() => toggleFavorite(club.id)}
        >
          {isFavorite ? "♥" : "♡"}
        </button>

      </div>

      <span className="card-category">
        {club.category}
      </span>

      <h3>{club.name}</h3>

      <p>{club.description}</p>

      <div className="card-tags">
        {club.tags.map((tag) => (
          <span key={tag}>
            #{tag}
          </span>
        ))}
      </div>

      <div className="card-bottom">

        <div className="member-count">
          👥 {club.members}+ members
        </div>

        <button
          className="explore-btn"
          onClick={() => openClub(club)}
        >
          Explore →
        </button>

      </div>

    </div>
  );
}

export default App;