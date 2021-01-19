import * as json_res from '../../resources/top.json'

export default (req, res) => {
  res.statusCode = 200
  res.json(json_res)
}
