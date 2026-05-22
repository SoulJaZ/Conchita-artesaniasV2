import {
  NavLink,
  Outlet
} from "react-router-dom";

// ADMIN LAYOUT

function AdminLayout() {

  const linkStyle = ({ isActive }) =>

    isActive

      ? "text-[#8b5e3c] font-bold"

      : "text-gray-600 hover:text-[#8b5e3c]";

  return (

    <div className="
      min-h-screen
      bg-[#f8f5f2]
      flex
    ">

      {/* SIDEBAR */}

      <aside className="
        w-[260px]
        bg-white
        border-r
        p-6
      ">

        <h2 className="
          text-2xl
          font-bold
          text-[#8b5e3c]
          mb-10
        ">

          Panel Admin

        </h2>

        <nav className="
          flex
          flex-col
          gap-6
        ">

          <NavLink
            to="/admin"
            end
            className={linkStyle}
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/admin/products"
            className={linkStyle}
          >
            Productos
          </NavLink>

          <NavLink
            to="/admin/users"
            className={linkStyle}
          >
            Usuarios
          </NavLink>

        </nav>

      </aside>

      {/* CONTENIDO */}

      <main className="
        flex-1
        p-10
      ">

        <Outlet />

      </main>

    </div>
  )
}

export default AdminLayout;