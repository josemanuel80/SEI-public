import React from 'react';
import '../styles/App.css';

class App extends React.Component {
  state = {
    count: 0,
    message: 'Hola SEI',
  };

  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <p>Count: {this.state.count}</p>
        <menu>
          <button onClick={this.handleIncrease}>Increase</button>
          <button onClick={this.handleDecrease}>Decrease</button>
        </menu>
      </div>
    );
  }
}

export default App;
