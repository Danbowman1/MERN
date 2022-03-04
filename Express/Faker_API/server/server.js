const express = require('express')
const faker = require('faker')
const app = express()

app.use(express.json())



const createUser = () => {
    const newUser = {
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
    return newUser
}

const createCompany = () => {
    const newCompany = {
        id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {
            street: faker.address.streetName(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country() 
        }
    }
    return newCompany
}




app.get('/api/users/new', (req, res)=> {
    const newUser = createUser()
    res.json(newUser)
})

app.get('/api/companies/new', (req, res)=> {
    const newCompany = createCompany()
    res.json(newCompany)
})

app.get('/api/user/company', (req, res)=> {
    const newUser = createUser()
    const newCompany = createCompany()
    const userAndCompany = {
        user: newUser,
        company: newCompany
    }

    res.json(userAndCompany)
})









app.listen(8000, ()=>console.log('You have successfully connected to port 8000'))