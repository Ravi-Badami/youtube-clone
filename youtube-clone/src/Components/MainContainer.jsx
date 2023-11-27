import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
// import VideoContainer from "./VideoContainer";
const MainContainer = () => {
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default MainContainer;
