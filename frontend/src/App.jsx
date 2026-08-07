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

// Checkout
import Checkout from "./pages/Checkout";

// Admin layout
// import ProductCard from "./components/ProductCard/ProductCard";

import OrdersAdmin from "./components/admin/pages/OrdersAdmin";

import UserAdmin from "./components/admin/pages/UserAdmin"
import Profile from "./components/admin/pages/Profile";

// ADMIN PAGES
import Dashboard from "./components/admin/pages/Dashboard";
import AdminLayout from "./components/admin/layouts/AdminLayout";
import ProductsAdmin from "./components/admin/pages/ProductsAdmin";
import AdminProtectedRoute from "./components/admin/routes/AdminProtectedRoutes";
// APP

function App() {

  return (

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
            path="/checkout"
            element={<Checkout />}
          />
          <Route
            path="/prueba"
            element={<h1>PRUEBA FUNCIONA</h1>}
          />

          <Route
            path="/login"
            element={<Login />}
          />

        </Route>

        {/* Rutas admin */}
        <Route path="/admin"
          element={
            <AdminProtectedRoute>
              <AdminLayout />
            </AdminProtectedRoute>
          }>
          {/* Aquí irían las rutas del admin */}

          <Route
            index
            element={<Dashboard />}
          />

          <Route
            path="orders"
            element={<OrdersAdmin />}
          />

          <Route
            path="products"
            element={<ProductsAdmin />}
          />
          <Route
            path="users"
            element={<UserAdmin />}
          />
          <Route
            path="profile"
            element={<Profile />}
          />
          {/*
          <Route
            path="analytics"
            element={<AnalyticsCard />}
          />
          */}

        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App;