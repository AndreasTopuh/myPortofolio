function Header() {
  return (
    <header className="d-print-none">
      <div className="container text-center text-lg-left">
        <div className="py-3 clearfix">
          <h1 className="site-title mb-0">Andreas Jeno Figo Topuh</h1>
          <div className="site-nav">
            <nav role="navigation">
              <ul className="nav justify-content-center">

                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.linkedin.com/templateflip"
                    title="LinkedIn"
                  >
                    <i className="fab fa-linkedin" />
                    <span className="menu-title sr-only">LinkedIn</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.instagram.com/templateflip"
                    title="Instagram"
                  >
                    <i className="fab fa-instagram" />
                    <span className="menu-title sr-only">Instagram</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://github.com/templateflip"
                    title="Github"
                  >
                    <i className="fab fa-github" />
                    <span className="menu-title sr-only">Github</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
