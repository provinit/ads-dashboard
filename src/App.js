import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import MediaAdForm from "./pages/AdForm";
import { AdProvider } from "./context/AdContext";
import CreateAd from "./pages/CreateAd";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AdProvider>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-ad" element={<CreateAd />} />
          <Route path="/ad-form" element={<MediaAdForm />} />
        </Routes>
      </AdProvider>
    </div>
  );
}

export default App;
