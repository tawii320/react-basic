import React from "react"

class Counter extends React.Component {
  //1. 声明用来控制input value的react组件自己的状态：
  state = {
    message: 'This is message'
  }
  handleChange = (e) => {
    console.log('Change triggered', e)
    //4.拿到输入框最新的值，并交给state中的message
    this.setState({
      message: e.target.value
    })
  }
  render () {
    return (
      <input
        type='text'
        //2.给input框的value属性绑定react state
        value={this.state.message}
        //3. 给input框绑定一个change的事件，为了拿到当前输入框中的数据
        onChange={this.handleChange}
      />
    )
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
