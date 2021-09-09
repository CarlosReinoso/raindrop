import { Box, Typography, Hidden, TextField } from '@material-ui/core';
import scribble from '../../public/images/scribble-top.svg';
import Image from 'next/image';
import { useState } from 'react';

const Calculate = () => {
  const [fee, setFee] = useState(null);

  const handleFee = (e) => {
    const round = (total) => Math.round(total * 100) / 100;

    e < 100000
      ? setFee(round((e * 0.0075) / 12))
      : e > 100000
      ? setFee(round((e * 0.0056) / 12))
      : (e = 0);
  };
  return (
    <>
      <Box
        component="div"
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
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
          <Box position="absolute" left="-24px" bottom="-96px">
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
            onChange={(e) => handleFee(e.target.value)}
            color='primary'
            size='small'
            />
        </Box>
        <Typography>Monthly fee of £{fee}</Typography>
      </Box>
    </>
  );
};

export default Calculate;
