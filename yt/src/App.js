import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Button from "./components/Button";
import NavBar from "./components/NavBar";
import Slidebar from "./components/Slidebar";
import VideoContainer from "./components/VideoContainer";
import Body from "./components/Body";
import WatchPage from "./components/WatchPage";
// import WatchPage from "./components/WatchPage";

function App() {
  return (
    <div className="overflow-hidden ">
      <NavBar />
      {/* <RouterProvider router={appRouter} /> */}
    </div>
  );
}

export default App;
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <NavBar />
        <Body />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <VideoContainer />
      },
      {
        path: "watch",
        element: <WatchPage />
      }
    ]
  }
]);
