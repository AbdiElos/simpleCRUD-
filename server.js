const express =require("express")
const bodyParser =require("body-parser")
const cors = require("cors")
const db = require("./models");

const app = express()


db.sequelize.sync();

const corsOptions ={
    origin: "http://localhost:8081"

}
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.get("/",(req, res)=>{
    res.json({message: "welcome to my applicatinon"})
})
require("./routes/tutorial.routes")(app);
const PORT= process.env.PORT||8080
app.listen(PORT, ()=>{console.log(`server is running on port ${PORT}`)})