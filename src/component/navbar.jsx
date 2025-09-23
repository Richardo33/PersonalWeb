import { Navbar, Button, Container, Nav } from "react-bootstrap";
import Logo from "../assets/logo.png";

function Navigate() {
  return (
    <Navbar expand="md" className="bg-info-subtle py-2 px-4">
      <Container fluid>
        <Navbar.Brand href="/" className="mx-auto mx-md-0 text-center">
          <img src={Logo} alt="Logo" height="40" />
        </Navbar.Brand>

        <div className="d-none d-lg-flex align-items-center gap-3 ms-auto">
          <Nav>
            <Nav.Link href="#Technologies" className="text-dark">
              TechStack
            </Nav.Link>
            <Nav.Link href="#Experiences" className="text-dark">
              Experiences
            </Nav.Link>
            <Nav.Link href="#Certifications" className="text-dark">
              Certificates
            </Nav.Link>
            <Nav.Link href="#Project" className="text-dark">
              Project
            </Nav.Link>
          </Nav>

          <Button
            variant="success"
            href="https://wa.me/6281993218599"
            target="_blank"
          >
            <i className="bi bi-whatsapp me-1"></i> Contact Me
          </Button>
          <Button
            variant="dark"
            href="https://drive.google.com/file/d/1qixae2Ecj4ft26nThV8cpInfKK1nsKYw/view?usp=drive_link"
            target="_blank"
          >
            <i className="bi bi-download me-1"></i> Download CV
          </Button>
        </div>

        <div className="d-none d-md-flex d-lg-none align-items-center gap-2 ms-auto">
          <Button
            variant="success"
            href="https://wa.me/6281993218599"
            target="_blank"
          >
            <i className="bi bi-whatsapp me-1"></i> Contact Me
          </Button>
          <Button
            variant="dark"
            href="https://drive.google.com/file/d/1qixae2Ecj4ft26nThV8cpInfKK1nsKYw/view?usp=drive_link"
            target="_blank"
          >
            <i className="bi bi-download me-1"></i> Download CV
          </Button>
        </div>
      </Container>
    </Navbar>
  );
}

export default Navigate;
