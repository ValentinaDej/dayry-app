import "./App.css";

import { DayryItems } from "./components/DayryItems/DayryItems";
import { Button } from "./shared/Button/Button";
import { Input } from "./shared/Input/Input";

function App() {
  return (
    <div className="App">
      <Input placeholder="Type name here..." required />
      <Button mode={"info"}>Add New</Button>
      <DayryItems />
      <Input type="color" />
      <Input mode="textarea" placeholder="Type comment here..." required />
      <Button mode={"primary"}>Add New Comment</Button>
    </div>
  );
}

//primary", "info", "outline-danger"
export default App;
