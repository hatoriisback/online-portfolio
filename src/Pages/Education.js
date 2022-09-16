import React, { Component } from "react";

export default class Education extends Component {
  constructor(props) {
    super();
    this.state = {
      page: "Education",
      title: "Education",
      desc: [
        {
          campus: "Hacktiv8",
          degree: "Front End Developer Certificate",
          major: "Front End React Development",
          score: "GPA: 3.2",
          year: "July 2022 - September 2022",
        },
        {
          campus: "Hacktiv8",
          degree: "Front End Developer Certificate",
          major: "Front End React Development",
          score: "GPA: 3.2",
          year: "July 2022 - September 2022",
        },
      ],
    };
  }

  componentDidMount() {
    document.title = `${this.state.page}`;
  }

  render() {
    const educations = this.state.desc;
    return (
      <>
        <section class="resume-section" id="education">
          <title>{this.state.page}</title>
          <div class="resume-section-content">
            <h2 class="mb-5">{this.state.title}</h2>

            {educations.map((education, i) => {
              return (
                <div
                  key={i}
                  class="d-flex flex-column flex-md-row justify-content-between mb-5"
                >
                  <div class="flex-grow-1">
                    <h3 class="mb-0">{education.campus}</h3>
                    <div class="subheading mb-3">{education.degree}</div>
                    <div>{education.major}</div>
                    <p>{education.score}</p>
                  </div>
                  <div class="flex-shrink-0">
                    <span class="text-primary">{education.year}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <hr class="m-0" />
      </>
    );
  }
}
