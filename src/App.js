import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Contacts } from "./pages/Contacts";
import { Features } from "./pages/Features";
import { Homepage } from "./pages/Homepage";

export const App = () => {
  return (
    <div className="container">
      
      <Navbar />

      <Routes>
          <Route 
            path="/"
            element={<Homepage />}
          />

          <Route 
            path="/features"
            element={<Features />}
          />

          <Route 
            path="/contacts"
            element={<Contacts />}
          />
          


      </Routes>
    </div>
  );
}


