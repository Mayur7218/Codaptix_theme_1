import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="section-content">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <img src="img/about.jpg" className="img-responsive" alt="About codaptix" />
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <p>{props.data ? props.data.paragraph : "loading..."}</p>
                <h3>Mission</h3>
                <p>{props.data && props.data.Mission ? props.data.Mission : "loading..."}</p>
                <h3>Vision</h3>
                <p>{props.data && props.data.Vision ? props.data.Vision : "loading..."}</p>
                <h3>Values</h3>
                <ul>
                  {props.data && props.data.Values
                    ? props.data.Values.map((v, i) => <li key={i}>{v}</li>)
                    : "loading..."}
                </ul>
                <h3>Our Approach</h3>
                <p>{props.data && props.data.Approach ? props.data.Approach : "loading..."}</p>
                <h3>Why Choose Us?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {props.data
                        ? props.data.Why2.map((d, i) => (
                            <li key={`${d}-${i}`}> {d}</li>
                          ))
                        : "loading"}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
