import React from "react";
import logo from "../../../assets/icon.png";
const ServiceItems = (props) => {
  return (
    <div className="text-sm grid lg:grid-cols-3 grid-cols-1">
      {props.items.map((each) => (
        <div className="flex p-4" key={each.id}>
          <div className="mr-2">
            <img src={logo} alt="" />
          </div>
          <div>
            <div className="font-sans font-bold text-sm">{each.title}</div>
            <div>
              {each.offers.map((each) => (
                <div className="flex items-center" key={each.id}>
                  <div className="rounded-large w-2 h-2 bg-sky-500"></div>{" "}
                  <div className="p-1">{each.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceItems;
