import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import Servicee from "../assets/Aboutt.jpg"
import TRip from "../components/TRip";
import Footer from "../components/Footer";
function Service(){
    var bg_img = {
        //adding dynamic background to the hero page
        backgroundImage: `url(${Servicee})`,
    }
    return(
        <>
            <Navbar />
            <Hero cName="hero-mid" heroImg = {bg_img} title="Service"/>
            <TRip />            
            <Footer />
        </>
    )
}

export default Service;