import sqlite3 from 'sqlite3';
import { open } from 'sqlite';
import path from 'path';
import fs from 'fs';

async function setupDatabase() {
    // Ensure the data directory exists
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }

    // Open database connection
    const db = await open({
        filename: path.join(dataDir, 'db.sqlite'),
        driver: sqlite3.Database,
    });

    // Create users table
    await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      firstName TEXT NOT NULL,
      lastName TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      username TEXT UNIQUE NOT NULL,
      registrationDate TEXT NOT NULL
    )
  `);

    console.log('Database setup complete');
    return db;
}

// Run the function if this script is executed directly
if (require.main === module) {
    setupDatabase()
        .then(() => console.log('Database initialized successfully'))
        .catch((err) => console.error('Error setting up database:', err));
}

// Export for use in other files
export default setupDatabase;
