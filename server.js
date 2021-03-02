const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 6565;
var app = express();
const fs = require ('fs');

let rawDb = fs.readFileSync('./db/db.json');
let db = JSON.parse(rawDb);
var noteId = 0;
// var notes = db();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

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
nodeId = noteId + 1;
})

// ===============================================================
app.listen(PORT,function(){
    console.log("App listening on PORT http://localhost:"+PORT);
});

