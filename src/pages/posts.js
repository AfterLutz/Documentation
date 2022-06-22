import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PostsLayout from '../components/postsLayout';
import PostChain from '../components/postChain';
import {
  Edit,
  StyledHeading,
  StyledMainWrapper,
  StyledMainWrapperIndex,
} from '../components/styles/Docs';

const Posts = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          limit: 1000
          filter: { frontmatter: { type: { eq: "post" } } }
          sort: { fields: frontmatter___date, order: DESC }
        ) {
          edges {
            node {
              frontmatter {
                title
                cover
                category
                tags
                type
                date
                author
              }
              html
            }
          }
        }
      }
    `
  );

  return (
    <PostsLayout>
      <PostChain posts={allMarkdownRemark.edges} />
    </PostsLayout>
  );
};

export default Posts;
