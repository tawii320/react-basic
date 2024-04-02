import React from 'react'
//通过类组件修改状态的方式 counter
class Counter extends React.Component {
  //通过state定义状态：
  state = {
    count: 0
  }
  clickHandler = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  render () {
    return <button onClick={this.clickHandler}>{this.state.count}click</button>
  }
}

function App () {
  return (
    <div>
      <Counter></Counter>
    </div>
  )
}

export default App
