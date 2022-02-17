import React, {useState} from "react";

const HookForm = (props) => {

    const {firstName,setFirstName,lastName,setLastName,email,setEmail, password,setPassword,confirmPassword,setConfirmPassword} = props


const [firstNameError, setFirstNameError] = useState("")


const createUser = (e) => {
    e.preventDefault()


    const newUser = {firstName, lastName, email, password,confirmPassword}
    console.log("Welcome", newUser)
    setFirstName("")
    setLastName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
}


const handleFirstName = (e) => {
    setFirstName(e.target.value)

    if(e.target.value.length < 1){
        setFirstNameError("First name is required")
    } else if (e.target.value.length < 2) {
        setFirstNameError("First name must be at least 2 characters")
    } else {
        setFirstNameError("")
    }
}


    return (
        <div>
        <form onSubmit={ createUser }>
        <div className="inputContainer">
            <label>First Name</label>
            <input type="text" onChange={ (e) => {
                handleFirstName(e)
            }} value={ firstName }></input>
            {
                firstNameError?
                <p>{firstNameError}</p>
                :null
            }
            
            </div>
        <div className="inputContainer">
            <label>Last Name</label>
            <input type="text" onChange={ (e) => setLastName(e.target.value) } value={ lastName }></input>
            {
                lastName.length < 2 && lastName.length > 0 ? (
                    <p>Last name must be at least 2 characters</p>
                ): null
            }
            </div>
        <div className="inputContainer">
            <label>Email</label>
            <input type="email" onChange={ (e) => setEmail(e.target.value) } value={ email }></input>
            {
                email.length < 2 && email.length > 0 ? (
                    <p>Email must be at least 2 characters</p>
                ) : null
            }
            </div>
        <div className="inputContainer">
            <label>Password</label>
            <input type="password" onChange={ (e) => setPassword(e.target.value) } value={ password }></input>
            {
                password.length < 8 && password.length > 0 ? (
                    <p>Your password must be at least 8 characters</p>
                ) : null
            }
            </div>
        <div className="inputContainer">
            <label>Confirm Password</label>
            <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } value={ confirmPassword }></input>
            {
                confirmPassword !== password ? 
                <p>Passwords must match</p>
                : null
            }
            </div>
        </form>
        

        </div>

        

    )
}

export default HookForm