import React from 'react'

const Display = (props) => {

    const {firstName,setFirstName,lastName,setLastName,email,setEmail, password,setPassword,confirmPassword,setConfirmPassword} = props


    return (
        <div>
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

export default Display