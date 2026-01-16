function Skills() {
  const technicalSkills = [
    { name: 'Back-End Programming', stars: 4 },
    { name: 'Adobe Photoshop & Canva', stars: 5 },
    { name: 'CapCut & Premiere Pro', stars: 4 },
    { name: 'Microsoft Office Suite', stars: 5 }
  ];

  const softSkills = [
    { name: 'Time Management', stars: 5 },
    { name: 'Adaptability', stars: 5 },
    { name: 'Effective Communication', stars: 4 },
    { name: 'English Language', stars: 4 }
  ];

  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span 
          key={i} 
          style={{ 
            color: i < count ? '#FFD700' : '#ddd',
            fontSize: '18px',
            marginRight: '3px'
          }}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  // Code icon SVG
  const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-icon">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );

  // Person icon SVG
  const PersonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="skill-icon">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );

  return (
    <div className="section" id="skills">
      <div className="container">
        <div className="col-md-12">
          <h4>04</h4>
          <h1 className="size-50">My <br /> Skills</h1>
          <div className="h-50"></div>
        </div>
        <div className="col-md-6" data-aos="fade-up">
          <h3><CodeIcon /> Technical Skills</h3>
          <div className="h-50"></div>
          <ul className="skills-list">
            {technicalSkills.map((skill, index) => (
              <li key={index}>
                <strong>{skill.name}</strong>
                {renderStars(skill.stars)}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-md-6" data-aos="fade-up" data-aos-delay=".2">
          <h3><PersonIcon /> Soft Skills</h3>
          <div className="h-50"></div>
          <ul className="skills-list">
            {softSkills.map((skill, index) => (
              <li key={index}>
                <strong>{skill.name}</strong>
                {renderStars(skill.stars)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
