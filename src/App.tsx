import { BrowserRouter as Router } from "react-router-dom";
import Web3Routes from "./components/Routes";
import { Web3MobileProvider } from "./context/Web3MobileProvider";

function App() {
  
  return <Web3MobileProvider>
    <Router basename={`/${process.env.REACT_APP_BASE_URL}`}>
      <Web3Routes />
    </Router>
  </Web3MobileProvider>
}

export default App;