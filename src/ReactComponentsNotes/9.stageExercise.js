import React from "react"
//渲染列表组件：
const ListItem = (props) => {
  const { id, name, price, info } = props.itemmm

  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{info}</p>
      <button onClick={() => props.delete(id)}>Delete</button>
    </>
  )
}
//数据提供者, 用来渲染ListItem组件 APP -> ListItem:
//思想:先不抽离组件,完成基础渲染之后再去抽离
class App extends React.Component {

  state = {
    list: [
      { id: 1, name: '超级好吃的棒棒糖', price: 18.8, info: '开业大酬宾,全场8折' },
      { id: 2, name: '超级好吃的大鸡腿', price: 34.2, info: '开业大酬宾,全场8折' },
      { id: 3, name: '超级无敌的冰激凌', price: 14.2, info: '开业大酬宾,全场8折' }
    ]
  }
  //给子组件传递的删除函数:
  delete = (id) => {
    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    })
  }

  render () {
    return (
      <div>
        {this.state.list.map(item => <ListItem key={item.id} itemmm={item} delete={this.delete} />)}
      </div>
    )
  }
}
export default App