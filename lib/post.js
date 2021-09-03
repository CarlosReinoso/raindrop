import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark'
import html from 'remark-html'

const postDirectory = path.join(process.cwd(), 'posts');

export const getSortedPostData = () => {
  const fileNames = fs.readdirSync(postDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  const sortedDescending = allPostsData.sort((a, b) => {
    const dateA = Date.parse(a.date);
    const dateB = Date.parse(b.date);
    if (dateA < dateB) {
      return 1;
    }
    if (dateA > dateB) {
      return -1;
    }
    return 0;
  });

  return sortedDescending;
};

export const getAllPostIds = () => {
  const fileNames = fs.readdirSync(postDirectory);
  const postIds =
    //remove md extension
    fileNames.map((file) => {
      return {
        params: {
          id: file.replace(/\.md$/, ''),
        },
      };
    });

  return postIds;
};

export const getPostData = async (id) => {
  const fullpath = path.join(postDirectory,`${id}.md`)
  const fileContents = fs.readFileSync(fullpath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await remark()
  .use(html)
  .process(matterResult.content)

  const contentHtml = processedContent.toString()

  return {
     id,
     contentHtml,
     ...matterResult.data
  }
}