const getHtag = (type) => {
  if (type === 1) {
    return <h1>This is H1</h1>;
  }
  if (type === 2) {
    return <h2>This is H2</h2>;
  }
  if (type === 3) {
    return <h3>This is H3</h3>;
  }
};

function App() {
  return <div className="App">{getHtag(3)};</div>;
}

export default App;
