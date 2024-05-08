import React from "react";
import health from '../../Assets/Images/health.png'
import Logo from '../../Assets/Images/logo.png'
import x from '../../Assets/Images/x.png'
import './main.css'

const main = () =>{

  return(
  <body>
      <div class="grid">
          <div class="col-1">
              <img class="heart" src={Logo} alt="Logo"/>
            <h2 class="font">Your one stop for H3ALTH</h2>
          </div>

          <div class="col-3">
              <input class="inputs" type="text" id="username" placeholder="Email or Phone Number"/>
              <input class="inputs" type="password" id="password" placeholder="Password"/>
              <button class="login" onclick="validateLogin()">Log In</button>
              <a class="forgot" href="/">Forgot Password ?</a>
              <button class = "signup" onclick="showPopup()">Sign Up</button>          
          </div>

          <div class="row2">
            <img class="health" src={health} alt="Logo"/>
          </div>
      </div>

      <div class="col-2">
        <div class="popup" id="signupPopup">
          <div class="popup-content">
              <div class="grid2">
                <div class="col-12">
                  <img class="x" src={x} alt="Logo" onclick="closePopup()"/>
                  <input class="names" type="text" id="firstname" placeholder="First Name"/>
                  <input class="names" type="text" id="lastname" placeholder="Last Name"/> 
                  <input class="boxinputs" type="date" id="dob" placeholder="Date of Birth"/>
                  <input class="boxinputs" type="email" id="email" placeholder="Email or Phone Number"/>
                  <input class="boxinputs" type="password" id="password" placeholder="Password"/>
                  <button class="login" id="signupButton" onclick="createAccount()">Create Account</button>
                </div>
                      
              </div>
                    
          </div>
            
        </div>
      </div>
  </body>
  );

};

export default main; 