import React, { useState, useEffect } from "react";
import "./Styleform.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import MyModal from "./ShowModal";
export default function Sign() {
  const intialvalues = {
    first_name: "",
    last_name: "",

    email: "",
    password: "",
  };
  const navigate = useNavigate();
  const [formvalues, setFormvalues] = useState(intialvalues);
  const [showModal, setShowModal] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const closeModal = () => setShowModal(false);

  //use in onChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formvalues, [name]: value });
  };

  const handleSubmit = async (e) => {
    await axios
      .post(
        "http://192.168.1.3:3000/signup",
        {
          FirstName: formvalues.first_name,
          LastName: formvalues.last_name,
          Email: formvalues.email,
          Password: formvalues.password,
          Dob: formvalues.date,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((response) => {
        console.log(response);
        if (response.data.error) {
          setShowModal(response.data.error);
        } else {
          navigate("/Home");
        }
      });

    /* axios({
      method: 'post',
      url: "http://192.168.1.3:3000/signup",
      headers: {}, 
      body: {
        FirstName: formvalues.first_name,
        LastName: formvalues.last_name,
        Email: formvalues.email,
        Password: formvalues.password,
        Phone: formvalues.tel,
        Dob: formvalues.date
      }
    } )*/
  };

  //handlesubmit
  const handlesubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formvalues));
    setIsSubmit(true);
    getsessionitems(formvalues);
  };

  //useEffect
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors]);
  // validation
  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i;
    if (!values.first_name) {
      errors.first_name = "First Name is requied";
    }
    if (!values.last_name) {
      errors.last_name = "Last Name is requied";
    }
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
  //Session storage
  useEffect(() => {
    sessionStorage.setItem("list", JSON.stringify(formvalues));
  }, [formvalues]);
  const getsessionitems = () => {
    let local = sessionStorage.getItem("list");

    if (local) {
      return JSON.stringify(sessionStorage.getItem("list"));
    } else {
      return [];
    }
  };

  return (
    <>
      <div className="container" id="submain2">
        <div id="main2">
          <form onSubmit={handlesubmit}>
            <h1 id="h1">Registration</h1>
            <br />
            <br />
            <div className="mb-3">
              <input
                type="text"
                id="inputID"
                name="first_name"
                value={formvalues.first_name}
                onChange={handleChange}
                placeholder="Name"
              />
            </div>
            <p>{formErrors.first_name}</p>
            {/* Last Name*/}
            <div className="mb-3">
              <input
                type="text"
                id="last_Name"
                name="last_name"
                value={formvalues.last_name}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>
            <p>{formErrors.last_name}</p>
            <p>{formErrors.tel}</p>
            <div className="mb-3">
              {/*Email*/}
              <p>Hi How are you</p>
              <p>Hows you?</p>
              <input
                type="text"
                id="email"
                placeholder="Email"
                value={formvalues.email}
                onChange={handleChange}
                name="email"
              />
            </div>
            <p>{formErrors.email}</p>
            <div className=" me-3">
              {/*password*/}

              <input
                type="password"
                id="password"
                value={formvalues.password}
                onChange={handleChange}
                placeholder="Password"
                name="password"
              />
            </div>{" "}
            <br />
            <p>{formErrors.password}</p>
            <button
              type="submit"
              className="btn btn-primary me-3"
              onClick={handleSubmit}
              id="button"
            >
              Sign up
            </button>
            <br />
            <br />
            <Link className="nav-link" to="/" id="sign2">
              I have an account?<b>Sign in</b>
            </Link>
          </form>
        </div>
        {showModal && <MyModal closeModal={closeModal} />}
        {showModal && <p>Some text on screen</p>}
      </div>
    </>
  );
}
