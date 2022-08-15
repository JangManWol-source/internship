import React from "react";
import { Link } from "react-scroll";
const MenuList = (props) => {
  return (
    <div className="flex flex-row">
      {props.menu.map((menu) => (
        <Link
          to={menu.name}
          smooth
          delay={100}
          offset={-80}
          className="hidden lg:flex ml-12 font-semibold text-sm transform border-b-4 border-transparent hover:border-red-600  transition-colors ease-out duration-3000 "
          key={menu.id}
        >
          {menu.name}
        </Link>
      ))}
      <div className="flex lg:hidden">Menu</div>
    </div>
  );
};

export default MenuList;
