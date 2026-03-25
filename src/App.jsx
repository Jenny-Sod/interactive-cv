import { useState } from "react";
import Card from "./components/Card";
import About from "./components/About";

function App() {
  const [active, setActive] = useState("");

  return (
    <div className="layout">
      <div className="left">
      <h1>Jenny Söderström</h1>
       <p>Kort summary om dig</p>
    {/* ev bild */}
      </div>

      {/* Cards */}
      <div className="right">
      <div className="container">
        <Card title="Om mig" onClick={() => setActive("about")} />
        <Card title="Arbetslivserfarenhet" onClick={() => setActive("experience")} />
          <Card title="Utbildning" onClick={() => setActive("education")} />
        <Card title="Teknik" onClick={() => setActive("skills")} />
        <Card title="Kontakt" onClick={() => setActive("contact")} />
      </div>
      </div>

      {/* Content */}
      <div>
        {active === "about" && <About />}
        {active === "experience" && <p>Work, work, work</p>}
        {active === "education" && <p>Utbildning</p>}
        {active === "skills" && <p>Vilka tekniker kan jag?</p>}
        {active === "contact" && <p>Call me baby</p>}
      </div>
    </div>
  );
}

export default App;