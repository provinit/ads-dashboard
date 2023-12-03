import SortableTable from "./SortableTable";

const data = [
    {
      id: 1,
      group: "Male",
      clicks: "712",
      cost: "USD 4,271",
      conversions: 8,
      revenue: "USD 16,568",
    },
    {
      id: 2,
      group: "Female",
      clicks: "3,961",
      cost: "USD 27,331",
      conversions: 115,
      revenue: "USD 362,526",
    },
    {
      id: 3,
      group: "Unknown",
      clicks: "9,462",
      cost: "USD 76,831",
      conversions: 123,
      revenue: "USD 266,800",
    },
  ];
  
  const headCells = [
    { id: 1, name: "group", label: "Group" },
    { id: 2, name: "clicks", label: "Clicks" },
    { id: 3, name: "cost", label: "Cost" },
    { id: 4, name: "conversions", label: "Conversions" },
    { id: 5, name: "revenue", label: "Revenue" },
  ];
  

const GroupTable = () => {
  return (
    <SortableTable data={data} headCells={headCells} />
  )
}

export default GroupTable