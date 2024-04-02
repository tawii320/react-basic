const flag = false;
function App() {
  return (
    <div className="App">
      {flag ? (
        <div>
          <span>this is span</span>
        </div>
      ) : null}
      {false && <span>this is span</span>}
    </div>
  );
}

export default App;
