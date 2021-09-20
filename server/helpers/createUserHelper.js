import bcrypt from "bcrypt";
import sqlite3 from "sqlite3";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config("./.env")

async function getUserID(email){
  return new Promise((resolve, reject) => {
    var db = new sqlite3.Database('./database.db');
    db.get("SELECT rowid FROM users WHERE email=$1", 
    [email], (err, row)=>{
      if(err !== null){
        return reject("no_id")
      }else{
        return resolve(row.rowid)
      }
    })
  })
}

// Attempts to insert the user into the database 
// Rejects specifically on a duplicate_email error and generally on any other sort of error 
// Resolves on success
async function insertIntoDB(first_name, last_name, email, password){
  return new Promise((resolve, reject) => {
    var db = new sqlite3.Database('./database.db');
    db.run("INSERT INTO users(first_name, last_name, email, password) VALUES ($1, $2, $3, $4)", 
    [first_name, last_name, email, password], (err)=>{
      if(err !== null){
        if(err.errno === 19){
          return reject("duplicate_email")
        }else{
          return reject("db_error")
        }
      }else{
        return resolve(true)
      }
    })
  })
}

async function createUser(first_name, last_name, email, password) {
  try{
    // Hashes the password with 12 salt rounds and bcrypt algo
    const hash = await bcrypt.hash(password, 12);
    // Waits for the insert to finish 
    // Result is not needed because any failure in function will reject and end in the catch statement
    await insertIntoDB(first_name, last_name, email, hash);
    // Get the ID for the user so it can then be turned into a JWT
    const id = await getUserID(email);
    // Turn the user id into a JWT
    const signedJWT = jwt.sign({
      exp: Math.floor(Date.now() / 1000) + (60 * 60),
      data: id
    }, process.env.JWT_SECRET);
    return [true, signedJWT];
  }catch(e){
    // Catch errors from any part of the process
    if(e === "duplicate_email"){
      return [false, "duplicate_email"]
    }else if (e === "db_error"){
      return [false, "db_error"]
    }else if(e === "no_id"){
      return [false, "no_id"]
    }
    // Catches unknown errors
    else{
      console.log(e);
      return [false, "unknown_error"]
    }
  }
}

export {
  createUser
}