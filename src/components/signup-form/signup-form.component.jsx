import React, {useState} from 'react';
import {createAuthUserWithEmailAndPassword, createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

function SignupForm() {

    const [formFields, setFormFields] = useState(defaultFormFields)

    const { displayName, email, password, confirmPassword } = formFields

    const resetForm = () => {
        setFormFields(defaultFormFields)
    }

    const handleChange = event => {
        const { name, value } = event.target

        setFormFields({...formFields, [name]: value})
    }

    const handleSubmit = async event => {
        event.preventDefault()

        if(password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)

            await  createUserDocumentFromAuth(user, { displayName })

            resetForm()

        } catch (error) {

            if(error.code === 'auth/email-already-in-use') {
                alert('Email already exists')
            }

            console.log(error)
        }
    }

    return (
        <div>
            <h1>Sign Up Form</h1>

            <form onSubmit={handleSubmit}>

                <label>Name</label>
                <input type="text"
                       required
                       onChange={handleChange}
                       name='displayName'
                       value={displayName}
                />

                <label>Email</label>
                <input type="email"
                       required
                       onChange={handleChange}
                       name='email'
                       value={email}
                />

                <label>Password</label>
                <input type="password"
                       required
                       onChange={handleChange}
                       name='password'
                       value={password}
                />

                <label>Confirm Password</label>
                <input type="password"
                       required
                       onChange={handleChange}
                       name='confirmPassword'
                       value={confirmPassword}
                />

                <button type="submit">Sign Up</button>

            </form>
        </div>
    );
}

export default SignupForm;