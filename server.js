import express from 'express'

const app = express()

// This is a fake AWS key for testing GitHub Secret Protection - DO NOT USE REAL SECRETS
const fakeAwsKey = 'AKIAIOSFODNN7EXAMPLE'

// This is a fake GitHub token for testing GitHub Secret Protection
const fakeGitHubToken = 'ghp_aBcDeFgHiJkLmNoPqRsTuVwXyZ0123456789'

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(4000)

console.log(process.env.SSH_PRIVATE_KEY)
// Logging fake secrets for testing purposes only
console.log('Fake AWS Key:', fakeAwsKey)
console.log('Fake GitHub Token:', fakeGitHubToken)