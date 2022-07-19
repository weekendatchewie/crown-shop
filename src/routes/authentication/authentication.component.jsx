import {useEffect} from "react";

import {getRedirectResult} from "firebase/auth";

import {
    auth,
    createUserDocumentFromAuth,
    signInWithGooglePopup,
    signInWithGoogleRedirect
} from "../../utils/firebase/firebase.utils";
import SignupForm from "../../components/signup-form/signup-form.component";
import SigninForm from "../../components/signin-form/signin-form.component";


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

    return (
        <div>

            <SignupForm />
            <SigninForm />

        </div>
    );
}

export default SignIn;