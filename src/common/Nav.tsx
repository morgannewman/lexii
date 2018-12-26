import './Nav.scss';

import * as React from 'react';

import { Link } from 'react-router-dom';

export class Nav extends React.Component {
  public render() {
    return (
      <header className="nav">
        <div className="nav-userInfo" />
        <Link className="nav-branding" to="/">
          Lexii
        </Link>
        <div className="nav-spacer" />
      </header>
    );
  }
}
