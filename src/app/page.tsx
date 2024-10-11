
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/alsiam.png"
              alt="Al Siam Profile"
              className="shadow-dark"
            />
            <h1>Md. Ahad Ali</h1>
            <p>Software Engineer</p>
            <div className="social-links">
              {/*<a href="https://twitter.com/" target="_blank">
                <i className="fa fa-twitter" />
              </a>*/}
              <a href="https://www.facebook.com/profile.php?id=100013020034819" target="_blank">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://github.com/ahadAli102" target="_blank">
                <i className="fa fa-github" />
              </a>
              {/*<a href="https://instagram.com/" target="_blank">
                <i className="fa fa-instagram" />
              </a>*/}
              <a href="https://www.linkedin.com/in/ahad2001/" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
              <a href="https://linkedin.com/in/" target="_blank">
                <i className="fa fa-skype" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
