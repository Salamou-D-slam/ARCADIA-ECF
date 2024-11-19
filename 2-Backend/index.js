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

// let compte = [];
// db.query("SELECT * FROM utilisateurs", (err, res) => {
//   if (err) {
//     console.error("Error executing query", err.stack);
//   } else {
//     compte = res.rows;
//   }
//   db.end();
// });


// var userIsAuthorised = false;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


// function passGenerator(req ,res, next) {
//     const email = req.body["email"];
//     const password = req.body["password"]; //regarder le name dans le formulair html
//     if(email === "admin@gmail.com" && password === "admin19000"){
//         userIsAuthorised = true;
//     } else {
//         userIsAuthorised = false;
//       }
//     next ();
// }

// app.use(passGenerator);
 
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/connexion_bk.html");
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
        res.sendFile(__dirname + "/public/secret.html");
      } else {
        res.send("Mot de passe incorrect.");
      }
      
    } else {
      res.send("utilisateur non trouvé.");
    }
  } catch (err) {
    console.log(err);
  }




    // if (userIsAuthorised) {
    //     res.sendFile(__dirname + "/public/secret.html");
    //   } else {
    //     res.sendFile(__dirname + "/public/connexion_bk.html");
    //     //Alternatively res.redirect("/");
    //   }
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });