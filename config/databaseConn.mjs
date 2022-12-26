import mysql from "mysql2";

import { config } from 'dotenv'
config({path:"./config/config.env"})

const pool=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        database:"moviesdata",
        waitForConnections:true,
        connectionLimit:10,
        queueLimit:0,
        password:process.env.DB_PASSWORD,

    }
);

export default pool;