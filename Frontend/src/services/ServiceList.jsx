import React from "react";
import { Col } from "reactstrap";
import ServiceCard from "./ServiceCard";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
  {
    imgUrl: weatherImg,
    title: "calculate Weather",
    desc: "Experience the thrill of exploring new destinations while enjoying the pleasant breeze and mild temperatures",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Embark on unforgettable journeys that will ignite your senses and create memories to last a lifetime",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Create lifelong memories as you explore the world with like-minded travelers, sharing stories, laughter, and unforgettable moments along the way",
  },
];
const ServiceList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
