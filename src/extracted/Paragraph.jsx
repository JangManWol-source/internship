import React from "react";

const Paragraph = (props) => {
  return (
    <div className="font-sans text-xs text-black/70 leading-5 pt-2">
      {props.children}
    </div>
  );
};

export default Paragraph;
