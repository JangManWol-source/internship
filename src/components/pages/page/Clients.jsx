import React from "react";
import Headings from "../../../extracted/Headings";
import OrangeButton from "../../../extracted/OrangeButton";
import Paragraph from "../../../extracted/Paragraph";

const Clients = () => {
  const logoLinks = [
    {
      id: Math.random().toString(32).substring(2, 9),
      url: "https://godesq.com/wp-content/uploads/2021/02/logo-min.png",
    },
    {
      id: Math.random().toString(32).substring(2, 9),
      url: "https://godesq.com/wp-content/uploads/2021/05/Screen-Shot-2021-05-27-at-12.58.02-AM.png",
    },
    {
      id: Math.random().toString(32).substring(2, 9),
      url: "https://godesq.com/wp-content/uploads/2021/02/lcd-logo5-min.png",
    },
    {
      id: Math.random().toString(32).substring(2, 9),
      url: "https://godesq.com/wp-content/uploads/2021/02/dpb-copy.png",
    },
    {
      id: Math.random().toString(32).substring(2, 9),
      url: "https://godesq.com/wp-content/uploads/2022/01/cropped-Copy-of-dancing-data-copy-300x150-1.png",
    },
    {
      id: Math.random().toString(32).substring(2, 9),
      url: "https://godesq.com/wp-content/uploads/2021/02/blackstorm-light.png",
    },
  ];
  return (
    <div name="Clients" className="w-full flex justify-center">
      <div className="flex w-full lg:flex-row flex-col">
        <div className="flex-1 w-full flex items-center justify-center">
          <div className="grid grid-cols-2">
            {logoLinks.map((each) => (
              <img
                src={each.url}
                className="w-72 p-5"
                alt=""
                key={each.id}
              ></img>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div className="w-full rounded-tr-medium bg-sky-400 min-h-fit">
            <div className="font-sans pt-20 pb-20 pl-10 pr-10">
              <Headings
                title="OUR CLIENTS"
                white="Clients around the world are"
                black="talking about GodesQ"
              />
              <br />
              <br />
              <Paragraph>
                As a business that helps other businesses to grow their presence
                online, we at GodesQ Digital Marketing Services did not limit
                our reach in one country but we started helping businesses
                around the world. Clients from London, Indonesia, Australia,
                Singapore, and the United States of America are always satisfied
                with every project we accomplished for them. Some of them even
                became our business partners. Though GodesQ is a worldwide
                digital marketing agency, you can still find us as your go-to
                agency near you.
              </Paragraph>
              <br />
              <Paragraph>
                If you want your business to grow like how these clients grew
                their business with our help, then maybe it is time for your
                business to be involved in the unstoppable growth of our
                partners online.
              </Paragraph>
              <br />
              <Paragraph>
                Are you interested in becoming our next client? You might want
                to check our works and contact us using the contact form
                provided below. This is the time to set your goals right! Go for
                Goals! Go for GodesQ! OUR WORKS
              </Paragraph>
              <br />
              <OrangeButton>OUR WORKS</OrangeButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
