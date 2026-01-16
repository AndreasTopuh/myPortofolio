function About() {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="col-md-6" data-aos="fade-up">
          <h4>01</h4>
          <h1 className="size-50">Know <br /> About me</h1>
          <div className="h-50"></div>
          <p>
            I am a highly motivated Computer Science graduate from{' '}
            <a href="https://www.unklab.ac.id/" target="_blank" rel="noopener noreferrer">
              Klabat University
            </a>{' '}
            with a strong academic record (GPA 3.89/4.00) and deep interest in Artificial Intelligence, 
            Full-Stack Development, and Human-Centered Computing. Currently, I am pursuing my Master of 
            Computer Science in Artificial Intelligence at{' '}
            <a href="https://www.apu.edu.my/" target="_blank" rel="noopener noreferrer">
              APU Malaysia
            </a>. Through my undergraduate coursework, graduate studies, and independent projects, I have 
            developed both theoretical understanding and hands-on experience in AI-based systems, including 
            computer vision and natural language processing.
          </p>
          <p>
            I am particularly eager to explore the intersections between AI and healthcare, where I can apply 
            advanced machine learning techniques to support human decision-making and improve quality of life.
          </p>
          <div className="h-50"></div>
          <img src="/images/Signature.jpg" width="230" alt="Signature" />
          <div className="h-50"></div>
        </div>
        <div className="col-md-6 about-img-div" data-aos="fade-left">
            <img 
            src="/images/about-img.jpg" 
            className="img-responsive" 
            alt="Andreas Jeno Figo Topuh"
          />
          <div className="about-border"></div>
  
        </div>
      </div>
    </div>
  );
}

export default About;
