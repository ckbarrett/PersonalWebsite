import React, { useState } from "react";
import styles from "./ProjectSection.module.css";
import pfp from "../../assets/pfp.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function ProjectSection() {
  const projects = [
    { image_path: pfp, text: "Project 1" },
    { image_path: pfp, text: "Project 2" },
    { image_path: pfp, text: "Project 3" },
    { image_path: pfp, text: "Project 4" },
    { image_path: pfp, text: "Project 5" },
    // Add more projects as needed
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div id="projects" className={styles.carousel_container}>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        centerMode={true}
      >
        {projects.map((project) => (
          <div className={styles.card} key={project.text}>
            <img
              className={styles.card_image}
              src={project.image_path}
              alt={project.text}
            />
            <p className={styles.card_text}>{project.text}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
