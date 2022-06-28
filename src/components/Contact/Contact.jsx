import React from "react";

import "./ContactStyles.css";

const contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="form-container">
          <form>
            <h2>
              <span>Contact</span> Us
            </h2>
            <div>
              <input type="text" placeholder="Enter your name" />
            </div>
            <div>
              <input type="email" placeholder="Enter your e-mail" />
            </div>
            <div>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button className="btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default contact;
