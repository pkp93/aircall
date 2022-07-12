import "./styles.css";

import { Provider } from "react-redux";

import store from "./store";
import HomePage from "./components/HomePage";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HomePage />
      </div>
    </Provider>
  );
}
