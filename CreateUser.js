const User = require('./models/User'); // Import du modèle User

async function addUser() {
    try {
        const newUser = await User.create({
            username: 'john_doe',
            age: 30,
            email: 'john.doe@example.com',
            birthDate: '1993-05-15',
            isActive: true,
            settings: { theme: 'dark', notifications: true },
        });
        console.log('Nouvel utilisateur créé :', newUser.toJSON());
    } catch (error) {
        console.error('Erreur lors de la création de l\'utilisateur :', error);
    }
}

addUser();