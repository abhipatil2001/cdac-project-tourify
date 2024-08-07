import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../../services/customer";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import BeforeLoginNavWithoutLoginBtn from "../../../components/beforeLoginNavWithoutLoginBtn/beforeLoginNavWithoutLoginBtn";

const CustomerLogin = () => {
  // create state members
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // for navigation purpose (where do we want to redirect user after successfull login)
  const navigate = useNavigate();

  const onCancel = () => {
    navigate("/home");
  };

  const onLogin = async () => {
    // client side validation
    if (email.length === 0) {
      toast.warning("enter email");
    } else if (password.length === 0) {
      toast.warning("enter password");
    } else {
      const result = await login(email, password);

      if (result.status === "success") {
        const token = result?.data[0]?.token;
        const name = result?.data[0]?.user?.name;
        const id = result?.data[0]?.user?.id;

        localStorage.setItem("token", token);
        localStorage.setItem("name", name);
        localStorage.setItem("c_id", id);

        navigate("/dashboard");
      } else {
        toast.error("Invalid email or password !!");
      }
    }
  };

  return (
    <div>
      <BeforeLoginNavWithoutLoginBtn />
      <Container>
        <Row className="mt-5">
          <Col sm={{ size: 6, offset: 3 }}>
            <Card color="dark" inverse>
              <CardHeader className="text-center">
                <h3>Customer Login</h3>
              </CardHeader>

              <CardBody>
                <Form onSubmit={onLogin}>
                  {/* for email field */}
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="text"
                      id="email"
                      placeholder="Enter email here"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </FormGroup>

                  {/* for password field */}
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      id="password"
                      placeholder="Enter password here"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                  </FormGroup>

                  <Container className="text-center">
                    <Button onClick={onLogin} color="primary" outline>
                      Login
                    </Button>
                    <Button
                      onClick={onCancel}
                      type="reset"
                      className="ms-2"
                      color="danger"
                      outline
                    >
                      Cancel
                    </Button>
                    <br />
                    <br />
                    <label> Not registered yet?</label>
                    <br />
                    <Link className="ms-3" to={"/customer/register"}>
                      Register Now
                    </Link>
                  </Container>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>

    // <div>
    //   <h2 className="page-title">Login</h2>

    //   <div className="row">
    //     <div className="col"></div>

    //     <div className="col">
    //       <div className="form">
    //         <div className="mb-3">
    //           <label htmlFor="">Email</label>
    //           <input
    //             onChange={(e) => {
    //               setEmail(e.target.value);
    //             }}
    //             type="email"
    //             className="form-control"
    //           />
    //         </div>
    //         <div className="mb-3">
    //           <label htmlFor="">Password</label>
    //           <input
    //             onChange={(e) => {
    //               setPassword(e.target.value);
    //             }}
    //             type="password"
    //             className="form-control"
    //           />
    //         </div>

    //         <div className="mb-3">
    //           <button onClick={onLogin} className="mt-2 btn btn-success">
    //             Login
    //           </button>

    //           <Link to={"/register"}>Register Here</Link>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="col"></div>
    //   </div>
    // </div>
  );
};

export default CustomerLogin;
