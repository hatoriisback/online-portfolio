import React, { Component } from "react";

export default class Awards extends Component {
  constructor() {
    super();
    this.state = {
      page: "Awards & Certifications",
      title: "Awards & Certifications",
      awards: [" FullStack Laravel Certified", " Frontend React & React Native Certified"],
    };
  }

  componentDidMount() {
    document.title = `${this.state.page}`;
  }

  render() {
    const awards = this.state.awards;
    return (
      <>
        <section className="resume-section" id="awards">
          <title>{}this.state.page</title>
          <div className="resume-section-content">
            <h2 className="mb-5">{this.state.title}</h2>
            {awards.map((award, i) => {
              return (
                <ul key={i} className="fa-ul mb-0">
                  <li>
                    <h6>
                      <span className="fa-li">
                        <i className="fas fa-trophy text-warning"></i>
                      </span>
                      {award}
                    </h6>
                  </li>
                </ul>
              );
            })}
          </div>
        </section>
        <hr className="m-0" />
      </>
    );
  }
}
