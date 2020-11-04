import React from 'react';
const url = 'https://restcountries.eu/rest/v2/all';

class App extends React.Component {
  state = { countries: [] };

  async componentDidMount() {
    const res = await fetch(url);
    const countries = await res.json();
    this.setState({ countries });
  }

  render() {
    return <h1>Hello World</h1>;
  }
}

export default App;
