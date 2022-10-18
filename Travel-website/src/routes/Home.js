import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import Heroo from "../assets/Heroo.png"
import Destination from "../components/Destination";
import TRip from "../components/TRip";
import Footer from "../components/Footer";
function Home(){
    var bg_img = {
        //adding dynamic background to the hero page
        backgroundImage: `url(${Heroo})`,
    }
    return(
        <>
            <Navbar />
            <Hero cName="hero" heroImg = {bg_img} title="Your Journey Your Story" text="Choose Your 
            Favourite Destination" url="/" btnClass="show" buttonText="Travel Plan"/>
            <Destination />
            <TRip />
            <Footer />
        </>
    )
}

export default Home;