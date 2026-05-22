import {
  useContext
} from "react";

import {
  AuthContext
} from "../../../context/AuthContext.jsx";

// PROFILE PAGE

function Profile() {

  const { user } = useContext(AuthContext);

  return (

    <main className="
      min-h-screen
      bg-[#faf7f2]
      py-16
    ">

      <div className="
        max-w-4xl
        mx-auto
        px-6
      ">

        <div className="
          bg-white
          rounded-3xl
          shadow-xl
          p-10
        ">

          <div className="
            flex
            items-center
            gap-6
            mb-10
          ">

            {/* AVATAR */}

            <div className="
              w-24
              h-24
              rounded-full
              bg-[#8b5e3c]
              text-white
              flex
              items-center
              justify-center
              text-3xl
              font-bold
            ">

              {user?.name?.charAt(0)}

            </div>

            {/* INFO */}

            <div>

              <h1 className="
                text-4xl
                font-bold
                text-gray-900
              ">

                {user?.name}

              </h1>

              <p className="
                text-gray-500
                mt-2
              ">

                {user?.email}

              </p>

              <span className="
                inline-block
                mt-4

                bg-[#eaded1]
                text-[#8b5e3c]

                px-4
                py-2

                rounded-full
                text-sm
                font-semibold
              ">

                {user?.role}

              </span>

            </div>

          </div>

        </div>

      </div>

    </main>
  )
}

export default Profile;