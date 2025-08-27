import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
  return (
    <>
      <div className="container ex" id="experience">
        <h1>EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="left">
                  <img src={`/src/assets/${data.imageSrc}`} alt="" style={{
                    width: "100px",         // apne hisaab se size adjust karo
                    height: "100px",
                    backgroundColor: "rgb(40, 47, 97)", // yeh wahi background color lagao jo container ka hai
                    objectFit: "contain",   // image distort na ho
                    border: "none",

                  }} />
                </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  <h4>
                    <span style={{ color: "yellowgreen" }}>
                      {data.startDate} {data.endDate}{" "}
                    </span>{" "}
                    <span style={{ color: "yellow" }}>{data.location}</span>
                  </h4>
                  <h5 style={{ color: "yellow" }}>{data.experiences[0]}</h5>
                  <h5 style={{ color: "yellow" }}>{data.experiences[1]}</h5>
                </div>
              </div>


            </>
          );
        })}
      </div>
    </>
  );
};

export default Experience;