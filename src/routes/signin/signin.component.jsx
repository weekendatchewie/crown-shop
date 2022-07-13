import {useEffect} from "react";

import {getRedirectResult} from "firebase/auth";

import {
    auth,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInWithGoogleRedirect
} from "../../utils/firebase/firebase.utils";
import SignupForm from "../../components/signup-form/signup-form.component";


function SignIn() {

    // useEffect(() => async () => {
    //     const response = await getRedirectResult(auth)
    //     console.log(response)
    //
    //     if(response) {
    //         const userDocRef = await createUserDocumentFromAuth(response.user)
    //     }
    //
    // }, [])

    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <div>
            <h1>Sign In</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            {/*<button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button>*/}

            <SignupForm />

        </div>
    );
}

export default SignIn;