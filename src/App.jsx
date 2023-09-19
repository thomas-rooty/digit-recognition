import ToolsBar from "./components/ToolsBar.jsx";
import CanvasZone from "./components/CanvasZone.jsx";
import {ToolsProvider} from "./contexts/ToolsContext.jsx";

const App = () => {
  return (
      <ToolsProvider>
        <ToolsBar/>
        <CanvasZone/>
      </ToolsProvider>
  )
}

export default App;