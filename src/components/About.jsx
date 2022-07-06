import React from "react";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 py-20">
      <div className="w-full md:w-6/12  ">
        <SectionTitle id="about">About Me</SectionTitle>
        <p className="text-md text-gray-600 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
          accusantium consequatur facilis exercitationem optio reiciendis
          voluptates dolores tempora maxime eveniet aliquid, facere dignissimos,
          dolor necessitatibus id voluptatibus repellendus laboriosam suscipit.
        </p>
        <a
          href="mailto:gkdmsdl0727@gmail.com"
          className="block mt-3 text-md md:text-lg  text-gray-700 dark:text-gray-300 hover:underline "
        >
          gkdmsdl0727@gmail.com
        </a>
      </div>
      <img
        src={`https://cdn.pixabay.com/photo/2022/06/19/04/25/cat-7271017_960_720.jpg`}
        alt="HAEUN"
        className="w-full md:w-6/12  rounded-lg object-cover"
      />
    </div>
  );
}

export default About;
