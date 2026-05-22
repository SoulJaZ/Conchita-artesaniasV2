// Hooks React
import { memo } from "react";

// ADMIN NAVBAR

function AdminNavbar() {

    // USER STORAGE
    const user = JSON.parse(
        localStorage.getItem("user")
    );

    return (

        <header
            className="
                bg-white
                border-b
                border-gray-200

                px-6
                md:px-10

                py-5

                flex
                items-center
                justify-between

                sticky
                top-0
                z-40
            "
        >

            {/* LEFT */}

            <div>

                <h2
                    className="
                        text-2xl
                        md:text-3xl

                        font-bold

                        text-gray-900
                    "
                >

                    Dashboard Admin

                </h2>

                <p
                    className="
                        text-sm
                        text-gray-500
                        mt-1
                    "
                >

                    Gestión completa de la tienda

                </p>

            </div>


            {/* RIGHT */}

            <div
                className="
                    flex
                    items-center
                    gap-4
                "
            >

                {/* USER INFO */}

                <div className="text-right">

                    <p
                        className="
                            font-semibold
                            text-gray-800
                        "
                    >

                        {
                            user?.name || "Administrador"
                        }

                    </p>

                    <span
                        className="
                            text-sm
                            text-gray-500
                            capitalize
                        "
                    >

                        {
                            user?.role || "admin"
                        }

                    </span>

                </div>


                {/* AVATAR */}

                <div
                    className="
                        w-12
                        h-12

                        rounded-full

                        bg-[#8b5e3c]

                        text-white

                        flex
                        items-center
                        justify-center

                        font-bold
                        text-lg

                        shadow-md
                    "
                >

                    {
                        user?.name
                            ? user.name.charAt(0).toUpperCase()
                            : "A"
                    }

                </div>

            </div>

        </header>
    );
}

export default memo(AdminNavbar);