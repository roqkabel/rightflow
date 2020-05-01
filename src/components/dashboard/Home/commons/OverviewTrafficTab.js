import React from "react";

export default function OverviewTrafficTab() {
  // Font Style
  let fontBold = { fontSize: "24px", fontWeight: "bold" };

  //   Unique people count
  let peopleCount = [
    {
      gender: "Male",
      icon: "fas fa-male fa-2x mr-3 text-primary align-self-center",
      total: 400,
    },
    {
      gender: "Femal",
      icon: "fas fa-female fa-2x mr-3 text-warning align-self-center",
      total: 400,
    },
    {
      gender: "UnIdentified",
      icon: "fas fa-male fa-2x mr-3 text-danger align-self-center",
      total: 400,
    },
  ];

  let ageDistributionSet = [
    {
      range: "0 - 24yrs",
      totalPercentage: 30,
      male: 20,
      female: 5,
      unidentified: 5,
    },
    {
      range: "25 - 39yrs",
      totalPercentage: 30,
      male: 20,
      female: 5,
      unidentified: 5,
    },
    {
      range: "25 - 39yrs",
      totalPercentage: 30,
      male: 20,
      female: 5,
      unidentified: 5,
    },
    {
      range: "60+ yrs",
      totalPercentage: 40,
      male: 20,
      female: 10,
      unidentified: 10,
    },
  ];
  return (
    <div>
      {/* Traffic SORTS OPTIONS */}
      <div className="clearfix">
        <div className="float-left">
          <div class="form-group">
            <select
              class="form-control shadow-none"
              id="exampleFormControlSelect1"
            >
              <option selected="true">All Cameras</option>
            </select>
          </div>
        </div>
        <div className="float-right">
          <div className="d-flex">
            <div className="form-group mr-4">
              <select
                className="form-control shadow-none"
                id="exampleFormControlSelect1"
              >
                <option selected="true">Last 2 hours</option>
              </select>
            </div>
            <div className="form-group">
              <select
                className="form-control shadow-none"
                id="exampleFormControlSelect1"
              >
                <option selected="true">Monthly</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {/* END OF SORT */}

      {/* CONTENT */}
      <br />

      {/* TOTAL DISTRIBUTION */}
      <div className="row ">
        <div className="col-lg-5 ">
          <div class="card h-font">
            <div class="card-body">
              <div class="media">
                <span className="fas fa-male fa-4x mr-3 "></span>
                <div class="media-body">
                  <h5 class="mt-0">
                    <span className="h-font " style={fontBold}>
                      {" "}
                      Overall
                    </span>{" "}
                    <br /> Total Distribution
                  </h5>
                </div>
                <span class="text-primary float-right" style={fontBold}>
                  13.6K
                </span>
              </div>
            </div>
          </div>
          <div className="ml-4 p-2">
            <div className="border-left p-2">
              {peopleCount.map((item) => (
                <div class="card h-font mb-2">
                  <div class="card-body p-2">
                    <div class="media">
                      <span className={item.icon}></span>
                      <div class="media-body">
                        <h5 class="mt-0">
                          <span className="text-md h-font"> {item.gender}</span>{" "}
                          <br /> Total
                        </h5>
                      </div>
                      <span class="text-primary float-right" style={fontBold}>
                        400
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* UNIQUE PEOPLE COUNT */}
        <div className="col-lg-7 pl-5 border-left">
          {" "}
          <div class="card">
            <div class="card-header bg-white h-font" style={fontBold}>
              Unique people count
            </div>
            <div className="card-body">
              <ul class="list-group list-group-flush">
                {peopleCount.map((item) => (
                  <li class="list-group-item ">
                    <div class="media">
                      <span className={item.icon}></span>
                      <div class="media-body">
                        <h5 class="mt-0">
                          <span className="text-md"> {item.gender}</span> <br />{" "}
                          Total
                        </h5>
                      </div>
                      <span class="text-primary float-right" style={fontBold}>
                        400
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* AGE DISTRIBUTION RATIO */}

      <h3 className="h-font" style={fontBold}>
        Age Distribution Ration
      </h3>
      <div className="row">
        {ageDistributionSet.map((set) => (
          <div className="col-lg-3">
            <ul class="uk-list w-100">
              <li>
                {set.range}{" "}
                <span className="float-right text-primary">
                  {set.totalPercentage}%
                </span>
              </li>
              <li>
                <div class="progress" style={{ height: "10px" }}>
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "30%" }}
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </li>
              <li>
                {" "}
                <span className="font-weight-bold text-sm">MALE</span>{" "}
                <span className="float-right text-primary">20%</span>
              </li>
              <li>
                {" "}
                <span className="font-weight-bold text-sm">FEMALE</span>{" "}
                <span className="float-right text-primary">5%</span>
              </li>
              <li>
                {" "}
                <span className="font-weight-bold text-sm">
                  UNIDENTIFIED
                </span>{" "}
                <span className="float-right text-primary">5%</span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
