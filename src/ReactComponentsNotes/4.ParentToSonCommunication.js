import React from "react"
//App父组件，Son子组件

//函数式组件的son
function SonFunc (props) {
  //3. props是一个对象，里面存有通过父组件传入的所有数据
  return (
    <div>I'm functional SonFunc,{props.msg}</div>
  )
}
class SonClass extends React.Component {
  render () {
    //4. 类组件必须通过this关键词去获取。这里的props是固定的
    return (
      <div>I'm class SonClass,{this.props.msg}</div>
    )
  }
}
//类组件的son
class App extends React.Component {
  //1. 准备父组件中的数据
  state = {
    message: "this is message"
  }
  render () {
    return (
      <div>
        {/* 2. 子组件身上绑定属性，属性名可自定义，保持语义化 */}
        <SonFunc msg={this.state.message} />
        <SonClass msg={this.state.message} />
      </div>
    )
  }
}


export default App
