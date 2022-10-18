import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";
import Contactt from "../assets/SignUp.jpg";
import SignUpForm from "../components/SignUpForm";
import "../components/SignUpFormStyles.css";
function SignUp(){
    var bg_img = {
        //adding dynamic background to the hero page
        backgroundImage: `url(${Contactt})`,
    }
    /*==================this is used to make a switch between login and signin components================== 

    ========================These are variabls used to make a test ========================
    let temp = true;
    const changestatus = () =>{
        temp = !temp;
        =====This is for testing if the function works correctly====
        console.log(temp);

    }
    ===============This is should be added after the hero rendering===============
            <div className="LogSign">
                <h6> <span>Log In</span>   <span>Sign Up</span></h6>
                <input type="checkbox" className="checkbox" id="reg-log" />
                
                <label onClick={() =>{
                    changestatus();
                    (temp ? <LogInForm /> : <SignUp />)
                }}  for="reg-log"></label>                
            </div>
    ===============The problem : i couldn't render copmponents onf the click event===============
    */
    return(
        <>
            <Navbar />
            <Hero cName="hero-mid" heroImg = {bg_img} title="Sign_Up"/>
            <SignUpForm />            
            <Footer />            
        </>
    )
}
export default SignUp;