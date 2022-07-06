import React from "react";
import SectionTitle from "./SectionTitle";

function Footer() {
  return (
    <div className="py-5 bg-slate-800 text-center text-gray-300 rounded-t-lg">
      <a href="#hero" className="block text-xl md:text-2xl font-semibold">
        HAEUN
      </a>
      <a
        href="mailto:gkdmsdl0727@naver.com"
        className=" text-sm md:text-md hover:text-indigo-500"
      >
        gkdmsdl0727@naver.com
      </a>
      <p className="text-xs  mt-2 text-gray-500">
        © HaEun {new Date().getFullYear()}. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
