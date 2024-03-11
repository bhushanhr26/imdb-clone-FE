import { BrowserRouter as Router } from "react-router-dom";
import ImdbAppRoutes from "./Routes.js";
import Header from "./components/Header/jsx/Header.jsx";
function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <div>
        <ImdbAppRoutes />
      </div>
    </Router>
  );
}

export default App;
