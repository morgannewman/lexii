import * as React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { Landing } from './Landing';
import { Nav } from './common/Nav';

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Landing />
        </div>
      </Router>
    );
  }
}

export default App;
