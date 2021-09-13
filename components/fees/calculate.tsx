import {
  Box,
  Typography,
  Hidden,
  TextField,
} from '@material-ui/core';
import scribble from '../../public/images/scribble-top.svg';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import axios from 'axios'

const Calculate = () => {
  const [feeInput, setFeeInput] = useState(0);
  const [fee, setFee] = useState(0);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.post(`https://raindrop-beta.vercel.app/api/calculate-fee`, {feeInput})
        setFee(res.data.calculated)
      } catch (error) {
        console.log('error', error)
      }
    })()
  }, [feeInput])

  
  return (
    <>
    <p>{}</p>
      <Box
        component="section"
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        mt='5rem'
        style={{ gap: '1rem' }}
      >
        <Box
          component="span"
          bgcolor="secondary.main"
          color="white"
          borderRadius="4rem"
          py="0.3rem"
          px="0.75rem"
        >
          Fees
        </Box>
        <Typography variant="h2" style={{ fontFamily: 'Times New Roman' }}>
          We're keeping it simple
        </Typography>
        <Typography variant="body1">
          At Raindrop, we understand you don't have time for complexity.
        </Typography>
        <Hidden smDown>
          <Box position="absolute" left="0">
            <Image src={scribble} alt="scribble-top" />
          </Box>
        </Hidden>

        {/* Calculator */}
        <Typography>
          Enter your estimated pension below to calculate our fees.
        </Typography>
        <Box display="flex" alignItems="center" style={{ gap: '0.5rem' }}>
          <Typography>£</Typography>
          <TextField
            variant="outlined"
            placeholder="Pension value"
            onChange={(e) => setFeeInput(parseInt(e.target.value))}
            color="primary"
            size="small"
          />
        </Box>
        <Typography variant='h5'>Monthly fee of £{fee}</Typography>
      </Box>
    </>
  );
};

export default Calculate;
