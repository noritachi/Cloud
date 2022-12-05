const bodyParser = require('body-parser')
const express = require('express')
const cmd = require('node-cmd')
const cors = require('cors')
const fs = require('fs')

const port = 3000

const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

app.post('/compile', (req, res) => {
    try {
        fs.writeFileSync(
            req.body.lang == "csharp" 
            ? 'D:/Studying/University/CloudComputing/FinalProject/CompilerService/CsharpProject/hello.cs'
            : 'D:/Studying/University/CloudComputing/FinalProject/CompilerService/JavaProject/HelloWorld.java', 
            req.body.code,
        ) 
        const result = cmd.runSync(
            req.body.lang == "csharp" 
            ? `docker run --rm -v D:/Studying/University/CloudComputing/FinalProject/CompilerService/CsharpProject:/data ubuntu:18.04 bash /data/compile.sh`
            : `docker run --rm -v D:/Studying/University/CloudComputing/FinalProject/CompilerService/JavaProject:/data ubuntu:18.04 bash /data/compile.sh`
        )
        res.status(200).json(result.data)
    } catch(e) {
        console.log(e)
        res.json("Fail")
    }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})