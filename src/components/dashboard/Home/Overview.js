import React from "react";
import DashboardLayout from "../../../layouts/DashboardLayout";
import CameraIcon from "../../../assets/Icon awesome-video.svg";
import TrafficIcon from "../../../assets/Icon material-people.svg";
import EmotionalIcon from "../../../assets/Icon awesome-smile.svg";
import OverviewTrafficTab from "./commons/OverviewTrafficTab";
import OverviewCamerasTab from "./commons/OverviewCamerasTab";

// Overview component
export default function Overview() {
  return (
    <DashboardLayout>
      {/* TABS NAVIGATIONS */}

      <div className="pr-4">
        <ul
          class="uk-child-width-expand bg-white "
          uk-tab="true"
          uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium"
        >
          <li style={{ paddingLeft: "0px" }}>
            <a
              className="uk-padding d-flex h-font justify-content-center align-item-center"
              href="#"
              style={{ padding: "1rem" }}
            >
              <span className="fas fa-video mr-3 mt-1"></span>{" "}
              <div>Cameras</div>{" "}
            </a>
          </li>
          <li>
            <a
              href="#"
              className="uk-padding d-flex h-font  justify-content-center"
              style={{ padding: "1rem" }}
            >
              <span className="fas fa-user-friends mr-3 mt-1"></span> Traffic
            </a>
          </li>
          <li>
            <a
              className="uk-padding d-flex h-font justify-content-center"
              href="#"
              style={{ padding: "1rem" }}
            >
              <span className="fas fa-smile mr-3 mt-1"></span> Emotional
              Analysis
            </a>
          </li>
        </ul>
        {/* END OF TAB NAVIGATION */}

        <ul className="uk-switcher bg-white p-5">
          {/* CAMERA TAB */}

          <li>
            <OverviewCamerasTab />
          </li>
          {/* TRAFFIC */}
          <li>
            <OverviewTrafficTab />
          </li>
          {/* EMOTIONAL */}
          <li>Coming soon!</li>
        </ul>
      </div>
    </DashboardLayout>
  );
}
