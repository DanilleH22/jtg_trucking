import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";

import ContactUs from "./pages/contact/ContactUs";
import Services from "./pages/services/Services";
import AboutUs from "./pages/about/AboutUs";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <Container fluid="md"
    className='testing'
    style={{ width: '100%', overflow: 'hidden'}}
    >
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact_us" element={<ContactUs />} />
        <Route path="*" element={<h1>Page not found!</h1>} />
      </Routes>
    </Router>
    </Container>
  );
}

export default App;
