import React from 'react'

class GeneralInfo extends React.Component {

  render () {
    const { hours, admissions } = this.props
    return (
      <>
        <section>
          <h2>General Info:</h2>
          <h3>Hours:</h3>
          <ul>
            {hours.map(data => <li key={data.day}><strong>{data.day}:</strong> {data.times}</li>)}
          </ul>
          <h3>Suggested Admissions:</h3>
          <ul>
            {admissions.map(data => <li key={data.type}>{data.type} - ${data.amount}</li>)}
          </ul>
        </section>
        <hr />
      </>
    )

  }



}

export default GeneralInfo