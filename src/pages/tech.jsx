import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './style/technologies.css'

import reactJs from '../assets/Icon/reactJS.png';
import nodeJs from '../assets/Icon/nodeJS.png';
import express from '../assets/Icon/ExpressJS.png';
import mySQL from '../assets/Icon/mySQL.png';
import jira from '../assets/Icon/jira.png';
import postgre from '../assets/Icon/postgreSQL.png';
import mui from '../assets/Icon/materialUI.png';
import bootstrap from '../assets/Icon/bootstrap.png';
import js from '../assets/Icon/javascript.png';
import git from '../assets/Icon/git.png';
import databricks from '../assets/Icon/databricks.png';
import jenkins from '../assets/Icon/jenkins.png';
import typescript from '../assets/Icon/typescript.png';
import prisma from '../assets/Icon/prisma.png';


// Daftar teknologi
const techList = [
  { name: 'React JS', icon: reactJs },
  { name: 'Node JS', icon: nodeJs },
  { name: 'Express', icon: express },
  { name: 'MySQL', icon: mySQL },
  { name: 'Jira', icon: jira },
  { name: 'PostgreSQL', icon: postgre },
  { name: 'Material UI', icon: mui },
  { name: 'Bootstrap', icon: bootstrap },
  { name: 'JavaScript', icon: js },
  { name: 'Git', icon: git },
  { name: 'Databricks', icon: databricks },
  { name: 'Jenkins', icon: jenkins },
  { name: 'Typescript', icon: typescript },
  { name: 'Prisma', icon: prisma },
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
