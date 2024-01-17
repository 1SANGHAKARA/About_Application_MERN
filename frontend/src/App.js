import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./component/Create";
import Read from './component/Read'
import Update from './component/Update'
import Nav from "./component/Nav"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route  path="/" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;