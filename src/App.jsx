import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import CV from "./pages/CV.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Modal from "./components/Modal.jsx";

export default function App() {
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    let typedKeys = "";

    function handleKeyDown(event) {
      typedKeys += event.key;
      typedKeys = typedKeys.slice(-4);

      if (typedKeys === "1337") {
        setModalContent({
          title: "Oh, what a coincidence.",
          description:
            "Who told you about typing those combinations on this site? How peculiar.",
        });
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route
            path="/portfolio"
            element={<Portfolio onOpenModal={setModalContent} />}
          />
        </Routes>

        <Modal content={modalContent} onClose={() => setModalContent(null)} />
      </main>

      <Footer />
    </>
  );
}
