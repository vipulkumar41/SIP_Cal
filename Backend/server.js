const express = require("express")
const app = express()
const bodyparser = require("body-parser")
app.use(bodyparser.json())
const cors = require('cors')
app.use(cors())
const port = 5000

app.get("/test",(req,res)=>{
  res.send({message:"i am working"})
})
app.all("*", require("./Routes/index"))

app.listen(port, (err, res) => {
  if (err) console.log("Error " + err)
  else console.log("App is listening at port 3000")
})
