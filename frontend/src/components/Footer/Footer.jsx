import { Link } from "react-router-dom";

// FOOTER

function Footer() {

  return (

    <footer className="
      bg-[#2d1f17]
      text-white
      py-16
      mt-20
    ">

      <div className="
        max-w-7xl
        mx-auto
        px-6
        grid
        md:grid-cols-3
        gap-12
      ">

        {/* BRAND */}

        <div>

          <h2 className="
            text-3xl
            font-bold
            mb-4
          ">

            Conchita Artesanías

          </h2>

          <p className="
            text-gray-300
            leading-relaxed
          ">

            Artesanías únicas hechas
            con creatividad y pasión.

          </p>

        </div>

        {/* LINKS */}

        <div>

          <h3 className="
            text-xl
            font-semibold
            mb-4
          ">

            Navegación

          </h3>

          <ul className="space-y-3">

            <li>
              <Link to="/">Inicio</Link>
            </li>

            <li>
              <Link to="/products">
                Productos
              </Link>
            </li>

            <li>
              <Link to="/cart">
                Carrito
              </Link>
            </li>

          </ul>

        </div>

        {/* CONTACT */}

        <div>

          <h3 className="
            text-xl
            font-semibold
            mb-4
          ">

            Contacto

          </h3>

          <p>Bogotá, Colombia</p>

          <p>contacto@conchita.com</p>

          <p>+57 324 420 9196</p>

        </div>

      </div>

      {/* COPYRIGHT */}

      <div className="
        text-center
        text-gray-400
        mt-12
        border-t
        border-gray-700
        pt-6
      ">

        © 2026 Conchita Artesanías.
        Todos los derechos reservados.

      </div>

    </footer>
  );
}

export default Footer;