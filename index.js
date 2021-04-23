const express = require('express')
const app = express()
const dotenv = require('dotenv')
const morgan = require('morgan')
const path = require('path')

dotenv.config({path: 'config.env'})
const port = process.env.PORT || 3000
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.set('view engine', 'ejs')
// app.set('views', path.resolve(__dirname, "views/ejs"))
app.use('/css', express.static(path.join(__dirname, "node_modules/mdb-ui-kit/css")))
app.use('/img', express.static(path.resolve(__dirname, "node_modules/mdb-ui-kit/img")))
app.use('/js', express.static(path.resolve(__dirname, "node_modules/mdb-ui-kit/js")))
app.use('/', (req, res, next) => {
    res.render('index')
})
app.use(morgan('tiny'))
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})