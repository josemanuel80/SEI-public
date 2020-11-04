import React, { useEffect, useState } from 'react';
const url = 'https://restcountries.eu/rest/v2/all';

// class App extends React.Component {
//   state = { countries: [] };

//   async componentDidMount() {
//     const res = await fetch(url);
//     const countries = await res.json();
//     this.setState({ countries });
//     console.log({ countries });
//   }

//   render() {
//     return <h1>Hello World</h1>;
//   }
// }

const App = () => {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return countries.map((country, i) => {
    return <p key={i}>{country.name}</p>;
  });
};

export default App;
