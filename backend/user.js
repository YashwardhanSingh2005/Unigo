// user.js
const express = require('express');
const router = express.Router();
const db = require('./db');

// Retrieve a list of all events
router.get('/events', async (req, res) => {
  try {
    const [results] = await db.execute('SELECT * FROM Events');
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error retrieving events' });
  }
});

// Retrieve a specific event by ID
router.get('/events/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const [results] = await db.execute('SELECT * FROM Events WHERE id = ?', [id]);
    if (results.length === 0) {
      res.status(404).json({ error: 'Event not found' });
    } else {
      res.json(results[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error retrieving event' });
  }
});