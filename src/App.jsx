import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css"
import Home from "./pages/Home";
import Sender from "./pages/Sender";
import Receiver from "./pages/Receiver";
import Navbar from "./pages/Navbar";
 // Define a Home component or redirect to `/sender`

function App() {
  return (
    <BrowserRouter future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}>
      <Navbar/>
      <div>
      <Routes>
         {/* Home or default route */}
        <Route path="/" element={<Home />} />
        <Route path="/sender" element={<Sender />} />
        <Route path="/receiver" element={<Receiver />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
