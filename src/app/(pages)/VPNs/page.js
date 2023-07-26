import React from "react";
import VPNTable from "../../../../components/VPNTable";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import EmailIcon from '@mui/icons-material/Email';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import FolderDeleteIcon from '@mui/icons-material/FolderDelete';
import ChatIcon from '@mui/icons-material/Chat';
import ForumIcon from '@mui/icons-material/Forum';

export default function App() {
  return (
    <div className="flex h-screen">
      <div className="flex-shrink-0 w-64 bg-gray-100 p-4 flex flex-col justify-center">
        <ul className="list-disc list-inside space-y-4">
          <li className="flex items-center hover:bg-gray-200 cursor-pointer">
            <VpnLockIcon fontSize="small" />
            <a href="/VPNs" className="ml-2">VPNs</a>
          </li>
          <li className="flex items-center hover:bg-gray-200 cursor-pointer">
            <EmailIcon fontSize="small" />
            <a href="/Email-Providers" className="ml-2">Email Providers</a>
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
      <div className="flex-1">
        <VPNTable />
      </div>
    </div>
  );
}
