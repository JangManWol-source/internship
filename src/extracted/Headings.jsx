import React from "react";

const Headings = (props) => {
  return (
    <div>
      <div className="font-sans font-bold">{props.title}</div>
      <div className="text-white font-sans font-bold text-4xl">
        {props.white}{" "}
        <span className="text-black italic font-cursive2">{props.black}</span>
      </div>
    </div>
  );
};

export default Headings;
