import React from "react";
import Logoaia from "../assets/Icon/ikonn.png";

function Experience() {
  return (
    <div className="container my-5 py-5 mb-5 pb-5" id="Experiences">
      <h2 className="my-4">Work Experiences :</h2>

      {/* Card 1 */}
      <div className="card border-0 p-4 mb-4">
        <div className="d-flex justify-content-between flex-wrap">
          <div className="d-flex flex-column flex-md-row">
            <img
              src={Logoaia}
              alt="Company Logo"
              className="me-md-4 mb-3 mb-md-0"
              style={{ width: "100px", height: "60px", objectFit: "contain" }}
            />
            <div>
              <h5 className="mb-1 fw-bold">Database Developer</h5>
              <a
                href="https://companywebsite.com"
                className="text-success text-decoration-none d-block mb-2"
                target="_blank"
                rel="noreferrer"
              >
                AIA Singapore - Batam
              </a>

              <p className="text-muted mb-2 d-block d-xxl-none">
                March 2023 - Jan 2025
              </p>

              <ul className="mb-2 ps-3">
                <li>
                  Transitioned into the role of Database Developer from Data
                  Architect background
                </li>
                <li>
                  Designed and implemented scalable data architecture using
                  PostgreSQL and Databricks
                </li>
                <li>
                  Managed data extraction, transformation, and loading (ETL)
                  processes
                </li>
                <li>
                  Supported cross-functional teams with timely and reliable data
                  solutions
                </li>
                <li>
                  Deployed UAT builds via Jenkins; prepared production releases
                  using Jira
                </li>
                <li>
                  Applied Agile methodologies to ensure efficient and on-time
                  project delivery
                </li>
              </ul>

              <div className="d-flex flex-wrap gap-2 mt-2">
                <span className="badge bg-secondary">PostgreSQL</span>
                <span className="badge bg-secondary">Databricks</span>
                <span className="badge bg-secondary">Jira</span>
                <span className="badge bg-secondary">Jenkins</span>
                <span className="badge bg-secondary">Git</span>
              </div>
            </div>
          </div>

          <div className="text-end mt-3 mt-md-0 d-none d-xxl-block">
            <span className="text-muted">March 2023 - Jan 2025</span>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card border-0 p-4 mb-4">
        <div className="d-flex justify-content-between flex-wrap">
          <div className="d-flex flex-column flex-md-row">
            <img
              src={Logoaia}
              alt="Company Logo"
              className="me-md-4 mb-3 mb-md-0"
              style={{ width: "100px", height: "60px", objectFit: "contain" }}
            />
            <div>
              <h5 className="mb-1 fw-bold">Junior Data Architect</h5>
              <a
                href="https://companywebsite.com"
                className="text-success text-decoration-none d-block mb-2"
                target="_blank"
                rel="noreferrer"
              >
                AIA Singapore - Batam
              </a>

              <p className="text-muted mb-2 d-block d-xxl-none">
                June 2022 - March 2023
              </p>

              <ul className="mb-2 ps-3">
                <li>
                  Built end-to-end campaign data architecture using PostgreSQL
                  and Databricks from design to production
                </li>
                <li>
                  Developed a new database system to support business
                  stakeholder requirements
                </li>
                <li>
                  Contributed to internal app front-end features used across
                  multiple departments
                </li>
                <li>
                  Monitored job processes via Autosys and escalated critical
                  issues to management
                </li>
                <li>
                  Provided ongoing data support and troubleshooting for
                  cross-functional teams
                </li>
              </ul>

              <div className="d-flex flex-wrap gap-2 mt-2">
                <span className="badge bg-secondary">PostgreSQL</span>
                <span className="badge bg-secondary">Jira</span>
                <span className="badge bg-secondary">Jenkins</span>
                <span className="badge bg-secondary">Git</span>
              </div>
            </div>
          </div>

          <div className="text-end mt-3 mt-md-0 d-none d-xxl-block">
            <span className="text-muted">June 2022 - March 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
