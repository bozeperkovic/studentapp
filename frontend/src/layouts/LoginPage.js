import React from 'react';
import './LoginPage.css';
import profile from "../image/ogcs.svg"
import email from "../image/email.png"
import password from "../image/password.jpg"

export default function LoginPage() {
    return(
    <div className="main">
        <div className="sub-main">
            <div>
                <div className="imgs">
                    <div className= "container-image">
                        <img src={profile} alt="profile" className="profile"/>
                    </div>
                </div>
                <div>
                    <h1 className="login-header font-semibold whitespace-nowrap">Login Page</h1>
                    <div className="first-input">
                        <img src={email} alt="email" className="email"/>
                        <input type="text"
                               placeholder="name@flowbite.com" required
                               className="name"/>
                    </div>
                    <div className="second-input">
                        <img src={password} alt="password" className="pass"/>
                        <input type="text"
                               placeholder="password"
                               className="name"
                               required/>
                    </div>
                    <div className="login-button">
                        <button type="submit"
                            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mx-5">
                            Login
                        </button>
                    </div>
                </div>
                </div>
            </div>
    </div>
    );
}