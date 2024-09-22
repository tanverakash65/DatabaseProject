const express = require('express');
const router = express.Router();
const db = require('../config/dbConfig');

// Fetch all menu items
router.get('/menu', (req, res) => {
  const sql = 'SELECT * FROM menu';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Add a new menu item (Admin only)
router.post('/menu', (req, res) => {
  const { name, price, description } = req.body;
  const sql = 'INSERT INTO menu (name, price, description) VALUES (?, ?, ?)';
  db.query(sql, [name, price, description], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Menu item added', itemId: results.insertId });
  });
});

// Update a menu item (Admin only)
router.put('/menu/:id', (req, res) => {
  const { price } = req.body;
  const sql = 'UPDATE menu SET price = ? WHERE id = ?';
  db.query(sql, [price, req.params.id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Menu item updated' });
  });
});

// Delete a menu item (Admin only)
router.delete('/menu/:id', (req, res) => {
  const sql = 'DELETE FROM menu WHERE id = ?';
  db.query(sql, [req.params.id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Menu item deleted' });
  });
});

module.exports = router;
