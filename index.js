const express = require("express");
const mysql = require("mysql2");

const app = express();

// Configuration de la connexion à la base de données
const db = mysql.createConnection({
  host: "localhost", // Utilisez "localhost" si Docker expose MySQL sur votre machine locale
  user: "root",
  password: "root",
  database: "mydatabase",
});

// Tester la connexion à MySQL
db.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à la base de données :", err);
    return;
  }
  console.log("Connecté à la base de données MySQL !");
});

app.get("/", (req, res) => {
  res.send("Hello, MySQL in Docker!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur Express lancé sur le port ${PORT}`);
});
