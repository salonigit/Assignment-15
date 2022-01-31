import express from 'express'
import routes from './routes/index'
import db from './models'

const app =express()
app.use(express.json())
app.use('/', routes)

db.sequelize.sync();
app.listen(8080, () => {
    console.log("server is running")
})
