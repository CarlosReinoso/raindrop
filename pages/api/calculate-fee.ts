import { NextApiRequest, NextApiResponse } from 'next';
import handleFee from '../../lib/fees';

export const handler = (req: NextApiRequest, res: NextApiResponse) => {
  let input = req.body.feeInput;
  
  let calculated = handleFee(input)
  
  res.status(200).json({ calculated });
};

export default handler;
