import "./navbar.css"

const Navbar = () => {
    return (
        <nav
      className="navbar navbar-dark navbar-expand-lg py-3 fixed-top silver-border nav-background z-999"
    >
      <div className="container">
        <a href="#" className="navbar-brand redder-text"
          >Vampire Movies <i className="bi bi-camera-reels"></i>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#popular" className="nav-link reddish-text">Popular</a>
            </li>
            <li className="nav-item">
              <a href="#nowPlaying" className="nav-link reddish-text"
                >Now playing</a>
              
            </li>
            <li className="nav-item">
              <a href="#topRated" className="nav-link reddish-text">Top rated</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}

export default Navbar