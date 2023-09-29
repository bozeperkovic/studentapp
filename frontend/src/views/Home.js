import React from "react";
import { Link } from "react-router-dom"; 

export default function Home() {

    const backgroundImageUrl =
        "https://og-cs.hr/wp-content/uploads/2023/07/OGCSSocialMediaBanner.jpg";

    const containerStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height:"700px"
    };



    return (
        <div className="py-19">
        <div className="container max-w-lg px-4 py-60 mx-auto text-left md:max-w-none md:text-center" style={containerStyle}>
            <h1 className="font-mono text-3xl font-extrabold text-white md:text-center sm:leading-none lg:text-5xl">
                <span className="inline md:block">Prijava na praksu ako si </span>
            </h1>

            <div className="flex sm:justify-center space-x-4">
                <div className="flex flex-col items-center mt-12 text-center">
                    <Link to="/pupilform">
                        <button
                            className="relative inline-flex items-center justify-center w-60 h-40 p-0 text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                        >
        <span className="flex items-center justify-center w-full h-full px-5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          SREDNJOŠKOLAC
        </span>
                        </button>
                    </Link>
                </div>
                <div className="flex flex-col items-center mt-12 text-center">
                    <Link to="/studentform">
                        <button
                            className="relative inline-flex items-center justify-center w-60 h-40 p-0 text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                        >
        <span className="flex items-center justify-center w-full h-full px-5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          STUDENT
        </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
}
