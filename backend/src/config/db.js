import pkg from "pg";
import { config } from "./config.js";

const {Pool } = pkg;

const connectionString = config.C_STRING || "postgresql://postgres:parth123@db.fmpozorccornyayworyi.supabase.co:5432/postgres"

const pool = new Pool({
    connectionString,
    ssl:{
        rejectUnauthorized: false,
    }
})

pool.on("connect",()=>{
    console.log("connected to supabase")
})

pool.on("error",()=>{
    console.log("can't connect to supabase")
    // process.exit(-1)
})


export default pool