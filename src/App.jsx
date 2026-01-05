import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";



// Page imports
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

// AOS for scroll animations
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import GlobalCursor from "./components/GlobalCursor";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Ensures page scroll resets on route change */}
      <Navbar />
      <GlobalCursor />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
