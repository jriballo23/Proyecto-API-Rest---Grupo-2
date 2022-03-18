const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

const mongoDb = process.env.MONGODB_URI;

const connect = async () => {
  try {
    const db = await mongoose.connect(mongoDb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = db.connection;
    console.log(`Conectado a la DB : ${name} en el host: ${host}`);
  } catch (error) {
    console.error(`No se ha podido conectar a la DB `, error);
  }
};

module.exports = { connect };
