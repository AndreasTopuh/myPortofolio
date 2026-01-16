function Experience() {
  const experiences = [
    {
      date: 'Feb 2024 - May 2025',
      company: 'Indonesian House of Representatives',
      role: 'Content Creator',
      description: (
        <>
          <strong>Digital Content Production</strong>
          <br />
          Design visual content (posters) for social media platforms. Propose content ideas
          aligned with current digital trends. Skilled in capturing photos and videos using
          professional cameras and mobile devices.
        </>
      ),
      delay: '0'
    },
    {
      date: 'Sep 2023',
      company: 'Wizma.ID',
      role: 'Co-Founder | CTO',
      description: 'Initiated and led the technical development of Wizma.ID, a startup focused on simplifying property search and transactions in North Sulawesi. Developed the MVP prototype using modern web technologies and backend infrastructure.',
      delay: '.2'
    },
    {
      date: 'Apr 2023',
      company: 'Freelance',
      role: 'Backend Developer & Graphic Designer',
      description: (
        <>
          <strong>Full-Stack Development & Design</strong>
          <br />
          Develop scalable backend systems using Node.js, Python (AI), or PHP. Design RESTful
          APIs and optimize MySQL databases. Produce high-quality visual designs and provide
          recommendations based on current trends.
        </>
      ),
      delay: '.4'
    }
  ];

  return (
    <div className="section" id="experience">
      <div className="container">
        <div className="col-md-12">
          <h4>02</h4>
          <h1 className="size-50">My <br /> Experience</h1>
          <div className="h-50"></div>
        </div>
        <div className="col-md-12">
          <ul className="timeline">
            {experiences.map((exp, index) => (
              <li key={index} className="timeline-event" data-aos="fade-up" data-aos-delay={exp.delay}>
                <label className="timeline-event-icon"></label>
                <div className="timeline-event-copy">
                  <p className="timeline-event-thumbnail">{exp.date}</p>
                  <h3>{exp.company}</h3>
                  <h4>{exp.role}</h4>
                  <p>{exp.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
