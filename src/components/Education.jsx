function Education() {
  const educations = [
    {
      date: 'Oct 2025',
      title: 'BNSP Artificial Intelligence Management',
      subtitle: 'National Professional Certification',
      description: 'Certified in managing AI solution workflows. Skilled in data reconstruction and technical planning for AI projects.',
      delay: '.1'
    },
    {
      date: 'Aug 2021 - May 2025',
      title: 'Bachelor of Computer Science',
      subtitle: 'Universitas Klabat, North Minahasa',
      description: <><strong>GPA: 3.89 / 4.00</strong><br />First place winner in Research Competition (April 2025)</>,
      delay: '0'
    },
    {
      date: 'Mar 2025',
      title: 'Data Management Staff Certification',
      subtitle: 'Professional Certification',
      description: 'Certified in professional data handling using Microsoft Office Suite, aligned with workplace standards.',
      delay: '.2'
    },
    {
      date: 'Feb 2025',
      title: 'Digital Marketing Certification',
      subtitle: 'Professional Certification',
      description: 'Comprehensive training in digital marketing strategies including social media promotion and digital branding.',
      delay: '.3'
    },
    {
      date: 'May 2024',
      title: 'Adobe Certified Professional (ACP)',
      subtitle: 'Photoshop - Universitas Klabat',
      description: 'Certified in advanced Photoshop skills, demonstrating expertise in digital image editing and creative design.',
      delay: '.4'
    }
  ];

  return (
    <div className="section" id="education">
      <div className="container">
        <div className="col-md-12">
          <h4>03</h4>
          <h1 className="size-50">Education & <br /> Certifications</h1>
          <div className="h-50"></div>
        </div>
        <div className="col-md-12">
          <ul className="timeline">
            {educations.map((edu, index) => (
              <li key={index} className="timeline-event" data-aos="fade-up" data-aos-delay={edu.delay}>
                <label className="timeline-event-icon"></label>
                <div className="timeline-event-copy">
                  <p className="timeline-event-thumbnail">{edu.date}</p>
                  <h3>{edu.title}</h3>
                  <h4>{edu.subtitle}</h4>
                  <p>{edu.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Education;
