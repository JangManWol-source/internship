import React from "react";
import ServiceItems from "./items/ServiceItems";
import item from "./items/Items";
import Headings2 from "../../extracted/Headings2";
const Services = () => {
  return (
    <div name="Services" className="w-full flex justify-center min-h-screen">
      <div className="w-3/4">
        <div className="lg:flex flex-col w-full lg:items-start items-center">
          <div className="flex-1">
            <Headings2
              title="WHAT WE DO"
              header="Our Services"
              cursive="Skills"
            />
          </div>
          <div className="flex-1 text-xs lg:mt-0 mt-10">
            Making sure that our digital marketing clients are happy with our
            works is our motto in GodesQ. We prioritize the satisfaction of our
            clients over our gain and make sure that they will never regret
            working with us.
          </div>
        </div>
        <div className="mt-10">
          <ServiceItems items={item} />
        </div>
      </div>
    </div>
  );
};

export default Services;
