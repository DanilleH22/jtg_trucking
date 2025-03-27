import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react'
import { Container, Row, Col, Card, Alert } from "react-bootstrap";
import axios from "../../api/axiosDefaults.js"
import "react-day-picker/style.css";
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import 'react-day-picker/style.css';
import styles from "../../styles/Services.module.css";


const Services = () => {

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
  

const [ setSelected] = useState();

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





const [showForm, setShowForm] = useState(false);

function dropForm() {
  setShowForm(!showForm);
}


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
    <Container>
      {showAlert && (
            <Alert
              variant="success"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              {alertMessage}
            </Alert>
          )}

<Card className="my-3 shadow-sm" id={styles.servicesCard}>
        <Row className="g-0">
          <Col xs={12} md={2}>
          <div className='text-center'>
          <i class="fa-solid fa-screwdriver-wrench fa-5x"></i>
          </div>
          </Col>
          <Col xs={12} md={10}>
            <Card.Body>
              <Card.Title>Freight Transportation</Card.Title>
              <Card.Text>
                "JTG Trucking provides reliable and efficient freight transportation services, ensuring goods are delivered safely and on time. Whether it's full truckload (FTL) or less-than-truckload (LTL) shipping, we have the fleet and logistics expertise to handle various types of cargo, including dry goods, industrial materials, and retail merchandise."
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="my-3 shadow-sm" id={styles.servicesCard}>
        <Row className="g-0">
          <Col xs={12} md={2}>
          <div className='text-center'>
          <i class="fa-solid fa-screwdriver-wrench fa-5x"></i>
          </div>
          </Col>
          <Col xs={12} md={10}>
            <Card.Body>
              <Card.Title>Expedited Shipping</Card.Title>
              <Card.Text>
                "For time-sensitive shipments, we offer expedited shipping services designed to get your freight delivered as quickly as possible. Whether it's urgent medical supplies, perishable goods, or high-priority business shipments, our dedicated team ensures fast transit times and real-time tracking to meet strict deadlines."
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="my-3 shadow-sm" id={styles.servicesCard}>
        <Row className="g-0">
          <Col xs={12} md={2}>
          <div className='text-center'>
          <i class="fa-solid fa-screwdriver-wrench fa-5x"></i>
          </div>
          </Col>
          <Col xs={12} md={10}>
            <Card.Body>
              <Card.Title>Warehouse and Distribution</Card.Title>
              <Card.Text>
                "We provide comprehensive warehousing and distribution solutions, including inventory storage, order fulfillment, and supply chain management. Our strategically located facilities help businesses reduce costs and improve efficiency by ensuring products are stored safely and dispatched on time to retailers, wholesalers, and customers."
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="my-3 shadow-sm" id={styles.servicesCard}>
        <Row className="g-0">
          <Col xs={12} md={2}>
          <div className='text-center'>
          <i class="fa-solid fa-screwdriver-wrench fa-5x"></i>
          </div>
          </Col>
          <Col xs={12} md={10}>
            <Card.Body>
              <Card.Title>Specialised Hauling</Card.Title>
              <Card.Text>
                "Some cargo requires specialized handling, and JTG Trucking is equipped to transport heavy, oversized, or hazardous materials safely. Our specialized hauling services include flatbed trucking for large equipment, temperature-controlled transport for perishable goods, and hazmat-certified carriers for dangerous materials."
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="my-3 shadow-sm" id={styles.servicesCard}>
        <Row className="g-0">
          <Col xs={12} md={2}>
          <div className='text-center'>
          <i class="fa-solid fa-screwdriver-wrench fa-5x"></i>
          </div>
          </Col>
          <Col xs={12} md={10}>
            <Card.Body>
              <Card.Title>Last Mile Devlivery</Card.Title>
              <Card.Text>
                "We help businesses bridge the gap between warehouses and customers with our last-mile delivery services. Whether delivering to retail stores, construction sites, or residential areas, we ensure prompt, secure, and cost-effective final-mile logistics, improving customer satisfaction and delivery efficiency."
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <Card className="my-3 shadow-sm" id={styles.servicesCard}>
        <Row className="g-0">
          <Col xs={12} md={2}>
          <div className='text-center'>
          <i class="fa-solid fa-screwdriver-wrench fa-5x"></i>
          </div>
          </Col>
          <Col xs={12} md={10}>
            <Card.Body>
              <Card.Title>Cross-Border and International Shipping</Card.Title>
              <Card.Text>
                "For businesses engaged in international trade, we offer cross-border and international trucking services. We handle customs clearance, documentation, and logistics coordination to facilitate smooth shipping between countries. Our experienced team ensures compliance with regulations while providing seamless transport for goods across borders."
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      {/* Request a quote  */}

      {/* <Row>
        <Col>
        <Button variant="primary" onClick={handleShow}>
        I'd like a quote!
      </Button> */}
      
        <Row>
        <Col>
<form>
        <button onClick={(event) => { event.preventDefault(); dropForm(); }} className={`${styles.btn} ${styles.liquid}`}>Request a quote</button>
      </form>
      {showForm && (
          <Form id="request-form" onSubmit={handleSubmit} method="POST" key={showForm}>
          
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
          
              
          </Form>
      )}
      
        


     
        </Col>
      </Row>
    </Container>
  )
}

export default Services