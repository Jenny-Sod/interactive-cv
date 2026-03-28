import { useState } from "react";
import Card from "./components/Card";
import About from "./components/About";

function App() {
  const [active, setActive] = useState("");
  const [selectedCard, setSelectedCard] = useState(null)

  return (
    <div className="layout">
      <div className="left">
      <h1>Jenny Söderström</h1>
      <div className="summary-box">
       <p>Frontendutvecklare med ett stort intresse för UX och användarvänliga lösningar. Jag drivs av att få saker att kännas intuitiva, snygga och faktiskt roliga att använda. Gillar att testa mig fram, lösa problem och samarbeta för att skapa lösningar som gör skillnad på riktigt.</p>
    {/* ev bild */}
    </div>
      </div>

      {/* Cards */}
      <div className="right">
      <div className="container">
        <Card title="Om mig" onClick={() => setSelectedCard("about")} />
        <Card title="Arbetslivserfarenhet" onClick={() => setSelectedCard("experience")} />
          <Card title="Utbildning" onClick={() => setSelectedCard("education")} />
        <Card title="Teknik" onClick={() => setSelectedCard("skills")} />
        <Card title="Kontakt" onClick={() => setSelectedCard("contact")} />
      </div>
      </div>

      {selectedCard && (
  <div className="modal-overlay" onClick={() => setSelectedCard(null)}>
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      {selectedCard === "about" && <About />}
      {selectedCard === "experience" && <Experience />}
      {selectedCard === "education" && <Education />}
      {selectedCard === "skills" && <Skills />}
      {selectedCard === "contact" && <Contact />}
    </div>
  </div>
)}
    </div>
  );
}

export default App;