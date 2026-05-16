// ADMIN NAVBAR

function AdminNavbar() {
    return (
        <header className="
            bg-white
            border-b
            px-6
            md:px-10
            py-6
            flex
            items-center
            justify-between
        ">

            {/* TITLE*/}
            <div>
                <h2>
                    Dashboard Admin
                </h2>
                <p className="
                    text-gray-600
                ">
                    Bienvenido, admin
                </p>
            </div>
            {/* PROFILE */}
            <div className="
                flex
                items-center
                gap-4
            ">
                <div className="text-right">
                    <p className="font-semibold text-gray-800">Administrador</p>
                    <span>
                        Admin Panel
                    </span>
                </div>
                <div className="
                    
                ">
                    A
                </div>
            </div>


        </header>
    )
}
export default AdminNavbar;