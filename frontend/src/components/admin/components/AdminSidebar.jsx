import {
    Link,
    NavLink
} from "react-router-dom";

import {
    useContext
} from "react";

import {
    AuthContext
} from "../../../context/AuthContext";

// SIDEBAR ADMIN

function AdminSidebar() {

    const { logout } = useContext(AuthContext);

    // LINKS ACTIVOS

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

      w-[260px]
      min-h-screen

      bg-[#2d1f16]

      flex-col
      justify-between

      p-6
    ">

            {/* TOP */}

            <div>

                {/* LOGO */}

                <div className="mb-12">

                    <Link to="/admin">

                        <h1 className="
              text-3xl
              font-bold
              text-white
            ">

                            Conchita

                        </h1>

                    </Link>

                    <p className="
            text-sm
            text-gray-400
            mt-2
          ">

                        Panel de administración

                    </p>

                </div>


                {/* NAVIGATION */}

                <nav className="
          flex
          flex-col
          gap-3
        ">

                    {/* DASHBOARD */}

                    <NavLink
                        to="/admin"
                        end
                        className={navStyle}
                    >

                        <div className="
              px-5
              py-4
              rounded-2xl
              font-medium
              text-red-300
            ">

                            Dashboard

                        </div>

                    </NavLink>


                    {/* PRODUCTOS */}

                    <NavLink
                        to="/admin/products"
                        className={navStyle}
                    >

                        <div className="
              px-5
              py-4
              rounded-2xl
              font-medium
              text-red-300
            ">

                            Productos

                        </div>

                    </NavLink>


                    {/* ÓRDENES */}

                    <NavLink
                        to="/admin/orders"
                        className={navStyle}
                    >

                        <div className="
              px-5
              py-4
              rounded-2xl
              font-medium
              text-red-300
            ">

                            Órdenes

                        </div>

                    </NavLink>


                    {/* USUARIOS */}

                    <NavLink
                        to="/admin/users"
                        className={navStyle}
                    >

                        <div className="
              px-5
              py-4
              rounded-2xl
              font-medium
              text-red-300
            ">

                            Usuarios

                        </div>

                    </NavLink>

                </nav>

            </div>


            {/* FOOTER */}

            <div className="pt-10">
                <Link to="/">
                    <button

                        onClick={logout}

                        className="
            w-full

            bg-[#8b5e3c]
            hover:bg-[#6f472d]

            text-white

            px-5
            py-3

            rounded-2xl

            transition
            duration-300
          "
                    >

                        Cerrar sesión

                    </button>
                </Link>

            </div>

        </aside>
    )
}

export default AdminSidebar;