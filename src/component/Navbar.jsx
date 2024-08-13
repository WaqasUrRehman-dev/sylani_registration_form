import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex flex-col items-center px-4 py-4 sm:px-6 sm:py-6">
      <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-1xl">
        <img
          src="https://vectorseek.com/wp-content/uploads/2023/08/Saylani-Welfare-International-trust-Logo-Vector.svg-.png"
          alt="Logo"
          className="w-full h-auto"
        />
      </div>
      <div className="flex flex-col sm:flex-col justify-evenly items-center w-full mt-8 md:flex-row">
        <div className="flex gap-x-4 mb-4 sm:mb-0">
          <img
            src="https://forms.saylaniwelfare.com/static/media/facebook.0d22b4d986cc357e30b7.png"
            alt="Facebook"
            className="w-8 h-8"
          />
          <img
            src="https://forms.saylaniwelfare.com/static/media/instagram.1506b398fa46f19bb324.png"
            alt="Instagram"
            className="w-8 h-8"
          />
          <img
            src="https://forms.saylaniwelfare.com/static/media/youtube.25bcb63515915fad0160.png"
            alt="YouTube"
            className="w-8 h-8"
          />
        </div>
          <h1 className="text-2xl sm:text-3xl font-bold ">
            Registration Form - SMIT
          </h1>
          <Link to="/allUsers" className="text-blue-600 border border-blue-600 rounded-full px-3 py-1 text-sm mt-2 inline-block">
            Admin Dashboard 
          </Link>
      </div>
      <div>
        <p className="text-gray-500 font-semibold mt-4 text-sm md:text-base">
          Services - Education - Registration
        </p>
      </div>
    </div>
  );
}
