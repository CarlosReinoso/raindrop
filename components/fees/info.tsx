import { Box, Typography, Grid, Button } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const Info = () => {
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
    <Box
      component="section"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        px="2rem"
        textAlign="center"
        maxWidth="1296px"
        style={{ gap: '1rem' }}
      >
        <Grid
          container
          spacing={3}
          style={{
            background: 'rgb(227, 246, 245)',
            borderRadius: '1rem',
            padding: '2rem 0 2rem 0',
            marginBottom: '2rem',
            marginTop: '2rem',
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
                The value of your pension can go up as well as down. Capital at
                risk.
              </strong>
            </Typography>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default Info;
