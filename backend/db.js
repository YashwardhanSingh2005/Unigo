// db.js
const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'distributed_calendar'
});

// Create tables
async function createTables() {
  await db.execute(`
    CREATE TABLE IF NOT EXISTS Events (
      id INT PRIMARY KEY AUTO_INCREMENT,
      title VARCHAR(255) NOT NULL,
      description TEXT,
      start_date DATE NOT NULL,
      end_date DATE NOT NULL,
      created_by INT NOT NULL,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
      FOREIGN KEY (created_by) REFERENCES Admins(id)
    );
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS Admins (
      id INT PRIMARY KEY AUTO_INCREMENT,
      username VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL,
      entity VARCHAR(255) NOT NULL
    );
  `);

  await db.execute(`
    CREATE TABLE IF NOT EXISTS Users (
      id INT PRIMARY KEY AUTO_INCREMENT,
      username VARCHAR(255) NOT NULL,
      password VARCHAR(255) NOT NULL
    );
  `);
}

createTables().then(() => {
  console.log('Tables created successfully!');
}).catch((err) => {
  console.error('Error creating tables:', err);
});