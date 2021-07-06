import { VercelRequest, VercelResponse } from '@vercel/node'

const touch = (request: VercelRequest, response: VercelResponse) => {
  response.status(200).send(`hello there`)
}

export default touch
