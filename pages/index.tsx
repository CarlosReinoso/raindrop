import Head from 'next/head';
import { getSortedPostData } from '../lib/post';
import { GetStaticProps } from 'next';
import Navbar from '../components/navbar';
import Calculate from './fees/calculate';
import Footer from '../components/footer';

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
        <meta name="og:title" content="Fees" />
        <link rel="icon" href="/logo.svg" />
        <title>Fees</title>
      </Head>
      <Navbar />
      <Calculate />
      {/* //TODO: TrustPilot widget (requires, API access) */}
      <Footer />
    </>
  );
}
