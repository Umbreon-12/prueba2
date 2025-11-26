console.clear

const dotenv = require('dotenv')
dotenv.config()

//importamos los modulos
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

//importamos midlleware
const anticache = require('./middlewares/anticache')

//variable global para ruta ABSOLUTA a la base del proyec
global._basedir = __dirname

//puerto de la aplicacion
const puerto = process.env.PUERTO 

//constante para mostrar la aplicacion
const app = express()

//configurar motor de plantilla a EJS
app.set('view engine', 'ejs')
//establecemos la ruta por defecto para las plantillas
app.set('views', __dirname + '/public/views')

//Cosas que va utilizar la app
app.use(express.static('public')) //primera vista
app.use(express.json())
app.use(cors())
app.use(cookieParser())
// app.use(anticache)

//importamos el modulo de las rutas
const rutasApp = require('./routes/adminrouters')
app.use(rutasApp)

//lazamiento del servidor express
app.listen(puerto, () => {
    console.log(`Listo en el puerto: http://localhost:${puerto}`)
})