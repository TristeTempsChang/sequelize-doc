const express = require("express");
const { Sequelize } = require("sequelize");  // Importer Sequelize
const app = express();

// Configuration de Sequelize pour la connexion à la base de données MySQL
const sequelize = new Sequelize('mydatabase', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

// Tester la connexion à MySQL via Sequelize
sequelize.authenticate()
    .then(() => {
      console.log("La connexion à la base de données MySQL via Sequelize a réussi !");
    })
    .catch((err) => {
      console.error("Erreur de connexion à la base de données :", err);
    });

// Exemple de définition d'un modèle avec Sequelize
const User = sequelize.define('User', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
});

// Synchronisation de la base de données avec le modèle User
sequelize.sync({ force: true })
    .then(() => {
      console.log("Le modèle User a été synchronisé avec la base de données.");
    })
    .catch((err) => {
      console.error("Erreur lors de la synchronisation du modèle :", err);
    });

// Route pour tester l'API
app.get("/", (req, res) => {
  res.send("Hello, MySQL avec Sequelize!");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur Express lancé sur le port ${PORT}`);
});