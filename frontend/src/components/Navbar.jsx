import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Auth/LoginButton";
import LogoutButton from "../Auth/LogoutButton";

function Navbar() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div className="fixed z-[999] w-full px-20 py-6 flex justify-between items-center backdrop-blur-sm">
      <div className="logo">
        <a className="text-[25px] font-semibold" href="#">
          Ochi
        </a>
      </div>
      <div className="links flex gap-10">
        {["Home", "About", "Services", "Contact"].map((link, index) => (
          <a key={index} href="#" className="text-md font-light">
            {link}
          </a>
        ))}
        {isLoading ? (
          <p>Loading...</p>
        ) : isAuthenticated ? (
          <div className="flex items-center gap-2">
            <img
              src={user.picture}
              alt={user.name}
              className="w-8 h-8 rounded-full"
            />
            <p className="ml-2">{user.name}</p>
            <LogoutButton />
          </div>
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
  );
}

export default Navbar;
