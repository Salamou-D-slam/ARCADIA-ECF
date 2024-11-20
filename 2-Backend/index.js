import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import pg from "pg";


const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "Arcadia DB",
  password: "setifsalamou_19000",
  port: 5432,
});



db.connect();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


 
app.get("/", (req, res) => {
    res.render("home.ejs"); //__dirname + "/public/connexion_bk.html"
});

app.get("/connexion", (req, res) => {
  res.render("connexion.ejs"); //__dirname + "/public/connexion_bk.html"
});

app.get("/service", (req, res) => {
  res.render("service.ejs"); //__dirname + "/public/connexion_bk.html"
});

app.get("/habitat", (req, res) => {
  res.render("habitat.ejs"); //__dirname + "/public/connexion_bk.html"
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs"); //__dirname + "/public/connexion_bk.html"
});

app.get("/savane", (req, res) => {
  res.render("savane.ejs"); //__dirname + "/public/connexion_bk.html"
});

app.get("/jungle", (req, res) => {
  res.render("jungle.ejs"); //__dirname + "/public/connexion_bk.html"
});

app.get("/marais", (req, res) => {
  res.render("marais.ejs"); //__dirname + "/public/connexion_bk.html"
});




app.get("/logout", (req, res) => {
    res.redirect("/ll");
  });

app.post("/check", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (result.rows.length > 0) {
      const user = result.rows[0];
      const storedPassword = user.password;

      if (password === storedPassword) {
        res.render("secrets.ejs");  //__dirname + "/public/secret.html"
      } else {
        res.send("Mot de passe incorrect.");
      }
      
    } else {
      res.send("utilisateur non trouvé.");
    }
  } catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });