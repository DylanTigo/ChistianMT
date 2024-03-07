import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Menu from "./Components/Menu";

function App() {
  return (
    <>
      <div className=" w-svw h-svh fixed top-0 right-0 z-10 bg-black opacity-0"></div>
      {/* opacity-70 */}
      <Menu />
      <Header />
      <Outlet />
    </>
  );
}

export default App;
