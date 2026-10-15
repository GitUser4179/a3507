import { useEffect, useState } from "react";

export default function GitHubProjects() {
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchRepositories() {
      try {
        const allRepositories = [];
        let page = 1;

        while (true) {
          const response = await fetch(
            `https://api.github.com/users/GitUser4179/repos?type=owner&sort=updated&per_page=100&page=${page}`,
            { signal: controller.signal },
          );

          if (!response.ok) {
            throw new Error(
              `Could not load GitHub projects (HTTP ${response.status}).`,
            );
          }

          const data = await response.json();
          allRepositories.push(...data);

          if (data.length < 100) {
            break;
          }

          page += 1;
        }

        if (!controller.signal.aborted) {
          setRepositories(allRepositories);
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          setError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchRepositories();

    return () => controller.abort();
  }, []);

  return (
    <section>
      <h2>GitHub Projects</h2>

      {loading && <p role="status">Loading GitHub projects...</p>}

      {error && <p role="alert">{error}</p>}

      {!loading && !error && repositories.length === 0 && (
        <p>No public GitHub projects found.</p>
      )}

      {!loading && !error && (
        <div className="portfolio-grid">
          {repositories.map((repository) => (
            <div className="project" key={repository.id}>
              <h2>{repository.name}</h2>
              <p>{repository.description || "No description provided."}</p>
              <a
                href={repository.html_url}
                className="card-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
