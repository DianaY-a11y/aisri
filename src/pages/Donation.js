import React from "react";
import "./output.css";
import { Link } from "react-router-dom";
import DonateSelection from "../components/donateDropDown";

function Donation() {
  function FrequencyButtons() {
    return (
      <span className="relative z-0 inline-flex shadow-sm rounded-md">
        <button
          type="button"
          className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          One Time
        </button>
        <button
          type="button"
          className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          Monthly
        </button>
      </span>
    );
  }
  function Buttons() {
    return (
      <span className="relative z-0 inline-flex shadow-sm rounded-md">
        <button
          type="button"
          className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          $100
        </button>
        <button
          type="button"
          className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          $50
        </button>
        <button
          type="button"
          className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          $25
        </button>
        <button
          type="button"
          className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          $10
        </button>
        <button
          type="button"
          className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          $5
        </button>
      </span>
    );
  }

  return (
    <>
      <div class="p-10">
        <h1 style={{ textAlign: "center", fontSize: "30px", margin: "20px" }}>
          You can make a difference
        </h1>
        <div class="bg-amber-300 float-center p-10">
          <h2>My Donation</h2>
          <p class="text-left">Choose donation amount</p>
          <FrequencyButtons />
          <p>Choose donation amount</p>
          <Buttons />
          <p>Choose donation amount</p>
          <DonateSelection />
        </div>
      </div>
    </>
  );
}

export default Donation;
