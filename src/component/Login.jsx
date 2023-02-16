import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import MyModal from "./ShowModal";

const Login = () => {
  const navigate = useNavigate();
  const intialvalues = {
    email: "",
    password: "",
  };
  //states
  const [formvalues, setFormvalues] = useState(intialvalues); //intial values
  const [formErrors, setFormErrors] = useState({}); //use in useEffect state to signify error
  const [isSubmit, setIsSubmit] = useState(false);
  const [showModal, setShowModal] = useState(false);
  //use in onChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
  };
  //api use for data transfer
  const closeModal = () => setShowModal(false);
  const onClick = async () => {
    await axios
      .post(
        "http://192.168.1.3:3000/login",
        {
          Email: formvalues.email,
          Password: formvalues.password,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        if (response.data.error) {
          setShowModal(response.data.error);
        } else {
          navigate("/Home");
        }
        console.log("Hellow from Response");
        console.log(response);
      })
      .catch((r) => {
        console.log("Data not response");
        console.log(r);
      });
  };
  //handlesubmit use in onChange event

  const handlesubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formvalues));
    setIsSubmit(true);
  };

  // Email and password validation
  //useEffect start
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formvalues);
    }
  }, [formErrors]);
  //use effect ending
  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$i/;

    if (!values.email) {
      errors.email = "Email is requied";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email!";
    }
    if (!values.password) {
      errors.password = "Password is requied";
    } else if (values.password < 8) {
      errors.password = "Password must be more than 8 chracters!";
    }

    return errors;
  };

  return (
    <>
      <div className="container" id="submain3">
        <div id="main3">
          <form onSubmit={handlesubmit}>
            <h1 id="h1">Sign In</h1> <br /> <br />
            <br />
            <div>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formvalues.email}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.email}</p>
            <div className="mb-3">
              <input
                type="password"
                id="password"
                placeholder="Password"
                name="password"
                value={formvalues.password}
                onChange={handleChange}
              />
              <p>{formErrors.password}</p>
            </div>
            <br />
            <button
              type="submit"
              onClick={onClick}
              className="btn btn-primary me-3"
              id="button"
            >
              Sign In
            </button>
            <br />
            <br />
            <Link className="nav-link" to="/Registrationform" id="sign">
              Don't have an account?<b>Sign up</b>
            </Link>
            <Link to="/forgetpassword" id="Link">
              Forgot passwword
            </Link>
          </form>
        </div>
        {showModal && <MyModal closeModal={closeModal} />}
        {showModal && <p>Some text on screen</p>}
      </div>
    </>
  );
};

export default Login;
