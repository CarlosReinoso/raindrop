// import { NextApiRequest, NextApiResponse } from 'next';
import handleFee from '../../lib/fees';

export const handler = (req, res) => {
  let input = req.body.feeInput;

  let calculated = handleFee(input);

  res.status(200).json({ calculated });
};

export default handler;
