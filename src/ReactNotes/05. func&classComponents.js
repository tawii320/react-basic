import React from 'react'
//function component creation and render
//creation (First letter must be upper level):
const Hello = () => {
  const clickHandler = () => {
    alert("Functional component event has been triggered.")
  }
  return <div onClick={clickHandler}>hello</div>
}
//render <Hello /> or <Hello></Hello>

//function component creation and render
//class component creation:
class HelloComponent extends React.Component {
  //事件回调函数标准写法(避免this的指向问题）：
  //这样写 回调函数中的this指向的是当前的组件实例对象
  clickHandler = () => {
    alert("Class component event has been triggered.")
  }
  render () {
    return <div onClick={this.clickHandler}>this is class component</div>
  }
}
//render: <HelloComponent /> or <HelloComponent> </HelloComponent />
function App () {
  return (
    <div>
      {/*render func component: */}
      <Hello />
      <Hello></Hello>
      {/*render class component: */}
      <HelloComponent />
      <HelloComponent></HelloComponent>

    </div>
  )
}

export default App
