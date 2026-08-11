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
import MyOrders from "./pages/Orders";
// Admin layout
// import ProductCard from "./components/ProductCard/ProductCard";


// Admin Pages
import OrdersAdmin from "./components/admin/pages/OrdersAdmin";
import UserAdmin from "./components/admin/pages/UserAdmin"
import Profile from "./components/admin/pages/Profile";
import Dashboard from "./components/admin/pages/Dashboard";
import ProductsAdmin from "./components/admin/pages/ProductsAdmin";

// Proection
import AdminLayout from "./components/admin/layouts/AdminLayout";
import AdminProtectedRoute from "./components/admin/routes/AdminProtectedRoutes";
// APP

function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Layout principal */}

        <Route element={<MainLayout />}>
        {/* INICIO */}
          <Route
            path="/"
            element={<Home />}
          />

        {/* PRODUCTOS */}
          <Route
            path="/products"
            element={<Products />}
          />

        {/* CARRITO */}
          <Route
            path="/cart"
            element={<Cart />}
          />

          {/* CHECKOUT */}
          <Route
            path="/checkout"
            element={<Checkout />}
          />

          {/* MIS PEDIDOS - CUSTOMER */}
          <Route
            path="/my-orders"
            element={<MyOrders />}
          />

          {/* PRUEBA */}
          <Route
            path="/prueba"
            element={<h1>PRUEBA FUNCIONA</h1>}
          />

          {/* LOGIN */}
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

          { /* DASHBOARD */}
          <Route
            index
            element={<Dashboard />}
          />

          { /* ÓRDENES */}
          <Route
            path="orders"
            element={<OrdersAdmin />}
          />

          { /* PRODUCTOS */}
          <Route
            path="products"
            element={<ProductsAdmin />}
          />

          { /* USUARIOS */}
          <Route
            path="users"
            element={<UserAdmin />}
          />

          { /* PERFIL */}
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