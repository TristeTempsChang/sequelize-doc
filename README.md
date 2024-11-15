# Documentation Sequelize

Une documentation collaborative des fonctionnalités principales de l'ORM Sequelize.

## Références utiles

- [Sequelize](https://sequelize.org/), le site officiel de l'ORM ;

## Installation
```bash
npm install 
```

```bash
docker compose build
docker compose up
```

## Utilisation

```bash
node index.js
```

Connexion à la base de données :

```bash
docker exec -it mysql-container mysql -u root -p
```

Vérifier que la table à été créée :

```sql
Use mydatabase;
Show tables;
```
