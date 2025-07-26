import React, { useState } from "react";
import './Navigation.css'
export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <a
            className="navbar-brand page-scroll"
            href="#page-top"
            style={{
              float: "left",
              fontWeight: 800,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#fff",
            }}
          >
            Codaptix
          </a>
          <button
            type="button"
            className={`navbar-toggle ${isOpen ? "" : "collapsed"}`}
            onClick={handleToggle}
            aria-expanded={isOpen}
            style={{
              float: "right",
              border: "1px solid #fff",
              marginTop: "8px",
            }}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>

        <div
          className={`collapse navbar-collapse ${isOpen ? "in" : ""}`}
          id="navbar"
          style={{
            float: "right",
            backgroundColor: "#1a2233",
            padding: isOpen ? "10px 0" : "0",
          }}
        >
          <ul className="nav navbar-nav navbar-right">
            {["features", "about", "services", "team", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="page-scroll"
                  onClick={() => setIsOpen(false)} // close menu on link click
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
