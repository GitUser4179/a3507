import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import GitHubProjects from "../components/GithubProjects.jsx";

const projects = [
  {
    id: "rest-api",
    image: project1,
    alt: "Project 1",
    name: "REST-API",
    title: "REST-API",
    description:
      "This project was built using C# and the .NET Framework. It focuses on minimal API design and learning the structure of REST-API functionality.",
  },
  {
    id: "bank-app",
    image: project2,
    alt: "Project 2",
    name: "Bank-app",
    title: "Bank-app",
    description:
      "This project was built using C# and the .NET Framework. During this project i collaborated with 3 other students to create a fully functioning bank application inside the console. I learned how to properly structure, plan and develop a fully functioning application, whilst collaborating with other people in a team.",
  },
  {
    id: "media-converter",
    image: project3,
    alt: "Project 3",
    name: "Media converter",
    title: "Multi-media converter",
    description:
      "This project was built using C# and the .NET Framework. The idea was to create a multi-media converter for x.com. The idea is that you send a link and it fetches the media, and converts it into the file format you would like. Supporting gifs, mp4 and mp3s.",
  },
];

export default function Portfolio({ onOpenModal }) {
  return (
    <>
      <section>
        <h1>Portfolio</h1>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <div className="project" key={project.id}>
              <img src={project.image} alt={project.alt} />
              <h2>{project.name}</h2>

              <button className="info-btn" onClick={() => onOpenModal(project)}>
                More info
              </button>
            </div>
          ))}
        </div>
      </section>

      <GitHubProjects />
    </>
  );
}
