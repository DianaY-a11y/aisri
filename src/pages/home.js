import React from "react";
import "./home.css";
import HomeImage from "../images/homephoto.jpeg";

function Home() {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src={HomeImage}
                alt="Ghana Children"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
            </div>
            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">ASIRI</span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                We can build a better future for rural communities in Ghana.
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                  >
                    Projects
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                  >
                    Donate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="Home2">
          Asiri Rural Development Network empowers rural communities.
        </div>
        <div className="Home3">
          <p style={{ fontSize: "30px" }}>
            We Are Asiri Rural Development Network
          </p>

          <div className="BoxContainer">
            <div className="Box1">
              We work to improve the socio-economic well-being of residents in
              Asiri, Ghana through community development.
            </div>
            <div className="Box2">
              <div className="Title">30</div>
              number of volunteers
            </div>
          </div>
          <div className="Box3">
            <div className="Title">30</div>
            number of funding
          </div>
        </div>
        <div className="Home2">
          Make An Impact
          <p>Help us make a difference in rural communities</p>
          <div className="impactContainer">
            <div className="impactContainerBox">Volunteer</div>
            <div className="impactContainerBox">Donation</div>
            <div className="impactContainerBox">Partner With Us</div>
          </div>
        </div>
        <div className="email">
          <label style={{ fontSize: "35px", margin: "30px" }}>
            Sign up for Emails / Facebook
          </label>
          <form>
            <input placeholder="First Name" />
            <input placeholder="Last Name" />
            <input placeholder="Email Adress" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Home;
