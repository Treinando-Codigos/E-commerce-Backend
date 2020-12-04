import PG from 'pg';

const Pool = PG.Pool;
// ==> Conexão com a Base de Dados:
export const connection = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: 5432,
});
