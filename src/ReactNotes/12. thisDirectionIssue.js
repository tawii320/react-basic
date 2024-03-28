import React from "react"
//1.wrong senario of using this:("this" is undefined)
class Test extends React.Component {
  //3.Must manually amend this directive by using bind: 
  constructor() {
    super()
    //use Bind to force amend this directive
    //相当于在类组件的初始化阶段 就可以吧回调函数的this修正到永远指向当前组件实例对象。
    this.handler = this.handler.bind(this)
  }

  handler () {
    console.log(this)
    //2.this.setState will report error
  }
  render () {
    return <button onClick={this.handler}>Click</button>
  }
}
function App () {
  return (
    <div>
      <Test></Test>
    </div>
  )
}

export default App
