import { useContext, useState, memo } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

// NAVBAR PROFESIONAL
function Navbar() {
    // CONTEXT CARRITO
    const { cart } = useContext(CartContext);

    // MENÚ MÓVIL
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

    // ESTILO ENLACES ACTIVOS

    const navLinkStyle = ({ isActive }) =>
        isActive
            ? `
        text-[#8b5e3c]
        font-semibold
      `

            : `
        text-gray-700
        hover:text-[#8b5e3c]
        transition
      `;

    return (
        <header className="
      sticky
      top-0
      z-50
      bg-[#f8f5f2]/90
      backdrop-blur-md
      border-b
      border-[#eaded1]
    ">

            <div className="max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
        ">

                {/* Logo */}

                <Link to="/">

                    <div className="flex flex-col">
                        <span className="
                        text-2xl
                        md:text-3xl
                        font-bold
                        text-[#8b5e3c]
                        tracking-tight
            
                        ">

                            Conchita Artesanías

                        </span>

                        <span
                            className="
              text-xs
              text-gray-500
              tracking-[3px]
              uppercase
            "
                        >

                            Handmade Store

                        </span>
                    </div>



                </Link>


                {/* Botón móvil */}

                <button

                    className="
                    md:hidden 
                    text-3xl
                    text-[#8b5e3c]
                    focus:outline-none"

                    onClick={() => setMenuOpen(!menuOpen)}
                >

                    ☰

                </button>


                {/* Navegación */}

                <nav className={`
                absolute
                md:static

                top-[64px]
                left-0

                w-full
                md:w-auto

                bg-[#f8f5f2]
                md:bg-transparent

                px-6
                md:px-0

                py-6
                md:py-0

                flex-col
                md:flex-row

                gap-6
                md:gap-8

                items-start
                md:items-center

                shadow-lg
                md:shadow-none

          ${menuOpen

                        ? "flex"

                        : "hidden md:flex"
                    }
        `}>


                    {/* Inicio */}

                    <NavLink

                        to="/"

                        className={navLinkStyle}
                    >

                        Inicio

                    </NavLink>


                    <NavLink

                        to="/products"

                        className={navLinkStyle}
                    >

                        Productos

                    </NavLink>


                    {/* CARRITO */}

                    <NavLink

                        to="/cart"

                        className={navLinkStyle}
                    >

                        Carrito

                        {

                            totalItems > 0 && (

                                <span
                                    className="
                  ml-2
                  bg-[#8b5e3c]
                  text-white
                  text-xs
                  px-2
                  py-1
                  rounded-full
                "
                                >

                                    {totalItems}

                                </span>
                            )
                        }

                    </NavLink>


                    {/* LOGIN / PERFIL */}

                    {

                        token ? (

                            <>

                                <NavLink

                                    to="/profile"

                                    className={navLinkStyle}
                                >

                                    Perfil

                                </NavLink>


                                <button

                                    onClick={logout}

                                    className="
                  bg-[#8b5e3c]
                  hover:bg-[#6f472d]
                  text-white
                  px-5
                  py-2
                  rounded-xl
                  transition
                  duration-300
                "
                                >

                                    Salir

                                </button>

                            </>

                        ) : (

                            <NavLink

                                to="/login"

                                className="
                bg-[#8b5e3c]
                hover:bg-[#6f472d]
                text-white
                px-5
                py-2
                rounded-xl
                transition
                duration-300
              "
                            >

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