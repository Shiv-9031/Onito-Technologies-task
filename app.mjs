import express from 'express';
import Routes from './Routes/Routes.mjs';
import ErrorMiddleware from "./Error/ErrorMiddleware.mjs"
import cors from 'cors';

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/api/v1',Routes);

//middleware

app.use(ErrorMiddleware);

export default app;