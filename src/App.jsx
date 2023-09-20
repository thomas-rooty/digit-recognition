import ToolsBar from "./components/ToolsBar.jsx";
import CanvasZone from "./components/CanvasZone.jsx";
import {ToolsProvider} from "./contexts/ToolsContext.jsx";
import {CaptchaProvider} from "./contexts/CaptchaContext.jsx";

const App = () => {
  return (
      <ToolsProvider>
        <CaptchaProvider>
          <ToolsBar/>
        </CaptchaProvider>
        <CanvasZone/>
      </ToolsProvider>
  )
}

export default App;