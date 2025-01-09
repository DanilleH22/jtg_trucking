import React, { useState } from "react";
import { Row, Col, Container, Button, Image, Alert } from "react-bootstrap";
import trucking3 from "../../assets/trucking3.jpg";
import trucking1 from "../../assets/trucking1.jpg";
import styles from "../../styles/Homepage.module.css";
import Card from 'react-bootstrap/Card';
import "react-day-picker/style.css";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import axios from "../../api/axiosDefaults.js"
// import axios from "axios";

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
              <h4>Company Slogan</h4>
              <p>Some generic text</p>
              <Button variant="primary">Learn More</Button>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
        <h3>Why Us</h3>
        <div>
        <Card className={styles.Why1}>
      <Card.Body >Reason 1</Card.Body>
    </Card>
    <Card className={styles.Why2}>
      <Card.Body >Reason 2</Card.Body>
    </Card>
          <Image src={trucking1} alt="Trucking" className={styles.Image2} roundedCircle />
      
        
        
    <Card className={styles.Why3}>
      <Card.Body >Reason 3</Card.Body>
    </Card>
    <Card className={styles.Why4}>
      <Card.Body >Reason 4</Card.Body>
    </Card>
        </div>
        
        </Col>
      </Row>

      <Row>
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
                <div className="d-flex justify-content-center">
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
