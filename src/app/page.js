"use client";

import React, { useState } from "react";
import VPNTable from "../../components/VPNTable";
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
          <li className="flex items-center hover:bg-gray-200 cursor-pointer">
            <VpnLockIcon fontSize="small" />
            <a href="/VPNs" className="ml-2">
              VPNs
            </a>
          </li>
          <li className="flex items-center hover:bg-gray-200 cursor-pointer">
            <EmailIcon fontSize="small" />
            <a href="/Email-Providers" className="ml-2">
              Email Providers
            </a>
          </li>
          <li className="flex items-center hover:bg-gray-200 cursor-pointer">
            <ContactMailIcon fontSize="small" />
            <span className="ml-2">Email Aliases</span>
          </li>
          <li className="flex items-center hover:bg-gray-200 cursor-pointer">
            <CloudUploadIcon fontSize="small" />
            <span className="ml-2">Storage</span>
          </li>
          <li className="flex items-center hover:bg-gray-200 cursor-pointer">
            <FolderDeleteIcon fontSize="small" />
            <span className="ml-2">Temp Storage</span>
          </li>
          <li className="flex items-center hover:bg-gray-200 cursor-pointer">
            <ChatIcon fontSize="small" />
            <span className="ml-2">Private Messaging</span>
          </li>
          <li className="flex items-center hover:bg-gray-200 cursor-pointer">
            <ForumIcon fontSize="small" />
            <span className="ml-2">Group Messaging</span>
          </li>
        </ul>
      </div>
      <div className="flex-1 z-0 mt-10 ">
        <VPNTable />
      </div>
    </div>
  );
}
