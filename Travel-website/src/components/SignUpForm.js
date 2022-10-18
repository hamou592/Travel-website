import "./SignUpFormStyles.css";

function SignUpForm(){
    return(
        <div className="form-container SignUp">            
            <form>
                <input placeholder="First Name" required/>
                <input placeholder="Last Name" required/>
                <input type="email" placeholder="Email" required/>
                <input type="password" required placeholder="Password" />
                <button>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm;