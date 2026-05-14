import {

  Link

} from "react-router-dom";

// FOOTER GLOBAL

function Footer(){

  // Año dinámico
  const currentYear = new Date().getFullYear();


  return(

    <footer className="bg-black text-white mt-16">

      <div className="max-w-7xl mx-auto px-5 py-10 grid gap-10 md:grid-cols-3">


        {/* Marca */}

        <section>

          <h2 className="text-2xl font-bold mb-4">

            Conchita Artesanías

          </h2>


          <p className="text-gray-400">

            Artesanías únicas hechas con creatividad y pasión.

          </p>

        </section>


        {/* Navegación */}

        <section>

          <h3 className="text-xl font-bold mb-4">

            Navegación

          </h3>


          <ul className="space-y-2">

            <li>

              <Link to="/">

                Inicio

              </Link>

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

        </section>


        {/* Contacto */}

        <section>

          <h3 className="text-xl font-bold mb-4">

            Contacto

          </h3>


          <ul className="space-y-2 text-gray-400">

            <li>

              Bogotá, Colombia

            </li>


            <li>

              contacto@conchita.com

            </li>


            <li>

              +57 324 420 9196

            </li>

          </ul>

        </section>

      </div>


      {/* Bottom footer */}

      <div className="border-t border-gray-700 py-5 text-center text-gray-400">

        <p>

          © {currentYear} Conchita Artesanías.
          Todos los derechos reservados.

        </p>

      </div>

    </footer>
  )
}

export default Footer;