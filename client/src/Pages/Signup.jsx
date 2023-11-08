import React, { useState } from "react";
import "../App.css";
import signupPic from "../Assets/signupPic.svg";
import {useNavigate} from 'react-router-dom';
import axios from 'axios'

function Signup() {
  const navigateTo = useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({...user, [name]:value});
  } 

  const PostData = async (e) => {
    e.preventDefault()
    
    const {name, email, username, password, cpassword} = user
    axios.post('http://localhost:3000/api/users/register', user)
    .then(result => {
      console.log(result)
      navigateTo('/login')
    })

    // const res = await fetch("/register", {
    //   method: "POST",
    //   mode: 'cors',
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     name, email, username, password, cpassword
    //   })
    // })

    // const data = await res.json()
    // if(data.status === '422' || !data){
    //   window.alert("invalid registration")
    //   console.log("invalid registration")
    // } else {
    //   window.alert("registration successful")
    //   console.log("registration successful")

    //   navigateTo('/login')
    // }
  }

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
              <h1 className="text-2xl font-bold text-white mb-4 text-center">Sign up</h1>
                {/* Name input */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="text-slate-300 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-transparent"
                    value={user.name}
                    onChange={handleInputs}
                    required
                  ></input>
                </div>
                {/* Email input */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="text-slate-300 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-transparent"
                    value={user.email}
                    onChange={handleInputs}
                    required
                  ></input>
                </div>
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

                {/* Confirm password input */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label
                    htmlFor="cpassword"
                    className="block mb-2 text-sm font-medium text-white"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    className="text-slate-300 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 bg-transparent"
                    id="cpassword"
                    value={user.cpassword}
                    onChange={handleInputs}
                    required
                  />
                </div>


                <button
                  type="submit"
                  className="inline-block w-full rounded px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out custom-button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  value="register"
                  onClick={PostData}
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
