import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "About",
      title: "About",
      name: "Hendy",
      city: "Jakarta, Indonesia",
      desc: "THIS IS ABOUT PAGE",
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
              {this.state.city}
              <a href="mailto:hendy.findme@gmail.com">
                {" "}
                hendy.findme@gmail.com
              </a>
            </div>
            <p className="lead mb-5">
              I am a Front End Developer and now also in SEO Specialist
              position. I’m passionate about computer and the internet. I can
              speak English, Indonesian, and Hakka (Traditional Chinese). I am
              willing to learn new things, especially about anything related to
              technology and code stuff. Moreover, I always pay attention to
              appearance and also energetic.
              <br/><br />
              <q>I will never stop learning.</q>
            </p>
              <br />
            <div className="social-icons">
              <a
                className="social-icon"
                href="https://www.linkedin.com/in/hendy-hen/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="social-icon"
                href="https://github.com/hatoriisback/"
                target="_blank"
                rel="noreferrer"
              >
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
