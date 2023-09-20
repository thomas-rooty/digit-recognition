import ToolsBar from "./components/ToolsBar.jsx";
import CanvasZone from "./components/CanvasZone.jsx";
import {ToolsProvider} from "./contexts/ToolsContext.jsx";
import {CaptchaProvider} from "./contexts/CaptchaContext.jsx";

const App = () => {
  return (
      <ToolsProvider>
        <CaptchaProvider>
          <ToolsBar/>
          <CanvasZone/>
        </CaptchaProvider>

      </ToolsProvider>
  )
}

export default App;