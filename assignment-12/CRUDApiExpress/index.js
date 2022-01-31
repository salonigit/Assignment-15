import express from 'express'
import routes from './routes/index'

const app = express()

app.use(express.json())
app.use('/', routes)

const db = require("./models");
db.sequelize.sync();

app.listen(8080, () => {
    console.log("server is running")
})
