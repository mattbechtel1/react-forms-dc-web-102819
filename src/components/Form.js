import React from 'react';

class Form extends React.Component {
  state = {
    submittedData: []
  }

  // handleFirstNameChange = event => {
  //   this.setState({
  //     firstName: event.target.value
  //   })
  // }

  // handleLastNameChange = event => {
  //   this.setState({
  //     lastName: event.target.value
  //   })
  // }

  handleSubmit = (event) => {
    event.preventDefault()
    let submitData = { 
      firstName: this.props.formData.firstName,
      lastName: this.props.formData.lastName
    }
    let dataArray = this.state.submittedData.concat(submitData)
    this.setState({submittedData: dataArray})
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
      <div>
        <form 
        onSubmit={e => this.handleSubmit(e)}
        >
          <input type="text" name="firstName" onChange={event => this.props.handleFirstNameChange(event)} value={this.props.formData.firstName} />
          <input type="text" name="lastName" onChange={event => this.props.handleLastNameChange(event)} value={this.props.formData.lastName} />
          <input type="submit" />
        </form>
        {this.listOfSubmissions()}
      </div>
    )
  }
}

export default Form;