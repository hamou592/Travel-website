import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import Contactt from "../assets/Contact.jpg"
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
function Contact(){
    var bg_img = {
        //adding dynamic background to the hero page
        backgroundImage: `url(${Contactt})`,
    }
    return(
        <>
            <Navbar />
            <Hero cName="hero-mid" heroImg = {bg_img} title="Contact"/>
            <ContactForm />
            <Footer />
        </>
    )
}

export default Contact;