import { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const response = await fetch('http://localhost:5000/api/products')
      const data = await response.json()

      if (response.ok) {
        res.status(200).json({ message: 'PRODUCTS_FETCHED', products: data })
      } else {
        res.status(response.status).json({ message: 'ERROR_FETCHING_PRODUCTS', error: data })
      }
    } catch (error) {
      res.status(500).json({ message: 'SERVER_ERROR', error: error.message })
    }
  } else {
    res.status(405).json({ message: 'METHOD_NOT_ALLOWED' })
  }
}