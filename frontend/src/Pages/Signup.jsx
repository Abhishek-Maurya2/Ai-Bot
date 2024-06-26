import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import toast from "react-hot-toast";

function Signup() {
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [profilePic, setProfilePic] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setSpinner(true);

    const emails = String(email);
    const passwords = String(password);
    const names = String(name);

    console.log("Signup : " + emails + " : " + passwords + " : " + names);

    try {
      toast.loading("Signing up...", { id: "signup" });
      await auth?.signup(names, emails, passwords);
      toast.success("Signed up successfully", { id: "signup" });
      window.location.href = "/";
    } catch (error) {
      setSpinner(false);
      toast.error("Unable to signup", { id: "signup" });
      console.log(error);
    }
  };

  return (
    <div className="bg-[#f0f4f9] flex flex-col items-center justify-center h-screen">
      <div className="bg-white flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-center p-4 rounded-2xl shadow-md">
        <div className=" min-w-[60vw] sm:min-w-[30vw] ">
          <img
            src="src/assets/ai.png"
            alt="login"
            className={`rounded-full h-24 w-24 mb-2 ${
              spinner ? "animate-spin" : ""
            }`}
          />
          <p className="text-2xl">SignUp</p>
          <p>Create a new Account</p>
          <div className="h-[2vh] sm:min-h-[20vh]"></div>
        </div>
        <form onSubmit={handleSignup} className="flex flex-col items-start">
          <label className="flex items-center justify-center custom-file-upload bg-[#777777] rounded-full overflow-hidden h-20 w-20">
            {profilePic && (
              <img
                src={URL.createObjectURL(profilePic)}
                className="w-[100%] h-[100%] object-cover"
              />
            )}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => setProfilePic(e.target.files[0])}
            />
            {!profilePic && <p>Avatar</p>}
          </label>
          <label for="name">Full Name</label>
          <input
            type="name"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="rounded-lg border-2 border-grey p-2 my-2"
          />
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-lg border-2 border-grey p-2 my-2"
          />
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="rounded-lg border-2 border-grey p-2 my-2"
          />
          <div className="bs">
            <button
              onClick={handleSignup}
              className="rounded-full px-4 py-2 bg-blue-600 text-white mr-2 my-2 hover:bg-blue-700"
            >
              Register
            </button>
          </div>
          <span className="flex gap-4 p-2">
            <p>Already have an Account?</p>
            <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Signup;
