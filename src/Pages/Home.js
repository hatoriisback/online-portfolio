import React, { Component } from "react";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      page: "Home",
      title: "Hendy",
      desc: "This Home Page",
    };
  }
  componentDidMount() {
    document.title = `${this.state.page}`;
  }

  render() {
    return (
      <>
        <section className="resume-section" id="about">
          <title>{this.state.page}</title>
          <div className="resume-section-content">
            <h1 className="mb-0">
              {this.state.title}
              <span className="text-primary">{this.state.name}</span>
            </h1>
            <div className="subheading mb-5">
              <p>PERSONAL THOUGHTS</p>
            </div>
            <p className="lead mb-5">{this.state.desc}</p>
          </div>
        </section>
        <hr className="m-0" />
      </>
    );
  }
}
