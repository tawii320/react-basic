import React from "react"

class Counter extends React.Component {
  state = {
    count: 0,
    list: [1, 2, 3],
    person: {
      name: 'jack',
      age: 20
    }
  }
  clickHandler = () => {

    // this.setState({
    //   //简单修改：
    //   //变量修改：
    //   count: this.state.count + 1,
    //   //数组增加：
    //   list: [...this.state.list, 4, 5],
    //   //对象修改：
    //   person: {
    //     ...this.state.person,
    //     name: 'Tom'
    //   }
    // })

    //删除 - filter方法：
    this.setState({
      list: this.state.list.filter(item => item !== 2)
    })

  }

  render () {
    return (
      <>
        <ul>
          {this.state.list.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <div>{this.state.person.name}</div>
        <div>{this.state.count}<button onClick={this.clickHandler}>changeState</button></div>
      </>
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
