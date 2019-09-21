const express = require("express")
const app = express()
const port = 3000

app.get("/", function (req,res){
    res.send("Hello World!")
}
)

//para usar un middleWere y que se vea más bonito el code
const handleRoute = function (req,res){
    res.send("Hello World! desde another route")}

app.get("/another", handleRoute
)

//comillas invertidas para que el string pueda usar un var let const
app.listen(port, function(){
    console.log(`Example app listen on port ${port}!`)
}
)

app.get("/route-get", function (req,res){
    res.send("Este es el GET")})

app.post("/route-post", function (req,res){
        res.send("Estes es el POST")})

app.put("/route-put", function (req,res){
        res.send("Este es el PUT")})

app.delete("/route-delete", function (req,res){
         res.send("Este es el DELETE")})