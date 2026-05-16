import { NavLink } from "react-router-dom";

// SIDEBAR ADMIN

function AdminSidebar() {
    const navStyle = ({ isActive }) =>
        isActive
            ? `
            bg-[#8b5e3c]
            text-white
        `
            : `
            text-gray-300
            hover:bg-[#3a281d]
            hover:text-white
        `;
    return (
        <aside className="
            hidden
            md:flex

            w-[250px]
            min-h-screen

            bg-[#2d1f16]
            flex-col
            p-6
        ">
            {/* Logo */}
            <div className="
                mb-12
            ">
                <h1 className="
                    text-3xl
                    font-bold
                    text-white
                ">
                    Conchita
                </h1>
                <p className="
                    text-sm
                    text-gray-400
                    mt-2
                ">
                    Panel de administración
                </p>
            </div>

            {/* Navegación */}
            <nav className="
                flex
                flex-col
                gap-3
            ">
                <NavLink
                    to="/admin/dashboard"
                    className={navStyle}
                >
                    <div className="
                        px-5
                        py-4
                        rounded-2xl
                        font-medium
                    ">
                        Dashboard
                    </div>
                </NavLink>

                <NavLink

                    to="/admin/products"

                    className={navStyle}
                >

                    <div className="
                        px-5
                        py-4
                        rounded-2xl
                        font-medium
                    "
                    >
                        Productos
                    </div>
                </NavLink>

                <NavLink

                    to="/admin/orders"

                    className={navStyle}
                >

                    <div className="
                        px-5
                        py-4
                        rounded-2xl
                        font-medium
                    ">

                        Órdenes

                    </div>

                </NavLink>

                <NavLink

                    to="/admin/users"

                    className={navStyle}
                >

                    <div className="
                        px-5
                        py-4
                        rounded-2xl
                        font-medium
                    ">
                        Usuarios
                    </div>
                </NavLink>
            </nav>
            { /* Footer */}
            <div>
                <button>
                    Cerrar sesión
                </button>
            </div>
        </aside>

    )
}
export default AdminSidebar;