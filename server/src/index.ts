import express from 'express';

const app: express.Application = express();

app.use(express.json());
app.use(express.static('public'));

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});