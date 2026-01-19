import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from 'uuid';
import methodOverride from "method-override";


let app = express();
let port = 8080;


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));




let posts = [
    {
        id: uuidv4(),
        title: "First Post",
        content: "This is a demo post showing how the card layout works.",
        imageUrl: "https://picsum.photos/seed/picsum/536/354"
    },
    {
        id: uuidv4(),
        title: "Nature Post",
        content: "A beautiful image pulled from an online source.",
        imageUrl: "https://picsum.photos/id/1084/536/354?grayscale"
    },
    {
        id: uuidv4(),
        title: "Tech Thoughts",
        content: "Sharing some ideas about technology and coding.",
        imageUrl: "https://picsum.photos/id/870/536/354?grayscale&blur=2"
    },
    {
        id: uuidv4(),
        title: "Simple Text Post",
        content: "This post shows how content looks with a clean layout.",
        imageUrl: "https://picsum.photos/id/237/536/354"
    }
];

// 888888888888888888888888888888888888888888888
// app.get("/login", (req, res) => {// login path
//     res.render("login.ejs");
//    // res.send("hello cat qwe");
// });
// app.post("/login", (req, res) => {// login path
//      req.render("index.ejs");
//    // res.send("hello cat qwe");
// });

// 888888888888888888888888888888888888888888888

app.get("/posts", (req, res) => {// index path
    res.render("index.ejs", { posts });
    // res.send("hello cat qwe");
});

app.get("/posts/create", (req, res) => {// create path
    res.render("create.ejs");
});

app.post("/posts", (req, res) => {// submision of create
    console.log(req.body);

    let { title, imageUrl, content } = req.body;
    let postnew = { id: uuidv4(), title, imageUrl, content };
    posts.push(postnew);
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {// view page 
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    console.log(post);
    res.render("show.ejs", { post });
})

app.patch("/posts/:id", (req, res) => { //edit
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find(p => id === p.id);
    post.content = newContent;
    console.log(post);
     res.redirect("/posts");
});
app.get("/posts/:id/edit", (req, res) => { //edit
    let { id } = req.params;
    let post = posts.find(p => id === p.id);
    res.render("edit.ejs",{post});
});


app.delete("/posts/:id", (req, res) => {// delete
    let { id } = req.params;
    posts = posts.filter((p) => p.id !== id);
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log("backend is running");
});
