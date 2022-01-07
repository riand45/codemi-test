import React from 'react';

import propTypes from 'prop-types';

export default function ItemActiveUser(props) {
  const { isTitle, isLast, pageActive, activeUser } = props;
  return (
    <a href="#">
      <div className="page-active-user">
        <p style={{ fontWeight: isTitle ? 400 : 700, fontSize: 12 }}>
          {pageActive.length > 20
            ? `${pageActive}...${pageActive.slice(pageActive.length - 7)}`
            : pageActive}
        </p>
        <p style={{ fontWeight: isTitle ? 400 : 700, fontSize: 12 }}>
          {activeUser}
        </p>
      </div>
      {isLast ? <div /> : <div className="line" />}
    </a>
  );
}

ItemActiveUser.propTypes = {
  isTitle: propTypes.bool,
  isLast: propTypes.bool,
  pageActive: propTypes.string,
  activeUser: propTypes.string,
};
