import React from "react";
import Headings from "../../../extracted/Headings";
import OrangeButton from "../../../extracted/OrangeButton";
import Paragraph from "../../../extracted/Paragraph";

const Testimonials = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse pt-20 pb-20">
      <div className="flex-1">
        <div className="flex pt-10 pl-10">
          <div>
            <img
              className="w-36 rounded-medium"
              src="https://godesq.com/wp-content/uploads/2021/07/akaa.jpeg"
              alt=""
            />
          </div>
          <div className="flex leading-3 justify-center flex-col items-start pl-8">
            <span className="font-bold leading-3">Akaa M.</span>
            <br />{" "}
            <span className="font-light text-xs leading-3">
              Dawn Patrol Bali - Founder
            </span>
          </div>
        </div>

        <div className="p-10">
          <div>
            <Paragraph>
              I have been working with GodesQ for more than four years now which
              has been building/expanding our website and improving its
              efficiency and optimization to other divides etc.
            </Paragraph>
            <Paragraph>
              GodesQ is extremely easy to work with and responds to questions
              and tasks with ease and clear information. GodesQ team is very
              talented at what they do and has a huge knowledge. I have
              thoroughly enjoyed working on this project and we are grateful to
              GodesQ for their attention to detail and enthusiasm.
            </Paragraph>
            <Paragraph>
              GodesQ has worked on all aspects of our site, building new pages,
              working on new plugins, creating bespoke elements to suit the
              design, optimization to phone, iPad, and speeding up the site,
              etc, also working alongside our SEO specialist who gives GodesQ
              other coding instructions and tasks. GodesQ always responds
              quickly and works hard at all times. I can highly recommend their
              services for anyone looking for high-quality web developers.
            </Paragraph>
            <Paragraph>
              We will continue to work with GodesQ for building more pages as
              well as ask for help to maintain and improve our site as needed
              long term as it is a website is a never-ending project haha! We
              also are using QodesQ’s server hosting services which have been
              fast and great!
            </Paragraph>
            <Paragraph>
              I can’t thank you enough for all your help over the last year and
              how easy it has been. We look forward to working with you as
              always!
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full">
        <div className="bg-sky-400 h-full flex items-center rounded-tr-medium p-10">
          <div>
            <Headings
              title="OUR CLIENTS LOVE US"
              white="Featured Feedback"
              black="from our lovely client"
            />
            <br />
            <Paragraph>
              We do not just treat you as a client but also as a friend. We
              listen to your business digital marketing needs and also to your
              feedback. We appreciate praises, and also we are keen on improving
              our service by listening to your concerns. If you are interested
              with your business digital marketing needs, you may contact us at
              info@godeq.com or call us at 09157402476 or you may leave a
              message to us using the contact form below.
            </Paragraph>
            <br />
            <OrangeButton>VIEW MORE TESTIMONIALS</OrangeButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
