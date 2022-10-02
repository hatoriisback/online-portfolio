import React, { Component } from "react";

export default class Interest extends Component {
  constructor() {
    super();
    this.state = {
      page: "Interest",
      title: "INTEREST",
      desc: [
        {
          interested: "Program Development",
          reason: "Hi! I like learning and would like to explore any program language if needed. Cause program languages are unique and makes me want to know more and more.",
        },
        {
          interested: "Hardware, Software, and System Stuff",
          reason: "This is my another hobby of hardwaring stuff. I like to fix any of electronic around me, especially any of things that related about Computer.",
        },
      ],
    };
  }

  componentDidMount() {
    document.title = `${this.state.page}`;
  }

  render() {
    const interests = this.state.desc;
    return (
      <>
        <section className="resume-section" id="interests">
          <title>{this.state.page}</title>
          <h2 className="mb-5">{this.state.title}</h2>
          <div className="resume-section-content">
            {interests.map((interest, i) => {
              return (
                <div key={i} className="d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="flex-grow-1">
                    <h3 className="mb-0">{interest.interested}</h3>
                    <p className="mb-0">{interest.reason}</p>
                  </div>
                  <br />
                </div>
              );
            })}
          </div>
        </section>
        <hr className="m-0" />
      </>
    );
  }
}
