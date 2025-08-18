import React from 'react';

function Footer() {
  return (
    <footer className="border-top mt-5 pb-5 py-4 border-1  text-center bg-info-subtle">
      <p className="mb-0">
        &copy; 2025 Designed and coded with <span style={{ color: 'red' }}>&#10084;</span> by Alvin Rikardo
      </p>

      <div className="d-flex justify-content-center gap-3 pt-3">
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
      </div>
    </footer>
  );
}

export default Footer;
