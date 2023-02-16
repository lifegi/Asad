import React, { useRef } from "react";
import "./Styleform.css";
import { Link } from "react-router-dom";
export default function Forget() {
  return (
    <>
      <div className="container" id="submain1">
        <div id="main1">
          <form action="">
            <h2 id="h2">Forgot password</h2>
            <div className="mb-3">
              <input type="text" id="email" placeholder="Email" name="email" />
            </div>
            <br />
            <br />
            <Link to="/Confirmpassword">
              <button
                type="submit"
                className="btn btn-primary me-3"
                id="button"
              >
                Send
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}
