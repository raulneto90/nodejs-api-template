import 'reflect-metadata';
import 'dotenv/config';
import { createConnection } from 'typeorm';
import express from 'express';

const app = express();
createConnection();

app.use(express.json());

export default app;
