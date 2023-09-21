import "./App.css";

import { SideBar } from "./components/SideBar/SideBar";
import { Content } from "./components/Content/Content";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="bar">
          <SideBar />
        </div>
        <div className="content">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
