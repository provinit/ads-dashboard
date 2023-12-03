import ToggleSection from "../components/dashboard/ToggleSection";
import CampaignTable from "../components/dashboard/CampaignTable";

const Dashboard = () => {
  return (
    <div className="container mx-[5%] w-[90%] xl:w-[98%] 2xl:w-full  lg:mx-auto grid xl:grid-cols-2 gap-5 lg:gap-10 items-stretch">
      <CampaignTable />
      <ToggleSection />
    </div>
  );
};

export default Dashboard;
