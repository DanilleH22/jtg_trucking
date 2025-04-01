import React, { useRef, useState, useEffect } from "react";
import { Row, Col, Container, Button, Image, Alert, Nav } from "react-bootstrap";
import trucking3 from "../../assets/trucking3.jpg";
import trucking1 from "../../assets/trucking1.jpg";
import styles from "../../styles/Homepage.module.css";
import Card from 'react-bootstrap/Card';
import "react-day-picker/style.css";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import axios from "../../api/axiosDefaults.js"
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import FlipCard from "../../components/FlippingCards/FlipCard.jsx";

const Homepage = () => {

/**
   * Send API request a quote information
   */

  const [requestQuoteData, setRequestQuoteData] = useState({
    name: "",
    company: "",
    email: "",
    phone_number: "",
    pickup_location: "",
    drop_off_location: "",
    preferred_date: "",
    type_of_freight: "",
    weight_of_freight: "",
    additional_services: ""
  });

  const handleDateChange = (event) => {
    const selectedDate = new Date(event.target.value); 
    if (selectedDate instanceof Date && !isNaN(selectedDate)) {
      setSelected(selectedDate);
      setRequestQuoteData((prevState) => ({
        ...prevState,
        preferred_date: selectedDate.toISOString().split("T")[0],
      }));
    } else {
      console.error("Invalid date selected");
    }
  };
  

const [selected, setSelected] = useState();

  const { name, company, email, phone_number,
    pickup_location, drop_off_location, preferred_date,
    type_of_freight, weight_of_freight, additional_services } = requestQuoteData;

  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRequestQuoteData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value) => {
    setRequestQuoteData((prevState) => ({
        ...prevState,
        phone_number: value,
    }));
};


  /**
   * Reset form when submitted
   */
  const resetForm = () => {
    setRequestQuoteData({
    name: "",
    company: "",
    email: "",
    phone_number: "",
    pickup_location: "",
    drop_off_location: "",
    preferred_date: "",
    type_of_freight: "",
    weight_of_freight: "",
    additional_services: ""
    });
  };

  /**
   * Submit form and alert user of it
   */
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Sending data:", requestQuoteData);
    try {
      await axios.post("/quote/", requestQuoteData);
      setAlertMessage("Message sent successfully!");
      setShowAlert(true);
      resetForm();
    } catch (err) {
      const errorMsg =
        err.response?.data?.error || "An unexpected error occurred. Please try again.";
      setAlertMessage(`Failed to send message: ${errorMsg}`);
      setShowAlert(true);
    }
  };


  return (
    <Container fluid="md">
      {showAlert && (
            <Alert
              variant="success"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              {alertMessage}
            </Alert>
          )}
      <Row className="my-4">
        <Col className="text-center">
          <h1 className="d-flex justify-content-center">JTG TRUCKING</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className={styles.ImageContainer}>
            <img src={trucking3} alt="Trucking" className={styles.Image} />
            <div className={styles.ImageText}>
              <h4><i>Reliable Transport Solutions</i></h4>
              <Button variant="secondary"><Nav.Link as={Link} to="/services" className="mx-2">
              Learn more
            </Nav.Link></Button>
            </div>
          </div>
        </Col>
      </Row>



{/* Why use section */}
<Row>
<h3><italic>Why Should I Choose JTG Trucking??</italic></h3>
</Row>
<Row>
  <Col>
  
<div className="card-container">
      <FlipCard
        frontContent={
          <div>
            <p>{String.fromCodePoint(128337)}</p>
            <h6>Fast Delivery</h6>
            <p><i>On-time, always</i></p>
          </div>
        }
        backContent={
          <div>
        
            <p>Time-sensitive? No problem. </p>
            <p>Our AI-powered route optimization analyzes traffic, weather, and road closures in real-time to shave hours off delivery windows.</p>
          </div>
        }
      />
          </div> 
</Col>

<Col>
<div className="card-container">
      <FlipCard
        frontContent={
          <div>
            <p>{String.fromCodePoint(128176)}</p>
            <h6>Competitive Rates</h6>
            <p><i>Transparent pricing</i></p>
          </div>
        }
        backContent={
          <div>
        
            <p>We cut costs—not corners.</p>
            <p>Our dynamic pricing model adjusts for fuel surcharges, seasonal demand, and backhaul opportunities, saving clients up to 20%.</p>
          </div>
        }
      />
          </div> 
</Col>
    <Col>
    <div className="card-container">
      <FlipCard
        frontContent={
          <div>
            <p>{String.fromCodePoint(128272)}</p>
            <h6>Secure & Safe</h6>
            <p><i>Goods insured</i></p>
          </div>
        }
        backContent={
          <div>
        
            <p>Ship worry-free </p>
            <p>With all-risk insurance covering theft, damage, and Acts of God. Policies start at 0.15per 100 value. Claims processed in 72 hours or less. Your freight’s safety is our legal obligation.</p>
          </div>
        }
      />
          </div> 
    </Col>
</Row>

<Row>
  <Col>
<div className="card-container">
      <FlipCard
        frontContent={
          <div>
            <p>{String.fromCodePoint(128205)}</p>
            <h6>Nationwide Coverage</h6>
            <p><i>Covered... anywhere</i></p>
          </div>
        }
        backContent={
          <div>
        
            <p>From Los Angeles to New York </p>
            <p>Every small town in between—our coast-to-coast network ensures no job is out of reach. We operate 500+ trucks and partner with local carriers for last-mile delivery.</p>
          </div>
        }
      />
          </div> 
</Col>

<Col>
<div className="card-container">
      <FlipCard
        frontContent={
          <div>
            <p>{String.fromCodePoint(128667)}</p>
            <h6>Reliable Drivers</h6>
            <p><i>Count on Us</i></p>
          </div>
        }
        backContent={
          <div>
        
            <p>The backbone of our operations</p>
            <p>Undergoing rigorous training, including safety certifications, defensive driving courses, and cargo security protocols.</p>
          </div>
        }
      />
          </div> 
</Col>
    <Col>
    <div className="card-container">
      <FlipCard
        frontContent={
          <div>
            <p>{String.fromCodePoint(128272)}</p>
            <h6>Real-Time Tracking</h6>
            <p><i>Oh there's my stuff</i></p>
          </div>
        }
        backContent={
          <div>
        
            <p>Transparency isn’t just a feature </p>
            <p>Know exactly where your shipment is, through updates sent to your phone number. Receive automated alerts for delays, temperature changes (for refrigerated loads), or unexpected stops.</p>
          </div>
        }
      />
          </div> 
    </Col>

</Row>

          {/* Request a quote */}
      <Row className="my-2 pt-3">
        <Col>
        <Card>
            <Card.Header className="d-flex justify-content-center">
              Request a Quote
            </Card.Header>
            <Card.Body>
              <form id="request-form" onSubmit={handleSubmit} method="POST">
                <div className="form-group">
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name here"
                    name="name"
                    id="name"
                    autoComplete="on"
                    value={name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your company name here"
                    name="company"
                    id="company"
                    value={company}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address:</label>
                  <input
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Enter your email here"
                    name="email"
                    id="email"
                    autoComplete="on"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                <label htmlFor="phone_number">Phone number:</label>
                <PhoneInput
    className="form-control"
    placeholder="Enter phone number"
    name="phone_number"
    value={phone_number}
    onChange={handlePhoneChange}
/>

      </div>
                <div className="form-group">
                  <label htmlFor="pickup_location">Pickup location:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your pickup location here"
                    name="pickup_location"
                    id="pickup_location"
                    value={pickup_location}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="drop_off_location">Drop off location:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your drop off location here"
                    name="drop_off_location"
                    id="drop_off_location"
                    value={drop_off_location}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="preferred_date">Select preferred pick up date:</label>
                  <input
  type="date"
  className="form-control"
  name="preferred_date"
  id="preferred_date"
  value={preferred_date}
  onChange={handleDateChange}
/>
<p>Selected Date: {preferred_date}</p>
                </div>


                <div className="form-group">
                  <label htmlFor="type_of_freight">Type of freight:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the type of freight here"
                    name="type_of_freight"
                    id="type_of_freight"
                    value={type_of_freight}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="weight_of_freight">Weight of freight:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter the weight of freight here"
                    name="weight_of_freight"
                    id="weight_of_freight"
                    value={weight_of_freight}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="additional_services">Additional services:</label>
                  <textarea
                  type="text"
                    className="form-control"
                    rows="5"
                    placeholder="Enter your message here"
                    id="additional_services"
                    name="additional_services"
                    value={additional_services}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex justify-content-center my-2">
                  <Button type="submit" className="btn btn-danger">
                    Submit
                  </Button>
                </div>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
