import { useContext, useState, memo } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

// NAVBAR PROFESIONAL
function Navbar() {
    // CONTEXT CARRITO
    const { cart } = useContext(CartContext);

    // MENÚ MÓVILccf
    const [menuOpen, setMenuOpen] = useState(false);

    // TOTAL ITEMS
    const totalItems = cart.reduce(
        (acc, item) =>
            acc + item.quantity,
        0
    );

    // TOKEN LOGIN
    const token = localStorage.getItem("token");

    // LOGOUT
    const logout = () => {
        localStorage.removeItem("token");
        window.location.reload();
    }

    return (
        <header className="bg-black text-white shadow">

            <div className="max-w-7xl mx-auto px-5 py-4 flex justify-between items-center">

                {/* Logo */}

                <Link to="/">

                    <h1 className="text-2xl font-bold">

                        Conchita Artesanías

                    </h1>

                </Link>


                {/* Botón móvil */}

                <button

                    className="md:hidden"

                    onClick={() => setMenuOpen(!menuOpen)}
                >

                    ☰

                </button>


                {/* Navegación */}

                <nav className={`

          ${menuOpen

                        ? "flex"

                        : "hidden"
                    }

          md:flex
          flex-col
          md:flex-row
          gap-6
          absolute
          md:static
          top-16
          left-0
          w-full
          md:w-auto
          bg-black
          p-5
          md:p-0
        `}>


                    {/* Inicio */}

                    <NavLink

                        to="/"

                        className={({ isActive }) =>

                            isActive

                                ? "text-yellow-400"

                                : ""
                        }
                    >

                        Inicio

                    </NavLink>


                    {/* Productos */}

                    <NavLink

                        to="/products"

                        className={({ isActive }) =>

                            isActive

                                ? "text-yellow-400"

                                : ""
                        }
                    >

                        Productos

                    </NavLink>


                    {/* Carrito */}

                    <NavLink

                        to="/cart"

                        className={({ isActive }) =>

                            isActive

                                ? "text-yellow-400"

                                : ""
                        }
                    >

                        Carrito ({totalItems})

                    </NavLink>


                    {/* Usuario autenticado */}

                    {

                        token ? (

                            <>

                                <NavLink to="/profile">

                                    Perfil

                                </NavLink>


                                <button

                                    onClick={logout}
                                >

                                    Salir

                                </button>

                            </>

                        ) : (

                            <NavLink to="/login">

                                Login

                            </NavLink>
                        )
                    }

                </nav>

            </div>

        </header>
    )
}

export default memo(Navbar);