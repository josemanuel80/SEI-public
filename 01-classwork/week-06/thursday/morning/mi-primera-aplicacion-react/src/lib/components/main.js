import React from 'react';

class Main extends React.Component {
  render() {
    return (
      <article className={'main'}>
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
      </article>
    );
  }
}

export default Main;
