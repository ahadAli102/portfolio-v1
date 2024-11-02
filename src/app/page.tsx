export default async function Home() {

    return (
        <main>
            <section className="home section" id="home">
                <div className="container">
                    <div className="intro flex flex-col md:flex-row md:items-center md:justify-between md:gap-8">
                        <div className="flex flex-col items-center md:items-center md:w-1/3">
                            <img
                                src="/imgs/alsiam.png"
                                alt="Al Siam Profile"
                                className="shadow-dark"
                            />
                            <div className="social-links">
                                <a href="https://www.facebook.com/profile.php?id=100013020034819" target="_blank">
                                    <i className="fa fa-facebook"/>
                                </a>
                                <a href="https://github.com/ahadAli102" target="_blank">
                                    <i className="fa fa-github"/>
                                </a>
                                <a href="https://www.linkedin.com/in/ahad2001/" target="_blank">
                                    <i className="fa fa-linkedin"/>
                                </a>
                                <a href="https://linkedin.com/in/" target="_blank">
                                    <i className="fa fa-skype"/>
                                </a>
                            </div>
                        </div>
                        <div className="description md:w-2/3">
                            <h1 className="text-2xl font-bold text-left">Md. Ahad Ali</h1>
                            <p className="text-lg font-semibold text-left">Software Engineer</p>
                            <div className="space-y-4 mt-4">
                                <p className="text-justify">
                                    Results-driven Software Engineer with 2 years of hands-on experience 
                                    in backend development and API integration, specializing in Java, 
                                    Kotlin, and Spring frameworks.
                                    Known for designing and optimizing high-performance middleware 
                                    applications, I have a proven track record of enhancing transaction 
                                    processing speeds by 45% and reducing manual errors through 
                                    automated solutions.
                                    Experienced in building scalable USSD and mobile banking applications 
                                    across diverse regions, I have contributed to increased user 
                                    engagement by up to 100% for clients in telecom and finance sectors.
                                    Adept at monitoring and troubleshooting with real-time tools like 
                                    Grafana and skilled in mentoring junior developers, I bring a 
                                    strategic approach to delivering secure, reliable, and efficient 
                                    software solutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
