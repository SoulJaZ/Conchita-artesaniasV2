import {

  Outlet,
  useLocation

} from "react-router-dom";

import {

  useEffect

} from "react";


// Layout Components
import Navbar from "../components/Navbar/Navbar";

import Footer from "../components/Footer/Footer"

import ToastProvider from "../components/Ui/ToastProvider";


// LAYOUT PRINCIPAL

function MainLayout(){
  
    // LOCATION

  const location = useLocation();
  // SCROLL TOP

  useEffect(()=>{

    window.scrollTo(0,0);

  },[location.pathname]);


  return(

    <div className="flex flex-col min-h-screen bg-gray-50">

      {/* Navbar */}

      <Navbar />


      {/* Contenido */}

      <main className="flex-1 w-full">

        <Outlet />

      </main>


      {/* Footer */}

      <Footer />


      {/* Toasts globales */}

      <ToastProvider />

    </div>
  )
}

export default MainLayout;