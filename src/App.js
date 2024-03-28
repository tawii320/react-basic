import React from "react"
class Test extends React.Component {
  //1. 错误写法修正方法2：
  handler () {
    console.log(this)
  }
  render () {
    console.log('父函数中的this指向为：', this)
    //如果不用constructor做修正，可以在事件绑定的位置
    //通过箭头函数的写法，直接沿用父函数(此处父函数为render())中的this指向也OK
    //render函数中的this已经被react内部作了修正
    //这里的this就是指向当前的组件实例对象
    //所以箭头函数中的this直接沿用，也是指向组件的实例对象
    return <button onClick={() => this.handler()}>Click</button>
  }
}
function App () {
  return (
    <div>
      <Test />
    </div>
  )
}

export default App
