import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Housing from "./pages/Housing/Housing.jsx";
import Notfound from "./pages/Notfound/Notfound.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Housing" element={<Housing />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;