import { getPosts } from '../../mocks/api/reddit';

export default async (req, res) => {
  const { limit, after } = req.query;
  let options = [];

  res.statusCode = 200;

  if (limit && !isNaN(parseInt(limit))) {
    options[0] = limit;
  }

  if (typeof after === 'string') {
    options[1] = after;
  }

  res.json(await getPosts(...options));
};
