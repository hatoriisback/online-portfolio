import React, { Component } from "react";

export default class Experience extends Component {
  constructor() {
    super();
    this.state = {
      page: "Experience",
      title: "Experience",
      desc: [
        {
          position: "Freelancer Search Engine Optimization Specialist (SEO)",
          company: "Pacific Sea BPO Services Inc, Phillipines",
          jobdesk: [
            <ul>
              <li>Analyze Keywords</li>
              <li>Research Keywords</li>
              <li>On-Page Techincal SEO</li>
              <li>SEO Planning Streategy</li>
              <li>SETUP Google Search Console & Analytics</li>
              <li>Link Building</li>
              <li>SEO Content Writer</li>
            </ul>,
          ],
          year: "2022-Present",
        },
        {
          position: "Search Engine Optimization Specialist (SEO)",
          company: "Softmedia Entertainment Solutions Inc, Phillipines",
          jobdesk: [
            <ul>
              <li>Do a Weekly and Monthly Reports</li>
              <li>Ahrefs Analytics</li>
              <li>Research Keywords</li>
              <li>Setup On Page & Off Page Content</li>
              <li>Google Search Console Analytics</li>
              <li>Indexing URL with Indexer Tools</li>
              <li>Link Building</li>
            </ul>,
          ],
          year: "2022-2022",
        },
        {
          position: "Freelancer Search Engine Optimization (SEO)",
          company: "Self Business",
          jobdesk: [
            <ul>
              <li>Ahrefs Backlink Analytics</li>
              <li>SEO Content Writer</li>
              <li>Setup On Page & Off Page Content</li>
              <li>Google Search Console Analytics</li>
              <li>Indexing URL with Indexer Tools</li>
              <li>Working with Link Building</li>
            </ul>,
          ],
          year: "2021-Present",
        },
        {
          position: "Front End Developer",
          company: "Softmedia Entertainment Solutions Inc, Phillipines",
          jobdesk: [
            <ul>
              <li>Code for Web Design with Figma as UI Design</li>
              <li>Code with Laravel Framework</li>
              <li>Work with Laravel, MySql, PHP, CSS3, HTML5, SCSS</li>
            </ul>,
          ],
          year: "2021-2021",
        },
        {
          position: "Freelancer Web Developer",
          company: "Self Business",
          jobdesk: [
            <ul>
              <li>Do a client project</li>
              <li>Maintenance Website</li>
              <li>Working with Laravel, MySQL, HTML5, CSS3, Javascript</li>
            </ul>,
          ],
          year: "2021-present",
        },
        {
          position: "Sales Executive Engineer",
          company: "PT Sinar Abadi (MAXV), Jakarta",
          jobdesk: [
            <ul>
              <li>Approaching new clients</li>
              <li>Following up with current clients</li>
              <li>Introducing the company profile</li>
              <li>
                Sharing the product knowledge: how is it better than others?
              </li>
              <li>Managing order made by clients</li>
              <li>Making a daily report</li>
            </ul>,
          ],
          year: "2018-2019",
        },
        {
          position: "General Manager",
          company: "Rumah Makan Suka Suka, Tobelo",
          jobdesk: [
            <ul>
              <li>Controlling all the restaurant staff</li>
              <li>Monitoring the food supplies</li>
              <li>Scheduling staff meetings</li>
              <li>Think of a way for an incoming compliment</li>
              <li>Handling customer complaints</li>
              <li>Making social media advertisement and brochures</li>
            </ul>,
          ],
          year: "2018-2018",
        },
        {
          position: "Sales Executive",
          company: "Lippo Cikarang, Jakarta",
          jobdesk: [
            <ul>
              <li>
                Selling ideas, services, and product in residential
                neighbourhoods and places of business (Canvassing)
              </li>
              <li>Presenting the company’s product knowledge</li>
              <li>Opening stand at marketing events</li>
              <li>Following up with clients</li>
              <li>Making appointments with clients</li>
              <li>
                Attending and represent the company at marketing exhibition or
                events
              </li>
            </ul>,
          ],
          year: "2017-2017",
        },
        {
          position: "Marketing Role",
          company: "PT Indosurya Finance, Jakarta",
          jobdesk: [
            <ul>
              <li>Collecting number from online and database book number</li>
              <li>
                Follow up with a calls, and set up for an Appointment Meeting
              </li>
              <li>
                Selling ideas, services, and product in residential
                neighbourhoods and places of business (canvassing)
              </li>
              <li>Presenting the company’s product knowledge</li>
              <li>Following the clients’ need up</li>
              <li>
                Negotiate the terms of an agreement and close sales (closing)
              </li>
            </ul>,
          ],
          year: "2014-2015",
        },
        {
          position: "Marketing Sales",
          company: "Dream World Event Organizer, Jakarta",
          jobdesk: [
            <ul>
              <li>
                Maintaining relationships with current clients, build and
                maintain relationships with new clients
              </li>
              <li>Looking for under 17th years old potential customers</li>
              <li>
                Selling ideas, services, and product in residential
                neighbourhoods and places of business (canvassing)
              </li>
              <li>Presenting the company’s product knowledge</li>
              <li>Following up with the clients’ needs</li>
              <li>
                Negotiating the terms of an agreement and close sales (closing)
              </li>
            </ul>,
          ],
          year: "2013-2014",
        },
      ],
    };
  }

  componentDidMount() {
    document.title = `${this.state.page}`;
  }

  render() {
    const experiences = this.state.desc;

    return (
      <>
        <section className="resume-section" id="experience">
          <title>{this.state.title}</title>
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
