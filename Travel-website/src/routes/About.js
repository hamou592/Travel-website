import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Aboutt from "../assets/Aboutt.jpg";
import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";
function About(){
    var bg_img = {
        //adding dynamic background to the hero page
        backgroundImage: `url(${Aboutt})`,
    }
    return(
        <>
            <Navbar />
            <Hero cName="hero-mid" heroImg = {bg_img} title="About"/>
            <AboutContent />
            <Footer />
        </>
    )

}

export default About;