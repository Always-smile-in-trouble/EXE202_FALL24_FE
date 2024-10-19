import React from "react";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
function MemberShip2() {
  return (
    <div className="maincontainer">
      <div className="container">
        <div className="text-center flex justify-center">
          <div className="nav price-tabs flex justify-evenly" role="tablist">
            <a
              className="nav-link active"
              href="#yearly"
              role="tab"
              data-toggle="tab"
            >
              Yearly
            </a>
            <a
              className="nav-link"
              href="#monthly"
              role="tab"
              data-toggle="tab"
            >
              Monthly
            </a>
          </div>
        </div>
        <div
          className="tab-content wow fadeIn mt-4"
          style={{ visibility: "visible", animationName: "fadeIn" }}
        >
          <div
            role="tabpanel"
            className="tab-pane fade show active"
            id="yearly"
          >
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4 mb-30">
                <div className="price-item text-center">
                  <div className="price-top">
                    <h4>Personal</h4>
                    <h2 className="mb-0">
                      <sup>$</sup>99
                    </h2>
                    <span className="text-capitalize">per year</span>
                  </div>
                  <div className="price-content">
                    <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Eget erovtiu faucid</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Cras justo odio</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Morbi leo risus</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span>Porta consectetur ac</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span> Vestibulum at eros</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span>Adipisci atque beatae</span>
                      </li>
                    </ul>
                    <a href="#" className="btn btn-custom">
                      Buy now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-30">
                <div className="price-item text-center popular">
                  <div className="price-top">
                    <h4>Business</h4>
                    <h2 className="mb-0">
                      <sup>$</sup>299
                    </h2>
                    <span className="text-capitalize">per year</span>
                  </div>
                  <div className="price-content">
                    <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Eget erovtiu faucid</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Cras justo odio</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Morbi leo risus</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span>Porta consectetur ac</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span> Vestibulum at eros</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span>Adipisci atque beatae</span>
                      </li>
                    </ul>
                    <a href="#" className="btn btn-custom btn-light">
                      Buy now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-30">
                <div className="price-item text-center">
                  <div className="price-top">
                    <h4>Enterprise</h4>
                    <h2 className="mb-0">
                      <sup>$</sup>399
                    </h2>
                    <span className="text-capitalize">per year</span>
                  </div>
                  <div className="price-content">
                    <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Eget erovtiu faucid</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Cras justo odio</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Morbi leo risus</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span>Porta consectetur ac</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span> Vestibulum at eros</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span>Adipisci atque beatae</span>
                      </li>
                    </ul>
                    <a href="#" className="btn btn-custom">
                      Buy now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div role="tabpanel" className="tab-pane fade" id="monthly">
            <div className="row justify-content-center">
              <div className="col-md-6 col-lg-4 mb-30">
                <div className="price-item text-center">
                  <div className="price-top">
                    <h4>Personal</h4>
                    <h2 className="mb-0">
                      <sup>$</sup>29
                    </h2>
                    <span className="text-capitalize">per month</span>
                  </div>
                  <div className="price-content">
                    <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Eget erovtiu faucid</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Cras justo odio</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Morbi leo risus</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span>Porta consectetur ac</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span> Vestibulum at eros</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span>Adipisci atque beatae</span>
                      </li>
                    </ul>
                    <a href="#" className="btn btn-custom">
                      Buy now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-30">
                <div className="price-item text-center popular">
                  <div className="price-top">
                    <h4>Business</h4>
                    <h2 className="mb-0">
                      <sup>$</sup>59
                    </h2>
                    <span className="text-capitalize">per month</span>
                  </div>
                  <div className="price-content">
                    <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Eget erovtiu faucid</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Cras justo odio</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Morbi leo risus</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span>Porta consectetur ac</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span> Vestibulum at eros</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span>Adipisci atque beatae</span>
                      </li>
                    </ul>
                    <a href="#" className="btn btn-custom btn-light">
                      Buy now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 mb-30">
                <div className="price-item text-center">
                  <div className="price-top">
                    <h4>Enterprise</h4>
                    <h2 className="mb-0">
                      <sup>$</sup>99
                    </h2>
                    <span className="text-capitalize">per month</span>
                  </div>
                  <div className="price-content">
                    <ul className="border-bottom mb-30 mt-md-4 pb-3 text-left">
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Eget erovtiu faucid</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Cras justo odio</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-check mr-2"></i>
                        <span className="c-black">Morbi leo risus</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span>Porta consectetur ac</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span> Vestibulum at eros</span>
                      </li>
                      <li>
                        <i className="zmdi zmdi-close mr-2"></i>
                        <span>Adipisci atque beatae</span>
                      </li>
                    </ul>
                    <a href="#" className="btn btn-custom">
                      Buy now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberShip2;
