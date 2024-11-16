import express from 'express';

const PORT = 3000;
const app = express();
const apiRoute = require('./routes/api');
app.use(express.static())
const path = require("path");
app.use(express.static(path.join(__dirname, "public"))); //add o caminho para a pasta public
app.use('/api', apiRoute);
app.get("/all", (req, res) => {
    res.json.stringfy(posts.getAll());
});

 app.post("/new", bodyParser.json(), (req, res) => {
   
    let title = req.body.title;
    let description = req.body.description;
    
    posts.newPost(title, description);
    
    req.send("Post adicionado com sucesso");
});

function generateID() {
    return Math.random().toString(36).substr(2, 9);
}

app.listen(PORT, () => {
  console.log('Server started', PORT);
});