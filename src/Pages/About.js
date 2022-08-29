import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "About",
      name: "Hendy",
      city: "Jakarta, Indonesia",
      desc: "THIS IS ABOUT PAGE",
    };
  }

  render() {
    return (
      <>
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              {this.state.title}
              <span className="text-primary">{this.state.name}</span>
            </h1>
            <div className="subheading mb-5">
              {this.state.city}
              <a href="mailto:hendy.findme@gmail.com">
                {" "}
                hendy.findme@gmail.com
              </a>
            </div>
            <p className="lead mb-5">{this.state.desc}</p>
            <div className="social-icons">
              <a className="social-icon" href="#!">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="social-icon" href="#!">
                <i className="fab fa-github"></i>
              </a>
              <a className="social-icon" href="#!">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="social-icon" href="#!">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </section>
        <hr class="m-0" />
      </>
    );
  }
}
