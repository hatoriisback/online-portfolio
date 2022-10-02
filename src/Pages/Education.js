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
          // score: "GPA: 3.2",
          year: "July 2022 - September 2022",
        },
        {
          campus: "Hacktiv8",
          degree: "Basic Fundamental Javascript",
          major: "Basic Fundamental Javascript",
          // score: "GPA: 3.2",
          year: "June 2021 - July 2021",
        },
        {
          campus: "Kampoos.id",
          degree: "Full Stack Developer Certificate",
          major: "Full Stack Development",
          // score: "GPA: 3.5",
          year: "February 2021 - May 2021",
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
        <section className="resume-section" id="education">
          <title>{this.state.page}</title>
          <div className="resume-section-content">
            <h2 className="mb-5">{this.state.title}</h2>

            {educations.map((education, i) => {
              return (
                <div
                  key={i}
                  className="d-flex flex-column flex-md-row justify-content-between mb-5"
                >
                  <div className="flex-grow-1">
                    <h3 className="mb-0">{education.campus}</h3>
                    <div className="subheading mb-3">{education.degree}</div>
                    <div>{education.major}</div>
                    <p>{education.score}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-primary">{education.year}</span>
                  </div>
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
