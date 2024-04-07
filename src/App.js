import "./App.css";
import Header from "./Header";

//BEM Block Element Modifier
function App() {
  return (
    <div className="app">
      <h1 className="app__title">This is a Title.</h1>
      <Header/>

    </div>
  );
}

export default App;
