import React from 'react'

class TestComponent extends React.Component {
  //1. define component state:
  state = {
    //define any states here, all of them are states of current component.
    name: 'teaaacher'
  }
  changeName = () => {
    //3. change component state:(can not assign value to state directly, must use setState)
    this.setState({
      name: 'worker'
    })
  }
  render () {
    //2. use component state:
    return (
      <div>
        this is TestComponent
        name is : {this.state.name}
        <button onClick={this.changeName}>change name</button>
      </div>
    )
  }
}
/*
总结：
1. 编写组件其实就是编写原生JS类或者函数
2. 定义状态必须通过state 实例属性的方法， 提供一个对象，名称是固定的就叫state
3. 修改state中任何属性，都不可以直接赋值，必须用setState方法，这个方法来自于继承React Component
4. 这里的this很容易出现指向错误的问题，上面的写法是最规范最推荐的，没有this指向问题。




*/
function App () {
  return (
    <div>
      <TestComponent></TestComponent>
    </div>
  )
}

export default App
