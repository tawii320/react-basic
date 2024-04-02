import React, { createContext } from "react"
// App -> A -> C
// App中数据直接给C
//注意事项：1. 上层组件和下层组件关系是相对的，只要存在就可以使用，通常将App作为数据提供方
//2. 这里涉及到的语法都是固定的，有两处：a.提供的位置 value提供数据，b.获取的位置{value => 使用value做什么都可以}

//1. 导入createContext方法并执行,解构提供者和消费者
const { Provider, Consumer } = createContext()
const ComponentA = () => {
  return (
    <div>this is A
      <ComponentC />
    </div>
  )
}

const ComponentC = () => {
  return (
    <div>this is C
      {/* 3. 通过Consumer使用数据 */}
      <Consumer>
        {value => <span>{value}</span>}
      </Consumer>
    </div>
  )
}
class App extends React.Component {
  state = {
    msg: 'This is Message from App'
  }
  render () {
    return (
      //2. 使用provicer包裹根组件
      <Provider value={this.state.msg}>
        <div>
          <ComponentA />
        </div>
      </Provider>
    )
  }
}
export default App