import "./DestinationStyles.css"
import { Component } from "react";
class DestinationData extends Component{
    render(){
        //in the class component we use "this.props.variable" in order to use variabls
        return(
            <div className={this.props.cName}>
                <div className="des-text">
                    
                    <h2>{this.props.heading}</h2>
                    <p>{this.props.text}</p>
                </div>
                <div className="image">
                    <img src={this.props.img1} alt="img"/>
                    <img src={this.props.img2} alt="img"/>
                </div>
            </div>
        )
    }
}

export default DestinationData;