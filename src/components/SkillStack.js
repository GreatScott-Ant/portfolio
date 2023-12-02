import React from "react";
import html from "../images/html.svg";
import css from "../images/css.svg";
import vscode from "../images/vscode.svg";
import javascript from "../images/javascript.svg";
import react from "../images/react.svg";
import ruby from "../images/ruby.svg";
import rails from "../images/rails.svg";
import postgresql from "../images/postgresql.svg";

const SkillStack = () => {
  return (
    <div className="stackflex">
      <div className="skillbox">
        <div className="stitle">Skill Stack</div>

        <div className="stack-container">
          <div className="skill-item">
            <img
              alt=""
              width={"45"}
              height={"45"}
              src={html}
              style={{ margin: "20px" }}
            />
            <div>HTML</div>
          </div>
          <div className="skill-item">
            <img
              alt=""
              width={"45"}
              height={"45"}
              src={css}
              style={{ margin: "20px" }}
            />
            <div>CSS</div>
          </div>
          <div className="skill-item">
            <img
              alt=""
              width={"45"}
              height={"45"}
              src={vscode}
              style={{ margin: "20px" }}
            />
            <div>VSCode</div>
          </div>
          <div className="skill-item">
          <img
            alt=""
            width={"45"}
            height={"45"}
            src={javascript}
            style={{ margin: "20px" }}
          />
          <div>Javascript</div>
          </div>
        </div>

        <div className="stack-container">
        <div className="skill-item">
          <img
            alt=""
            width={"45"}
            height={"45"}
            src={react}
            style={{ margin: "20px" }}
          />
          <div>React</div>
          </div>
          <div className="skill-item">
          <img
            alt=""
            width={"45"}
            height={"45"}
            src={ruby}
            style={{ margin: "20px" }}
          />
          <div>Ruby</div>
          </div>
          <div className="skill-item">
          <img
            alt=""
            width={"45"}
            height={"45"}
            src={rails}
            style={{ margin: "20px" }}
          />
          <div>Rails</div>
          </div>
          <div className="skill-item">
          <img
            alt=""
            width={"65"}
            height={"45"}
            src={postgresql}
            style={{ margin: "20px" }}
          />
          <div>PostgreSQL</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillStack;
