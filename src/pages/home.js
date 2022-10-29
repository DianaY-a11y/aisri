import React from "react";
import "./home.css";
import HomeImage from "../images/homephoto.jpeg";
import { Link } from "react-router-dom";

const people = [
  {
    name: "Volunteer",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Donate",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Partner With Us",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

function Home() {
  function Example() {
    return (
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4"
      >
        {people.map((person) => (
          <li className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow ">
            <div className="flex-1 flex flex-col p-8">
              <img
                className="w-32 h-32 flex-shrink-0 mx-auto rounded-full"
                src={person.imageUrl}
                alt=""
              />
              <h3 className="mt-6 text-gray-900 text-sm font-medium">
                {person.name}
              </h3>
            </div>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <>
      <div className="relative top-10">
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
        <div className="max-w-10xl mx-auto sm:px-6 lg:px-8">
          <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
            <div className="absolute inset-0">
              <img
                className="h-full w-full object-cover"
                src={HomeImage}
                alt="Ghana Children"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-500 mix-blend-multiply" />
            </div>

            <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
              <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white">ASIRI</span>
              </h1>
              <p className="mt-6 max-w-lg mx-auto text-center text-xl text-green-200 sm:max-w-3xl">
                We can build a better future for rural communities in Ghana.
              </p>
              <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                  <a
                    href="/Work"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-green-700 bg-white hover:bg-green-50 sm:px-8"
                  >
                    Projects
                  </a>
                  <a
                    href="/Donation"
                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                  >
                    Donate
                  </a>
                </div>
              </div>
            </div>
          </div>d
        </div>
      </div>

      <div className="relative pt-20 pb-28 overflow-hidden">
        <div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h2 className="text-3xl font-bold text-gray-800">
              The Asiri Rural Community Development Organisation empowers rural
              communities.
            </h2>
          </div>
        </div>
      </div>

      <div className="relative bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
          <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
            <p className="mt-3 text-3xl tracking-tight font-bold text-white">
              We Are The Asiri Rural Community Development Organisation
            </p>

            <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
              <p>
                <span className="block text-2xl font-bold text-white">30</span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">
                    number of volunteers
                  </span>{" "}
                  have helped us accomplish so much...
                </span>
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
              <p>
                <span className="block text-2xl font-bold text-white">30</span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">
                    number of volunteers
                  </span>{" "}
                  have helped us accomplish so much...
                </span>
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
              <p>
                <span className="block text-2xl font-bold text-white">30</span>
                <span className="mt-1 block text-base text-gray-300">
                  <span className="font-medium text-white">
                    number of volunteers
                  </span>{" "}
                  have helped us accomplish so much...
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
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
          <Example />
        </div>
      </div>

      <footer className="bg-gray-50" aria-labelledby="footer-heading">
        <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:pt-24 lg:px-8">
          <div className="mt-17 xl:mt-0">
            <h3 className="text-base font-medium text-gray-900">
              Subscribe to our newsletter
            </h3>
            <p
              style={{ margin: "0px 0px 0px -40px", maxWidth: "35rem" }}
              className="mt-4 text-base text-gray-500"
            >
              ASIRI has a mission to revolutionize Ghana's rural community for
              the better. If you agree with our mission, please subscribe to our
              email list. The latest news, articles, and resources, sent to your
              inbox weekly.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="appearance-none min-w-0 w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-green-500 focus:border-green-500 focus:placeholder-gray-400"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  style={{ background: "green" }}
                  className="w-full flex items-center justify-center bg-sky-500 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
          <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
            &copy; 2020 Asiri, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Home;
