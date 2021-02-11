-- CREER LA DATABASE
CREATE DATABASE mikaBoutique;

-- UTILISER LA DATABASE
USE mikaBoutique;

-- CREER LA TABLE AUTEUR
CREATE TABLE auteur (
auteurId INT PRIMARY KEY AUTO_INCREMENT,
nom VARCHAR(255)
);

-- CREER LA TABLE ARTICLE
CREATE TABLE article (
	articleId INT PRIMARY KEY AUTO_INCREMENT,
    titre VARCHAR(50),
    image VARCHAR(255),
    description VARCHAR(255),
    auteurID INT,
    FOREIGN KEY (auteurID) REFERENCES auteur(auteurId)
);

-- AJOUTER UN AUTEUR
INSERT INTO auteur(nom) VALUES ('Vlad'),('Jeremy'),('Karl'),('Benjamin');

-- AFFICHE LA LISTE DES AUTEURS
SELECT * FROM auteur;

-- AJOUTER UN ARTICLE
INSERT INTO article(titre,image,auteurID,description) 
VALUES ('Neige en Frace','neige.jpeg',4,"La neige c'est nul");

-- AFFICHER LA LISTE DES ARTICLES
SELECT * FROM article;