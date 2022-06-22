import React from 'react';
// import { graphql } from "gatsby"
import Helmet from 'react-helmet';
import {
  Edit,
  StyledHeading,
  StyledMainWrapper,
  StyledMainWrapperIndex,
} from '../components/styles/Posts';

const PostChain = ({ posts }) =>
  posts &&
  posts.map((item, i) => {
    let post = item.node;

    return (
      <div>
        <StyledHeading>{post.frontmatter.title}</StyledHeading>
        <StyledMainWrapperIndex><h3>{post.frontmatter.author}</h3></StyledMainWrapperIndex>
        <StyledMainWrapperIndex><h4>{post.frontmatter.date}</h4></StyledMainWrapperIndex>
        <StyledMainWrapper dangerouslySetInnerHTML={{ __html: post.html }} />
        <StyledMainWrapper><hr /></StyledMainWrapper>
      </div>
    );
  });

export default PostChain;
