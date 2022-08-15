import React from "react";

const OrangeButton = (props) => {
  return (
    <button className="bg-orange-600 font-sans text-white text-xs font-semibold rounded-large pt-1 pb-1 pl-4 pr-4 mt-10">
      {props.children}
    </button>
  );
};

export default OrangeButton;
