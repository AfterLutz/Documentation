const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://akkatecture.net',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '/logos/branding-inverted-1.svg',
    logoLink: 'https://akkatecture.net',
    title:
      "<a href='https://akkatecture.net/docs/getting-started/'><img class='img-responsive' src='/logos/branding-inverted-1.svg' alt='Get started!' /></a>",
    githubUrl: '',
    helpUrl: '',
    discordUrl: '/docs/community',
    tweetText: '',
    social: '',
    /* `<li>
		    <a href="https://discordapp.com/invite/akkatecture" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`, */
    links: [
      { text: 'DOCS', link: '/docs/getting-started' },
      { text: 'BLOG', link: '/posts' },
      { text: 'SOURCE', link: 'https://github.com/afterlutz/akkatecture' },
    ],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/docs/introduction',
      '/docs/basic_concepts',
      '/docs/walkthrough',
      '/docs/advanced_concepts',
      '/docs/further_self_study',
    ],
    tocChapters: [
      undefined,
      'Introduction',
      'Basic Concepts',
      'Walkthrough',
      'Advanced Concepts',
      'Further Research',
    ],
    collapsedNav: [],
    links: [{ text: 'Get the packages!', link: 'https://www.nuget.org/profiles/Akkatecture' }],
    frontLine: true,
    ignoreIndex: true,
  },
  siteMetadata: {
    title: 'Akkatecture',
    description: 'ES/CQRS Library built on Akka.Net',
    ogImage: null,
    docsLocation: 'https://akkatecture.net',
    favicon: 'https://raw.githubusercontent.com/AfterLutz/Documentation/master/static/logos/favicon.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
