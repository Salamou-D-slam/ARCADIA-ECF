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
  dates date (100),
  detail varchar(100)
);

CREATE table habitat(
  id SERIAL primary key,
  nom varchar (100),
  descriptions varchar(100),
  commentaire_habitat varchar (100)
);

CREATE table image(
  id SERIAL primary key,
  image_data blob
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