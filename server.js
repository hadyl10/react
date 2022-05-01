const express = require('express')

const app = express()
const cors = require('cors')
app.use(cors())
require('dotenv').config()
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
require('./config/database')

app.use('/users', require('./routers/userRouter'))
app.use('/questions', require('./routers/quetionsRouter'))

app.listen(5000, () => {
    console.log(
        "server is rnning on port 5000"
    );
})
