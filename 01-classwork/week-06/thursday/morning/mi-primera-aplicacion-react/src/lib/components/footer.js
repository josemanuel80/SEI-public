import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        Hecho con mucho cariño por los estudiantes de SEI en el dia{' '}
        {this.props.date} a las {new Date().getHours()}
      </footer>
    );
  }
}

export default Footer;
