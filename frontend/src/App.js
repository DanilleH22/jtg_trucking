import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import NavBar from "../src/components/NavBar.js";
import ContactUs from "./pages/contact/ContactUs";
import Services from "./pages/services/Services";
import AboutUs from "./pages/about/AboutUs";
import Homepage from "./pages/homepage/Homepage";
import Footer from "../src/components/Footer.js"

function App() {
  return (
    <Container fluid="md"
    className='testing'
    style={{ width: '100%', overflow: 'hidden'}}
    >
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<h1>Page not found!</h1>} />
      </Routes>
      <Footer />
      
    </Container>
  );
}

export default App;
