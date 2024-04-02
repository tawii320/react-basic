import React from "react"
// //1. 解构赋值props：
// function SonFunc (props) {
//   console.log(props)

//   const { list, userInfo, getMsg, child } = props
//   return (
//     <div>我是函数子组件，
//       {/* 父传子数组： */}
//       {list.map(item => <p key={item}>{item}</p>)}
//       {/* 父传子对象： */}
//       {userInfo.name}
//       {userInfo.age}
//       {/* 父传子函数： */}
//       <button onClick={getMsg}>触发父组件中的函数</button>
//       {/* 父传子JSX： */}
//       {child}
//     </div>
//   )
// }


//2. 引用参数时直接解构，用什么参数，解构什么参数
//这里写的就是原生的函数语法，props也是一个普通的js对象
//所以只要是原生支持的写法，都可以在这里使用
function SonFunc ({ list, userInfo, getMsg, child }) {
  return (
    <div>我是函数子组件，
      {list.map(item => <p key={item}>{item}</p>)}
      {userInfo.name}
      {userInfo.age}
      <button onClick={getMsg}>触发父组件中的函数</button>
      {child}
    </div>
  )
}
class App extends React.Component {
  state = {
    list: [1, 2, 3],
    userInfo: {
      name: 'tang',
      age: 30
    }
  }
  getMsg = () => {
    console.log('我是父组件的函数')
  }
  render () {
    return (
      <div>
        <SonFunc
          list={this.state.list}
          userInfo={this.state.userInfo}
          getMsg={this.getMsg}
          child={<span>This is Span</span>} />
      </div>
    )
  }
}


export default App
