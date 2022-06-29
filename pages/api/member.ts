// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  username: string,
  online_percentage: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    {
        "username": "e-punc",
        "online_percentage": "84.77"
    },
    {
        "username": "uk",
        "online_percentage": "29.85"
    },
    {
        "username": "zet",
        "online_percentage": "96.07"
    }
])
}
