export default function Home() {
  return (
    <>
      <section className="hero-banner">
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hello! I am Fadi Mrito. Feel free to explore my work,
          learn about me and view my CV.
        </p>
        <a href="portfolio.html" className="hero-btn">
          See my projects
        </a>
      </section>

      <section className="home-cards">
        <div className="home-card">
          <h2>About me</h2>
          <p>
            I am a passionate software developer that specializes
            within .NET Fullstack development. Learn more about me.
          </p>
          <a href="about.html" className="card-btn">
            Read more
          </a>
        </div>

        <div className="home-card">
          <h2>My CV</h2>
          <p>
            Find out more about my education, work-experience and background.
          </p>
          <a href="cv.html" className="card-btn">
            See CV
          </a>
        </div>
      </section>
    </>
  );
}