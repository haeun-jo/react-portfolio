import React from "react";
import SectionTitle from "./SectionTitle";
import WorkItem from "./WorkItem";
import works from "../data/works";

function Works() {
  return (
    <div className="py-12">
      <SectionTitle id="works">Recent Works</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {works.map((work) => {
          const { title, imgUrl, tech, workUrl } = work;
          return (
            <WorkItem
              key={title}
              title={title}
              imgUrl={imgUrl}
              tech={tech}
              workUrl={workUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Works;
