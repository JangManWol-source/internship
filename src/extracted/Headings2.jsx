import React from 'react'

const Headings2 = (props) => {
  return (
    <div>
        <span className="font-sans font-semibold">{props.title}</span> <br />
            <span className="font-sans text-4xl font-bold">
              {props.header}
            </span>{" "}
            <br />
            <span className="text-red-600 text-2xl font-cursive2 font-semibold">
              {props.cursive}
            </span>
    </div>
  )
}

export default Headings2