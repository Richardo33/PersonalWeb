import React from 'react';
import './style/project.css'
import projects from '../component/dataDummy/projectData';

function Project() {
  return (
    <div className="container my-5 pt-5 pb-5" id="Project">
      <h2 className="py-5">My Projects :</h2>
      <div className="row justify-content-start gx-5">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6 mb-4 d-flex justify-content-center">
            <div className="card">
              <img
                src={project.image}
                alt={project.title}
                className="card-img-top"
              />
              <div className="card-body pe-5 ps-4 py-3 d-flex flex-column justify-content-between">
                <div className="mb-2">
                  <h5 className="fw-bold mb-1">{project.title}</h5>
                  <p className="card-text text-secondary mb-2">
                    {project.description}
                  </p>
                </div>
                <div className="mt-auto">
                  <div className="d-flex flex-wrap gap-2 mb-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="badge bg-secondary">{t}</span>
                    ))}
                  </div>
                  <div className="d-flex gap-4 align-items-center">
                    {project.isGithubPrivate ? (
                      <span className="text-muted d-flex align-items-center gap-1">
                        <i className="bi bi-github"></i>
                        Private repository
                      </span>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-muted fw-semibold d-flex align-items-center gap-1"
                      >
                        <i className="bi bi-github"></i>
                        View on GitHub
                      </a>
                    )}
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none text-primary fw-semibold d-flex align-items-center gap-1"
                      >
                        <i className="bi bi-box-arrow-up-right"></i>
                        Live Demo
                      </a>
                    ) : (
                      <span className="text-muted d-flex align-items-center gap-1">
                        <i className="bi bi-box-arrow-up-right"></i>
                        Demo unavailable
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
