import React, {Fragment} from 'react';
import './App.css';

import Topmenu from './components/Topmenu';
import PageContent from './components/PageContent';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Topmenu />
        <PageContent />
      </Fragment>
    )
  }
}

export default App;
