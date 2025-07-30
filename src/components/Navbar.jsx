import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    return (<>

        <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Olympic.com</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/medals">Medals</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sports
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/sports/football">Football</Link></li>
                                <li><Link className="dropdown-item" to="/sports/swimming">Swimming</Link></li>
                                <li><Link className="dropdown-item" to="/sports/gymnastics">Gymnastics</Link></li>
                                <li><Link className="dropdown-item" to="/sports/cycling">Cycling</Link></li>
                                <li><Link className="dropdown-item" to="/sports/basketball">Basketball</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link className="dropdown-item" to="/sports">View More...</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/schedule">Schedule</NavLink>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/user">User</Link>
                        </li>
                    </ul>
                    <form action='./search' method="GET" className="d-flex" role="search">
                        <input name="q" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    </>
    );
}
export default Navbar;