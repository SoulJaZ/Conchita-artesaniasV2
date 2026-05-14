import {

  ToastContainer,
  Bounce

} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
// TOAST PROVIDER

function ToastProvider(){

  return(

    <ToastContainer

      position="top-right"

      autoClose={3000}

      hideProgressBar={false}

      newestOnTop={true}

      closeOnClick

      pauseOnHover

      draggable

      theme="light"

      transition={Bounce}
    />
  )
}

export default ToastProvider;