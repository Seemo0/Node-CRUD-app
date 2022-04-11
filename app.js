const express = require("express")
const app = express()
const mongoose = require('mongoose');
const {contactRoutes} = require('./routes/route')
const axios = require("axios")
const bodyParser = require('body-parser')
const { engine } = require("express-handlebars");

//set template engine
app.engine("handlebars", engine({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

const port = 1000;
const url = "mongodb+srv://urname:<password>@urdatabase.fpq28.mongodb.net/contact?retryWrites=true&w=majority"

//add bp midlware
app.use(bodyParser.urlencoded({extended : false }))
app.use(bodyParser.json())

//connect to DB
mongoose.connect(url)
         .then(() => console.log('connected'))
         .catch(err => console.log(err));

//use contact route         
app.use("/",contactRoutes)

//get all contatc
app.get("/", async function(req, res) {
    try {
        const  resp = await axios.get("http://localhost:1000/contacts")
        res.render("home", { contacts : resp.data.contacts })
    } catch (error) {
        console.log(error)
    }
       
})
//get add form contact
app.get("/add", function(req, res) {
        res.render("addContact") 
})
//post contact to database
app.post("/add", function(req, res) {
    const contact = req.body
    axios.post("http://localhost:1000/contacts/add",contact) 
    .then(resp => {
        if(!resp.data.error){
            res.redirect("/")
        }
    }).catch( err => console.log(err))
})

//get contact to update
app.get("/update/:id",async (req,res) => {
    try {
        const  resp = await axios.get(`http://localhost:1000/contact/${req.params.id}`)
        console.log(resp.data)
        res.render("updateContact", { contact : resp.data.contact })
    } catch (error) {
        console.log(error)
    }
})

//update contact
app.post("/update/:id", (req,res) => {
    const contact = req.body
    axios.put(`http://localhost:1000/contact/${req.params.id}`,contact) 
    .then(resp => {
        if(!resp.data.error){
            res.redirect("/")
        }
    }).catch( err => console.log(err))
})

//delete contact
app.get("/delete/:id",(req,res) => {  
    axios.delete(`http://localhost:1000/contact/${req.params.id}`) 
    .then(resp => {
        if(!resp.data.error){
            res.redirect("/")
        }
    }).catch( err => console.log(err))
})


//start server
app.listen(port,()=> console.log(`server is running at ${port} `))


