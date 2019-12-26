const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.static('public'))
app.get('/', (req, res) => res.sendFile(__dirname+ '/public/html/page4.html'))
app.get('/page3.html', (req, res) => res.sendFile(__dirname+ '/public/html/page3.html'))
var obj={}
obj.company="CELLO";
obj.name="CELLO";
obj.regno="CELLO";
app.get('/data', (req, res) => res.json(obj))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))