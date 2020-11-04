import React from 'react'

class DonorInfo extends React.Component {

  render() {
    return (
      <>
        <section>
          <h2>Donor Information</h2>
          <h3>Contact:</h3>
          <p><a href = {this.props.data.contact.email}>{this.props.data.contact.email}</a> &#8226; {this.props.data.contact.phone}</p>
          <h3>Donation Amounts:</h3>
          <ul>
            {this.props.data.amounts.map(data => <li key={data}>${data}</li>)}
          </ul>
        </section>
      </>
    )
  }

}

export default DonorInfo