import React, { Component } from "react";

export default class Experience extends Component {
  constructor() {
    super();
    this.state = {
      title: "Experience",
      desc: [
        {
          position: "Junior Web Development",
          company: "PT A",
          jobdesk: "Development HTML5",
          year: "2015-2018",
        },
        {
          position: "Junior Laravel Developer",
          company: "PT B",
          jobdesk: "Development CSS3",
          year: "2018-2020",
        },
        {
          position: "Junior React Development",
          company: "PT C",
          jobdesk: "Development Javascript",
          year: "2020-2022",
        },
      ],
    };
  }

  render() {
    const experiences = this.state.desc;
    
    return (
      <>
        <section className="resume-section" id="experience">
          <div className="resume-section-content">
            {experiences.map((experience, i) => {
              <h2 className="mb-5">Experience</h2>;
              return (
                <>
                  <div
                    key={i}
                    className="d-flex flex-column flex-md-row justify-content-between mb-5"
                  >
                    <div className="flex-grow-1">
                      <h3 className="mb-0">{experience.position}</h3>
                      <div className="subheading mb-3">
                        {experience.company}
                      </div>
                      <p>{experience.jobdesk}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="text-primary">{experience.year}</span>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </section>
        <hr class="m-0" />
      </>
    );
  }
}

// <div>
//   <h1>{this.state.title}</h1>
//   <br />
//   {experiences.map((experience, i) => {
//     return (
//       <ul key={i}>
//         <li>{experience.company}</li>
//         <li>{experience.year}</li>
//         <li>{experience.jobdesk}</li>
//       </ul>
//     );
//   })}
// </div>
