import React, { Component } from "react";

export default class Awards extends Component {
  constructor() {
    super();
    this.state = {
      page: "Awards & Certifications",
      title: "Awards & Certifications",
      awards: [
        " Google Analytics Certified Developer",
        " Google Search Console Certified Developer",
        "Google Ads Certified Developer",
      ],
    };
  }

  componentDidMount() {
    document.title = `${this.state.page}`;
  }

  render() {
    const awards = this.state.awards;
    return (
      <>
        <section class="resume-section" id="awards">
          <title>{}this.state.page</title>
          <div class="resume-section-content">
            <h2 class="mb-5">{this.state.title}</h2>
            {awards.map((award, i) => {
              return (
                <ul key={i} class="fa-ul mb-0">
                  <li>
                    <span class="fa-li">
                      <i class="fas fa-trophy text-warning"></i>
                    </span>
                    {award}
                  </li>
                </ul>
              );
            })}
          </div>
        </section>
        <hr class="m-0" />
      </>
    );
  }
}