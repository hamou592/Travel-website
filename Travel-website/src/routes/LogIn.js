import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import Contactt from "../assets/SignUp.jpg";
import LogInForm from "../components/LogInForm";
import "../components/SignUpFormStyles.css";
function LogIn(){
    var bg_img = {
        //adding dynamic background to the hero page
        backgroundImage: `url(${Contactt})`,
    }
    return(
        <>
            <Navbar />
            <Hero cName="hero-mid" heroImg = {bg_img} title="Log_In"/>
            <LogInForm />            
            <Footer />            
        </>
    )
}
export default LogIn;