import React from 'react'
import image from '../assets/hero.jpg'

class Header extends React.Component {

  render() {
    return (
      <>
        <h1>The Metropolitan Museum of Art</h1>
        <hr />
        <section>
          <h2>Exhibit:</h2>
          <img src={image} alt="logo" />
          <h3>{this.props.title}</h3>
          <h3>{this.props.subtitle}</h3>
        </section>
        <hr />
      </>
    )
  }



}

export default Header