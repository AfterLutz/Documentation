import React, { useState } from 'react';
import config from '../../../config';
import TreeNode from './treeNode';

const calculateTreeData = (edges, categories) => {
  const originalData = config.sidebar.ignoreIndex
    ? edges.filter(
        ({
          node: {
            fields: { slug },
          },
        }) => slug !== '/'
      )
    : edges;

  const tree = originalData.reduce(
    (
      accumulator,
      {
        node: {
          fields: { slug, title },
          frontmatter: { category, chapter, lesson, metaDescription, metaTitle, tags, showGithubEditLink },
        },
      }
    ) => {
      const parts = slug.split('/');

      let { items: prevItems } = accumulator;

      const slicedParts =
        config.gatsby && config.gatsby.trailingSlash ? parts.slice(1, -2) : parts.slice(1, -1);

      slicedParts[slicedParts.length] = categories[chapter];

      for (const part of slicedParts) {
        let tmp = prevItems && prevItems.find(({ label }) => label == part);

        if (tmp) {
          if (!tmp.items) {
            tmp.items = [];
          }
        } else {
          tmp = { label: part, items: [] };
          prevItems.push(tmp);
        }
        prevItems = tmp.items;
      }
      const slicedLength =
        config.gatsby && config.gatsby.trailingSlash ? parts.length - 2 : parts.length - 1;

      const existingItem = prevItems.find(({ label }) => label === parts[slicedLength]);

      if (existingItem) {
        existingItem.url = slug;
        existingItem.title = title;
      } else {
        prevItems.push({
          label: parts[slicedLength],
          url: slug,
          items: [],
          title,
          category,
          chapter,
          lesson,
          tags,
        });
      }
      return accumulator;
    },
    { items: [] }
  );

  const {
    sidebar: { forcedNavOrder = [] },
  } = config;

  const tmp = [...forcedNavOrder];

  if (config.gatsby && config.gatsby.trailingSlash) {
  }
  tmp.reverse();
  return tmp.reduce((accu, slug) => {
    const parts = slug.split('/');

    let { items: prevItems } = accu;

    const slicedParts =
      config.gatsby && config.gatsby.trailingSlash ? parts.slice(1, -2) : parts.slice(1, -1);

    for (const part of slicedParts) {
      let tmp = prevItems.find((item) => item && item.label == part);

      if (tmp) {
        if (!tmp.items) {
          tmp.items = [];
        }
      } else {
        tmp = { label: part, items: [] };
        prevItems.push(tmp);
      }
      if (tmp && tmp.items) {
        prevItems = tmp.items;
      }
    }

    const slicedLength =
      config.gatsby && config.gatsby.trailingSlash ? parts.length - 2 : parts.length - 1;

    const index = prevItems.findIndex(({ label }) => label === parts[slicedLength]);

    if (prevItems.length) {
      accu.items.unshift(prevItems.splice(index, 1)[0]);
    }
    let tempItems = accu.items.filter((item) => {
      return item.items.length > 0;
    });

    accu.items = tempItems;
    return accu;
  }, tree);
};

const Tree = ({ edges, categories }) => {
  let [treeData] = useState(() => {
    return calculateTreeData(edges, categories);
  });

  const defaultCollapsed = {};

  treeData.items.forEach((item) => {
    if (config.sidebar.collapsedNav && config.sidebar.collapsedNav.includes(item.url)) {
      defaultCollapsed[item.url] = true;
    } else {
      defaultCollapsed[item.url] = false;
    }
  });
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  const toggle = (url) => {
    setCollapsed({
      ...collapsed,
      [url]: !collapsed[url],
    });
  };

  return (
    <TreeNode
      className={`${config.sidebar.frontLine ? 'showFrontLine' : 'hideFrontLine'} firstLevel`}
      setCollapsed={toggle}
      collapsed={collapsed}
      {...treeData}
    />
  );
};

export default Tree;
