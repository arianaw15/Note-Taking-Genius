const express = require("express");
const path = require("path");
const PORT = 6464;
var app = express();
const db = require("./Develop/db/db.json");
// var notes = db();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function(req, res)
{res.sendFile(path.join(__dirname, './public/index.html'))
});

app.get('/notes', (req, res)=>{
    res.sendFile(path.join(__dirname, './public/notes.html'))
});

app.get('/api/notes', (req,res)=>{
    res.json(db);
})

app.post('/api/notes',(req,res)=>{
const newNote = req.body;
db.push(newNote);
})

// ===============================================================
app.listen(PORT,function(){
    console.log("App listening on PORT http://localhost:"+PORT);
});

