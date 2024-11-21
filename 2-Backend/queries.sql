CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    nom VARCHAR (100),
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR (100)
);


CREATE table roles (
  id SERIAL primary key,
  label varchar (100)
);


CREATE table services(
  id SERIAL primary key,
  nom varchar (100),
  descriptions varchar(100)
);


CREATE table animal(
  id SERIAL primary key,
  prenom varchar (100),
  etat varchar(100)
);


CREATE table rapport_veterinaire(
  id SERIAL primary key,
  dates varchar (100),
  detail varchar(100)
);


CREATE table habitat(
  id SERIAL primary key,
  nom varchar (100),
  descriptions varchar(100),
  commentaire_habitat varchar (100)
);


CREATE table race(
  id SERIAL primary key,
  abel varchar (100)
);


CREATE table avis(
  pseudo SERIAL primary key,
  nom varchar (100),
  commentaire varchar(100),
  isVisible Bool
);



--users 

INSERT INTO users
VALUES (1, 'José', 'jose@gmail.com', 'jose69_admin');
INSERT INTO users
VALUES (2, 'Josette', 'josette@gmail.com', 'josette69_emp');
INSERT INTO users
VALUES (3, 'ben', 'ben@gmail.com', 'ben69_vtr');

--roles 

INSERT INTO roles
VALUES (1, 'administrateur');
INSERT INTO roles
VALUES (2, 'employé');
INSERT INTO roles
VALUES (3, 'vétérinaire');

--services 

INSERT INTO services
VALUES (1, 'Restauration', 'Je suis la description de ce service');
INSERT INTO services
VALUES (2, 'Visite Habitat Avec guide', 'Je suis la description de ce service');
INSERT INTO services
VALUES (3, 'Visite du zoo en petit train', 'Je suis la description de ce service');


--animal

INSERT INTO animal
VALUES (1, 'Melman', 'bon');
INSERT INTO animal
VALUES (2, 'Simba', 'bon');
INSERT INTO animal
VALUES (3, 'Marty', 'bon');
INSERT INTO animal
VALUES (4, 'Chip', 'bon');
INSERT INTO animal
VALUES (5, 'Max', 'bon');
INSERT INTO animal
VALUES (6, 'Owlbert', 'bon');
INSERT INTO animal
VALUES (7, 'Pingu', 'bon');
INSERT INTO animal
VALUES (8, 'Doflamingo', 'bon');
INSERT INTO animal
VALUES (9, 'Daffy', 'bon');

--rapport_veterinaire

INSERT INTO rapport_veterinaire
VALUES (1, '01/01/2024', 'vétérinaire détail');



--Habitat

INSERT INTO habitat
VALUES (1, 'Jungle', 'Je suis la description de cet habitat', 'Je suis le commentaire de cet habitat');
INSERT INTO habitat
VALUES (2, 'Savane', 'Je suis la description de cet habitat', 'Je suis le commentaire de cet habitat');
INSERT INTO habitat
VALUES (3, 'Marais', 'Je suis la description de cet habitat', 'Je suis le commentaire de cet habitat');

--race

INSERT INTO race
VALUES (1, 'Girafe de Kordofan');
INSERT INTO race
VALUES (2, 'lion Africain');
INSERT INTO race
VALUES (3, 'Zèbre de Burchell');
INSERT INTO race
VALUES (4, 'Ecureuil gris');
INSERT INTO race
VALUES (5, 'Singe capucin');
INSERT INTO race
VALUES (6, 'Hibou grand-duc');
INSERT INTO race
VALUES (7, 'Manchot Empereur');
INSERT INTO race
VALUES (8, 'Flamant rose');
INSERT INTO race
VALUES (9, 'Canard colvert');

