import Navbar from "./components/Navbar";
import ToggleSection from "./components/ToggleSection";
import CampaignTable from "./components/CampaignTable";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mx-[5%] w-[fit-content] lg:mx-auto grid xl:grid-cols-2 gap-10 items-stretch">
        <CampaignTable />
        <ToggleSection />
      </div>
    </div>
  );
}

export default App;
