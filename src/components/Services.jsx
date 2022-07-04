import React from "react";
import SectionTitle from "./SectionTitle";
import ServiceItem from "./ServiceItem";
import services from "../data/services";

function Services() {
  return (
    <div className="py-12">
      <SectionTitle>Our Services</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service) => {
          const { title, icon, description } = service;
          return (
            <ServiceItem
              key={title}
              title={title}
              icon={icon}
              description={description}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Services;
