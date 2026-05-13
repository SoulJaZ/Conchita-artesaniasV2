import "./Navbar.css"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <h2>Conchita Artesanías</h2>
            </div>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/products">Productos</Link>
                </li>
                <li>
                    <Link to="/cart">Carrito</Link>
                </li>

            </ul>
        </nav>
    )
}

export default Navbar;