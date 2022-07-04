import React from "react";

function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <div className="text-center">
        <h1 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 font-semibold dark:text-indigo-500">
          Hi, This is HaEun
        </h1>
        <p className="text-md md:text-xl max-w-md mb-3 text-gray-600 dark:text-gray-300">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
          earum dolorum reprehenderit aut corrupti veniam expedita eligendi,
          suscipit dicta quasi quae autem saepe laudantium consequuntur quas sit
          voluptas nulla maiores!
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md"
        >
          See Works
        </a>
      </div>
    </div>
  );
}

export default HeroSection;
