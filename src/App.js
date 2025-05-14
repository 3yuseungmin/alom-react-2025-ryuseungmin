import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Seungmin from "./assignments/seungmin"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Seungmin" element={<Seungmin />}
        />
      </Routes>
    </Router>
  );
}

export default App;
