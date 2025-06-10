import express from 'express'

const app = express()

const key = 'AKIAIOSFODNN7EXAMPLE'

const token = 'ghp_aBcDeFgHiJkLmNoPqRsTuVwXyZ0123456789'

const pass = process.env.USER_PASSWORD;

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(4000)

console.log(process.env.SSH_PRIVATE_KEY)
console.log('Key:', key)
console.log('Token:', token)
console.log('Password:', pass)