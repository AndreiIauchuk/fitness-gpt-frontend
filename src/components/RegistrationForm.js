import { useState } from "react";
import { Input } from "./Input"

export const RegistrationForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [message, setMessage] = useState("");

    const passwordMinLength = 8;

    const clearForm = () => {
        setEmail("");
        setPassword("");
        setFirstName("");
        setSecondName("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMessage('Account was created! [Delete]user:' + email + 'password:' + password + 'firstName:' + firstName + 'secondName:' + secondName);  /* TODO Delete credentials logging */
        clearForm();
    };

    const isFormValid = () => {
        return email && password.length >= passwordMinLength && firstName && secondName
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <h2>Sign Up</h2>
                        <Input
                            label="Email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); }}
                            placeholder="Enter your email"
                            required="required" />
                        <Input
                            label="Password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value); }}
                            placeholder={"Enter your password (minimum " + passwordMinLength + " symbols!)"}
                            required="required" />
                        <Input
                            label="First Name"
                            value={firstName}
                            onChange={(e) => { setFirstName(e.target.value); }}
                            placeholder="Enter your first name"
                            required="required" />
                        <Input
                            label="Second Name"
                            value={secondName}
                            onChange={(e) => { setSecondName(e.target.value); }}
                            placeholder="Enter your second name"
                            required="required" />
                        <button type="submit" disabled={!isFormValid()}>
                            Sign Up
                        </button>
                        <div className="App">
                            <h1>{message}</h1>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}