import { Pool } from 'pg';

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "golu02",
    password: "golu02",
    database: "api",
});

pool.connect().then(()=>{
    console.log("database is connected")
});

export default pool;
