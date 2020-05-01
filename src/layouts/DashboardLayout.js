import React from "react";
import Sidebar from "../components/dashboard/Sidebar";
// Dashboard Layout
export default function DashboardLayout(props) {
  return (
    <div>
      <div uk-grid="true">
        <div class="uk-width-1-5 ">
          <Sidebar />
        </div>
        <div class="uk-width-4-5">{props.children}</div>
      </div>
    </div>
  );
}
