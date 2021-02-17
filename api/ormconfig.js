const devConfig = {
  type: process.env.DEV_DBTYPE,
  host: process.env.DEV_DBHOST,
  port: process.env.DEV_DBPORT,
  username: process.env.DEV_DBUSERNAME,
  password: process.env.DEV_DBPASSWORD,
  database: process.env.DEV_DBNAME,

  entities: ['./src/modules/**/infra/typeorm/*.ts'],
  migrations: ['./src/shared/infra/typeorm/*.ts'],
  cli: {
    migrationsDir: './src/shared/infra/typeorm'
  }
}

const productionConfig = {
  type: process.env.PRODUCTION_DBTYPE,
  host: process.env.PRODUCTION_DBHOST,
  port: process.env.PRODUCTION_DBPORT,
  username: process.env.PRODUCTION_DBUSERNAME,
  password: process.env.PRODUCTION_DBPASSWORD,
  database: process.env.PRODUCTION_DBNAME,

  entities: ['./src/modules/**/infra/typeorm/*.ts'],
  migrations: ['./src/shared/infra/typeorm/*.ts'],
  cli: {
    migrationsDir: './src/shared/infra/typeorm'
  }
}

export default process.env.API_ENVIROMENT === 'development' ? devConfig : productionConfig
