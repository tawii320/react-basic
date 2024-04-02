import './app.css'
const style = {
  color: 'red',
  fontSize: '30px'
}
const activeFlag = true

function App () {
  return (
    <>
      <div className="App">
        <span style={style}>This is span</span>
        <span className={activeFlag ? 'active' : ''}>test className style</span>
      </div><div></div>
      <div></div>
    </>
  )
}

export default App
