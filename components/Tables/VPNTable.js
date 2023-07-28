import { useEffect, useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import QuestionMarkIcon from "@mui/icons-material/HelpOutline";
import { Tooltip, Select, MenuItem, Chip } from "@mui/material";
import Papa from "papaparse";
import "./VPNTable.css"; // Import the CSS file for styling

export default function VPNTable() {
  const [tableData, setTableData] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);

  useEffect(() => {
    // Your CSV data as a string
    const csvData = `/VPNchart.csv`;

    // Parsing the CSV data
    Papa.parse(csvData, {
      download: true,
      header: true,
      complete: (results) => {
        console.log("Parsed data:", results.data);
        setTableData(results.data);
      },
      error: (error) => {
        console.error("Error parsing CSV:", error);
      },
    });
  }, []);

  const handleFilterChange = (event) => {
    setSelectedFilters(event.target.value);
  };

  const handleRemoveFilter = (filter) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.filter((f) => f !== filter)
    );
  };

  // Function to render the icons based on the column value
  const renderIcon = (value) => {
    if (value === "Yes") {
      return <CheckIcon />;
    } else if (value === "No") {
      return <CloseIcon />;
    } else {
      return <QuestionMarkIcon />;
    }
  };

  // Filter the data based on the selected filters
  const filteredData = selectedFilters.length
    ? tableData.filter((row) =>
        selectedFilters.every((filter) => row[filter] === "Yes")
      )
    : tableData;

  return (
    <div className="table-container">
      {/* Multiselect */}
      <div style={{ marginBottom: 10, display: "flex", alignItems: "center" }}>
        <Select
          multiple
          value={selectedFilters}
          onChange={handleFilterChange}
          style={{ minWidth: 200 }}
          displayEmpty 
          renderValue={(selected) => (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
              {'Filter'}
            </div>
          )}
        >
          {/* Default/Placeholder MenuItem */}
          <MenuItem value="" disabled>
            Filter
          </MenuItem>
          <MenuItem value="Outside 14 Eyes">Outside 14 Eyes</MenuItem>
          <MenuItem value="Transparency Report">Transparency Report</MenuItem>
          <MenuItem value="Warrant Canary">Warrant Canary</MenuItem>
          <MenuItem value="Logging Policy">Logging Policy</MenuItem>
          <MenuItem value="Diskless">Diskless</MenuItem>
          <MenuItem value="Open Source Clients">Open Source Clients</MenuItem>
          <MenuItem value="No Analytics">No Analytics</MenuItem>
          <MenuItem value="Max Data Encryption">Max Data Encryption</MenuItem>
          <MenuItem value="Max Handshake Encryption">
            Max Handshake Encryption
          </MenuItem>
          <MenuItem value="OpenVPN">OpenVPN</MenuItem>
          <MenuItem value="Wireguard">Wireguard</MenuItem>
          <MenuItem value="Killswitch">Killswitch</MenuItem>
          <MenuItem value="IPV6 Protection">IPV6 Protection</MenuItem>
          <MenuItem value="2FA">2FA</MenuItem>
          <MenuItem value="Audits">Audits</MenuItem>
          <MenuItem value="1st-Party DNS">1st-Party DNS</MenuItem>
          <MenuItem value="Custom DNS">Custom DNS</MenuItem>
          <MenuItem value="Anon Payment">Anon Payment</MenuItem>
          <MenuItem value="Anon Registration">Anon Registration</MenuItem>
          <MenuItem value="1st-Party Servers">1st-Party Servers</MenuItem>
          <MenuItem value="P2P Friendly">P2P Friendly</MenuItem>
          <MenuItem value="Multihop">Multihop</MenuItem>
          <MenuItem value="Port Forwarding">Port Forwarding</MenuItem>
          <MenuItem value="Helps Privacy Causes">Helps Privacy Causes</MenuItem>
          <MenuItem value="Affiliate Program">Affiliate Program</MenuItem>
          <MenuItem value="Total Servers">Total Servers</MenuItem>
          <MenuItem value="Total Countries">Total Countries</MenuItem>
          <MenuItem value="Simultaneous Devices">Simultaneous Devices</MenuItem>
          <MenuItem value="Windows Client">Windows Client</MenuItem>
          <MenuItem value="MacOS Client">MacOS Client</MenuItem>
          <MenuItem value="Linux Client">Linux Client</MenuItem>
          <MenuItem value="Android Client">Android Client</MenuItem>
          <MenuItem value="Native F-Droid Client">
            Native F-Droid Client
          </MenuItem>
          <MenuItem value="iOS Client">iOS Client</MenuItem>
        </Select>
        {/* Multiselect Chips */}
        <div
          style={{ display: "flex", flexWrap: "wrap", gap: 4, marginLeft: 10 }}
        >
          {selectedFilters.map((value) => (
            <Chip
              key={value}
              label={value}
              onDelete={() => handleRemoveFilter(value)}
            />
          ))}
        </div>
      </div>
      <div className="table-container rounded-md">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                {/* Header's */}
                <th>VPN</th>
                <th>Outside 14 Eyes</th>
                <th>Transparency Report</th>
                <th>Warrant Canary</th>
                <th>Logging Policy</th>
                <th>Diskless</th>
                <th>Open Source Clients</th>
                <th>No Analytics</th>
                <th>Max Data Encryption</th>
                <th>Max Handshake Encryption</th>
                <th>OpenVPN</th>
                <th>Wireguard</th>
                <th>Killswitch</th>
                <th>IPV6 Protection</th>
                <th>2FA</th>
                <th>Audits</th>
                <th>1st-Party DNS</th>
                <th>Custom DNS</th>
                <th>Anon Payment</th>
                <th>Anon Registration</th>
                <th>1st-Party Servers</th>
                <th>P2P Friendly</th>
                <th>Multihop</th>
                <th>Port Forwarding</th>
                <th>Helps Privacy Causes</th>
                <th>Affiliate Program</th>
                <th>Total Servers</th>
                <th>Total Countries</th>
                <th>Simultaneous Devices</th>
                <th>Windows Client</th>
                <th>MacOS Client</th>
                <th>Linux Client</th>
                <th>Android Client</th>
                <th>Native F-Droid Client</th>
                <th>iOS Client</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "even-row" : "odd-row"}
                >
                  {/* Columns */}
                  <td>{row.VPN}</td>
                  <td>{renderIcon(row["Outside 14 Eyes"])}</td>
                  <td>{renderIcon(row["Transparency Report"])}</td>
                  <td>{renderIcon(row["Warrant Canary"])}</td>
                  <td>{row["Logging Policy"]}</td>
                  <td>{renderIcon(row["Diskless"])}</td>
                  <td>{renderIcon(row["Open Source Clients"])}</td>
                  <td>{renderIcon(row["No Analytics"])}</td>
                  <td>{row["Max Data Encryption"]}</td>
                  <td>{row["Max Handshake Encryption"]}</td>
                  <td>{renderIcon(row["OpenVPN"])}</td>
                  <td>{renderIcon(row["Wireguard"])}</td>
                  <td>{renderIcon(row["Killswitch"])}</td>
                  <td>{renderIcon(row["IPV6 Protection"])}</td>
                  <td>{renderIcon(row["2FA"])}</td>
                  <td>{renderIcon(row["Audits"])}</td>
                  <td>{renderIcon(row["1st-Party DNS"])}</td>
                  <td>{row["Custom DNS"]}</td>
                  <td>{row["Anon Payment"]}</td>
                  <td>{renderIcon(row["Anon Registration"])}</td>
                  <td>{renderIcon(row["1st-Party Servers"])}</td>
                  <td>{renderIcon(row["P2P Friendly"])}</td>
                  <td>{renderIcon(row["Multihop"])}</td>
                  <td>{renderIcon(row["Port Forwarding"])}</td>
                  <td>{renderIcon(row["Helps Privacy Causes"])}</td>
                  <td>{renderIcon(row["Affiliate Program"])}</td>
                  <td>{row["Total Servers"]}</td>
                  <td>{row["Total Countries"]}</td>
                  <td>{row["Simultaneous Devices"]}</td>
                  <td>{renderIcon(row["Windows Client"])}</td>
                  <td>{renderIcon(row["MacOS Client"])}</td>
                  <td>{row["Linux Client"]}</td>
                  <td>{renderIcon(row["Android Client"])}</td>
                  <td>{renderIcon(row["Native F-Droid Client"])}</td>
                  <td>{renderIcon(row["iOS Client"])}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
