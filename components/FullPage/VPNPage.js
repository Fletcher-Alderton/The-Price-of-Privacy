"use client";

import React, { useEffect, useState } from "react";
import VPNTable from "../Tables/VPNTable";
import MarkdownRenderer from "../MardownRenderer/MarkdownRenderer";
import "../MardownRenderer/MarkdownRenderer.css";

export default function VPNPage() {
  return (
    <>
      <div className="flex-1 z-0 mt-6 mb-2">
        <VPNTable />
      </div>
      <MarkdownRenderer filePath="/VPNinfo.md" className="ml-10"/>
    </>
  );
}
