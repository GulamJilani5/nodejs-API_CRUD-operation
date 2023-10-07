/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////.//// Using mongoose driver and connecting our nodejs with mongodb database(Hosted on cloud - atlas)
/////////// We are hosting our databse on Atlas cloud db

/////////////// Mongodb with Nodejs CRUD Operation Guide
//  https://www.mongodb.com/developer/languages/javascript/node-crud-tutorial-3-3-2/?utm_source=Iterable&utm_medium=email&utm_campaign=campaign_6533760



///// Connect to a MongoDB database hosted on MongoDB Atlas using mongoose driver
const mongoose = require('mongoose');

// import mongoose from 'mongoose';  // ES6 module import
const app = require('./app');
const router = require('./routes/tourRoutes')
// const dotenv = require('dotenv');
//dotenv.config({path: './config.env'}); // reading config.env variable
require('dotenv').config(); // Reading .env environment variable

 console.log('server');
//Database connection string
const DBConnectionString = process.env.DATABASE;
// console.log('db connection string', DBConnectionString)
// We can pass hardcoded
// @ = %40 // password is replaced in mongodb db password
// const DBConnectionString = 'mongodb+srv://<USERNAME>:<PASSWORD>@cluster0.hzaa03l.mongodb.net/<DATBASENAME>?retryWrites=true&w=majority'

// When we are exporting password and replacing in the db connection string(as done by Jonas in nodejs udemy course)
// const DBConnectionString = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD); 

//Connect to MongoDB using Mongoose driver
mongoose.connect(DBConnectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
  }).then((con)=>{
    // console.log(con)
    console.log('Database Connection Successful!!!');
  }).catch((err)=>{
    console.log('DB connection error: ', err.message)
  });

 // Middleware 
  app.use('/api/v1/tours', router);
 


//Listening to incoming request
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`App running on port ${port}`)
    // console.log('Connection string: ',DBConnectionString)
})