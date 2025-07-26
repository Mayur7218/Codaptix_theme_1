import React from "react";
import './header.css'
export const Header = (props) => {
  return (
    <header
      id="header"
      style={{
        background: "url('img/hero-codaptix.jpg') center center/cover no-repeat",
        backgroundColor: "#1a2233",
        color: "#fff",
      }}
    >
      <div className="intro">
        <div
          className="overlay"
         
        >
<div
  className="container_header"
>

            <h1 style={{ fontWeight: "bold" }}>
              {props.data ? props.data.title : "Loading"}
              <span></span>
            </h1>
            <p style={{ fontSize: "16px", marginTop: "20px" }}>
              {props.data ? props.data.paragraph : "Loading"}
            </p>
            <a
              href="#contact"
              className="btn btn-custom btn-lg page-scroll"
              style={{
                marginTop: "30px",
                padding: "12px 24px",
                fontSize: "16px",
              }}
            >
              Request a Consultation
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
