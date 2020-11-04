import React from 'react';
import Header from './components/header.js';
import Main from './components/main.js';
import Counter from './components/counter.js';
import Footer from './components/footer';

import '../styles/index.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main title={'Soy un titulo h2'} text={'Soy un texto'} />
        <Main
          title={'Soy un segundo titulo h2'}
          text={'Soy un segundo texto'}
        />
        <Counter count={100} />
        <Footer date={new Intl.DateTimeFormat('en-GB').format(new Date())} />
      </div>
    );
  }
}

export default App;
