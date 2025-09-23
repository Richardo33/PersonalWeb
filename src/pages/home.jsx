import Navigate from "../component/navbar";
import Hero from "./hero";
import Technologies from "./tech";
import Certificate from "./certificate";
import Experience from "./experience";
import Project from "./project";
import Closing from "./closing";
import Footer from "./footer";

function LandingPage() {
  return (
    <>
      <header>
        <Navigate />
      </header>

      <main>
        <Hero />
        <Technologies />
        <Experience />
        <Certificate />
        <Project />
        <Closing />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default LandingPage;
