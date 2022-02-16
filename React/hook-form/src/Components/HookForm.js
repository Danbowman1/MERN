import React, { useState } from "react";

const HookForm = (props) => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

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


    return (
        <div>
        <form onSubmit={ createUser }>
        <div className="inputContainer">
            <label>First Name</label>
            <input type="text" onChange={ (e) => setFirstName(e.target.value) } value={ firstName }></input>
            </div>
        <div className="inputContainer">
            <label>Last Name</label>
            <input type="text" onChange={ (e) => setLastName(e.target.value) } value={ lastName }></input>
            </div>
        <div className="inputContainer">
            <label>Email</label>
            <input type="text" onChange={ (e) => setEmail(e.target.value) } value={ email }></input>
            </div>
        <div className="inputContainer">
            <label>Password</label>
            <input type="text" onChange={ (e) => setPassword(e.target.value) } value={ password }></input>
            </div>
        <div className="inputContainer">
            <label>Confirm Password</label>
            <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } value={ confirmPassword }></input>
            </div>
            <input type="submit" value="Creat User" className="submitBtn"></input>
        </form>
        <div className="userInfo">
            <p>Your Form Data</p>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>

        </div>

        

    )
}

export default HookForm