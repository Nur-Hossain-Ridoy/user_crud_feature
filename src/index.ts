import express from 'express';

const app = express()

app.get('/', (req, res) => {
    res.send('Trying to be good')
})



const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})