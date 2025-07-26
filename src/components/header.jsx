import React from "react";

export const Header = (props) => {
  return (
    <header id="header" style={{background: "url('img/hero-codaptix.jpg') center center/cover no-repeat", backgroundColor: '#1a2233', color: '#fff'}}>
      <div className="intro">
        <div className="overlay" style={{background: 'rgba(26,34,51,0.7)'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#contact"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Request a Consultation
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
