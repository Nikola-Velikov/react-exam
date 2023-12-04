import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import { Navbar  as Header} from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { AboutUs } from "./components/aboutUs/AboutUs";
import { Catalog } from "./components/catalog/Catalog";
import Login from "./components/login/Login";
import Register from './components/register/Register'
import { AuthProvider } from "./context/authContext";
import { Navbar } from "react-bootstrap";
import Logout from "./components/logout/Logout";
import Create from "./components/create/Create";
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
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/create" element={<Create />} />

      </Routes>
      <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
