import {

  BrowserRouter,
  Routes,
  Route

} from "react-router-dom";


// Layouts
import MainLayout from "./layouts/MainLayout";


// Pages
import Home from "./pages/Home"

import Products from "./pages/Products"

import Cart from "./pages/Cart"

import Login from "./pages/Login";
// APP

function App(){

  return(

    <BrowserRouter>

      <Routes>

        {/* Layout principal */}

        <Route element={<MainLayout />}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App;