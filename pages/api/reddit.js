import json_res from '../../resources/top.json'

export default async (req, res) => {
  res.statusCode = 200
  res.json(await getPosts())
}

export async function getPosts() {
  return json_res
}
