const express = require("express");
const cors = require("cors")


//Routes


const app = express();
const PORT = process.env.PORT || 2022;

//Middlewares
app.use(cors());
app.use(express.json());


app.get("/" , (req,res) =>{
    res.send("Server is Running gng.");
    console.log("Hit!");
})

app.listen(PORT, () =>{
    console.log("it's running!");
});