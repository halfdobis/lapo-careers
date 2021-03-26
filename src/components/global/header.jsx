import logo from '../../assets/lapo-logo.png';
import './header.css'


function Header() {
  return (
    <div className="header sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={logo} alt="logo" />
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link mr-4" href="/#">home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-4" href="/#">professionals</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link mr-4" href="/#">internship/graduates</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-4" href="/#">live at lapo</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link mr-4" href="/login">sign in</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-4" href="/login">sign up</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;