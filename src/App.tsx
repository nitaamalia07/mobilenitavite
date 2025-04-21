import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivatRoute" // Import PrivateRoute

import Home from "./pages/home"; 
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Register from "./pages/register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Halaman utama (Home) bisa diakses tanpa login */}
        <Route path="/" element={<Home />} />

        {/* Halaman login bisa diakses tanpa login */}
        <Route path="/rest/v1/login" element={<Login />} />

        {/* Halaman register bisa diakses tanpa login */}
        <Route path="/rest/v1/register" element={<Register />} />

        {/* Halaman dashboard hanya bisa diakses oleh pengguna yang sudah login */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
