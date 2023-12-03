import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import { About } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { AboutUs } from "./components/aboutUs/AboutUs";
import { Catalog } from "./components/catalog/Catalog";
function App() {
  return (
    <>
      <div id="preloader">
        <div className="jumper">
          <div />
          <div />
          <div />
        </div>
      </div>

      <About />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/catalog" element={<Catalog />} />


      </Routes>
      <Footer />
    </>
  );
}

export default App;
