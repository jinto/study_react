import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log("Hello")
  }
  componentDidMount() {
    console.log("didmount")
  }
  componentDidUpdate() {
    console.log("didmount")

  }

  state = {
    count: 0,
  };

  add = () => {
    this.setState(current => ({
      count: current.count+1
    }))
  }
  minus = () => {
    this.setState(current => ({
      count: current.count -1
    }))
  }

  render() {
    console.log("render")
    return (
      <div>
        <h1>숫자 올리기 내리기 { this.state.count} </h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}

export default App;
