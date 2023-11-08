import React, { useState } from "react";
import "../App.css";
import signupPic from "../Assets/signupPic.svg";
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

function Signin() {
  const navigateTo = useNavigate()
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});
  };

  const loginUser = async (e) => {
    e.preventDefault()

    const {username, password} = user
    axios.post('http://localhost:3000/api/users/login', user)
    .then(result => {
      console.log(result)
      window.alert("user logged in successfully")
      navigateTo('/')
    })
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
    
  //   try {
  //     // You can make an API request to authenticate the user here
  //     const response = await fetch("/api/login", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(user),
  //     });
  
  //     if (response.ok) {
  //       // Authentication was successful
  //       const data = await response.json();
  //       console.log("Login successful. User data:", data);
  
  //       // You can also navigate to another page or set user authentication state here
  //     } else {
  //       // Authentication failed
  //       console.log("Login failed. Please check your credentials.");
  //     }
  //   } catch (error) {
  //     console.error("Error occurred during login:", error);
  //   }
  // };
  
  //const handleSubmit=(e)=>{
  //  e.preventDefault();
  //  console.log("Logging in the user:",user);
//
  //} ;

  return (
    <>
      <section className="container h-screen overflow-auto">
        <div className="container h-full px-6 py-24">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            {/* <!-- Left column container with background--> */}
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img src={signupPic} className="w-full" alt="Phone image" />
            </div>

            {/* <!-- Right column container with form --> */}
            <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
              <form method="POST">
              <h1 className="text-2xl font-bold text-white mb-4 text-center">Sign in</h1>
                {/*Username input*/}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label
                    htmlFor="exampleFormControlInput3"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="text-slate-300 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-transparent"
                    value={user.username}
                    onChange={handleInputs}
                    required
                  ></input>
                </div>

                {/*Password input*/}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="text-slate-300 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-transparent"
                    id="password"
                    value={user.password}
                    onChange={handleInputs}
                    required
                  />
                </div>

                {/* <!-- Submit button -->className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"*/}
                <button
                  type="submit"
                  className="inline-block w-full rounded px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out custom-button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  value="login"
                  onClick={loginUser}
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signin;
