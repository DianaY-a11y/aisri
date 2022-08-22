import React from "react";
import "./Action.css";
import { Link } from "react-router-dom";

function Work() {
  return (
    <div>
      <div className="Front">
        <section>
          <div className="Title">Now It's Your Turn</div>
          <p>
            Together, we can create a brighter future for children across the
            globe.
          </p>
        </section>
      </div>
      <h1 style={{ width: "100%" }}>Ongoing Projects</h1>
      <div className="action-box">
        <div className="text">
          <div className="Title">Construction</div>
          <p>We construct...</p>
        </div>
        <div className="action-image"></div>
      </div>
      <h1 style={{ width: "100%" }}>Ongoing Projects</h1>
      <div className="action-box">
        <div className="action-image"></div>
        <div className="text">
          <div className="Title">Partner With Us</div>
          <p>
            Give the gift of time and begin your journey in philanthropy by
            joining our young professionals committee. Plan events and campaigns
            with your friends to build classrooms in Ghana, Guatemala and Laos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Work;
