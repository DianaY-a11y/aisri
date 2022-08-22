import React from "react";
import { Link } from "react-router-dom";
import "./Action.css";

function Action() {
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
      <div className="action-box">
        <div className="text">
          <div className="Title">Volunteer</div>
          <p>
            There is no wrong way to fundraise for education. Campaign with your
            friends, run a marathon, get your company involved, donate your
            birthday, start a wedding registry the sky is the limit. How will
            you join the movement?
          </p>
        </div>
        <div className="action-image"></div>
      </div>
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

export default Action;
