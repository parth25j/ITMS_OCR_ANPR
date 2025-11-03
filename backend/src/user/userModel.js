import pool from '../config/db.js';


class User {
  static tableName = 'users';

  // Fetch all users
  static async getAll() {
    const result = await pool.query(`SELECT * FROM ${this.tableName}`);
    return result.rows;
  }

  // Fetch user by ID
  static async getById(id) {
    const result = await pool.query(
      `SELECT * FROM ${this.tableName} WHERE id = $1`,
      [id]
    );
    return result.rows[0];
  }

  // Fetch user by email (needed for login/register)
  static async getByEmail(email) {
    const result = await pool.query(
      `SELECT * FROM ${this.tableName} WHERE email = $1`,
      [email]
    );
    return result.rows[0];
  }

  // Create a new user
  static async create({ name, email, password }) {
    try {
      const result = await pool.query(
        `INSERT INTO ${this.tableName} (name, email, password) 
         VALUES ($1, $2, $3) RETURNING *`,
        [name, email, password]
      );
      return result.rows[0];
    } catch (err) {
      console.error("Error creating user:", err);
      throw err;
    }
  }
  

  // Delete a user
  static async delete(id) {
    await pool.query(`DELETE FROM ${this.tableName} WHERE id = $1`, [id]);
    return { message: 'User deleted successfully' };
  }
}

export default User;
