import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import QuantApp from "./pages/QuantApp.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/quant-app" element={<QuantApp />} />
      </Routes>
    </Router>
  );
}

export default App;
