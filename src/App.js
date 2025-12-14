import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Form";
import Summary from "./Summary";
import './App.css';   // <-- Add this line to import your CSS

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
