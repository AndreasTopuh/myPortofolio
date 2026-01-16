import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/style.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import ProjectModal from './components/ProjectModal';

function App() {
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true
    });

    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
      // Refresh AOS after loading
      setTimeout(() => {
        AOS.refresh();
      }, 100);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Scroll spy for active section
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'education', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 65;
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Preloader loading={loading} />
      <Header 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
      />
      <Home />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects onOpenModal={() => setModalOpen(true)} />
      <Contact />
      <ProjectModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </>
  );
}

export default App;

