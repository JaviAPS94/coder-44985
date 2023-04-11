import config from "./config.js";
import express from 'express';

const app = express();

console.log(config);

app.listen(Number(config.port), () => console.log(`Server running on port ${config.port}`))