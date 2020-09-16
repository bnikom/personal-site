import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const port = process.env.PORT || 8080;
const app = express();

try {
  app.use(morgan('combined'));
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }))
  // UNCOMMENT for development mode
  app.use(express.static('public'));
  
  app.use('/images', express.static('images'))

  // UNCOMMENT for production mode
  //app.use(express.static('build'))

  // api routes
  // app.use('/api', routes);

  // 404 page
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });

  app.use((req, res, next) => {
    throw { status: 404 }
  })

  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error
    });
  })

  app.listen(port, () => console.log(`service listening on port: ${port}`))
} catch (error) {
  console.log(error)
  console.log('service did not start due to error')
}