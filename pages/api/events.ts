// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  id: string,
  title: string,
  start: string,
  end: string,
  description: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    {
        "id": "0b2637fc-becc-43ed-b21f-b50e4d223a52",
        "title": "polkadot ambassador meetup",
        "start": "1900",
        "end": "2200",
        "description": "There will be tech-talks here, details still to be determined\n\nPlease check this page for details and RSVP:\n\nhttps://www.meetup.com/polkadot-and-kusama-budapest/events/286421401/\n\npate: uk, mecci"
    }
])
}
