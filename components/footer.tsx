import { Grid, Typography, Box } from '@material-ui/core';
import Link from 'next/link';
import logo from '../public/logo.svg';
import Image from 'next/image';
import scribble from '../public/images/sribble-bottom.svg';

const Footer = () => {
  const footerLinks = [
    { Main: ['Home', 'App', 'Contact us', 'Privacy policy', 'Policies'] },
    { Resources: ['Blog', 'Glossary', 'Videos', 'Pension calculator'] },
    { Community: ['Facebook', 'LinkedIn', 'Instagram', 'Twitter'] },
  ];
  return (
    <>
      <Box
        component="footer"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        position="relative"
        bgcolor="#e3f6f5"
        py="3rem"
        px={{ xs: '0.5rem', sm: '1rem', md: '5rem' }}
      >
        <Grid container spacing={3} style={{ maxWidth: '856px' }}>
          {footerLinks.map((column, i) => (
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" color="textSecondary">
                {Object.keys(footerLinks[i])}
              </Typography>
              {column[`${Object.keys(footerLinks[i])}`].map((link) => (
                <Link href="/">
                  <a style={{ color: 'black' }}>
                    <Typography variant="body2">{link}</Typography>
                  </a>
                </Link>
              ))}
            </Grid>
          ))}
        </Grid>
        <Box
          display="flex"
          flexDirection={{ xs: 'column', md: 'row' }}
          justifyContent="center"
          alignItems="center"
          mt="3rem"
        >
          <Box style={{ filter: 'grayscale(100%)' }} mr={{ md: '2rem' }}>
            <Image src={logo} width={100} height={50} />
          </Box>
          <Box fontSize={12} maxWidth="700px" fontWeight="500">
            Raindrop ® is a trading name of Raindrop Technologies Holdings Ltd
            (FRN: 931052) an Appointed Representative of Resolution Compliance
            Ltd, which is authorised and regulated by the Financial Conduct
            Authority (FRN: 574048). Raindrop Technologies Holdings Ltd is
            registered in England and Wales. Number: 12431555. Registered
            office: Runway East London Bridge, 20 St Thomas Street, London SE1
            9RS, UK.
          </Box>
        </Box>
        <Box
          position="absolute"
          right="0"
          bottom="0"
          width="20vw"
          max-width="380px"
        >
          <Image src={scribble} />
        </Box>
      </Box>
    </>
  );
};

export default Footer;
