
const app = express('express');
const bodyParser = require('body-parser');
const posts = require('../model/posts');
const router = express.Router()
const cors = require('cors');

router.use(cors());

app.get("/all", (req, res) => {
    res.json.stringfy(posts.getAll());
});

app.post("/new", bodyParser.json(), (req, res) => { 
    let title = req.body.title;
    let description = req.body.description;
    posts.newPost(title, description);
    req.send("Post adicionado com sucesso");
}  );

module.exports = router;