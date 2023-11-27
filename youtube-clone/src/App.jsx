import Header from "./Components/Header";
import MainContainer from "./Components/MainContainer";
import "./index.css";
import { Provider } from "react-redux";
import store from "./utils/store";
import VideoContainer from "./Components/VideoContainer";
import Watch from "./Components/Watch";

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
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    children: [
      {
        path: "/",
        element: <VideoContainer />,
      },
      {
        path: "watch",
        element: <Watch />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      {/* <Router> */}
      <div>
        <Header />
        <RouterProvider router={appRouter} />
      </div>
      {/* </Router> */}
    </Provider>
  );
}

export default App;
