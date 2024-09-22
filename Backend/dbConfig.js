require('dotenv').config(); // Load environment variables from .env file

const mysql = require('mysql2');

// Create a connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to MySQL database');

  // Example Query: Select all from a table (Replace 'your_table' with actual table name)
  db.query('SELECT * from staff', (err, results, fields) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }

    // Show results
    console.log('Query results:', results);

    // Optional: Close the connection after the query
    db.end((err) => {
      if (err) {
        console.error('Error closing the connection:', err);
      } else {
        console.log('Connection closed.');
      }
    });
  });
});

module.exports = db;