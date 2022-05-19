import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './docs/index';



const app = express();



app.get('/api/v1', (req, res) => {
  res.status(200).json({
    message: "Welcome to D travel!",
  });
});


app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, {
    swaggerOptions: {
      docExpansion: 'none',
      persistAuthorization: true,
    },
  })
);

export default app;