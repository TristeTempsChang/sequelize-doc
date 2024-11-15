const User = require('./models/User');  // Importer le modèle User

async function createUser() {
    try {
        const newUser = await User.create({
            username: 'johndoe',
            age: 30,
            email: 'johndoe@example.com',
            birthDate: '1994-06-15',
            settings: { theme: 'dark', notifications: true },
        });

        console.log('Utilisateur créé :', newUser.toJSON());
    } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur:', error);
    }
}

createUser();