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

const SortableTable = ({ data, headCells, showSection }) => {
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
  }, [data]);

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
    <TableContainer component={Paper} className="border h-full">
      <Table>
        <TableHead className="hidden">
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
        <TableBody >
          {stableSort(data, getComparator(order, orderBy)).map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.campaigns || row.group}</TableCell>
              <TableCell>{row.clicks}</TableCell>
              <TableCell>{row.cost}</TableCell>
              <TableCell>{row.conversions}</TableCell>
              <TableCell>{row.revenue}</TableCell>
            </TableRow>
          ))}
          <TableRow className="bg-[#FAFAFA]"> 
            <TableCell>Total</TableCell>
            <TableCell>{totalClicks.toLocaleString()}</TableCell>
            <TableCell>{`USD ${totalCost.toLocaleString()}`}</TableCell>
            <TableCell>{totalConversions}</TableCell>
            <TableCell >{`USD ${totalRevenue.toLocaleString()}`}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SortableTable;
