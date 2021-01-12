const mysql = require("mysql2");
// require("dotenv").config();

const connection = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "finalproject",
    port: 3306,
    multipleStatements: true
});

// FUNCTION TO CREATE TABLE IF NOT EXISTS
function createTableUser() {
<<<<<<< HEAD
<<<<<<< HEAD
    let myTable = `CREATE TABLE IF NOT EXISTS utilisateurs(
=======
    const myTable = `CREATE TABLE IF NOT EXISTS utilisateurs(
>>>>>>> 2f5cad6076b5d087975015f9060a3943b297ab37
=======
    const myTable = `CREATE TABLE IF NOT EXISTS utilisateurs(
>>>>>>> 5dd1c27f78c58a008c75f4fd3062b9c49b068f3b
        id int PRIMARY KEY auto_increment,
        email VARCHAR(255)NOT NULL,
        prenom VARCHAR(255)NOT NULL,
        pseudo VARCHAR(255)NOT NULL,
        password VARCHAR(255)NOT NULL,
        avatar VARCHAR(255)NOT NULL,
        administ BOOLEAN
    )`;

    connection.query(myTable, (err, results, fields) => {
        if (err) throw err;
        console.log('is k');
    });
}
function createTableSubjetForum() {
<<<<<<< HEAD
<<<<<<< HEAD
    let myTable = `CREATE TABLE IF NOT EXISTS sujet_forum(
=======
    const myTable = `CREATE TABLE IF NOT EXISTS sujet_forum(
>>>>>>> 2f5cad6076b5d087975015f9060a3943b297ab37
=======
    const myTable = `CREATE TABLE IF NOT EXISTS sujet_forum(
>>>>>>> 5dd1c27f78c58a008c75f4fd3062b9c49b068f3b
        id INT PRIMARY KEY AUTO_INCREMENT,
        id_utilisateur INT NOT NULL,
        FOREIGN KEY (id_utilisateur) REFERENCES utilisateurs(id),
        date DATE NOT NULL,
        contenu TEXT(1000),
        id_catégories_sujet INT NOT NULL,
        FOREIGN KEY (id_catégories_sujet) REFERENCES catégories_sujet(id)
    )`;

    connection.query(myTable, (err, results, fields) => {
        if (err) throw err;
        console.log('is k');
    });
}
function createTableCategorySubject() {

<<<<<<< HEAD
<<<<<<< HEAD
    let myTable = `CREATE TABLE IF NOT EXISTS catégories_sujet(
=======
    const myTable = `CREATE TABLE IF NOT EXISTS catégories_sujet(
>>>>>>> 2f5cad6076b5d087975015f9060a3943b297ab37
=======
    const myTable = `CREATE TABLE IF NOT EXISTS catégories_sujet(
>>>>>>> 5dd1c27f78c58a008c75f4fd3062b9c49b068f3b
        id INT PRIMARY KEY AUTO_INCREMENT,
        nom VARCHAR(255) NOT NULL
    )`;
    connection.query(myTable, (err, results, fields) => {
        if (err) throw err;
        console.log('is k');
    });
}
function createTableCommentaries() {
<<<<<<< HEAD
<<<<<<< HEAD
    let myTable = `CREATE TABLE IF NOT EXISTS commentaires(
=======
    const myTable = `CREATE TABLE IF NOT EXISTS commentaires(
>>>>>>> 2f5cad6076b5d087975015f9060a3943b297ab37
=======
    const myTable = `CREATE TABLE IF NOT EXISTS commentaires(
>>>>>>> 5dd1c27f78c58a008c75f4fd3062b9c49b068f3b
        id INT PRIMARY KEY AUTO_INCREMENT,
        id_auteur INT NOT NULL,
        FOREIGN KEY (id_auteur) REFERENCES utilisateurs(id),
        date_commentaires DATE NOT NULL,
        contenu_commentaires TEXT(1000),
        id_sujet_forum INT NOT NULL,
        FOREIGN KEY (id_sujet_forum) REFERENCES sujet_forum(id)
    )`;

    connection.query(myTable, (err, results, fields) => {
        if (err) throw err;
        console.log('is k');
    });
}
function createTableArticlesAdmin() {

<<<<<<< HEAD
<<<<<<< HEAD
    let myTable = `CREATE TABLE IF NOT EXISTS articles_admin(
=======
    const myTable = `CREATE TABLE IF NOT EXISTS articles_admin(
>>>>>>> 2f5cad6076b5d087975015f9060a3943b297ab37
=======
    const myTable = `CREATE TABLE IF NOT EXISTS articles_admin(
>>>>>>> 5dd1c27f78c58a008c75f4fd3062b9c49b068f3b
        id INT PRIMARY KEY AUTO_INCREMENT,
        date_article DATE NOT NULL,
        contenu_article TEXT(5000)
    )`;

    connection.query(myTable, (err, results, fields) => {
        if (err) throw err;
        console.log('is k');
    });
}
function createTableImageArticles() {

<<<<<<< HEAD
<<<<<<< HEAD
    let myTable = `CREATE TABLE IF NOT EXISTS image_articles(
=======
    const myTable = `CREATE TABLE IF NOT EXISTS image_articles(
>>>>>>> 2f5cad6076b5d087975015f9060a3943b297ab37
=======
    const myTable = `CREATE TABLE IF NOT EXISTS image_articles(
>>>>>>> 5dd1c27f78c58a008c75f4fd3062b9c49b068f3b
        id INT PRIMARY KEY AUTO_INCREMENT,
        id_article_admin INT,
        FOREIGN KEY (id_article_admin) REFERENCES articles_admin(id),
        image VARCHAR(250) NOT NULL
    )`;

    connection.query(myTable, (err, results, fields) => {
        if (err) throw err;
        console.log('is k');
    });
}
connection.connect((err) => {
    if (err) throw err;
    console.log("Well connected");
    createTableUser();
    createTableSubjetForum();
    createTableCategorySubject();
    createTableCommentaries();
    createTableArticlesAdmin();
    createTableImageArticles();
});

module.exports = connection
