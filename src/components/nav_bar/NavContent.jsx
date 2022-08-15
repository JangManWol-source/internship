import React from "react";
import MenuList from "./MenuList";

const NavContent = () => {
  const menus = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About",
    },
    {
      id: 3,
      name: "Services",
    },
    {
      id: 4,
      name: "Clients",
    },
    {
      id: 5,
      name: "Portfolio",
    },
    {
      id: 6,
      name: "Contact",
    },
  ];
  return (
    <div className="flex flex-row justify-between lg:w-3/4 w-full p-2 items-center">
      <div className="p-2">
        <img
          className="w-40 h-auto"
          src="https://godesq.com/wp-content/uploads/2021/02/logo-min-1.png"
          alt=""
        />
      </div>
      <MenuList menu={menus} />
    </div>
  );
};

export default NavContent;
