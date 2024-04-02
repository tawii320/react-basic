//兄弟组件通信实现：（通过公共父组件传递)
//1. 先把B中的数据通过子传父传给APP
//2. 再把App接收到的B中的数据 通过父传子 传给A
import React from "react"
const SonA = (props) => {
  const { sendAMsg } = props
  const clickHandler = () => {
    console.log(sendAMsg)
  }
  return (
    <div>This is SonAAAAA{sendAMsg}
      <button onClick={clickHandler}>
        ReceiveData
      </button>
    </div>
  )
}
const SonB = (props) => {
  const { bridge } = props
  const clickHandler = () => {
    const bMsg = 'This is message from B'
    bridge(bMsg)
  }

  return (
    <div>This is SonBBBBB
      <button onClick={clickHandler}>
        SendData
      </button>
    </div>
  )
}

class App extends React.Component {
  //1. 声明一个传给B组件的方法,此方法专为得到B的数据
  getBMsg = (msg) => {
    console.log(msg)
    console.log(this.state.sendAMsg)
    //把从B得到的msg交给sendAMsg：
    this.setState({
      sendAMsg: msg
    })
  }
  state = {
    sendAMsg: 'aaa'
  }
  render () {
    return (
      <div>
        <SonA sendAMsg={this.state.sendAMsg} />
        <SonB bridge={this.getBMsg} />
      </div>
    )
  }
}
export default App