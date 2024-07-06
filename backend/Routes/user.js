// routes/index.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/events', async (req, res) => {
    try {
      const [results] = await db.execute('SELECT * FROM Events');
      res.json(results);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error retrieving events' });
    }
  });
  
  // Retrieve a specific event
  router.get('/events/:id', async (req, res) => {
    const id = req.params.id;
    try {
      const [results] = await db.execute('SELECT * FROM Events WHERE id = ?', [id]);
      res.json(results);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error retrieving event' });
    }
  });