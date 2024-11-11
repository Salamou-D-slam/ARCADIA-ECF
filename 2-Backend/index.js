import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));


const app = express();
const port = 3000;

var userIsAuthorised = false;

app.use(bodyParser.urlencoded({extended: true}));


function passGenerator(req ,res, next) {
    const email = req.body["email"];
    const password = req.body["password"]; //regarder le name dans le formulair html
    if(email === "admin@gmail.com" && password === "admin19000"){
        userIsAuthorised = true;
    } else {
        userIsAuthorised = false;
      }
    next ();
}

app.use(passGenerator);
 
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/connexion_bk.html");
});

app.post("/check", (req, res) => {
    if (userIsAuthorised) {
        res.sendFile(__dirname + "/public/secret.html");
      } else {
        res.sendFile(__dirname + "/public/connexion_bk.html");
        //Alternatively res.redirect("/");
      }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });