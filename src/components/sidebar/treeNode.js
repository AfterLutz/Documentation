import * as React from 'react';
import OpenedSvg from '../images/opened';
import ClosedSvg from '../images/closed';
import config from '../../../config';
import Link from '../link';

const TreeNode = ({ className = '', setCollapsed, collapsed, url, title, items, ...rest }) => {
  const isCollapsed = collapsed[url];

  const collapse = () => {
    setCollapsed(url);
  };

  const hasChildren = items.length !== 0;

  let location;

  if (typeof document != 'undefined') {
    location = document.location;
  }
  const active =
    location && (location.pathname === url || location.pathname === config.gatsby.pathPrefix + url);

  const calculatedClassName = `${className} item ${active ? 'active' : ''}`;

  let newTitle = title;

  if (!newTitle && rest && rest.label) newTitle = rest.label;

  return (
    <li className={calculatedClassName}>
      {newTitle ? (
        !hasChildren ? (
          <Link to={url}>
            {rest.chapter}.{rest.lesson} {newTitle}
            {!config.sidebar.frontLine && newTitle && hasChildren ? (
              <button onClick={collapse} aria-label="collapse" className="collapser">
                {!isCollapsed ? <OpenedSvg /> : <ClosedSvg />}
              </button>
            ) : null}
          </Link>
        ) : (
          <div>
            <h3 className="category">{newTitle}</h3>
          </div>
        )
      ) : (<div></div> )}

      {!isCollapsed && hasChildren ? (
        <ul>
          {items.map((item, index) => (
            <TreeNode
              key={item.url + index.toString()}
              setCollapsed={setCollapsed}
              collapsed={collapsed}
              {...item}
            />
          ))}
        </ul>
      ) : null}
    </li>
  );
};

export default TreeNode;
