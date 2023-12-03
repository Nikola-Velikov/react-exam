import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import { Navbar  as Header} from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { AboutUs } from "./components/aboutUs/AboutUs";
import { Catalog } from "./components/catalog/Catalog";
import Login from "./components/login/Login";
import { AuthProvider } from "./context/authContext";
import { Navbar } from "react-bootstrap";
function App() {
  return (
    <>
      <AuthProvider>

      <Header />
      <div id="preloader">
        <div className="jumper">
          <div />
          <div />
          <div />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/login" element={<Login />} />


      </Routes>
      <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
