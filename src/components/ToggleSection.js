import React, { useState } from "react";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import DataSaverOffOutlinedIcon from "@mui/icons-material/DataSaverOffOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Chart from "./Chart";
import GroupTable from "./GroupTable";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const clickdata = {
  labels: ["40% Male", "35% Female", "25% Unknown"],
  datasets: [
    {
      data: [40, 35, 25],
      backgroundColor: ["#FF823C", "#323C46", "#0096FF"],
      hoverBackgroundColor: ["#FF823C", "#323C46", "#0096FF"],
    },
  ],
};

const conversionsdata = {
  labels: ["50% Male", "40% Female", "10% Unknown"],
  datasets: [
    {
      data: [50, 40, 10],
      backgroundColor: ["#FF823C", "#323C46", "#0096FF"],
      hoverBackgroundColor: ["#FF823C", "#323C46", "#0096FF"],
    },
  ],
};

const ToggleSections = () => {
  const [showSection, setShowSection] = useState(true);

  const toggleSections = () => {
    setShowSection((prevShowSection) => !prevShowSection);
  };

  const iconStyle = {
    backgroundColor: "#0096FF",
    fontSize: "34px",
    borderRadius: "50%",
    color: "white",
    padding: "5px",
  };

  const iconStyle2 = {
    fontSize: "34px",
    borderRadius: "50%",
    color: "black",
    padding: "5px",
  };

  const [filter, setFilter] = useState("clicks");
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="h-[100%] border">
        <div className="flex justify-between border p-[15px]">
          <p>Ad Insights</p>{" "}
          <div className="space-x-[10px]">
            {showSection ? (
              <Select
                value={filter}
                onChange={handleChange}
                sx={{
                  height: "25px",
                  color: "gray",
                  fontSize: "14px",
                  paddingRight: "20px",
                }}
              >
                <MenuItem value={"clicks"}>Clicks</MenuItem>

                <MenuItem value={"conversions"}>Conversions</MenuItem>
              </Select>
            ) : (
              ""
            )}

            <HelpOutlineIcon className="text-gray-200" />
          </div>
        </div>
        <div>
          {showSection ? (
            <div className="ml-[5%] mt-[10%] md:mt-0 md:ml-[15%] ">
              <Chart data={filter === "clicks" ? clickdata : conversionsdata} />
            </div>
          ) : (
            <GroupTable />
          )}
        </div>
        <button onClick={toggleSections} className="float-right mt-5 mr-5 mb-5 xl:m-0 xl:float-none xl:absolute right-5 bottom-3">
          <div className="bg-[#EEEEEE] rounded-full">
            <DataSaverOffOutlinedIcon
              style={showSection ? iconStyle : iconStyle2}
            />
            <TableChartOutlinedIcon
              style={showSection ? iconStyle2 : iconStyle}
            />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ToggleSections;
