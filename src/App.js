import styles from "./App.module.css";
import Product from "./Product";

//BEM Block Element Modifier
function App() {
  return (
    <div className="app">
      <h1 className="app__title">Hello World</h1>
      <h2 className={styles.error}>An error occured</h2>

      <Product name='Amazon Echo' description='Your AI Assistant' currency='$' price={90} />
      <Product name='Google Home' description='Your AI Assistant' currency='$' price={59.99} />
      <Product name='iPhone 12 Pro Max' description='The best iPhone' currency='$' price={1200} />
      <Product name='Macbook Pro' description='Your Favourite Computer' currency='$' price={2500} />

    </div>
  );
}

export default App;
