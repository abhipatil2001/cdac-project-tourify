import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { register } from "../../../services/customer";
import { Link, useNavigate } from "react-router-dom";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { ownerRegister } from "../../../services/owner";
import BeforeLoginNavWithoutLoginBtn from "../../../components/beforeLoginNavWithoutLoginBtn/beforeLoginNavWithoutLoginBtn";

// this is register component for customer
const OwnerRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role_id, setRole_id] = useState(102);

  const navigate = useNavigate();

  const onCancel = () => {
    navigate("/home");
  };

  const onRegister = async () => {
    // client side validation
    if (name.length === 0) {
      toast.warning("enter name");
    } else if (email.length === 0) {
      toast.warning("enter email");
    } else if (password.length === 0) {
      toast.warning("enter password");
    } else if (phone.length === 0) {
      toast.warning("enter phone");
    } else if (address.length === 0) {
      toast.warning("enter address");
    } else {
      const result = await ownerRegister(
        name,
        email,
        password,
        phone,
        address,
        role_id
      );
      //   if (result["status"] === "success") {
      if (result.status === "success") {
        toast.success("User Registered successfully");
        navigate("/owner/login");
      } else {
        toast.error("User Registration failed !!");
      }
    }
  };

  return (
    <div>
      <BeforeLoginNavWithoutLoginBtn />
      <Container>
        <Row className="mt-4">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader className="text-center">
                <h3>Sign Up (Property Owner) </h3>
              </CardHeader>
              <CardBody>
                {/* creating form */}
                <Form onSubmit={onRegister}>
                  {/* Name field */}
                  <FormGroup>
                    <Label for="name"> Enter Name </Label>
                    <Input
                      type="text"
                      placeholder="Enter name here"
                      id="name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                      value={name}
                    />
                  </FormGroup>

                  {/* Email field */}
                  <FormGroup>
                    <Label for="email"> Enter Email </Label>
                    <Input
                      type="email"
                      placeholder="Enter email here"
                      id="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      value={email}
                    />
                  </FormGroup>

                  {/* Password field */}
                  <FormGroup>
                    <Label for="password"> Enter Password </Label>
                    <Input
                      type="password"
                      placeholder="Enter password here"
                      id="password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      value={password}
                    />
                  </FormGroup>

                  {/* Phone field */}
                  <FormGroup>
                    <Label for="phone"> Enter Phone </Label>
                    <Input
                      type="text"
                      placeholder="Enter phone no. here"
                      id="phone"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                      value={phone}
                    />
                  </FormGroup>

                  {/* Address field */}
                  <FormGroup>
                    <Label for="address"> Enter Address </Label>
                    <Input
                      type="text"
                      placeholder="Enter address here"
                      id="address"
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                      value={address}
                    />
                  </FormGroup>

                  <Container className="text-center">
                    <Button onClick={onRegister} color="primary" outline>
                      Register
                    </Button>
                    <Button
                      color="danger"
                      outline
                      type="reset"
                      className="ms-2"
                      onClick={onCancel}
                    >
                      Cancel
                    </Button>
                    <br />
                    <br />
                    <label> Already registered?</label>
                    <br />
                    <Link className="ms-3" to={"/owner/login"}>
                      Login Now
                    </Link>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OwnerRegister;
