import React, { createRef } from "react"
class Input extends React.Component {
  //msgRef这个实例属性是可以自定义的，语义化即可
  msgRef = createRef()
  getValue = () => {
    //通过msgRef获取input value的值
    console.log(this.msgRef.current.value)
  }
  render () {
    return (
      <>
        <input
          type='text'
          ref={this.msgRef}
        >
        </input>
        <button onClick={this.getValue}>Click to get input value</button>
      </>
    )
  }
}

function App () {
  return (
    <div>
      <Input />
    </div>
  )
}

export default App
