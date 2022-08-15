import React from "react";
import Headings2 from "../../../extracted/Headings2";
import projectItems from "../items/ProjectItems";
const Projects = () => {
  return (
    <div
      id="Portfolio"
      className="w-full flex flex-col justify-center items-center pt-20"
    >
      <div className="w-3/4">
        <Headings2
          title="OUR WORKS"
          header="Our Past Projects"
          cursive="Portfolio"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pl-10 pr-10">
        {projectItems.map((each) => (
          <div key={each.id}>
            <img
              src={each.link}
              alt=""
              className="p-1 w-full object-cover h-80 hover:brightness-50 transition-all delay-75"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
