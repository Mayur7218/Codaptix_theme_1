import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="section-content">
          <div className="section-title">
            <h2>Meet the Team</h2>
            <p>
              Our leadership team brings together deep expertise in software engineering, product strategy, and client success. Get to know the people behind codaptix.
            </p>
          </div>
          <div className="team-list">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="team-card">
                    <div className="thumbnail">
                      <img src={d.img} alt={d.name} className="team-img" />
                      <div className="caption">
                        <h4>{d.name}</h4>
                        <p className="job-title">{d.job}</p>
                        <p className="bio">{d.bio}</p>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    </div>
  );
};
