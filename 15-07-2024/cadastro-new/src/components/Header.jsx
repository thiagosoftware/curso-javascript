import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Cadastro News
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="#">
                Home
              </a> */}
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              {/* <a className="nav-link" href="#">
                Cadastro
              </a> */}
              <Link to="/cadastro" className="nav-link">
                Cadastro
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/sobre"} className="nav-link" >Sobre</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
