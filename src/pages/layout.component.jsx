import { Outlet } from "react-router-dom";
import NavigationBar from "../components/navigationbar/NavigationBar.component";

const LayOut = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  );
};

export default LayOut;
