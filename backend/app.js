//import statement
const express = require('express')
const mongoose = require('mongoose')
const router = require('./routes/product-routes')
const cors = require('cors')

//middleware
const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//routes
app.use('/products',router);


app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})


//connection and port
mongoose.connect(process.env.URI2 , { useNewUrlParser : true, useUnifiedTopology : true})
.then((res) => console.log('>Database Connected Successfully...\n'))
.catch((err) => console.log(err))



app.listen(port , ()=> console.log('> Server is up and running on port : ' + port+'  '))