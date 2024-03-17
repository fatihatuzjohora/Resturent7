import "./App.css";
import Bannar from "./Component/Bannar/Bannar";
import NavigationBer from "./Component/MainNavigationBer/NavigationBer";
import Recepies from "./Component/Recepies/Recepies";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <NavigationBer></NavigationBer>
      <Bannar></Bannar>
      <Recepies></Recepies>
    </div>
  );
}

export default App;
