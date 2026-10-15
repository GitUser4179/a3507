import { useEffect, useState } from "react";

export default function Footer() {
  const [easterTheme, setEasterTheme] = useState(
    () => localStorage.getItem("easterTheme") === "enabled",
  );

  useEffect(() => {
    document.documentElement.classList.toggle("easter-theme", easterTheme);

    if (easterTheme) {
      localStorage.setItem("easterTheme", "enabled");
    } else {
      localStorage.removeItem("easterTheme");
    }
  }, [easterTheme]);

  return (
    <footer onClick={() => setEasterTheme((current) => !current)}>
      <p> © 2026 Fadi Mrito </p>
    </footer>
  );
}
