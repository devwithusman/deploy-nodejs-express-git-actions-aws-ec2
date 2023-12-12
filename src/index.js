const { app } = require('./app');


console.log('i am usman rocket');

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
