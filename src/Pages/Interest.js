import React, { Component } from "react";

export default class Interest extends Component {
  constructor() {
    super();
    this.state = {
      title: "INTEREST",
      desc: [
        {
          interested: "Front End Laravel Development",
          reason:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus est eu mi egestas commodo. Nullam ac nunc at magna auctor mattis sit amet a velit. Etiam vehicula elementum ligula, sed scelerisque lacus convallis congue. Nullam nulla nibh, egestas at semper non, finibus sed turpis. Phasellus sit amet turpis gravida.",
        },
        {
          interested: "Front End React Development",
          reason:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus est eu mi egestas commodo. Nullam ac nunc at magna auctor mattis sit amet a velit. Etiam vehicula elementum ligula, sed scelerisque lacus convallis congue. Nullam nulla nibh, egestas at semper non, finibus sed turpis. Phasellus sit amet turpis gravida.",
        },
      ],
    };
  }

  render() {
    const interests = this.state.desc;
    return (
      <>
        <section class="resume-section" id="interests">
          <h2 class="mb-5">{this.state.title}</h2>
          <div class="resume-section-content">
            {interests.map((interest, i) => {
              return (
                <div key={i}>
                  <p>{interest.interested}</p>
                  <p class="mb-0">{interest.reason}</p>
                  <br />
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
