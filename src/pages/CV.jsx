import { Fragment } from "react";
import cv from "../data/cv.json";

export default function CV() {
  return (
    <>
      <section className="hero">
        <h1>Fadi Mrito</h1>
        <p>Fullstack Developer (.NET) | 25 years old</p>
        <p>Email: mrito.fadi@hotmail.com | Location: Sweden</p>
      </section>

      <section>
        <h2>Profile</h2>
        <p>
          Motivated fullstack developer currently studying .NET Framework at
          Chas Academy. Passionate about building scalable web applications with
          clean architecture, and writing maintainable, efficient code. Strong
          interest in backend development, APIs, modern frontend technologies
          and a particular interest in the game development space.
        </p>
      </section>

      <section>
        <h2>Education</h2>
        {cv.education.map((education) => (
          <Fragment key={education.id}>
            <p>
              <strong>{education.title}</strong>
            </p>
            <p>{education.description}</p>
          </Fragment>
        ))}
      </section>

      <section>
        <h2>Projects</h2>
        <p>
          <strong>REST API Project</strong>
        </p>
        <p>
          Built multiple minimal REST-APIs utilizing controllers and using C#
          and .NET Framework. Implemented CRUD operations, routing and basic
          authentication.
        </p>

        <p>
          <strong>Portfolio Website</strong>
        </p>
        <p>
          Designed and developed a responsive multi-page portfolio website using
          HTML, CSS and JavaScript. Includes interactives features and
          persistent theme functionality
        </p>
      </section>

      <section>
        <h2>Work Experience</h2>
        {cv.workExperience.map((work) => (
          <Fragment key={work.id}>
            <p>
              <strong>{work.title}</strong>
            </p>
            <p>{work.description}</p>
          </Fragment>
        ))}
      </section>

      <section>
        <h2>Languages</h2>
        <p>Swedish - Fluent</p>
        <p>English - Fluent</p>
        <div className="print-btn-container">
          <button id="print-cv-btn" onClick={() => window.print()}>
            Print CV
          </button>
        </div>
      </section>
    </>
  );
}
