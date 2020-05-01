import React from "react";
import ReportIcon from "../../assets/Group 1201.svg";
import EventIcon from "../../assets/Group 1202.svg";
import HomeIcon from "../../assets/Group 1203.svg";
export default function Sidebar() {
  return (
    <div className="bg-white" style={{ minHeight: "100vh" }}>
      <ul
        class="uk-nav-primary text-center uk-child-width-expand uk-nav-parent-icon"
        uk-nav="true"
      >
        <li class="uk-parent">
          <a className="p-4 text-sm" href="#">
            <img src={HomeIcon} className="mr-3" /> Home
          </a>
          <ul class="uk-nav-sub bg-light">
            <li>
              <a className="p-3" href="#">
                Overview
              </a>
            </li>
            <li>
              <a className="p-3" href="#">
                Real Time
              </a>
            </li>
            <li>
              <a className="p-3" href="#">
                Live Feed
              </a>
            </li>
          </ul>
        </li>
        <li class="uk-parent">
          <a className="text-sm p-4" href="#">
            <img src={EventIcon} className="mr-3" /> Events
          </a>
          <ul class="uk-nav-sub bg-light">
            <li>
              <a className="p-3" href="#">
                Overview
              </a>
            </li>
            <li>
              <a className="p-3" href="#">
                Real Time
              </a>
            </li>
            <li>
              <a className="p-3" href="#">
                Live Feed
              </a>
            </li>
          </ul>
        </li>
        <li class="uk-parent">
          <a className="text-sm p-4" href="#">
            <img src={ReportIcon} className="mr-3" /> Reports
          </a>
          <ul class="uk-nav-sub bg-light">
            <li>
              <a className="p-3" href="#">
                Overview
              </a>
            </li>
            <li>
              <a className="p-3" href="#">
                Real Time
              </a>
            </li>
            <li>
              <a className="p-3" href="#">
                Live Feed
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
