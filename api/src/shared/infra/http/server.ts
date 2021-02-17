import app from './app';

app.listen(
  process.env.API_ENVIROMENT === 'development'
    ? process.env.DEV_APIPORT
    : process.env.PRODUCTION_APIPORT,
  () => {
    console.log(
      `🚀 Server started on port ${
        process.env.API_ENVIROMENT === 'development'
          ? process.env.DEV_APIPORT
          : process.env.PRODUCTION_APIPORT
      }`,
    );
  },
);
