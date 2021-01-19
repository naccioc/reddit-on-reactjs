import { createMocks } from 'node-mocks-http'
import reddit from '../../../pages/api/reddit'
import json_res from '../../../resources/top.json'

describe('/api/reddit', () => {
  it('returns the mocked JSON information', async () => {
    const { req, res } = createMocks();

    await reddit(req, res);

    expect(res._getStatusCode()).toBe(200)
    expect(JSON.parse(res._getData())).toEqual(json_res)
  })
})
