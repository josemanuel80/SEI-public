import React from 'react';

class Counter extends React.Component {
  state = {
    count: this.props.count,
    message: 'José Aurelio tiene razón',
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
        <h3>{this.state.message}</h3>
        <p>Count: {this.state.count}</p>
        <menu>
          <button onClick={this.handleIncrease}>Increase</button>
          <button onClick={this.handleDecrease}>Decrease</button>
        </menu>
      </div>
    );
  }
}

export default Counter;
