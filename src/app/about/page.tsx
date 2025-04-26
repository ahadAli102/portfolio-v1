'use client'
import Skills from "@/components/body/Skills";
import Experience from "@/components/body/Experience";
import Link from "next/link";
import React from "react";

const About: React.FC = () => {
    const [origin, setOrigin] = React.useState('');

    React.useEffect(() => {
        setOrigin(window.location.origin);
    }, []);

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
                                        I hold a bachelor degree in Computer Science and Engineering and have been
                                        working since January
                                        2023 at a
                                        multinational company based in Singapore. Proficient in software engineering, I
                                        am a quick learner
                                        who enjoys
                                        exploring new technologies. I contribute effectively to team projects and strive
                                        to stay ahead of
                                        industry trends.
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="personal-info padd-15">
                                    <div className="row">
                                        <div className="info-item padd-15">
                                            <p>
                                                Website : <span>{origin}</span>
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
                                            <Link className="btn" href="/resume">Download CV</Link>
                                            <Link className="btn hire-me" href="/contact">Hire Me</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={'row mt-5'}>
                                <Skills/>
                            </div>


                            <div className={'row'}>
                                <Experience />
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
                                                        From January, 2019 I started my journey to be a Software
                                                        Engineer on Daffodil International
                                                        University and finished March 2023.
                                                    </p>
                                                </div>
                                                {/* Timeline Item end */}
                                                {/* Timeline Item */}
                                                <div className="timeline-item">
                                                    <div className="circle-dot"/>
                                                    <h6 className="timeline-date">
                                                        <i className="fa fa-calendar"/> 2016 to 2018
                                                    </h6>
                                                    <h4 className="timeline-title">
                                                        Higher Secondary Certificate
                                                    </h4>
                                                    <p className="timeline-text">
                                                        In 2018 I passed HSC Exam from Science Group. My college name
                                                        was Government Shahid
                                                        Sohrawardi College.
                                                    </p>
                                                </div>
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
