import {useState} from 'react';
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

import './signup-form.styles.scss';
import Button from "../button/button.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

function SignupForm() {

    const [formFields, setFormFields] = useState(defaultFormFields)
    const [getErrorMessage, setErrorMessage] = useState('')

    const {displayName, email, password, confirmPassword} = formFields

    const resetForm = () => {
        setFormFields(defaultFormFields)
    }

    const handleChange = event => {
        const {name, value} = event.target

        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async event => {
        event.preventDefault()

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password)

            await createUserDocumentFromAuth(user, {displayName})

            resetForm()

        } catch (error) {

            if (error.code === 'auth/email-already-in-use') {
                setErrorMessage('User already exists');
            }

            console.log(error)
        }
    }

    return (
        <div className="sign-up-container">
            <h2>Don't have an account ?</h2>

            {getErrorMessage && <span className="error-message">{getErrorMessage}</span>}

            <form onSubmit={handleSubmit}>

                <FormInput
                    label='Name'
                    type="text"
                    required
                    onChange={handleChange}
                    name='displayName'
                    value={displayName}
                />

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

                <FormInput
                    label='Confirm Password'
                    type="password"
                    required
                    onChange={handleChange}
                    name='confirmPassword'
                    value={confirmPassword}
                />

                <Button type="submit" buttonType="login">Sign Up</Button>

            </form>
        </div>
    );
}

export default SignupForm;