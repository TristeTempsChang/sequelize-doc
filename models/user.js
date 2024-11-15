const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../index');

// Define the User model
const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
    birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    settings: {
        type: DataTypes.JSON,
        allowNull: true,
    },
    uuid: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
        allowNull: false,
    }
});

// Synchronize the model with the database
async function syncModel() {
    try {
        await sequelize.sync({ force: true });  // `force: true` recreates the table on each execution
        console.log('The model has been synchronized with the database.');
    } catch (error) {
        console.error('Error synchronizing the model:', error);
    }
}

syncModel();

module.exports = User;