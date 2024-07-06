// admin.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Create a new event
router.post('/events', async (req, res) => {
  const { title, description, start_date, end_date, created_by } = req.body;
  try {
    const result = await db.execute(`
      INSERT INTO Events (title, description, start_date, end_date, created_by)
      VALUES (?, ?, ?, ?, ?)
    `, [title, description, start_date, end_date, created_by]);
    res.json({ message: 'Event created successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error creating event' });
  }
});

// Retrieve all events
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

// Update an existing event
router.put('/events/:id', async (req, res) => {
  const id = req.params.id;
  const { title, description, start_date, end_date } = req.body;
  try {
    const [results] = await db.execute(`
      UPDATE Events
      SET title = ?, description = ?, start_date = ?, end_date = ?
      WHERE id = ?
    `, [title, description, start_date, end_date, id]);
    res.json({ message: 'Event updated successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error updating event' });
  }
});