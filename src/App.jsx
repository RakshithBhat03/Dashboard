import "./App.css";
import { BudgetInfo, Navbar, Overview } from "./compoents/";

function App() {
  return (
    <div className="App w-full">
      <Navbar />
      <Overview />
      <BudgetInfo />
    </div>
  );
}

export default App;
