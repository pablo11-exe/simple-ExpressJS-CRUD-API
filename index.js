const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require("./routes/product.route.js");
const app = express()

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//Middleware

//home
app.get('/', (req, res) => {
    res.send("Hello from API blablabla")
});

//routes
app.use("/api/products", productRoute);


//Connect to database
mongoose.connect("mongodb+srv://pablosergiors11:iZQcOnw0D7uVwjNn@backenddbnode.5fds5.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDBNode")
    .then(() => {
        console.log("Connected to the database")
        app.listen(3000, () => {
            console.log('Server is running on port 3000')
        });
    })
    .catch(() => {
        console.log("Connection failed")
    });