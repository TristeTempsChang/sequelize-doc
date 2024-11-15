const sequelize = require('./index.js');  // Assurez-vous d'avoir bien configuré votre connexion
const User = require('./models/user.js');  // Importez le modèle User

async function syncDatabase() {
    try {
        // Synchronise le modèle avec la base de données
        await sequelize.sync({ force: true }); // `force: true` recrée la table à chaque exécution (attention en prod)
        console.log('La table "Users" a été synchronisée avec la base de données.');
    } catch (error) {
        console.error('Erreur lors de la synchronisation:', error);
    }
}

syncDatabase();