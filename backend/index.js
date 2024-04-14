const jobRoutes = require('./routes/jobRoutes');



const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')

const app = express()
app.use(cors(
    {
        Access-Control-Allow-Origin : 'https://job-listing-application-frontend.vercel.app',
        Access-Control-Allow-Methods : ['POST','GET','DELETE','PUT'],
        Access-Control-Allow-Credentials : true
    }
));

const PORT = process.env.PORT || 8080

mongoose.connect("mongodb://localhost:27017/joblistingDB",{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("connected to db")
    app.listen(PORT,()=>{
        console.log("listening");
    })
})
.catch((err)=> console.log(err))

//Middleware
app.use(express.json());

// Routes
app.use('/api', jobRoutes); // This tells Express to use jobRoutes for any route that starts with /api


app.get("/",(req,res) => {
    res.json({message:"Server is running"})
});

