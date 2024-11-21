# ARCADIA

Bienvenue sur le dépôt GitHub du projet **Nom du Site Web** ! Ce projet consiste en un site web dynamique, moderne et réactif, conçu pour offrir une expérience utilisateur fluide et intuitive.

## Aperçu du Projet

arcadia est un site web pour un zoo situé en France près de la forêt de Brocéliande. Ce site utilise des technologies modernes pour assurer une performance optimale et une interface utilisateur agréable.

## Fonctionnalités

- Page d'accueil : Présentation du zoo et des services proposés.

- Page des services : Affichage des différents services disponibles au zoo (visites guidées, zoo en petit train, etc.).

- Page des habitats : Liste des habitats et leurs animaux avec des images et des descriptions.

- Page contact : laisser un message .

## Technologies utilisées

Ce projet a été développé avec les technologies suivantes :

- HTML5
- CSS3 (avec un peu de SASS)
- BOOTSTRAP
- JavaScript
- Npde.JS Avec Express [Autres technologies utilisées, comme PHP, Node.js, etc.]
- Base de données: PostgresSQL
- Outils de déploiement: Fly.io


## Installation

Avant de commencer, assurez-vous d'avoir installé:

- NodeJS v22.11.0
- psql (PostgreSQL) 15.4
- Git v2.46.1 

### Cloner le projet

```bash
git clone https://github.com/Salamou-D-slam/ARCADIA-ECF
cd ARCADIA-ECF



### Prérequis

Installer les packages (le faire dans les deux fichier frontend et backend):

- Dossier Frontend:

npm init -y

npm i

npm i express axios   

- Dossier Backend:

npm init -y

npm i

npm i express body-parser axios ejs pg 



### Base De Donnée

- Créez votre base de donnée sur PgAdmin 4.

- Copiez/coller le code du fichier queries.sql dans le backend pour le coller dans PgAdmin 4 pour avoir toute les tables et valeurs des tables ainsi que les utilisateurs créer (attention a la creation des utilisateurs et roles: n'oublier de modifier les noms roles et users ainsi que leurs mdp a la fin du fichier sql).

- Changer la const db dans le fichier index.js dans le backend avec vos mot de passe.
