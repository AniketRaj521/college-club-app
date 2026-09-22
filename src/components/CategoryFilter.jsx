function CategoryFilter({ category, setCategory }) {
  const categories = [
    "All",
    "Coding",
    "Sports",
    "Arts",
    "Entrepreneurship"
  ];

  return (
    <div className="filters">
      {categories.map((item) => (
        <button
          key={item}
          className={category === item ? "active" : ""}
          onClick={() => setCategory(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;