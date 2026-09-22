function ClubCard({ club }) {
  return (
    <div className="club-card">
      <div className="club-icon">
        {club.icon}
      </div>

      <h3>{club.name}</h3>

      <span className="category">
        {club.category}
      </span>

      <p>{club.description}</p>

      <div className="members">
        👥 {club.members} Members
      </div>

      <button>View Details</button>
    </div>
  );
}

export default ClubCard;