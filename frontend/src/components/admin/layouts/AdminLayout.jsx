import { Outlet } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";

// LAYOUT

function AdminLayout() {
    return (
        <div className="
            flex 
            min-h-screen
            ">
        {/* Sidebar */}
            <AdminSidebar />

        {/* Contenido */}
            <div className="
                flex-1
                flex
                flex-col
                min-h-screen
            ">
                {/* Navbar */}
                <AdminNavbar />
                <main className="
                    p-6
                    flex-1
                    md:p-10
                    overflow-y-auto    
                ">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
export default AdminLayout;
