import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Button, Container, Row, Col, Card } from 'reactstrap';
import Sidebar from './sidebar';
import Header from './header';
import Footer from './footer';
import config from '../../config';
import { addProp } from '../services/properties';
import { toast } from 'react-toastify';

const AddProperty = () => {
  const [propertyDetails, setPropertyDetails] = useState({
    title: '',
    address: '',
    rate: '',
    description: '',
    img: '',
    cityId: '',
    category: '',
    poid: localStorage.getItem("po_id"),
  });

  const [categories, setCategories] = useState([]);
  const [places, setPlaces] = useState([]);
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  let actualToken = localStorage.getItem("token");
  let finalToken = "Bearer " + actualToken;

  useEffect(() => {
    async function fetchData() {
      try {
        const categoryResponse = await fetch(`${config.url}/api/property/categories`, {
          headers: {
            Authorization: finalToken,
          },  
        });
        const categoryData = await categoryResponse.json();
        if (categoryData.status === 'success') {
          setCategories(categoryData.data); // Set the data array
        } else {
          console.error('Error fetching categories:', categoryData.error);
        }
  
        const placeResponse = await fetch(`${config.url}/api/place/all`, {
          headers: {
            Authorization: finalToken,
          },
        });
        const placeData = await placeResponse.json();
        console.log('Place Data:', placeData);
  
        if (placeData.status === 'success') {
          setPlaces(placeData.data); // Set the data array
        } else {
          console.error('Error fetching places:', placeData.error);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  
    fetchData();
  }, []);
  
  


  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails({
      ...propertyDetails,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const submitProperty = async () => {
    try {
      const result = await addProp(propertyDetails);
      console.log('Submit Property Response:', result);
      if (result.data['status'] === "success") {
        toast.success("New property added successfully");
        setMessage('Property added successfully.');
        setIsSuccess(true);
      } else {
        setMessage('Failed to add property.');
        setIsSuccess(false);
      }
    } catch (error) {
      console.error('Error adding property:', error);
      setMessage('Failed to add property.');
      setIsSuccess(false);
    }
  };
  

 const messageStyle = {
  color: isSuccess ? 'green' : 'red',
  marginTop: '10px'
};

  return (
    <>
      <Sidebar />
      <div className="main-content">
        <Header showCards={true} />
        <Container fluid className="mt--6">
          <Row className="justify-content-center ml-8 mr-8" style={{ width: "900px" }}>
            <Card className="shadow align-items-center">
              <Col md="10" className="justify-content-center">
                <span><p className="h1 mt-3" style={{ fontSize: "2.5rem", fontFamily: "sans-serif" }}>Add Property</p></span>
                <Form onSubmit={handleSubmit} className="mt-5">
                  <h4>Property Details</h4>
                  <FormGroup>
                    <Label for="title">Property Name</Label>
                    <Input
                      type="text"
                      name="title"
                      id="title"
                      placeholder="Enter property name"
                      value={propertyDetails.title}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                      type="textarea"
                      name="description"
                      id="description"
                      placeholder="Enter property description"
                      value={propertyDetails.description}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="address">Address</Label>
                    <Input
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Enter property address"
                      value={propertyDetails.address}
                      onChange={handleChange}
                      required
                    />
                  </FormGroup>
                  <h4 className='mt-5'>Property Features</h4>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="rate">Price ($)</Label>
                        <Input
                          type="number"
                          name="rate"
                          id="rate"
                          placeholder="Enter price"
                          value={propertyDetails.rate}
                          onChange={handleChange}
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Label for="category">Category</Label>
                    <Input
                      type="select"
                      name="category"
                      id="category"
                      value={propertyDetails.category}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select category</option>
                      {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.category}</option>
                      ))}
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="placeId">Place</Label>
                    <Input
                      type="select"
                      name="cityId"
                      id="cityId"
                      value={propertyDetails.cityId}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select place</option>
                      {places.map(place => (
                        <option key={place.id} value={place.id}>{place.place}</option>
                      ))}
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label>Image Path Link</Label>
                     <Input
                       type="url"
                       name='img'
                       id='img'
                       value={propertyDetails.img}
                       onChange={handleChange}
                       required
                    />
                  </FormGroup>
                  <div>
                  <Button className="mb-4 mt-4"color="primary" type="submit" onClick={submitProperty}>Submit</Button>
                  {message && <p style={messageStyle}>{message}</p>}
                  </div>
                </Form>
              </Col>
            </Card>
          </Row>
          <Footer className="footer" />
        </Container>
      </div>
    </>
  );
};

export default AddProperty;
