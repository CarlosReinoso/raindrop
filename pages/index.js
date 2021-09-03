import Layout, { siteTitle } from '../components/layout';
import { Box } from '@material-ui/core';
import Head from 'next/head';
import Link from 'next/link';
import { getSortedPostData } from '../lib/post';
import Date from '../components/date'

export const getStaticProps = async () => {
  const allPostData = getSortedPostData();
  return {
    props: {
      allPostData,
    },
  };
};

export default function Home({ allPostData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box component="section">
        <p>Hi! Carlos here, welcome</p>
      </Box>
      <Box component="section">
        <Box component="ul">
          {allPostData.map(({ id, date, title }) => (
            <Box component="li" key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <Date dateString={date}/>
            </Box>
          ))}
          <p>Create New Branch to see Preview URL in Vercel</p>
        </Box>
      </Box>
    </Layout>
  );
}
