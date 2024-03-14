// SQLite3 CRUD operations
// npm install sqlite3
// Create a Bood.sqlite file in Database folder
// Run this file with node CRUDBookSQLite.js
// Test with Postman

const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();

// connect to database
const db = new sqlite3.Database('./Database/Books.sqlite');

// parse incoming requests
app.use(express.json());

// create books table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS books (
  id INTEGER PRIMARY KEY,  
  title TEXT,
  author TEXT
)`);


//-------------------------สร้างเทเบิลที่2 ****ไม่ว่าจะสร้างกี่เทเบิลชื่อตรง id ห้ามซ้ำเพราะเป็น PRIMARY KEY----------------------
db.run(`CREATE TABLE IF NOT EXISTS ploys (
  id_oo INTEGER PRIMARY KEY,
  name TEXT,
  brith TEXT,
  lastname TEXT
)`);


// route to get all books
app.get('/books', (req, res) => {
  db.all('SELECT * FROM books', (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(rows);
    }
  });
});

// route to get a book by id
app.get('/books/:id', (req, res) => {
  db.get('SELECT * FROM books WHERE id = ?', req.params.id, (err, row) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (!row) {
        res.status(404).send('Book not found');
      } else {
        res.json(row);
      }
    }
  });
});

// route to create a new book
app.post('/books', (req, res) => {
  const book = req.body;
  db.run('INSERT INTO books (title, author) VALUES (?, ?)', book.title, book.author, function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      book.id = this.lastID;
      res.send(book);
    }
  });
});

// route to update a book
app.put('/books/:id', (req, res) => {
  const book = req.body;
  db.run('UPDATE books SET title = ?, author = ? WHERE id = ?', book.title, book.author, req.params.id, function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(book);
    }
  });
});

// route to delete a book
app.delete('/books/:id', (req, res) => {
  db.run('DELETE FROM books WHERE id = ?', req.params.id, function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({});
    }
  });
});

//----------------------------------------------------------- route to get all ploys-----------------------------------------
app.get('/ploys', (req, res) => {
  db.all('SELECT * FROM ploys', (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(rows);
    }
  });
});

// route to get a ploy by id
app.get('/ploys/:id_oo', (req, res) => {
  db.get('SELECT * FROM ploys WHERE id_oo = ?', req.params.id_oo, (err, row) => {
    if (err) {
      res.status(500).send(err);
    } else {
      if (!row) {
        res.status(404).send('ploys not found');
      } else {
        res.json(row);
      }
    }
  });
});

// route to create a new ploys
app.post('/ploys', (req, res) => {
  const ploy = req.body;
  db.run('INSERT INTO ploys (name, brith, lastname) VALUES (?, ?, ?)', ploy.name, ploy.brith, ploy.lastname, function(err) {

    if (err) {
      res.status(500).send(err);
    } else {
      ploy.id_oo = this.lastID;
      res.send(ploy);
    }
  });
});

// route to update a ploy
app.put('/ploys/:id_oo', (req, res) => {
  const ploy = req.body;
  db.run('UPDATE ploys SET name = ?, brith = ?, lastname = ? WHERE id_oo = ?', ploy.name, ploy.brith, ploy.lastname, req.params.id_oo, function(err) {

    if (err) {
      res.status(500).send(err);
    } else {
      res.send(book);
    }
  });
});

// route to delete a ploy
app.delete('/ploys/:id_oo', (req, res) => {
  db.run('DELETE FROM ploys WHERE id_oo = ?', req.params.id_oo, function(err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send({});
    }
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));