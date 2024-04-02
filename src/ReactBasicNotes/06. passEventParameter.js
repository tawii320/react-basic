import React from 'react'
const Hello = () => {
  // how to prevent default behavior of e object:
  // const clickHandler = (e) => {
  //   e.preventDefault()
  //   console.log("Functional component event has been triggered.", e)
  // }

  //1. 只需要一个额外参数： {clickHandler} -> {() => clickHandler('parameter')}
  //2. 既需要e 又需要额外参数：{clickHandler} -> {(e) => clickHandler(e, 'parameter')}
  const clickHandler = (e, msg) => {
    console.log("Functional component event has been triggered.", msg, e)
  }
  return <div onClick={(e) => clickHandler(e, 'this is msg')}>Hello!</div>
}

function App () {
  return (
    <div>
      {/*render func component: */}
      <Hello />
      <Hello></Hello>

    </div>
  )
}

export default App
