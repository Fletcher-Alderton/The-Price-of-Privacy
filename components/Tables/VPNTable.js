"use client";

import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import { styled as muiStyled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell"; // Rename the import to avoid naming conflict
import { MultiSelect } from "@uc-react-ui/multiselect";

export default function VPNTable() {
  const initialColumns = [
    { id: "VPN", label: "VPN", minWidth: 170, isVisible: true },
    /*
    { id: "VPN Affiliate Link", 
    label: "VPN Affiliate Link", 
    minWidth: 100 },
    {
      id: "VPN Standard Link",
      label: "VPN Standard Link",
      align: "center",
      format: (value) => value.toLocaleString("en-US"), isVisible: true  
    },
    */
    {
      id: "Honest Marketing",
      label: "Honest Marketing",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "Jurisdiction",
      label: "Jurisdiction",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "Outside 14 Eyes",
      label: "Outside 14 Eyes",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "Transparency Report",
      label: "Transparency Report",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "Warrant Canary",
      label: "Warrant Canary",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "Logging Policy",
      label: "Logging Policy",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "Diskless",
      label: "Diskless",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "Open Source Clients",
      label: "Open Source Clients",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "No Analytics",
      label: "No Analytics",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "Max Data Encryption",
      label: "Max Data Encryption",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "Max Handshake Encryption",
      label: "Max Handshake Encryption",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "OpenVPN",
      label: "OpenVPN",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "Wireguard",
      label: "Wireguard",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "Killswitch",
      label: "Killswitch",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "IPV6 Protection",
      label: "IPV6 Protection",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "2FA",
      label: "2FA",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "Audits",
      label: "Audits",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "1st-Party DNS",
      label: "1st-Party DNS",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "Custom DNS",
      label: "Custom DNS",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "Anon Payment",
      label: "Anon Payment",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "Anon Registration",
      label: "Anon Registration",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "1st-Party Servers",
      label: "1st-Party Servers",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "P2P Friendly",
      label: "P2P Friendly",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "Multihop",
      label: "Multihop",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "Port Forwarding",
      label: "Port Forwarding",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "Helps Privacy Causes",
      label: "Helps Privacy Causes",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "Affiliate Program",
      label: "Affiliate Program",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "Total Servers",
      label: "Total Servers",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "Total Countries",
      label: "Total Countries",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "Simultaneous Devices",
      label: "Simultaneous Devices",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "Windows Client",
      label: "Windows Client",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "MacOS Client",
      label: "MacOS Client",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "Linux Client",
      label: "Linux Client",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "Android Client",
      label: "Android Client",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "Native F-Droid Client",
      label: "Native F-Droid Client",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
    {
      id: "iOS Client",
      label: "iOS Client",
      align: "center",
      format: (value) => value.toLocaleString("en-US"),
      isVisible: true,
    },
  ];

  const [value, setValue] = useState(["desktop"]);

  // Hook to manage columns state
  const [columns, setColumns] = useState(initialColumns);

  // Hook to manage selected columns
  const [selectedColumns, setSelectedColumns] = useState([]);

  // Prepare options for MultiSelect from columns
  const options = columns.map((column) => ({ label: column.label }));

  const props = {
    name: "tags",
    size: "large",
    optionList: options,
    placeholder: "Filter",
    value: selectedColumns,
    valueChange: handleColumnSelection,
  };

  function handleColumnSelection(selection) {
    setSelectedColumns(selection);

    // Update columns visibility
    setColumns(
      columns.map((column) => ({
        ...column,
        isVisible: !selection.includes(column.label),
      }))
    );
  }

  columns.forEach((column) => console.log(column.id, column.isVisible));

  const [rows, setRows] = useState([]);
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("VPN");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(100);

  useEffect(() => {
    Papa.parse("/VPNchart.csv", {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        setRows(results.data);
      },
    });
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleSort = (property) => (event) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedRows = [...rows].sort((a, b) => {
    return order === "asc"
      ? a[orderBy].localeCompare(b[orderBy])
      : b[orderBy].localeCompare(a[orderBy]);
  });

  const StyledTableCell = muiStyled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#000000",
      color: "#F5F5F5",
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = muiStyled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#F5F5F5",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

  return (
    <>
      <div className="p-2" style={{ zIndex: 9999, position: "relative" }}>
        <MultiSelect
          {...props}
          onChange={(value) => {
            const newColumns = [...columns];
            newColumns.forEach((column) => {
              column.isVisible = !value.includes(column.id);
            });
            setColumns(newColumns);
          }}
        />
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 1080 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <StyledTableRow>
                {columns.map(
                  (column) =>
                    column.isVisible && ( // Only render the column if it's visible
                      <StyledTableCell // Use the styled cell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                        sortDirection={orderBy === column.id ? order : false}
                      >
                        <TableSortLabel
                          active={orderBy === column.id}
                          direction={orderBy === column.id ? order : "asc"}
                          onClick={handleSort(column.id)}
                        >
                          {column.label}
                        </TableSortLabel>
                      </StyledTableCell>
                    )
                )}
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {sortedRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <StyledTableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          column.isVisible && ( // Only render the cell if the column is visible
                            <StyledTableCell
                              key={column.id}
                              align={column.align}
                            >
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </StyledTableCell>
                          )
                        );
                      })}
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
        />
      </Paper>
    </>
  );
}
