import dotenv from "dotenv";
dotenv.config()

const _config = {
    PORT:process.env.PORT,
    C_STRING:process.env.PG_SUPABASE,
    JWT_TOKEN:process.env.JWT_TOKEN || "ejhfwhfekjfhejkfhewjfhejxqz",
    ENV:process.env.ENV

}

export const config = Object.freeze(_config)