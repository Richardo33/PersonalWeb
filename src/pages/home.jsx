import Navigate from '../component/navbar'
import Hero from './hero'
import Technologies from './tech'
import Certificate from './certificate'
import Experience from './experience'
import Project from './project'
import Closing from './closing'
import Footer from './footer'


function LandingPage() {
    return(
        <div>
            <div>
                <Navigate/>
                <Hero/>
                <Technologies/>
                <Experience/>
                <Certificate/>
                <Project/>
                <Closing/>
                <Footer/>
            </div>
        </div>
    );
}

export default LandingPage;