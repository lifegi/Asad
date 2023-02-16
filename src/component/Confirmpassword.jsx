import React from 'react';
import './Styleform.css';
import {Link} from "react-router-dom";
export default function Resetpassword() {
  return (
    <>
      <div className="container" id="submain4" >
        <div className="main4">
          <form >
            <h1 className ="h1" >
              Change<br/> Password
            </h1>
            <div className="mb-3">
              <input type="password" 
                id="password" 
                name="password"
                placeholder='Password'
                
              />
            </div>
            <div className="mb-3">
              <input 
                type="password"  
                id="password"
                name="password"
                placeholder='Confirm Password'
                
              />
            </div>
              <br/>
              <Link to="/">
            <button 
              type="button" 
              className="btn btn-primary my-2"
              id="btn"
              >
              Confirm
            </button>
            </Link>
          </form>
        </div>
      </div>      
    </>
  );
}