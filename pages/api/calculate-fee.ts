import { NextApiRequest, NextApiResponse } from 'next';
import handleFee from '../../lib/fees';
import Cors from 'cors'
import runMiddleware from '../../lib/init-middleware';

const cors = Cors({
  methods: ['POST', 'HEAD']
})



export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleware(req, res, cors)

  let input = req.body.feeInput;
  
  let calculated = handleFee(input)
  
  res.status(200).json({ calculated });
};

export default handler;
