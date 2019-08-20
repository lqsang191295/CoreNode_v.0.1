const mongoose = require('mongoose');
const config = require('../config');

const server = config.DATABASE_SERVER; 
const database = config.DATABASE_NAME;

class Database {
  constructor() {
    this._connect()
  }
  
  _connect() {
     mongoose.connect(`mongodb://${server}/${database}`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

module.exports = new Database()