import React, { useState } from "react";
import "../App.css";
import signupPic from "../Assets/signupPic.svg";

function Signup() {
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
              <form>
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
                    Password
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

                {/* <!-- Submit button --> */}
                <button
                  type="submit"
                  className="inline-block w-full rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
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

export default Signup;
