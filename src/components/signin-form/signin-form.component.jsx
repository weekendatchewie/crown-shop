import React from 'react';
import FormInput from "../form-input/form-input.component";
import {useState} from "react";
import {
    createAuthUserWithEmailAndPassword,
    createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword,
    signInWithGooglePopup
} from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";

import './signin-form.styles.scss';


const defaultFormFields = {
    email: '',
    password: '',
}


function SigninForm() {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const [getErrorMessage, setErrorMessage] = useState('')

    const {email, password} = formFields

    const resetForm = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user)
    }


    const handleChange = event => {
        const {name, value} = event.target

        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async event => {
        event.preventDefault()

        try {

            const response = await signInAuthUserWithEmailAndPassword(email, password)

            console.log(response)

            resetForm()

        } catch (error) {

            switch (error.code) {
                case 'auth/wrong-password':
                    setErrorMessage('Wrong password');
                    break;
                case 'auth/user-not-found':
                    setErrorMessage('User does not exist');
                    break;
                default:
                    return
            }

            console.log(error)
        }
    }

    return (
        <div className="sign-in-container">

            <h2>Already have an account ?</h2>

            <span>Sign in with your email</span>

            {getErrorMessage && <span className="error-message">{getErrorMessage}</span>}

            <form onSubmit={handleSubmit}>

                <FormInput
                    label='Email'
                    type="email"
                    required
                    onChange={handleChange}
                    name='email'
                    value={email}
                />

                <FormInput
                    label='Password'
                    type="password"
                    required
                    onChange={handleChange}
                    name='password'
                    value={password}
                />

                <div className="buttons-container">
                    <Button type="submit">Sign In</Button>
                    <Button onClick={signInWithGoogle} buttonType='google'>Google Sign in</Button>
                </div>

            </form>
        </div>
    );
}

export default SigninForm;