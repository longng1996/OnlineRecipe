if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require('express')  //import express from express library
const app = express()       //get the app portion by calling function express
const expressLayouts = require('express-ejs-layouts')   //import layout packing earlier

const indexRouter = require('./routes/index')       //hook up application with server, importing router to server(this is a reference)

app.set('view engine', 'ejs')   //view by view engine with ejs
app.set('views', __dirname+'/views')    //set views path
app.set('layout','layouts/layout')  //hook up express layout, so that every single files put inside file doesnt need to duplicate
                                        //the beginning and ending HTML tags thing
app.use('/',indexRouter)
app.use(expressLayouts)            //telling express to use express layouts.
app.use(express.static('public'))   //telling express where public files going to be. mostly style sheet n images


const mongoose = require('mongoose')    //import mongoose library
mongoose.connect(process.env.DATABASE_URL,{     //setting up new connection for database
    useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true
})

const db = mongoose.connection     //access connection
db.on('error',error => console.error(error))
db.once('open',() => console.log('Connected to mongoDB '))

app.listen(process.env.PORT|| 3000)        //telling the app to listen, pull from the environment variable when deployed the server.
                                    //it will tell us which port its listening to, for development just use default port 3000


//setting up MongoDB (database)
