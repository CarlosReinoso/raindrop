import {
  Box,
  Typography,
  Hidden,
  TextField,
  Grid,
  Button,
} from '@material-ui/core';
import scribble from '../../public/images/scribble-top.svg';
import Image from 'next/image';
import { useState } from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const Calculate = () => {
  const [fee, setFee] = useState(0);

  const handleFee = (e) => {
    const round = (total) => Math.round(total * 100) / 100;

    e < 100000
      ? setFee(round((e * 0.0075) / 12))
      : e > 100000
      ? setFee(round((e * 0.0056) / 12))
      : (e = 0);
  };

  const pensionInfo = [
    {
      when: `When your pension is ${'<'} £100,000`,
      percent: '0.75 %',
      means: 'That means £6.25 a month for every £10,000',
      deposited: '£0 - £100k deposited',
    },
    {
      when: `When your pension is ${'>'} £100,000`,
      percent: '0.56 %',
      means: 'That means £4.67 a month for every £10,000',
      deposited: '£100k+ deposited',
    },
  ];
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
            onChange={(e) => handleFee(e.target.value)}
            color="primary"
            size="small"
          />
        </Box>
        <Typography variant='h5'>Monthly fee of £{fee}</Typography>
        <Box px="2rem" width="100%">
          <Grid
            container
            spacing={3}
            style={{
              background: 'rgb(227, 246, 245)',
              borderRadius: '1rem',
              padding: '2rem 0 2rem 0',
              marginBottom: "2rem",
              marginTop: "2rem",
            }}
          >
            {pensionInfo.map((text) => (
              <Grid item xs={12} sm={6}>
                <Box
                  display="flex"
                  flexDirection="column"
                  style={{ gap: '2.5rem' }}
                >
                  <Typography variant="body1">{text.when}</Typography>
                  <Typography
                    variant="h2"
                    style={{ fontFamily: 'Times New Roman' }}
                  >
                    {text.percent}
                  </Typography>
                  <Typography variant="body1">{text.means}</Typography>
                  <Box
                    display="flex"
                    justifyContent="center"
                    style={{ gap: '1rem' }}
                  >
                    <CheckCircleIcon color="secondary" />
                    <Typography variant="body2">{text.deposited}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              style={{ gap: '1rem' }}
              width="100%"
              my="2rem"
              px="2rem"
            >
              <Button variant="contained" style={{ maxWidth: '7rem' }}>
                Get Started
              </Button>
              <Typography variant="body2">
                <strong>
                  The value of your pension can go up as well as down. Capital
                  at risk.
                </strong>
              </Typography>
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Calculate;
