import * as React from 'react';
import styled from '@emotion/styled';
import { MDXProvider } from '@mdx-js/react';
import ThemeProvider from './theme/themeProvider';
import mdxComponents from './mdxComponents';
import Sidebar from './sidebar';
import RightSidebar from './rightSidebar';
import config from '../../config.js';

const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.background};

  .sideBarUL li .category {
    color: ${({ theme }) => theme.colors.text};
    font-family: Futura, League Spartan, sans-serif;
    padding-left: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-weight: 300;
    font-size: 16px;
  }

  .sideBarUL li a {
    color: ${({ theme }) => theme.colors.text};
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

const LeftSideBarWidth = styled('div')`
  width: 300px;
`;

const RightSideBarWidth = styled('div')`
  width: 224px;
`;
// const loc = this.children;k

const Layout = ({ children, location, path, data }) => (
  <ThemeProvider location={location}>
    <MDXProvider components={mdxComponents}>
      <Wrapper>
        {data && data.mdx.frontmatter.type == 'doc' ? (
          <LeftSideBarWidth className={'hiddenMobile'}>
            <Sidebar location={location} />
          </LeftSideBarWidth>
        ) : null}
        {config.sidebar.title ? (
          <div
            className={'sidebarTitle sideBarShow'}
            dangerouslySetInnerHTML={{ __html: config.sidebar.title }}
          />
        ) : null}
        <Content>
          <MaxWidth>{children}</MaxWidth>
        </Content>
        <hr />
        <div className={'visibleMobileView'}>
          <Sidebar location={location} />
        </div>
        {/*{location.pathname !== '/' ? (*/}
        {/*  <RightSideBarWidth className={'hiddenMobile'}>*/}
        {/*    <RightSidebar location={location} />*/}
        {/*  </RightSideBarWidth>*/}
        {/*) : null}*/}
      </Wrapper>
    </MDXProvider>
  </ThemeProvider>
);

export default Layout;
