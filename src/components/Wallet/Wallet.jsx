import React from "react";
import Money from "../../assets/money-exchange.png";

import "./WalletStyles.css";

const Wallet = () => {
  return (
    <div className="wallet">
      <div className="container">
        {/*Left side*/}
        <div className="left">
          <h2>Do more with crypto, only on LiCoin</h2>
          <p>
            Set up your account and verify your photo ID to get started on
            trading crypto.{" "}
          </p>
          <img src={Money} alt="/" />
        </div>
        {/*Right side*/}
        <div className="right">
          <form>
            <h2>Create an account</h2>
            <div>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div>
              <input type="email" placeholder="Enter your e-mail" />
            </div>
            <div>
              <input type="password" placeholder="Minimum 8 caracters" />
            </div>
            <div className="form-check">
              <input className="checkbox" type="checkbox" />{" "}
              <span>
                I certify that I am 18 years of age or older, agree to the User
                Agreement, and acknowledge the Privacy Policy.
              </span>
            </div>
            <div>
              <button className="btn">Create Free Account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
