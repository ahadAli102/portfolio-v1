import React from 'react';

const Experience: React.FC = () => {
    return (
        <div className="experience padd-15">
            <h3 className="title">Experience</h3>
            <div className="row">
                <div className="timeline-box padd-15">
                    <div className="timeline shadow-dark">
                        <div className="timeline-item">
                            <div className="circle-dot"/>
                            <h4 className="timeline-title">Software Engineer
                                <span className={'timeline-company'}> @ hSenid Mobile Solutions (Pvt) Ltd </span>
                            </h4>
                            <h6 className="timeline-date">
                                <i className="fa fa-calendar"/> 1st April, 2024 to Present
                            </h6>
                            <p className="timeline-text">
                                • Developed a middleware application to integrate TELECOM APIs
                                with applications, enabling
                                seamless data exchange and communication. <br></br>
                                • Configured a monitoring tool to track and analyze application
                                performance in real-time,
                                enhancing system reliability. <br></br>
                                • Enhanced the TPS of legacy applications by 45% through
                                performance optimizations,
                                resulting in faster request processing. <br></br>
                                • Created a web UI for changing database configurations,
                                reducing manual error risks and
                                improving efficiency by 60%. <br></br>
                                • Mentored interns during the development process and performed
                                code reviews. <br></br>
                            </p>
                        </div>
                        <div className="timeline-item">
                            <h4 className="timeline-title">Associate Software Engineer
                                <span className={'timeline-company'}> @ hSenid Mobile Solutions (Pvt) Ltd </span>
                            </h4>
                            <div className="circle-dot"/>
                            <h6 className="timeline-date">
                                <i className="fa fa-calendar"/> 11 January, 2023 to 31 March
                                2024
                            </h6>
                            <p className="timeline-text">
                                • Designed and developed a USSD application for M1 (Singapore),
                                enabling users to seamlessly
                                activate offers and transfer balances, which
                                improved user engagement by 20%. <br/>
                                • Developed a mobile banking solution for RawBank (Congo),
                                supporting banking operations on
                                all mobile phones, resulting in a 100% increase
                                in customer engagement via USSD. <br/>
                                • Upgraded application dependencies, reducing vulnerabilities
                                and enhancing platform
                                security and stability.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
