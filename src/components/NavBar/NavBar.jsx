import React from "react";
import { Link, NavLink} from 'react-router-dom'
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import miImagen from "../../../public/images/axiouscdos.jpg"

const NavBar = () => {
    const notificationCount = 0;
    return (
        <nav className="navbar navbar-expand-lg">
        <div className="container">
        <h1>
        <Link to="/" className="navbar-brand">¡Tú mejor tienda de ropa!</Link>
        <hr />
        <img src={miImagen} alt="" />
        </h1>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item">
            <NavLink to="/category/buzosycanguros" className="nav-link">Buzos y Canguros</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/category/pantalones" className="nav-link">Pantalones</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/category/calzados" className="nav-link">Calzados</NavLink>
            </li>
            <li className="nav-item">
            <NavLink to="/cart" className="nav-link">Ver mi Carrito</NavLink>
            </li>
            </ul>
        </div>
        <CartWidget notificationCount={notificationCount} />
        </div>
    </nav>
    );
};

export default NavBar;
