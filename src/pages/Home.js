import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from '../comp/NavBar'
import { Banner } from '../comp/Banner';
import { AboutMe } from '../comp/AboutMe';
import { Skills } from '../comp/Skills';
import { Footer } from "../comp/Footer"
import { Projects } from '../comp/Projects';

export default function Home() {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    )
}