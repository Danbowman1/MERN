import React, {useState} from "react";

const People = (props) => {

    const {firstName, lastName, age, hairColor} = props

    const [currentAge, setCurrentAge] = useState(age)

const addYear = () => {
    setCurrentAge(currentAge + 1)
}

    return (
        <div>
            <p className="name">{lastName}, {firstName}</p>
            <p>Age: {currentAge}</p>
            <p>hairColor: {hairColor}</p>
            <button onClick={addYear}>Birthday Button for {lastName}, {firstName}</button>
        </div>
    )
}

export default People