import React from "react";

export default function OverviewCamerasTab() {
  let tabDetailStyle = {
    padding: "1rem",
    textAlign: "left",
    border: "1px solid #ECEBEC",
  };
  return (
    <div className="">
      <ul uk-accordion="true">
        <li class="">
          <a
            class="uk-accordion-title bg-white"
            href="#"
            style={{ backgroundImage: "none" }}
          >
            <div className="uk-flex uk-container uk-flex-right">
              <button class="btn cta-btn  rounded ">
                {" "}
                <span className="fas fa-plus mr-2"></span>
                SET UP A NEW CAMERA
              </button>
            </div>
          </a>
        </li>
        <li class="">
          <a
            class="uk-accordion-title bg-white"
            href="#"
            style={tabDetailStyle}
          >
            All Cameras (30)
          </a>
        </li>
        <li>
          <a
            class="uk-accordion-title  bg-white"
            href="#"
            style={tabDetailStyle}
          >
            Active Cameras (0)
          </a>
          <div class="uk-accordion-content">
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              reprehenderit.
            </p>
          </div>
        </li>
        <li class="uk-open">
          <a
            class="uk-accordion-title  bg-white"
            href="#"
            style={tabDetailStyle}
          >
            Inactive Cameras (30)
          </a>
          <div class="uk-accordion-content bg-light p-4">
            <div className="container-fluid">
              <div className="row">
                {[0, 3, 4].map((item) => (
                  <div className="col-lg-4">
                    <div className="card">
                      <div className="card-body">
                        <div class="media">
                          <img
                            src="https://cdn.pixabay.com/photo/2018/08/25/11/36/camera-3629879_960_720.png"
                            class="mr-3 w-25"
                            alt="..."
                          />
                          <div class="media-body">
                            <h5 class="mt-0 h-font">STARLINKS</h5>
                            ID : 37449
                          </div>
                        </div>
                      </div>
                      <div class="card-footer d-flex bg-white">
                        <button class="uk-button uk-margin-small-bottom  uk-width-1-1 text-primary uk-button-default">
                          Assign
                        </button>
                        <button class="uk-button uk-margin-small-bottom uk-width-1-1 text-danger uk-button-default">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </li>
        <li>
          <a
            class="uk-accordion-title  bg-white"
            href="#"
            style={tabDetailStyle}
          >
            Disconnected Cameras (0)
          </a>
          <div class="uk-accordion-content">
            <div className="container-fluid">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              reprehenderit.
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
