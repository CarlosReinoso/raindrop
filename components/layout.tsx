import { Box } from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'
import React from 'react';

const name = "Carlos' Blog";
export const siteTitle = 'Nextjs Blog';

const Layout = ({ children, home }: {
  children: React.ReactNode
home?: boolean
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p="3rem"
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <Box component='header'>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              height={150}
              width={150}
              alt={name}
            />
            <h1>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  height={100}
                  width={100}
                  alt={name}
                />
              </a>
            </Link>
            <h2>
              <Link href="/" >
                  <a >{name}</a>
              </Link>
            </h2>
          </>
        )}
      </Box>
      <Box component='main'>

      {children}
      </Box>
      {!home && (
          <Link href='/'><a >← Back to home</a></Link>
      )}
    </Box>
  );
};

export default Layout;
