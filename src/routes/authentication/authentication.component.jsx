import SignupForm from "../../components/signup-form/signup-form.component";
import SigninForm from "../../components/signin-form/signin-form.component";

import './authentication.styles.scss'

function SignIn() {

    return (
        <div className="authentication-container">
            <SigninForm/>
            <SignupForm/>
        </div>
    );
}

export default SignIn;