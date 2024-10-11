import type { NextPage } from "next";
import Skills from "@/components/body/Skills";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Ahad Ali a <span>Software Engineer</span>
                  </h2>
                  <p>
                    I hold a bachelor degree in Computer Science and Engineering and have been working since January 2023 at a
                    multinational company based in Singapore. Proficient in software engineering, I am a quick learner who enjoys
                    exploring new technologies. I contribute effectively to team projects and strive to stay ahead of industry trends.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>http://localhost:3000/</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>linkonahad10@email.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>B. Sc. in CSE</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+88 01551058902</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Location : <span>Dhaka, Bangladesh</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Open for Work : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                          href="/assets/docs/resume.pdf"
                          target="_target"
                          className="btn"
                      >
                        Download CV
                      </a>
                      <a
                          href="#contact"
                          data-section-index={0}
                          className="btn hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot"/>
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar"/> 2019 to 2023
                          </h6>
                          <h4 className="timeline-title">
                            Computer Science and Engineering
                          </h4>
                          <p className="timeline-text">
                            From January, 2019 I started my journey to be a Software Engineer on Daffodil International University and finished March 2023.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2016 to 2018
                          </h6>
                          <h4 className="timeline-title">
                            Higher Secondary Certificate
                          </h4>
                          <p className="timeline-text">
                            In 2018 I passed HSC Exam from Science Group. My college name was Government Shahid Sohrawardi College.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 1st April, 2024 to Present
                          </h6>
                          <h4 className="timeline-title">Software Engineer </h4>
                          <p className="timeline-text">
                            From 2018 I am woking on Graphics Design. The
                            software I use Photoshop, Illustrator for Graphics
                            design.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar"/> 11 January, 2023 to 31 March 2024 at
                          </h6>
                          <h4 className="timeline-title">Associate Software Engineer</h4>
                          <p className="timeline-text">
                            Since 2020 I started to learn Coding. I have learn
                            Html, Css, Sass, JavaScript, Bootstrap. Now I am a
                            Professional Web Designer..
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
