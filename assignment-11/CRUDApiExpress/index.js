import db from './models'
import express from 'express'
import routes from './routes/index'
import authen from '../CRUDApiExpress/middleware/auth'
const auth = authen()
const app = express()

app.use(express.json())
app.use(auth.initialize());
app.use('/', routes)
db.sequelize.sync();

app.listen(8080, () => {
    console.log("server is running")
})
