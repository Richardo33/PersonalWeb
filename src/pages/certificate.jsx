import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style/certificate.css";

import cert1 from "../assets/certif/certificate-dumbways.jpg";
import cert2 from "../assets/certif/dumbways.jpg";
import cert3 from "../assets/certif/Dunia_Coding_React.jpg";
import cert4 from "../assets/certif/Mini_Class.jpg";
import cert5 from "../assets/certif/sql_advanced.jpg";
import cert6 from "../assets/certif/sql_intermediate.jpg";
import cert7 from "../assets/certif/waystalk1.jpg";
import cert8 from "../assets/certif/waystalk2.jpg";
import cert9 from "../assets/certif/Waystalk4.jpg";
import cert10 from "../assets/certif/Waystalk6.jpg";
import cert11 from "../assets/certif/Waystalk10.jpg";
import cert12 from "../assets/certif/Efset.png";

const slides = [
  [cert1, cert2],
  [cert3, cert4],
  [cert5, cert6],
  [cert7, cert8],
  [cert9, cert10],
  [cert11, cert12],
];

function Certificate() {
  return (
    <section className="py-5" id="Certifications">
      <div className="container">
        <h2 className="m3-4 py-4">Certificates :</h2>

        <div
          id="carouselExample"
          className="carousel slide"
          data-bs-ride="carousel"
          data-bs-interval="3000"
        >
          <div className="carousel-inner text-center py-3">
            {slides.map(([left, right], index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="row justify-content-center">
                  <div className="col-12 col-md-6 mb-3 mb-md-0">
                    <img
                      src={left}
                      className="certif-img img-fluid"
                      alt={`Cert ${index * 2 + 1}`}
                    />
                  </div>
                  <div className="col-12 col-md-6 d-none d-md-block">
                    <img
                      src={right}
                      className="certif-img img-fluid"
                      alt={`Cert ${index * 2 + 2}`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Certificate;
