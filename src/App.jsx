import styles from "./App.module.css";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  return (
    <div className={styles.body}>
      <Header />
      <Body />
    </div>
  );
}

export default App;
