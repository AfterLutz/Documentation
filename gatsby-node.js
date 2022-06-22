const componentWithMDXScope = require('gatsby-plugin-mdx/component-with-mdx-scope');

const path = require('path');

const startCase = require('lodash.startcase');

const config = require('./config');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx(sort: { fields: frontmatter___type }) {
              edges {
                node {
                  fields {
                    id
                    slug
                    title
                  }
                  tableOfContents
                  frontmatter {
                    date
                    type
                    author
                  }
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors); // eslint-disable-line no-console
          reject(result.errors);
        }

        // Create blog posts pages.
        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.slug ? node.fields.slug : '/',
            component: path.resolve('./src/templates/docs.js'),
            context: {
              id: node.fields.id,
            },
          });
        });
      })
    );
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        $components: path.resolve(__dirname, 'src/components'),
        buble: '@philpl/buble', // to reduce bundle size
      },
    },
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-export-default-from',
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);

    let value = parent.relativePath.replace(parent.ext, '');

    if (value === 'index') {
      value = '';
    }
    //
    // let arr = value.split('/');
    //
    // if (config.gatsby && config.gatsby.trailingSlash) {
    //   value = arr[arr.length - 2];
    //   createNodeField({
    //     name: `slug`,
    //     node,
    //     value: value === '' ? `/` : `/${arr[0]}/${value}/`,
    //   });
    // } else {
    //   value = arr[arr.length - 1];
    //   createNodeField({
    //     name: `slug`,
    //     node,
    //     value: value === '' ? `/` : `/${arr[0]}/${value}`,
    //   });
    // }

    let arr = value.split('/');

    let discardCount = config.gatsby && config.gatsby.trailingSlash ? 2 : 1;

    let newValue = '';

    value = arr[arr.length - discardCount];
    if (arr.length > discardCount) newValue = `/${arr[0]}/${value}`;
    if (arr.length == discardCount) newValue = `/${value}`;
    if (arr.length < discardCount) newValue = '/';
    createNodeField({
      name: `slug`,
      node,
      value: newValue,
    });

    // Create 'id' component on 'edge.node'
    createNodeField({
      name: 'id',
      node,
      value: node.id,
    });

    // Create 'title' component on 'edge.node'
    createNodeField({
      name: 'title',
      node,
      value:
        node.frontmatter.title === 'do_not_show'
          ? ''
          : node.frontmatter.title || startCase(parent.name),
    });
  }
};
