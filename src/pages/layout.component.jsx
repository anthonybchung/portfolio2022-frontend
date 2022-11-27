import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer.component";
import NavigationBar from "../components/navigationbar/NavigationBar.component";

const LayOut = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LayOut;
