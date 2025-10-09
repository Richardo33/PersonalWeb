import React from "react";
import "./style/footer.css";

function Footer() {
  return (
    <footer className="position-relative text-center mt-5 pt-5 pb-2">
      <div className="wave-background">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wave"
              fill="rgba(13, 202, 240, 0.6)"
              d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
          s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
            />
          </defs>
          <g>
            <use xlinkHref="#wave" opacity=".4">
              <animateTransform
                attributeName="transform"
                type="translate"
                dur="8s"
                values="270 230; -334 180; 270 230"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity=".6">
              <animateTransform
                attributeName="transform"
                type="translate"
                dur="6s"
                values="-270 230;243 220;-270 230"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave" opacity=".9">
              <animateTransform
                attributeName="transform"
                type="translate"
                dur="4s"
                values="0 230;-140 200;0 230"
                repeatCount="indefinite"
              />
            </use>
          </g>
        </svg>
      </div>

      <p className="mb-0">
        <span className="d-block d-md-inline">
          Keep learning, keep building 🚀
        </span>
        <span className="d-none d-md-inline"> | </span>
        <span className="d-block d-md-inline">&copy; 2025 Alvin Rikardo</span>
      </p>

      <div className="d-flex justify-content-center gap-4 pt-3">
        <a
          href="https://github.com/Richardo33"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted fs-4"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/alvin-rikardo/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted fs-4"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="mailto:alvinrikardo6@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted fs-4"
        >
          <i className="bi bi-envelope"></i>
        </a>
        <a
          href="https://www.instagram.com/richardo_alvin?igsh=bnZ1YXFmZTAybG9j"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted fs-4"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          href="https://wa.me/6281993218599"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted fs-4"
        >
          <i className="bi bi-whatsapp"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
