import "./SignUpFormStyles.css";

function LogInForm(){
    return(
        <div className="form-container LogIn">         
            <form>
                <input type="email" placeholder="Email" required/>
                <input type="password" required placeholder="Password" />
                <button>Log In</button>
            </form>
        </div>
    )
}

export default LogInForm;