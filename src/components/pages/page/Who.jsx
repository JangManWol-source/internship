import React from "react";
import OrangeButton from "../../../extracted/OrangeButton";
import Paragraph from "../../../extracted/Paragraph";
import Headings from "../../../extracted/Headings";
const Who = () => {
  return (
    <div name="About" className="min-h-screen bg-white">
      <div className="bg-sky-400 rounded-bl-large w-full h-full overflow-auto flex p-10 lg:p-32 pb-60">
        <div className="flex-1 hidden lg:flex">
          <img
            src="https://godesq.com/wp-content/uploads/2021/08/website-image-min.png"
            alt=""
          />
        </div>
        <div className="flex-1">
          <Headings
            title="WHO WE ARE"
            white="Top Rated Digital Marketing Agency"
            black="based in the Philippines"
          />
          <Paragraph>
            GodesQ Digital Marketing Services is consist of a team of world
            class developer which developed hundreds of applications around the
            world (Singapore, Indonesia, London, Australia, USA and of course
            our very own country, Philippines.{" "}
            <span className="font-semibold">
              With 9 years experience in the digital development field,
            </span>{" "}
            GodesQ team continues to learn new things and innovate them to
            dominate the digital marketing industry in the future.
          </Paragraph>
          <Paragraph className="pt-2 text-sm">
            Our squad of goal oriented developers{" "}
            <span className="font-semibold">
              aims to help your business move to the top among your competitors
            </span>{" "}
            by making sure that your company presence is always noticable
            online. Also, as a nature friendly team,{" "}
            <span className="font-semibold">
              we also aim for a paperless offices,
            </span>{" "}
            and use softwares instead in every computer desks. Let us go for
            goals! go paperless! GodesQ!
          </Paragraph>

          <div className="font-sans text-white font-semibold text-sm">
            <OrangeButton>OUR EXPERTISE</OrangeButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Who;
