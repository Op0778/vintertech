import "../styles/about.css";

export default function About() {
  const members = [
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
      description:
        "Oversees company operations and ensures smooth execution of business strategies.",
      image:
        "https://i.ibb.co/DD6Njsdm/Whats-App-Image-2026-03-19-at-3-33-54-PM-removebg-preview.png",
    },
    {
      name: "Geetha",
      role: "Designer",
      description:
        "Designs user-friendly interfaces and creates visually appealing product experiences.",
      image: "https://i.ibb.co/LDLH2wLm/geetha-removebg-preview.png",
    },
  ];

  return (
    <section className="about container">
      {/* Company Info */}
      <div className="company-info">
        <h1>About Our Company</h1>
        <p>
          We are a product-based startup focused on building innovative digital
          solutions while providing hands-on internship opportunities for
          students.
        </p>

        <div className="info-cards">
          <div className="info-card">
            <h3>Our Vision</h3>
            <p>
              To build innovative products and become a leading product-based
              company driven by young talent.
            </p>
          </div>

          <div className="info-card">
            <h3>Our Mission</h3>
            <p>
              <div className="card">
                Develop creative and impactful real-world products.
              </div>
              <div className="card">
                Provide practical experience through real project work.
              </div>
              <div className="card">
                Improve technical and professional skills of interns.
              </div>
              <div className="card">
                Encourage teamwork, creativity, and a strong learning
                environment.
              </div>
              <div className="card">
                Encourage learning of new technologies and tools.
              </div>
              <div className="card">
                Support interns in building strong career paths.
              </div>
              <div className="card">
                Motivate new ideas and problem-solving thinking.
              </div>
              <div className="card">
                Maintain high standards in product development.
              </div>
            </p>
          </div>
        </div>
      </div>

      {/* Members Section */}
      <div className="members">
        <h2>Our Team</h2>

        <div className="member-cards">
          {members.map((member, index) => (
            <div className="member-card" key={index}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p className="role">{member.role}</p>
              <p>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
