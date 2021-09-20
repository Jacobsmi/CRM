import sqlite3 from "sqlite3";

var db = new sqlite3.Database('./database.db');
db.run(`CREATE TABLE users(
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL
)`);
db.close();