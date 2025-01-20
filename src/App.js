import './App.css';
import HomePage from './Components/Pages/Home/homePage';
import Background from './Components/Background/background'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

/*0B0C13FF*/
function App() {

        return (
      <div className="App">
          <HomePage/>
          <Background/>
          <Analytics/>
          <SpeedInsights/>
      </div>

  );
}

export default App;
