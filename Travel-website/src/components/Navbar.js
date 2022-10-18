import { Component } from "react";
import "./NavbarStyles.css"
import {Routes,Route,Link} from "react-router-dom"
import {MenuItems} from "./MenuItems"
const last = MenuItems.length;
let temp = 2;
function changeSubmit(){
    if (temp === 2 ){
        temp = 1;
    }else{
        temp=2;
    }
}
class Navbar extends Component{
    //this state and function are used to switch between menu and close icons
    state = {clicked : false};
    handleClick = () => {
        this.setState({clicked : !this.state.clicked})
    }

    //we add render because we use extends Component
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Trippy</h1>
                <div className="menu-icons">
                    
                    <i /*this is used to change the state of the button conditionally*/ onClick={this.handleClick} className={this.state.clicked ? "fas fa-times":"fas fa-bars"}></i>
                </div>
                
                <ul /*this condition is used to hide/display the list*/ className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item,index) => {
                        return(
                            <li>     
                                <Link className={MenuItems[index].cName} to={MenuItems[index].url}>
                                <i className={MenuItems[index].icon}></i>
                                {MenuItems[index].title}
                                </Link>
                            </li>
                        )
                    })}
                    <Link onClick={changeSubmit} to={MenuItems[last-temp].url} >
                        <button>{MenuItems[last-temp].title}</button>
                    </Link>
                    
                    
                </ul>
                
            </nav>
        )
    }
}

export default Navbar