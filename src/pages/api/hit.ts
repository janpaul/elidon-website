import { VercelRequest, VercelResponse } from '@vercel/node'

const hit = (request: VercelRequest, response: VercelResponse) => {
  console.log(request.query)
  response.status(200).send(JSON.stringify({ response }))
}

export default hit
