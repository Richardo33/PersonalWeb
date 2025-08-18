import React from 'react';

function ClosingSection() {
  return (
    <div className="text-center mb-5 mt-5 pb-5">
      <h2 className="fw-bold">Let's build something together</h2>
      <p className="text-muted">
        Looking for a developer, a teammate, or just someone to brainstorm with? I’m just one message away.
      </p>
      <p className="mt-3 mb-5 pb-5 fw-semibold d-flex flex-column flex-md-row justify-content-center align-items-center gap-2">
        <a
          href="mailto:alvinrikardo6@gmail.com"
          className="text-muted text-decoration-none d-flex align-items-center"
        >
          <i className="bi bi-envelope me-2"></i>
          alvinrikardo6@gmail.com
        </a>

        <span className="text-muted d-none d-md-inline px-4">|</span>

        <span className="text-muted d-flex align-items-center">
          <i className="bi bi-whatsapp text-success me-2"></i>
          +62 819-9321-8599
        </span>
      </p>
    </div>
  );
}

export default ClosingSection;
