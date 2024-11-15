'use strict';

const { Sequelize } = require('sequelize');

module.exports = {
    up: async (queryInterface, Sequelize) => {
        // Insertion de données dans la table User
        await queryInterface.bulkInsert('Users', [
            {
                username: 'john_doe',
                age: 30,
                email: 'john.doe@example.com',
                birthDate: '1994-01-15',
                isActive: true,
                settings: JSON.stringify({ theme: 'dark', language: 'en' }),
                createdAt: new Date(),
            },
            {
                username: 'jane_doe',
                age: 28,
                email: 'jane.doe@example.com',
                birthDate: '1996-05-22',
                isActive: true,
                settings: JSON.stringify({ theme: 'light', language: 'fr' }),
                createdAt: new Date(),
            },
            {
                username: 'mike_smith',
                age: 35,
                email: 'mike.smith@example.com',
                birthDate: '1989-10-10',
                isActive: false,
                settings: JSON.stringify({ theme: 'light', language: 'en' }),
                createdAt: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        // Supprime toutes les entrées dans la table Users lors de la réversion
        await queryInterface.bulkDelete('Users', null, {});
    },
};