import { Box } from '@material-ui/core';
import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostData } from '../lib/post';
import Date from '../components/date';
import { GetStaticProps } from 'next';
import navbar from '../components/navbar';
import Navbar from '../components/navbar';
import Calculate from './fees/calculate';

export const getStaticProps: GetStaticProps = async () => {
  const allPostData = getSortedPostData();
  return {
    props: {
      allPostData,
    },
  };
};

export default function Home({
  allPostData,
}: {
  allPostData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <>
      <Head>
        <meta name="og:title" content='Fees' />
        <link rel="icon" href="/logo.svg" />
        <title>Fees</title>
      </Head>
      <Navbar />
       <Calculate/>
    </>
  );
}
