const express = require('express');
const path = require('path');
const pool = require('./db'); // FreeDB connection

const app = express();

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Optional: test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is running!' });
});

// Example API route to fetch projects
app.get('/api/projects', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM projects ORDER BY id DESC');
        res.json(rows);
    } catch (err) {
        console.error('Database error:', err);
        res.status(500).json({ error: 'Database error' });
    }
});

// Listen on Render's port or fallback to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
