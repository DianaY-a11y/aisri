import React from "react";
import "./about.css";

function About() {
  return (
    <div>
      <div className="About" style={{ backgroundColor: "white" }}>
        <div className="Text" style={{ color: "black" }}>
          <h1>Overview</h1>
        </div>
      </div>
      <div className="About">
        <h1>Founding Story</h1>
        <div className="Text">
          Asiri Rural Development Network (Asiri RDN) was founded on December
          11, 2019 and registered on September 25, 2020. Its existence emerged
          from an idea presented in a community development project paper
          written by Mr. Richard Nyarko, Grad Student at University of
          Saskatchewan. Originally, the Asiri RDN was co-founded by Richard
          Nyarko (initiator/leader) and Ernest Tachie-Abiam (manager). Nana
          Asante Konadu and Mr. Kwasi Addane acted as the first Chairman and
          Vice-Chairman respectively until the formal appointment of Dr. Francis
          Asomah as Chairman and Dr. Elizabeth Konadu as Vice- Chairperson. The
          goal is to contribute to the improvement of socio-economic wellbeing
          of the residents of Asiri through advancing development projects in
          Asiri Ghana. Currently there are over 200 members supporting this
          organization. In addition to those (elsewhere) who are interested in
          supporting rural communities, our members are mainly people from Asiri
          Ghana who are interested in the development of Asiri as their
          community and are ready to contribute to its development.
        </div>
      </div>
      <div className="About" style={{ backgroundColor: "white" }}>
        <div className="Text" style={{ color: "black" }}>
          <h1>Team</h1>
          Our team is made up of an array of professionals, including medical
          doctors, public health specialists, accountants, professors, students,
          and many others in various fields of occupation. Most of them live in
          Europe, United States, Canada, South Africa, Australia, and Ghana.
        </div>
      </div>
      <div className="About">
        <h1>Members</h1>
        <div className="Text">
          Currently there are over 200 members supporting this organization. In
          addition to those (elsewhere) who are interested in supporting rural
          communities, our members are mainly people from Asiri Ghana who are
          interested in the development of Asiri as their community and are
          ready to contribute to its development. Membership is voluntary and is
          open to all individuals living in Ghana or elsewhere around the world
          who express interest to support the objectives of the organization.
        </div>
      </div>
    </div>
  );
}

export default About;
