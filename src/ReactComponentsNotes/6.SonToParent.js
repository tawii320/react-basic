//子传父实现：
import React from "react"
//子传父： 子组件调用父组件传过来的函数，并把想要传递的数据当成函数的实参传入即可
//然后父组件中函数引入此型参执行
function SonFunc (props) {
  const { getSonMsg } = props
  const clickHandler = () => {
    const sonMsg = 'this is data from son component'
    getSonMsg(sonMsg)
  }
  return (
    <div>This is Son
      <button onClick={clickHandler}>
        Click
      </button>
    </div>
  )
}


class App extends React.Component {

  //1. 在父组件中准备一个函数 传给子组件
  getSonMsg = (sonMsg) => {
    console.log(sonMsg)

  }
  render () {
    return (
      <div>
        <SonFunc getSonMsg={this.getSonMsg} />
      </div>
    )
  }
}
export default App