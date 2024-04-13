import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

function Login() {
  const auth = useAuth();
  const formRef = useRef();
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);
    const email = formData.get("email");
    const password = formData.get("password");
    await console.log("Data : ", email, password);

    try {
      toast.loading("Logging in...", { id: "login" });
      await auth?.login(email, password);
      toast.success("Logged in successfully", { id: "login" });
    } catch (error) {
      toast.error("Unable to login", { id: "login" });
      console.log(error);
    }
  };
  return (
    // <div className="flex flex-row">
    //   <div className="flex flex-col items-center justify-center h-screen w-full bg-green-500"></div>
    //   <div className="flex flex-col items-center justify-center h-screen w-full">
    //     <p className="text-3xl font-bold text-gray-800 mb-4">Login</p>
    //     <form ref={formRef} onSubmit={handleLogin}>
    //       <div className="mb-4">
    //         <label
    //           htmlFor="email"
    //           className="block text-sm font-medium text-gray-700"
    //         >
    //           Email
    //         </label>
    //         <input
    //           type="email"
    //           id="email"
    //           name="email"
    //           autoComplete="email"
    //           placeholder="Enter your email address"
    //           required
    //           className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <label
    //           htmlFor="password"
    //           className="block text-sm font-medium text-gray-700"
    //         >
    //           Password
    //         </label>
    //         <input
    //           type="password"
    //           id="password"
    //           name="password"
    //           autoComplete="current-password"
    //           placeholder="Enter your password"
    //           required
    //           className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //         />
    //       </div>
    //       <div className="mb-4">
    //         <button
    //           onClick={handleLogin}
    //           type="submit"
    //           className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    //         >
    //           Sign in
    //         </button>
    //       </div>
    //     </form>
    //     <div className="flex gap-2">
    //       <p>Don't have an Account yet </p>
    //       <Link to="/signup" className="text-blue-500">
    //         Register
    //       </Link>
    //     </div>
    //   </div>
    // </div>
    <div className="bg-[#f0f4f9] flex flex-col items-center justify-center h-screen">
      <div className="bg-white flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-center p-4 rounded-2xl shadow-md">
        <div className="min-w-[30vw] ">
          <img
            src="https://source.unsplash.com/random/100x100"
            alt="login"
            className="rounded-full"
          />
          <p className="text-2xl">Login</p>
          <p>Sign in to your account</p>
          <div className="min-h-[3vh] sm:min-h-[20vh]"></div>
        </div>
        <form
          ref={formRef}
          onSubmit={handleLogin}
          className="flex flex-col items-start"
        >
          <div className="flex flex-col">
            <label for="username">Username</label>
            <input
              type="text"
              placeholder="Email"
              name="email"
              className="rounded-lg border-2 border-grey p-2 my-2"
            />
          </div>
          <div className="flex flex-col">
            <label for="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="rounded-lg border-2 border-grey p-2 my-2"
            />
          </div>
          <div className="bs">
            <button
              onClick={handleLogin}
              className="rounded-full px-4 py-2 bg-blue-600 text-white mr-2 my-2 hover:bg-blue-700"
            >
              Login
            </button>
            <Link to="/signup" className="">
              Register
            </Link>
          </div>
          <span className="flex gap-4 mt-4">
            <p>Forgot your password ?</p>
            <a className="link" href="#">
              Reset Account
            </a>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
