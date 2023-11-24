import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import "./index.css";
import { Provider } from "react-redux";
import store from "./utils/store";

/**
 * 
 *-Head
  -Body
    -sideBar
    -MainContainer
        -button list
        -videoCardContainer 
 * 
 * 
 */
function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <MainContainer />
      </div>
    </Provider>
  );
}

export default App;
