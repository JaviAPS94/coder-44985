import { Command } from "commander";

const program = new Command();

program.option('-d', 'variable para debug', false)
.option('-p <port>', 'puerto del servidor', 8080)
.option('--mode <mode>', 'modo de trabajo', 'development')
.requiredOption('-u <user>', 'parametro obligatorio');

program.parse();

console.log('Options: ', program.opts());
