import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";
import "dotenv/config";

const DataSourceConfig = (): DataSourceOptions => {
  const entitiesPath = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationsPath = path.join(__dirname, "./migrations/**.{ts,js}");

  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL environment variable is not defined.");
  }

  return {
    type: "postgres",
    url: process.env.DATABASE_URL,
    synchronize: false,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationsPath],
  };
};

const AppDataSource: DataSource = new DataSource(DataSourceConfig());

export { AppDataSource };
