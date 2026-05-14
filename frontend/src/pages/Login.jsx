import {
  useState,
  useContext
} from "react";

import { useNavigate, Link } from "react-router-dom";

import {
  AuthContext
} from "../context/AuthContext";

// LOGIN PAGE

function Login() {
  // NAVEGACIÓN

  const navigate = useNavigate();
  // CONTEXTO AUTH

  const { login } = useContext(AuthContext);
  // ESTADOS


  const [formData, setFormData] = useState({

    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  // HANDLE INPUTS


  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value
    });
  };
  // LOGIN

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      setError("");

      await login(formData);

      navigate("/");

    } catch (error) {

      console.error(error);

      setError("Correo o contraseña incorrectos");

    } finally {

      setLoading(false);
    }
  };

  return (

    <main className="
      min-h-screen
      bg-[#faf7f2]
      flex
      items-center
      justify-center
      px-6
      py-16
    ">

      <div className="
        bg-white
        rounded-3xl
        shadow-2xl
        overflow-hidden
        max-w-5xl
        w-full
        grid
        md:grid-cols-2
      ">

        {/* PANEL IZQUIERDO */}

        <div className="
          hidden
          md:flex
          flex-col
          justify-center
          bg-[#8b5e3c]
          text-white
          p-12
        ">

          <h2 className="
            text-5xl
            font-bold
            leading-tight
            mb-6
          ">

            Bienvenido
            nuevamente

          </h2>

          <p className="
            text-lg
            text-[#f5e6da]
            leading-relaxed
          ">

            Accede a tu cuenta para
            descubrir productos únicos,
            administrar tus pedidos
            y guardar tus favoritos.

          </p>

        </div>

        {/* FORMULARIO */}

        <div className="p-10 md:p-14">

          <h1 className="
            text-4xl
            font-bold
            text-gray-900
            mb-3
          ">

            Iniciar sesión

          </h1>

          <p className="
            text-gray-500
            mb-10
          ">

            Ingresa tus credenciales.

          </p>

          {/* ERROR */}

          {
            error && (

              <div className="
                bg-red-100
                text-red-600
                p-4
                rounded-xl
                mb-6
              ">

                {error}

              </div>
            )
          }

          {/* FORM */}

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* EMAIL */}

            <div>

              <label className="
                block
                mb-2
                font-medium
                text-gray-700
              ">

                Correo electrónico

              </label>

              <input
                type="email"
                name="email"
                placeholder="correo@email.com"
                onChange={handleChange}
                required
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  px-4
                  py-4
                  outline-none
                  focus:ring-2
                  focus:ring-[#8b5e3c]
                "
              />

            </div>

            {/* PASSWORD */}

            <div>

              <label className="
                block
                mb-2
                font-medium
                text-gray-700
              ">

                Contraseña

              </label>

              <input
                type="password"
                name="password"
                placeholder="********"
                onChange={handleChange}
                required
                className="
                  w-full
                  border
                  border-gray-300
                  rounded-xl
                  px-4
                  py-4
                  outline-none
                  focus:ring-2
                  focus:ring-[#8b5e3c]
                "
              />

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="
                w-full
                bg-[#8b5e3c]
                hover:bg-[#6f472d]
                text-white
                py-4
                rounded-xl
                font-semibold
                transition
              "
            >

              {
                loading
                  ? "Ingresando..."
                  : "Iniciar sesión"
              }

            </button>

          </form>

          {/* REGISTER */}

          <p className="
            text-center
            text-gray-500
            mt-8
          ">

            ¿No tienes cuenta?

            {" "}

            <Link
              to="/register"
              className="
                text-[#8b5e3c]
                font-semibold
              "
            >

              Crear cuenta

            </Link>

          </p>

        </div>

      </div>

    </main>
  );
}

export default Login;