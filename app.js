const express = require('express')
const bodyParser = require('body-parser');
const { request, response } = require('express');

const app = express()

let items = ['Buy Groceries','Complete the module','Read Documentation']                                           // array for storing list items

app.set('view engine', 'ejs');                                               //setting the ESJ as View Engine
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))                                            //lets use the public folder containing additional files

app.get('/', (req,res)=>{
    
    let today  = new Date();                                                     //importing the date
    let options = { weekday: 'long', day: 'numeric', month: 'long'};             //formatting the date
    
    let day = today.toLocaleDateString("en-US", options)                         //asigning the formatted date as string
    res.render("list",{kindOfDay: day, newListItems : items})                   //displaing date and list to the view
})

app.post('/', (request,response)=>{

    let item = request.body.newItem                                            //accessing the list from form
    //console.log(item)
    items.push(item)                                                          // adding the list to array

    response.redirect('/')                                                    //redirecting to home route with updated list
})


app.listen('3000', (req,res)=>{
    console.log("running on port 3000")
})
