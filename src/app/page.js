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
      {/* Sidebar when hidden Menu opener */}
      {!visible && (
        <div
          className="cursor-pointer absolute mt-4 ml-4 z-50"
          onClick={() => setVisible(!visible)}
        >
          <img src="./show_sidebar_horizontal_icon.svg" />
        </div>
      )}
      {/* Sidebar when visible Menu opener */}
      {visible && (
        <div
          className="cursor-pointer absolute mt-4 ml-40 z-50"
          onClick={() => setVisible(!visible)}
        >
          <img src="./hide_sidebar_horizontal_icon.svg" />
        </div>
      )}
<div className="flex justify-end h-screen">
  <div>
    <h1>Click on a service to add it to your cart</h1>
  </div>
</div>



      {/* Sidebar List */}
      {visible && (
        <div className="fixed w-50 h-full flex flex-col justify-between bg-gray-100 z-10 transition-all">
          <div>
            <ul className="space-y-4 mt-16 -ml-6 mr-2">
              <li
                className={`flex-1 items-left hover:bg-gray-200 cursor-pointer p-2 rounded-md ${
                  activeComponent === "VPNs" ? "bg-gray-200" : ""
                }`}
                onClick={() => handleListItemClick("VPNs")}
              >
                <VpnLockIcon fontSize="small" />
                <span className="ml-2">VPNs</span>
              </li>
              <li
                className={`flex-1 items-left hover:bg-gray-200 cursor-pointer p-2 rounded-md ${
                  activeComponent === "Email-Providers" ? "bg-gray-200" : ""
                } `}
                onClick={() => handleListItemClick("Email-Providers")}
              >
                <EmailIcon fontSize="small" />
                <span className="ml-2">Email Providers</span>
              </li>
              <li
                className={`flex-1 items-left hover:bg-gray-200 cursor-pointer p-2 rounded-md ${
                  activeComponent === "Email-Aliases" ? "bg-gray-200" : ""
                }`}
                onClick={() => handleListItemClick("Email-Aliases")}
              >
                <ContactMailIcon fontSize="small" />
                <span className="ml-2">Email Aliases</span>
              </li>
              <li
                className={`flex-1 items-left hover:bg-gray-200 cursor-pointer p-2 rounded-md ${
                  activeComponent === "Storage" ? "bg-gray-200" : ""
                }`}
                onClick={() => handleListItemClick("Storage")}
              >
                <CloudUploadIcon fontSize="small" />
                <span className="ml-2">Storage</span>
              </li>
              <li
                className={`flex-1 items-left hover:bg-gray-200 cursor-pointer p-2 rounded-md ${
                  activeComponent === "Temp-Storage" ? "bg-gray-200" : ""
                }`}
                onClick={() => handleListItemClick("Temp-Storage")}
              >
                <FolderDeleteIcon fontSize="small" />
                <span className="ml-2">Temp Storage</span>
              </li>
              <li
                className={`flex-1 items-left hover:bg-gray-200 cursor-pointer p-2 rounded-md ${
                  activeComponent === "Private-Messaging" ? "bg-gray-200" : ""
                }`}
                onClick={() => handleListItemClick("Private-Messaging")}
              >
                <ChatIcon fontSize="small" />
                <span className="ml-2">Private Messaging</span>
              </li>
              <li
                className={`flex-1 items-left hover:bg-gray-200 cursor-pointer p-2 rounded-md ${
                  activeComponent === "Group-Messaging" ? "bg-gray-200" : ""
                }`}
                onClick={() => handleListItemClick("Group-Messaging")}
              >
                <ForumIcon fontSize="small" />
                <span className="ml-2">Group Messaging</span>
              </li>
            </ul>
          </div>
          {/* Sidebar Cart */}
          <div className="bg-gray-300 rounded-lg p-6 mb-2 ml-2 mr-2">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold">$100</span>
            </div>
            <button className="bg-black text-white rounded px-4 py-2 w-full">
              Open Cart
            </button>
          </div>
        </div>
      )}
      <div
        className={`flex-1 z-0 mt-10 overflow-y-auto p-4 ${
          visible ? "ml-48" : ""
        }`}
      >
        {renderActiveComponent()}
      </div>
    </div>
  );
}
