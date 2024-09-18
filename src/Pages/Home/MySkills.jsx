import skillsData from "../../data/skills.json"; // Import your JSON data

export default function MySkills() {
  return (
    <section id="Expertise">
      <div className="outer-skill">
        <h1>My Expertise</h1>
        <div className="skills-container">
          {Object.keys(skillsData).map((category, index) => (
            <div key={index} className="skill-category">
              <h2>{category}</h2>
              <div className="skills-list">
                {skillsData[category].map((skill, index) => (
                  <div key={index} className="skill-box">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="skill-image"
                    />
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
