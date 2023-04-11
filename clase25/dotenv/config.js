import dotenv from 'dotenv';
import { Command } from 'commander';

const program = new Command();
program.option('--mode <mode>', 'variabla para identificar el ambiente');
program.parse();

const enviroment = program.opts().mode;

dotenv.config({
    path: enviroment === 'DEVELOPMENT' ? './.env.development' : './.env.production'
});

export default {
    port: process.env.PORT,
    mongoUrl: process.env.MONGO_URL,
    adminName: process.env.ADMIN_NAME,
    adminPassword: process.env.ADMIN_PASSWORD
}