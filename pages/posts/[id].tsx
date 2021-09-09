import { Box } from '@material-ui/core';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Date from '../../components/date';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/post';
import { section } from '../../src/theme';

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

const Post = ({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
    id: string;
  };
}) => {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Box component="section" py={section.paddingY} px={section.paddingX}>
        <h1>{postData.title}</h1>
        <h3>{postData.id}</h3>
        <Date dateString={postData.date} />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Box>
    </>
  );
};

export default Post;
