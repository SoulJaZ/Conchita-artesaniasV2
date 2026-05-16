import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CartDrawer from "../components/CartDrawer/CartDrawer";
import ToastProvider from "../components/Ui/ToastProvider";

// LAYOUT

function MainLayout() {

  return (

    <>

      <Navbar />

      <CartDrawer />

      <ToastProvider />

      <main className="min-h-screen">

        <Outlet />

      </main>

      <Footer />

    </>
  );
}

export default MainLayout;