import React, { Component } from "react";
// import { Row, Col } from "react-bootstrap";

export default class Skills extends Component {
  constructor() {
    super();
    this.state = {
      page: "Skills",
      title: "SKILLS",
      desc: ["HTML5", "CSS3", "Javascript", "React", "React Native", "Server Side Rendering", "Fetching API", "Hooks", "Redux"],
    };
  }

  componentDidMount() {
    document.title = `${this.state.page}`;
  }

  render() {
    // const skills = this.state.desc;
    return (
      <>
        <section className="resume-section" id="skills">
          <title>{this.state.page}</title>
          <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>
            <div className="subheading mb-3">Programming Languages & Tools</div>
            <ul className="list-inline dev-icons">
              <li className="list-inline-item">
                <i className="fab fa-html5"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-css3-alt"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-js-square"></i>
              </li>

              <li className="list-inline-item">
                <i className="fab fa-react"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-node-js"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-sass"></i>
              </li>
              <li className="list-inline-item">
                <i className="fab fa-wordpress"></i>
              </li>

              <li className="list-inline-item">
                <i className="fab fa-npm"></i>
              </li>
            </ul>
            <div className="subheading mb-3">Workflow</div>
            <ul className="fa-ul mb-0">
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Front End Development Teams
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Website & Web App, Responsive Design
              </li>
              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Browser Testing & Debugging
              </li>

              <li>
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                Scrum
              </li>
            </ul>
          </div>
        </section>
        <hr className="m-0" />
      </>
    );
  }
}
