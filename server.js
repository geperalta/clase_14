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