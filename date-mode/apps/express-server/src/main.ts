import express from 'express';
import { pokemon } from './pokemon';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  res.send(pokemon);
});

app.get('/search', (req, res) => {
  const q = req.query.q;
  res.send(
    pokemon.filter((p) =>
      p.name.english
        .toLocaleLowerCase()
        .includes(((q as string) ?? '').toLowerCase())
    )
  );
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
