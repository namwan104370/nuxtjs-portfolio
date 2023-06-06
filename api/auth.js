const express = require('express')
const cors = require('cors')
const mockToken = 'cc38e2a31a9c8ef4165e4fcc7cb9b5dcfbbdd8e2fc46163cb92b581af8bdf769'
const mockUser = {
    id:1,
    name: 'John Doe',
    email: 'john@doe.com'
}

const app = express()

app.use(cors())
app.use(express.json())

app.get('/me', (req, res ) => {
    const headers = req.headers.authorization

    const token = headers && headers.split(' ')[1] // Bearer <Token>

    if (token === mockToken) {
        return res.json({
            user:mockUser
        })
    } else {
        return res.status(401).json({ message: 'Invalid token '})
    }
})

app.post('/login', (req, res) =>{
    const {email , password } = req.body

    if (email === 'admin@admin.com' && password === '123456') {
        return res.json({
            user:mockUser,
            token: mockToken,
        })
    } else {
        return res.status(401).json({ message: 'Invalid password ' })
    }
    
})

module.exports = {
    path: '/api',
    handler: app
}