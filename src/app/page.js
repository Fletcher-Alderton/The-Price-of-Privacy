"use client";


import React, { useState } from "react";
import VPNPage from "../../components/FullPage/VPNPage";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import EmailIcon from "@mui/icons-material/Email";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import FolderDeleteIcon from "@mui/icons-material/FolderDelete";
import ChatIcon from "@mui/icons-material/Chat";
import ForumIcon from "@mui/icons-material/Forum";
import MenuIcon from "@mui/icons-material/Menu";

// ... (previous code)

export default function App() {
  const [visible, setVisible] = useState(false);

  // State to keep track of the active component
  const [activeComponent, setActiveComponent] = useState("VPNs");

  // Function to handle clicking on a list item
  const handleListItemClick = (componentName) => {
    setActiveComponent(componentName);
  };

  // Function to render the active component
  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "VPNs":
        return <VPNPage />;
      case "Email-Providers":
        return <EmailProvidersPage />;
      case "Email-Aliases":
        return <EmailAliasesPage />;
      case "Storage":
        return <StoragePage />;
      case "Temp-Storage":
        return <TempStoragePage />;
      case "Private-Messaging":
        return <PrivateMessagingPage />;
      case "Group-Messaging":
        return <GroupMessagingPage />;
      default:
        return null; // Render nothing if no component matches the activeComponent
    }
  };

  
  return (
    <div className="flex h-screen">
      <MenuIcon
        fontSize="small"
        onClick={() => setVisible(!visible)}
        className="flex absolute mt-2 ml-2 z-50"
      />
      <div
        className={`flex-shrink-0 w-64 bg-gray-100 p-4 flex flex-col justify-center transition-all duration-300 ${
          visible ? "" : "hidden"
        }`}
      >
        <ul className="list-disc list-inside space-y-4">
          <li
            className={`flex items-center hover:bg-gray-200 cursor-pointer ${
              activeComponent === "VPNs" ? "bg-gray-200" : ""
            }`}
            onClick={() => handleListItemClick("VPNs")}
          >
            <VpnLockIcon fontSize="small" />
            <span className="ml-2">VPNs</span>
          </li>
          <li
            className={`flex items-center hover:bg-gray-200 cursor-pointer ${
              activeComponent === "Email-Providers" ? "bg-gray-200" : ""
            }`}
            onClick={() => handleListItemClick("Email-Providers")}
          >
            <EmailIcon fontSize="small" />
            <span className="ml-2">Email Providers</span>
          </li>
          <li
            className={`flex items-center hover:bg-gray-200 cursor-pointer ${
              activeComponent === "Email-Aliases" ? "bg-gray-200" : ""
            }`}
            onClick={() => handleListItemClick("Email-Aliases")}
          >
            <ContactMailIcon fontSize="small" />
            <span className="ml-2">Email Aliases</span>
          </li>
          <li
            className={`flex items-center hover:bg-gray-200 cursor-pointer ${
              activeComponent === "Storage" ? "bg-gray-200" : ""
            }`}
            onClick={() => handleListItemClick("Storage")}
          >
            <CloudUploadIcon fontSize="small" />
            <span className="ml-2">Storage</span>
          </li>
          <li
            className={`flex items-center hover:bg-gray-200 cursor-pointer ${
              activeComponent === "Temp-Storage" ? "bg-gray-200" : ""
            }`}
            onClick={() => handleListItemClick("Temp-Storage")}
          >
            <FolderDeleteIcon fontSize="small" />
            <span className="ml-2">Temp Storage</span>
          </li>
          <li
            className={`flex items-center hover:bg-gray-200 cursor-pointer ${
              activeComponent === "Private-Messaging" ? "bg-gray-200" : ""
            }`}
            onClick={() => handleListItemClick("Private-Messaging")}
          >
            <ChatIcon fontSize="small" />
            <span className="ml-2">Private Messaging</span>
          </li>
          <li
            className={`flex items-center hover:bg-gray-200 cursor-pointer ${
              activeComponent === "Group-Messaging" ? "bg-gray-200" : ""
            }`}
            onClick={() => handleListItemClick("Group-Messaging")}
          >
            <ForumIcon fontSize="small" />
            <span className="ml-2">Group Messaging</span>
          </li>
        </ul>
      </div>
      <div className="flex-1 z-0 mt-10 ">{renderActiveComponent()}</div>
    </div>
  );
}