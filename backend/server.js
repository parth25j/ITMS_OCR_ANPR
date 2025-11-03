import { config } from "./src/config/config.js";
import app from "./src/app.js";
import pool from "./src/config/db.js";

const PORT = config.PORT || 5137

const startServer = async() =>{
    app.listen(PORT,()=>{
     console.log("server has started on port number :: ", PORT)

 })
}


const testConnection = async () => {
  try {
    const result = await pool.query('SELECT NOW()'); // Simple query to get current time
    console.log('Database connected! Current time:', result.rows[0]);
  } catch (err) {
    console.error('Database connection failed:', err.message);
  } finally {
    // pool.end(); // Close the pool after testing
  }
};

testConnection();


startServer()