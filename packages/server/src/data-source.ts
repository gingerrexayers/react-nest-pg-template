import 'reflect-metadata';
import { DataSource, type DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT
    ? Number.parseInt(process.env.DB_PORT, 10)
    : undefined,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [`${__dirname}/**/*.entity{.ts,.js}`], // Looks for entities in src and its subdirectories
  migrationsTableName: 'migrations',
  migrations: [`${__dirname}/migrations/*{.ts,.js}`],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
