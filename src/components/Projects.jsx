import { useState } from 'react';

function Projects({ onOpenModal }) {
  const [filter, setFilter] = useState('*');

  const projects = [
    { id: 1, category: 'logo', image: '/images/portfolio/logo/01.jpg', title: 'Logo Design 1', subtitle: 'Branding' },
    { id: 2, category: 'logo', image: '/images/portfolio/logo/02.jpg', title: 'Logo Design 2', subtitle: 'Branding' },
    { id: 3, category: 'logo', image: '/images/portfolio/logo/03.jpg', title: 'Logo Design 3', subtitle: 'Branding' },
    { id: 4, category: 'graphics', image: '/images/portfolio/graphics/01.jpg', title: 'Graphic Design 1', subtitle: 'Visual Design' },
    { id: 5, category: 'graphics', image: '/images/portfolio/graphics/02.jpg', title: 'Graphic Design 2', subtitle: 'Visual Design' },
    { id: 6, category: 'graphics', image: '/images/portfolio/graphics/03.jpg', title: 'Graphic Design 3', subtitle: 'Visual Design' },
    { id: 7, category: 'web-design', image: '/images/portfolio/web-design/01.jpg', title: 'Web Design 1', subtitle: 'UI/UX Design' },
    { id: 8, category: 'web-design', image: '/images/portfolio/web-design/02.jpg', title: 'Web Design 2', subtitle: 'UI/UX Design' },
    { id: 9, category: 'web-design', image: '/images/portfolio/web-design/03.jpg', title: 'Web Design 3', subtitle: 'UI/UX Design' }
  ];

  const filters = [
    { label: 'All', value: '*' },
    { label: 'Logo Design', value: 'logo' },
    { label: 'Design Graphics', value: 'graphics' },
    { label: 'Web Design', value: 'web-design' }
  ];

  // Check if project should be visible based on filter
  const isVisible = (category) => {
    return filter === '*' || category === filter;
  };

  return (
    <div className="section" id="projects">
      <div className="container">
        <div className="col-md-12">
          <h4>05</h4>
          <h1 className="size-50">My <br /> Projects</h1>
        </div>
        
        <div className="main-container portfolio-inner clearfix">
          <div className="portfolio-div">
            <div className="portfolio">
              {/* Filter Buttons */}
              <div className="categories-grid" data-aos="fade-left">
                <nav className="categories">
                  <ul className="portfolio_filter">
                    {filters.map((f, index) => (
                      <li key={index}>
                        <a 
                          className={filter === f.value ? 'active' : ''} 
                          onClick={(e) => {
                            e.preventDefault();
                            setFilter(f.value);
                          }}
                        >
                          {f.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              {/* Portfolio Grid with smooth transition */}
              <div className="no-padding portfolio_container clearfix" data-aos="fade-up">
                {projects.map((project) => (
                  <div 
                    key={project.id} 
                    className={`col-md-4 col-sm-6 portfolio-item-wrapper ${project.category} ${isVisible(project.category) ? 'show' : 'hide'}`}
                  >
                    <a 
                      className="portfolio_item" 
                      onClick={(e) => {
                        e.preventDefault();
                        onOpenModal();
                      }}
                    >
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="img-responsive" 
                        onError={(e) => {
                          e.target.src = 'https://via.placeholder.com/400x300?text=' + encodeURIComponent(project.title);
                        }}
                      />
                      <div className="portfolio_item_hover">
                        <div className="portfolio-border clearfix">
                          <div className="item_info">
                            <span>{project.title}</span>
                            <em>{project.subtitle}</em>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
