import { Link } from "react-router-dom";


// HERO SECTION

function Hero(){

  return(

    <section className="bg-[#f8f5f2]">


      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        py-20
        grid
        md:grid-cols-2
        gap-12
        items-center
      ">


        {/* CONTENIDO IZQUIERDO */}

        <div>


          {/* Badge */}

          <span
            className="
            inline-block
            bg-[#eaded1]
            text-[#8b5e3c]
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold
            uppercase
            tracking-wider
          "
          >

            Artesanías hechas a mano

          </span>


          {/* Título */}

          <h1
            className="
            text-5xl
            md:text-6xl
            font-bold
            leading-tight
            text-gray-900
            mt-6
          "
          >

            Diseños únicos
            para personas
            auténticas

          </h1>


          {/* Descripción */}

          <p
            className="
            text-lg
            text-gray-600
            mt-6
            leading-relaxed
            max-w-xl
          "
          >

            Descubre accesorios y artesanías creadas
            con pasión, detalle y creatividad.
            Cada pieza refleja tradición,
            elegancia y autenticidad.

          </p>


          {/* Botones */}

          <div className="flex gap-4 mt-8 flex-wrap">


            {/* Botón principal */}

            <Link

              to="/products"

              className="
              bg-[#8b5e3c]
              hover:bg-[#6f472d]
              text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              shadow-lg
              transition
              duration-300
            "
            >

              Explorar productos

            </Link>


            {/* Botón secundario */}

            <Link

              to="/login"

              className="
              border-2
              border-[#8b5e3c]
              text-[#8b5e3c]
              hover:bg-[#8b5e3c]
              hover:text-white
              px-8
              py-4
              rounded-xl
              font-semibold
              transition
              duration-300
            "
            >

              Iniciar sesión

            </Link>

          </div>


          {/* Stats */}

          <div className="flex gap-10 mt-12 flex-wrap">


            <div>

              <h3 className="text-3xl font-bold text-[#8b5e3c]">

                +500

              </h3>

              <p className="text-gray-600">

                Clientes felices

              </p>

            </div>


            <div>

              <h3 className="text-3xl font-bold text-[#8b5e3c]">

                +120

              </h3>

              <p className="text-gray-600">

                Productos únicos

              </p>

            </div>


            <div>

              <h3 className="text-3xl font-bold text-[#8b5e3c]">

                100%

              </h3>

              <p className="text-gray-600">

                Hecho a mano

              </p>

            </div>

          </div>

        </div>


        {/* IMAGEN HERO */}

        <div className="relative">


          {/* Fondo decorativo */}

          <div
            className="
            absolute
            inset-0
            bg-[#eaded1]
            rounded-[40px]
            rotate-3
          "
          ></div>


          {/* Imagen */}

          <img

            src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200"

            alt="Artesanías"

            className="
            relative
            rounded-[40px]
            shadow-2xl
            object-cover
            h-[600px]
            w-full
          "
          />

        </div>

      </div>

    </section>
  )
}

export default Hero;