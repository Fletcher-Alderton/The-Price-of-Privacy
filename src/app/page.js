"use client";

import React, { useState } from 'react';
import VPNTable from '../../components/VPNTable';

export default function App() {

  return (
    <>
    <div>
    <ul class="list-disc list-inside">
  <li class="flex items-center my-1">
    <span class="material-icons">vpn_key</span>
    <span class="ml-2">VPNs</span>
  </li>
  <li class="flex items-center my-1">
    <span class="material-icons">email</span>
    <span class="ml-2">Email Providers</span>
  </li>
  <li class="flex items-center my-1">
    <span class="material-icons">alternate_email</span>
    <span class="ml-2">Email Aliases</span>
  </li>
  <li class="flex items-center my-1">
    <span class="material-icons">cloud</span>
    <span class="ml-2">Storage</span>
  </li>
  <li class="flex items-center my-1">
    <span class="material-icons">delete_outline</span>
    <span class="ml-2">Temp Storage</span>
  </li>
  <li class="flex items-center my-1">
    <span class="material-icons">message</span>
    <span class="ml-2">Private Messaging</span>
  </li>
  <li class="flex items-center my-1">
    <span class="material-icons">group</span>
    <span class="ml-2">Group Messaging</span>
  </li>
</ul>
    </div>
    <div>
        <VPNTable />
      </div>
      </>
  );
}
