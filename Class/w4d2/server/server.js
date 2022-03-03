const express = require('express')
const faker = require('faker')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.get("/api/welcome", (request, response)=>{
    console.log('This is the welcome API route')
    response.json({message: "Welcome to out API... this is the response"})
})

app.post('/api/welcome', (request, response)=>{
    console.log('This is our post request')
    response.json({
        message: ['MERN is great', 'MERNY goodness','MERNMERN', 'MERNy Christmas'],
        ourResquestBody: request.body
    })
    console.log(request.body)
})


app.get('/api/faker', (req, res)=>{
    const name = faker.name.firstName()
    const email = faker.internet.email()

    res.json({
        firstName: name,
        userEmail: email
    })
})






app.listen(8000, ()=>console.log('You have successfully connected to port 8000') )