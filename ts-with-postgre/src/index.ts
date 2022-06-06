import express from 'express';

import { dbConfig } from './config/conn';
dbConfig
import {app as routers} from './routes'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 4000

const app = express();
app.use(express.json());
app.use(routers)


app.listen(PORT, () => {
    console.log(`Server runnig at http://localhost:${PORT}`);
});