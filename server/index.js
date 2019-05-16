const Loadable = require('react-loadable');
const app = require('./app');

const port = process.env.PORT || 8001;

Loadable.preloadAll().then(() => {
  app.listen(port, () => {
    console.log('Running...')
  })
}).catch(err => {
  console.log(err);
});
