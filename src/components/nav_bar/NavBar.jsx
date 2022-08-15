import React from "react";
import NavContent from "./NavContent";

const NavBar = () => {
  return (
    <div className="fixed z-10 top-0 w-full flex justify-center bg-white/80">
      <NavContent />
    </div>
  );
};

export default NavBar;
