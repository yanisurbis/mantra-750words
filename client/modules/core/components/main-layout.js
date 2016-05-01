import React from 'react';

const Layout = ({content}) => (
  <div>
    <header>
      <h1>Hello, World!</h1>
    </header>
    <div>
      {content}
    </div>
    <footer>
      <small>Built for learning purposes.</small>
    </footer>
  </div>
);

export default Layout;

