import React from "react";
import CustomButton from "./CustomButton";
import serachBoximg from "../assets/Images/serachBoximg.jpg";
import rupee from "../assets/Images/rupee.png";
import badge from "../assets/Images/badge.png";
import cashhand from "../assets/Images/cashhand.png";
import checklist from "../assets/Images/checklist.png";
const imageURL = import.meta.env.IMAGE_BASE_URL;

const SearchResultBox = ({institute}) => {
  
  
  
  return (
    <div className="border rounded-lg shadow-md p-4 flex flex-col  space-y-4 md:space-y-0 md:space-x-6 bg-white mb-2">
      {/* Left Section - Image */}
      <div className="flex justify-between flex-col md:flex-row gap-3">
      <div className="relative w-full md:w-2/6">
        <img
          src={institute.thumbnailImage? `http://localhost:4001/uploads/${institute.thumbnailImage}` : serachBoximg}
          alt="IIT Madras"
          className="rounded-lg object-cover w-full h-44"
        />
        <button
          className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md"
          aria-label="Add to wishlist"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5c0-2.64 2.36-4.5 5-4.5 1.54 0 3.04.99 3.76 2.39h.48C13.95 4.99 15.46 4 17 4c2.64 0 5 1.86 5 4.5 0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </button>
      </div>

      {/* Right Section - Details */}
      <div className="w-full md:w-3/4 flex flex-col ">
        {/* Title */}
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{institute.instituteName}</h3>
          <span className="text-gray-500 font-medium">#2</span>
        </div>

        {/* Ratings */}
        <div className="flex items-center space-x-3 text-sm text-gray-600">
          <span className="flex items-center">
            <span className="text-yellow-500">★</span> 4.1
          </span>
          <span>(8 Reviews)</span>
          <span>• {institute.city+" "} {institute.state} • {institute.organisationType}</span>
        </div>

        {/* Pricing and Info */}
        <div className="flex items-center space-x-4 mt-5 mb-2">
          <span className="text-gray-700 font-medium md:text-xl text-xs sm:text-sm flex items-center gap-1" ><img src={rupee} className="h-4 opacity-75 mt-1" alt="rupee" />5,000 - 2,00,000</span>
          <span className="flex items-center font-medium md:text-xl text-xs sm:text-sm space-x-1">
            <img src={badge}  alt="AICTE" className="h-4 opacity-75 mt-1" />
            <span>AICTE</span>
          </span>
          <span className="text-gray-700 flex items-center gap-1 font-medium text-xs sm:text-sm md:text-xl"><img src={cashhand}  alt="AICTE" className="h-4 opacity-75 mt-1" />9 Lacs</span>
          <span className="text-gray-700 flex items-center gap-1 font-medium text-xs sm:text-sm md:text-xl"><img src={checklist}  alt="AICTE" className="h-4 opacity-75 mt-1" />CAT</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-3">
          {institute.about}
        </p>

        {/* Footer Buttons */}
        

        {/* Links */}
        </div>
      </div>
        <div className="flex justify-between items-center flex-wrap gap-3 !mt-8 md:!mt-3 text-sm text-blue-600">
          <div className="space-x-4 ">
            <a href="#fees" className="hover:underline">Fees and Courses</a>
            <a href="#admission" className="hover:underline">Admission</a>
            <a href="#placement" className="hover:underline">Placement</a>
          </div>
          <div className="flex space-x-4 justify-end">
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
            Download Brochure
          </button>
          <CustomButton to={`/institute/${institute._id}`} className='!bg-gray-100 !text-red-600 px-4 py-2 rounded-lg border border-red-600 !text-md ' text='View more'>
            View more
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default SearchResultBox;
