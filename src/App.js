import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./Components/footer/Footer";
import Main from "./Components/pages/main/Main";
import AboutUs from "./Components/pages/about us/AboutUs";
import ContactUs from "./Components/pages/contact us/ContactUs";
import FreeEducation from "./Components/pages/free education/FreeEducation";
import Cources from "./Components/pages/toturial/Courses";
import MainCurrency from "./Components/pages/currency display/MainCurrency";
import SpotSupport from "./Components/pages/spot support/SpotSupport";
import SpotSupportExtension from "./Components/pages/spot support extension/SpotSupportExtension";
import Homepage from "./Components/pages/currency display/Pages/Homepage";
import Coinpage from "./Components/pages/currency display/Pages/Coinpage";
import Header from "./Components/header/Header";
import SignUp from "./Components/login signUp/SignUp";
import Login from "./Components/login signUp/Login";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>

      <Routes>
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>

      <Routes>
        <Route path="/FreeEducation" element={<FreeEducation />} />
      </Routes>

      <Routes>
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>

      <Routes>
        <Route path="/toturial" element={<Cources />} />
      </Routes>

      <Routes>
        <Route path="/currencyDisplay" element={<MainCurrency />} />
      </Routes>

      <Routes>
        <Route path="/spotSupport" element={<SpotSupport />} />
      </Routes>

      <Routes>
        <Route
          path="/SpotSupportExtension"
          element={<SpotSupportExtension />}
        />
      </Routes>

      <Routes>
        <Route path="/currencyDisplayCoin" element={<Homepage />} />
        <Route path="/currencyDisplayCoin/coins/:id" element={<Coinpage />} />
      </Routes>

      <Routes>
        <Route path="/registerAndLogin" element={<SignUp />} />
      </Routes>

      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
