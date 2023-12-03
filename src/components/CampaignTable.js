import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SortableTable from "./SortableTable";

const data = [
  {
    id: 1,
    campaigns: "Cosmetics",
    clicks: "712",
    cost: "USD 4,271",
    conversions: 8,
    revenue: "USD 16,568",
  },
  {
    id: 2,
    campaigns: "Serums",
    clicks: "3,961",
    cost: "USD 27,331",
    conversions: 115,
    revenue: "USD 362,526",
  },
  {
    id: 3,
    campaigns: "Facewash",
    clicks: "9,462",
    cost: "USD 76,831",
    conversions: 123,
    revenue: "USD 266,800",
  },
  {
    id: 4,
    campaigns: "Shampoos",
    clicks: "439",
    cost: "USD 2,151",
    conversions: 5,
    revenue: "USD 11,029",
  },
  {
    id: 5,
    campaigns: "Conditioners",
    clicks: "1,680",
    cost: "USD 3,864",
    conversions: 49,
    revenue: "USD 175,245",
  },
  {
    id: 6,
    campaigns: "Facewash 2",
    clicks: "4,978",
    cost: "USD 29,370",
    conversions: 189,
    revenue: "USD 623,106",
  },
];

const headCells = [
  { id: 1, name: "campaigns", label: "Campaigns" },
  { id: 2, name: "clicks", label: "Clicks" },
  { id: 3, name: "cost", label: "Cost" },
  { id: 4, name: "conversions", label: "Conversions" },
  { id: 5, name: "revenue", label: "Revenue" },
];

const CampaignTable = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="flex justify-between border p-[15px]">
        <p>Ad Insights</p> <HelpOutlineIcon className="text-gray-200" />
      </div>
      <div className="bg-white">
        <SortableTable data={data} headCells={headCells} />
      </div>
    </div>
  );
};

export default CampaignTable;
