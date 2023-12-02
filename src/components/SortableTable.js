import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

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

const SortableTable = () => {
  const [totalClicks, setTotalClicks] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [totalConversions, setTotalConversions] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    const clicksTotal = data.reduce(
      (acc, row) => acc + convertToNumber(row.clicks),
      0
    );
    const costTotal = data.reduce(
      (acc, row) => acc + convertToNumber(row.cost),
      0
    );
    const conversionsTotal = data.reduce(
      (acc, row) => acc + row.conversions,
      0
    );
    const revenueTotal = data.reduce(
      (acc, row) => acc + convertToNumber(row.revenue),
      0
    );

    setTotalClicks(clicksTotal);
    setTotalCost(costTotal);
    setTotalConversions(conversionsTotal);
    setTotalRevenue(revenueTotal);
  },[totalClicks]);

  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("campaigns");

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const convertToNumber = (value) => {
    const stringWithoutCommas = value.replace(/,/g, "");
    const match = stringWithoutCommas.match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };

  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  const getComparator = (order, orderBy) => {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const descendingComparator = (a, b, orderBy) => {
    if (getComparisonValue(b, orderBy) < getComparisonValue(a, orderBy))
      return -1;
    if (getComparisonValue(b, orderBy) > getComparisonValue(a, orderBy))
      return 1;
    return 0;
  };

  const getComparisonValue = (data, key) => {
    if (key === "cost" || key === "revenue" || key === "clicks") {
      return convertToNumber(data[key]);
    }
    return data[key];
  };

  return (
    <TableContainer
      component={Paper}
      className="border h-[fit-content] shadow-none"
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell colSpan={4}>Ad Insights</TableCell>
            <TableCell align="right">
              <HelpOutlineIcon className="text-gray-200" />
            </TableCell>
          </TableRow>
          <TableRow>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                sortDirection={orderBy === headCell.name ? order : false}
              >
                <TableSortLabel
                  active={orderBy === headCell.name}
                  direction={orderBy === headCell.name ? order : "asc"}
                  onClick={() => handleRequestSort(headCell.name)}
                >
                  {headCell.label}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {stableSort(data, getComparator(order, orderBy)).map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.campaigns}</TableCell>
              <TableCell>{row.clicks}</TableCell>
              <TableCell>{row.cost}</TableCell>
              <TableCell>{row.conversions}</TableCell>
              <TableCell>{row.revenue}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell>{totalClicks.toLocaleString()}</TableCell>
            <TableCell>{`USD ${totalCost.toLocaleString()}`}</TableCell>
            <TableCell>{totalConversions}</TableCell>
            <TableCell>{`USD ${totalRevenue.toLocaleString()}`}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SortableTable;
