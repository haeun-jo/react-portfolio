import React from "react";

function WorkItem({ title, imgUrl, tech, workUrl }) {
  return (
    <a
      href={workUrl}
      className="bg-slate-300 dark:bg-slate-800 rounded-lg overflow-hidden"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-36 md:h-48 object-cover"
      />
      <div className="text-gray-600 dark:text-gray-300 p-5 w-full ">
        <h3 className="text-lg md:text-sm mb-2 md:mb-3 font-semibold">
          {title}
        </h3>
        <p className="flex flex-wrap flex-row justify-start items-center gap-2 text-xs md:text-sm">
          {tech.map((item) => (
            <span
              key={item}
              className="inline-block px-2 py-1 bg-slate-200 dark:bg-slate-900 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      </div>
    </a>
  );
}

export default WorkItem;
