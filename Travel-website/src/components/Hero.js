import "./HeroStyles.css"
import Heroo from "../assets/Heroo.png"
function Hero(props){

    return(
        <>
            <div style={props.heroImg}  className={props.cName}>
                
                <div className="hero-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
                </div>
            </div>
        </>
    )

}

export default Hero;