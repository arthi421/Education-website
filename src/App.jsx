import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';

import Home from './components/Home';
import Signup from "./components/Signup";
import HeroSection from "./components/HeroSection";
import Login from "./components/Login";
import AboutUs from "./components/AboutUs";
import Courses1 from "./components/Courses1";

function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hero" element={<HeroSection />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/courses" element={<Courses1 />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
