import * as React from 'react';
import styled from '@emotion/styled';
import ThemeProvider from './theme/themeProvider';
// import mdxComponents from './mdxComponents';

const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background};

  .sideBarUL li .category {
    color: ${({ theme }) => theme.colors.text};
    padding-left: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
    font-weight: 200;
  }

  .sideBarUL li a {
    color: ${({ theme }) => theme.colors.text};
    font-family: Avenir, Nunito Sans, Helvetica Neue, sans-serif;
    font-size: 16px;
    line-style: none;
  }

  .sideBarUL .item > a:hover {
    //color: #f0f0f0 !important;
    /* background: #F8F8F8 */
    text-decoration: underline;
  }

  @media only screen and (max-width: 1007px) {
    display: block;
  }
`;

const Content = styled('main')`
  display: flex;
  flex-grow: 1;
  margin: 0px 48px;
  padding-top: 2rem;
  background: ${({ theme }) => theme.colors.background};

  table tr {
    background: ${({ theme }) => theme.colors.background};
  }

  @media only screen and (max-width: 1023px) {
    padding-left: 0;
    margin: 0 10px;
    padding-top: 3rem;
  }
`;

const MaxWidth = styled('div')`
  margin: auto;
  @media only screen and (max-width: 50rem) {
    width: 100%;
  }
`;

styled('div')`
  width: 298px;
`;

styled('div')`
  width: 224px;
`;
let pathname = typeof window !== "undefined" ? window.location.pathname : "";
// const loc = this.children;
// let pn = location ?
const PostsLayout = ({ children }) => (
  <ThemeProvider location={pathname}>
    <Wrapper>
      <Content>
        <MaxWidth>{children}</MaxWidth>
      </Content>
    </Wrapper>
  </ThemeProvider>
);

export default PostsLayout;
