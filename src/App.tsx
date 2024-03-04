import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/views/home";
import Entries from "@/views/entries";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:entryType" element={<Entries />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
