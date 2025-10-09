import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "./style/technologies.css";

import reactJs from "../assets/icon/reactjs.png";
import nodeJs from "../assets/icon/nodejs.png";
import express from "../assets/icon/expressjs.png";
import mySQL from "../assets/icon/mysql.png";
import jira from "../assets/icon/jira.png";
import postgre from "../assets/icon/postgresql.png";
import mui from "../assets/icon/materialui.png";
import bootstrap from "../assets/icon/bootstrap.png";
import js from "../assets/icon/javascript.png";
import git from "../assets/icon/git.png";
import databricks from "../assets/icon/databricks.png";
import jenkins from "../assets/icon/jenkins.png";
import typescript from "../assets/icon/typescript.png";
import prisma from "../assets/icon/prisma.png";
import tailwind from "../assets/icon/tailwind.png";
import next from "../assets/icon/next.jpg";

// Daftar teknologi
const techList = [
  { name: "React JS", icon: reactJs },
  { name: "Node JS", icon: nodeJs },
  { name: "Express", icon: express },
  { name: "MySQL", icon: mySQL },
  { name: "Jira", icon: jira },
  { name: "PostgreSQL", icon: postgre },
  { name: "Material UI", icon: mui },
  { name: "Bootstrap", icon: bootstrap },
  { name: "JavaScript", icon: js },
  { name: "Git", icon: git },
  { name: "Databricks", icon: databricks },
  { name: "Jenkins", icon: jenkins },
  { name: "Typescript", icon: typescript },
  { name: "Prisma", icon: prisma },
  { name: "Tailwind", icon: tailwind },
  { name: "Next", icon: next },
];

function Technologies() {
  return (
    <div className="container text-start py-5 my-5 pb-5" id="Technologies">
      <h2 className="my-5">Technologies</h2>

      <Swiper
        modules={[Autoplay]}
        className="techSwiper"
        loop={true}
        speed={3000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        slidesPerView={2}
        breakpoints={{
          576: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          992: { slidesPerView: 5 },
          1200: { slidesPerView: 7 },
        }}
        freeMode={false}
        centeredSlides={false}
      >
        {techList.map((tech, index) => (
          <SwiperSlide key={index} className="text-center">
            <img
              src={tech.icon}
              className="img-fluid tech-icon mb-2"
              alt={tech.name}
            />
            <p className="mb-0">{tech.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Technologies;
