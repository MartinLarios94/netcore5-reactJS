import { NavLink } from "react-router-dom";

export default function Menu() {
    const classActive = "active";
    return(

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <NavLink className="navbar-brand" activeClassName={classActive} to="/">React Películas</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={classActive} to="/generos">
                                Géneros
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={classActive} to="/peliculas/filtrar">
                                Filtrar Películas
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={classActive} to="/actores">
                                Actores
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={classActive} to="/cines">
                                Cines
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName={classActive} to="/peliculas/crear">
                                Crear Película
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}