import app from './app.mjs'
import { config } from 'dotenv'
import databaseConn from './config/databaseConn.mjs';

config({path:"./config/config.env"})

//database connection
databaseConn;

app.listen(process.env.PORT,()=>console.log(`server is running at port no.${process.env.PORT}`));

//Unhandled promise rejection
process.on("unhandledRejection",err=>{
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to Unhandled Promise Error");
    Server.close(()=>{process.exit(1)});
})
