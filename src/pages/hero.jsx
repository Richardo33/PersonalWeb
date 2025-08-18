import React from 'react';
import ProfilePic from '../component/cardImage';

function hero() {
  return (
    <div className="container py-5 pe-md-5 mb-5">
      <div className="row align-items-center">
        <div className="col-md-4 mb-4 mb-md-0 ">
          <ProfilePic />
        </div>

        <div className="col-md-8">
          <h1 className="display-4 fw-bold">Hi, I'm Richard 👋</h1>
          <h4 className="text-muted mb-3">Fullstack Web Developer</h4>

          <p className="detail mb-4 fs-4 text-secondary text-justify">
            Fullstack Developer with strong foundation in front-end and back-end
            development, web technologies, and agile practices. Proven ability
            to build scalable, high-quality applications, enhance user
            experience, and contribute effectively in cross-functional teams.
            Seeking to deliver impactful solutions within a dynamic tech
            environment.
          </p>

          <p className="mb-2">
            <i className="bi bi-geo-alt text-primary"></i> Serang, Banten, Indonesia
          </p>

          <p className="mb-4 available-status d-flex align-items-center gap-2">
            <i className="bi bi-circle-fill text-success"></i>
            <span>Available for Work</span>
          </p>

          <div className="d-flex gap-3 flex-wrap">
            <a
              href="https://wa.me/6281993218599"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-success btn-lg"
            >
              <i className="bi bi-whatsapp"></i> Let's Talk
            </a>

            <a
              href="https://drive.google.com/file/d/1qixae2Ecj4ft26nThV8cpInfKK1nsKYw/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-dark btn-lg"
            >
              <i className="bi bi-download"></i> Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero;
