import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import RestaurantDetails from "./components/RestaurantDetails";
// import { useSearch } from "./hooks/useSearch";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/search/restaurants/:id" element={<RestaurantDetails />} />
        <Route path="/search/restaurants" element={<LandingPage />} />
        <Route
          path="/"
          element={<Navigate to="/search/restaurants" replace />}
        />
      </Routes>
    </>
  );
}
