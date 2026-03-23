import "../styles/founders.css";

export default function Founders() {
  const founders = [
    {
      name: "Omprakash",
      role: "CEO",
      description:
        "Focused on building innovative products and empowering students.",
      image: "https://i.ibb.co/RpDYfBxm/om-removebg-preview-1.png",
    },
    {
      name: "Bharath Kumar",
      role: "CTO",
      description: "Leads technology and builds scalable product solutions.",
      image: "https://i.ibb.co/kgshXWSr/Photo-removebg-preview.png",
    },
    {
      name: "Loga Kumaresan",
      role: "MD",
      description: "Manages operations and ensures smooth team workflow.",
      image: "https://i.ibb.co/84zFrhYn/lk.png",
    },
  ];

  return (
    <section className="founders container">
      <h2>Meet Our Founders</h2>

      <div className="cards">
        {founders.map((founder, index) => (
          <div className="card" key={index}>
            <img src={founder.image} alt={founder.name} />
            <h3>{founder.name}</h3>
            <p className="role">{founder.role}</p>
            <p>{founder.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
