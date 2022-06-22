import * as React from 'react';
import styled from '@emotion/styled';
import { StaticQuery, graphql } from 'gatsby';
import GitHubButton from 'react-github-btn';
import Link from './link';
import Loadable from 'react-loadable';
import { Location } from '@reach/router';
import config from '../../config.js';
import LoadingProvider from './mdxComponents/loading';
import { DarkModeSwitch } from './DarkModeSwitch';

const help = require('./images/help.svg');

const isSearchEnabled = config.header.search && config.header.search.enabled ? true : false;

let searchIndices = [];

if (isSearchEnabled && config.header.search.indexName) {
  searchIndices.push({
    name: `${config.header.search.indexName}`,
    title: `Results`,
    hitComp: `PageHit`,
  });
}

import Sidebar from './sidebar';

const LoadableComponent = Loadable({
  loader: () => import('./search/index'),
  loading: LoadingProvider,
});

function myFunction() {
  let x = document.getElementById('navbar');

  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }

  // console.log('asdf');
  //   x = document.getElementById('wideDiv');
  //   if(x && x.className === 'reverseHighlight') {
  //     x.className += ' responsive';
  //   } else {
  //     x.className = 'reverseHighlight';
  //   }
}

const StyledBgDiv = styled('div')`
  height: 60px;
  //box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  position: relative;
  display: none;
  //background: ${(props) => (props.isDarkThemeActive ? '#001932' : undefined)};

  @media (max-width: 1007px) {
    display: block;
    width: 100%;
  }
`;

const Header = ({ location, isDarkThemeActive, toggleActiveTheme }) => (
  <StaticQuery
    query={graphql`
      query headerTitleQuery {
        site {
          siteMetadata {
            headerTitle
            githubUrl
            helpUrl
            discordUrl
            tweetText
            logo {
              link
              image
            }
            headerLinks {
              link
              text
            }
          }
        }
      }
    `}
    render={(data) => {
      const logoImg = require('./logos/branding-inverted-1.svg');

      const twitter = require('./images/twitter.svg');

      const discordBrandsBlock = require('./images/discord-brands-block.svg');

      const twitterBrandsBlock = require('./images/twitter-brands-block.svg');

      const {
        site: {
          siteMetadata: {
            headerTitle,
            githubUrl,
            helpUrl,
            discordUrl,
            tweetText,
            logo,
            headerLinks,
          },
        },
      } = data;

      const finalLogoLink = logo.link !== '' ? logo.link : 'https://akkatecture.net/';

      return (
        <div className={'navBarWrapper'}>
          <nav className={'navBarDefault'}>
            <div className={'navBarHeader'}>
              <Link to={finalLogoLink} className={'navBarBrand'}>
                <img
                  className={'img-responsive displayInline'}
                  src={logo.image !== '' ? logo.image : logoImg}
                  alt={'logo'}
                />
              </Link>
              <div
                className={'headerTitle displayInline'}
                dangerouslySetInnerHTML={{ __html: headerTitle }}
              />
              <StyledBgDiv isDarkThemeActive={isDarkThemeActive}>
                <div className={'navBarDefault removePadd'}>
                  <span
                    onClick={myFunction}
                    className={'navBarToggle'}
                    onKeyDown={myFunction}
                    role="button"
                    tabIndex={0}
                  >
                    <span className={'iconBar'}></span>
                    <span className={'iconBar'}></span>
                    <span className={'iconBar'}></span>
                  </span>
                </div>
                {isSearchEnabled ? (
                  <div className={'searchWrapper'}>
                    <LoadableComponent collapse={true} indices={searchIndices} />
                  </div>
                ) : null}
              </StyledBgDiv>
            </div>
            {config.header.social ? (
              <ul
                className="socialWrapper visibleMobileView"
                dangerouslySetInnerHTML={{ __html: config.header.social }}
              ></ul>
            ) : null}
            {isSearchEnabled ? (
              <div className={'searchWrapper hiddenMobile navBarUL'}>
                <LoadableComponent collapse={true} indices={searchIndices} />
              </div>
            ) : null}
            <div id="navbar" className={'topnav'}>
              <ul className={'navBarUL navBarNav navBarULRight'}>
                {headerLinks.map((link, key) => {
                  if (
                    (link.link !== '' && link.text !== '' && link.link.startsWith('/')) ||
                    !link.link.startsWith('http')
                  ) {
                    return (
                      <li key={key}>
                        <a
                          className="sidebarLink"
                          href={link.link}
                          dangerouslySetInnerHTML={{ __html: link.text }}
                        />
                      </li>
                    );
                  } else if (link.link !== '' && link.text !== '') {
                    return (
                      <li key={key}>
                        <a
                          className="sidebarLink"
                          href={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          dangerouslySetInnerHTML={{ __html: link.text }}
                        />
                      </li>
                    );
                  }
                })}
                {helpUrl !== '' ? (
                  <li>
                    <a href={helpUrl}>
                      <img src={help} alt={'Help icon'} />
                    </a>
                  </li>
                ) : null}

                {tweetText !== '' ? (
                  <li>
                    <a
                      href={'https://twitter.com/intent/tweet?&text=' + tweetText}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img className={'shareIcon'} src={twitter} alt={'Twitter'} />
                    </a>
                  </li>
                ) : null}
                {tweetText !== '' || githubUrl !== '' ? (
                  <li className="divider hiddenMobile"></li>
                ) : null}
                {config.header.social ? (
                  <li className={'hiddenMobile'}>
                    <ul
                      className="socialWrapper"
                      dangerouslySetInnerHTML={{ __html: config.header.social }}
                    ></ul>
                  </li>
                ) : null}
                {githubUrl !== '' ? (
                  <li className={'githubBtn'}>
                    <GitHubButton
                      href={githubUrl}
                      data-show-count="true"
                      aria-label="Star on GitHub"
                    >
                      Star
                    </GitHubButton>
                  </li>
                ) : null}
                {discordUrl !== '' ? (
                  <li>
                    <a href={discordUrl}>COMMUNITY</a>
                  </li>
                ) : null}
                <li>
                  <DarkModeSwitch
                    isDarkThemeActive={isDarkThemeActive}
                    toggleActiveTheme={toggleActiveTheme}
                  />
                </li>
              </ul>
              {/*<div className={'visibleMobile'}>*/}
              {/*  <Sidebar location={location} />*/}
              {/*  <hr />*/}
              {/*</div>*/}
            </div>
          </nav>
        </div>
      );
    }}
  />
);

export default Header;
