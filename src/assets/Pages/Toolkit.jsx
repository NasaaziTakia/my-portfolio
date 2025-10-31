
import "../CSS/Toolkit.css"
import Navigation from "../Components/Navigation";
import Contact from "./Contact";

function Toolkit() {
  const tools = [
    { name: 'Figma', icon: 'F', color: '#18A7FA' },
    { name: 'Miro', icon: 'M', color: '#18A7FA' },
    { name: 'Balsamiq', icon: 'B', color: '#18A7FA' }
  ];

  const workflow = [
    { step: 'User Research', icon: '🔍' },
    { step: 'Competitor Analysis', icon: '📊' },
    { step: 'Wire Framing', icon: '📝' },
    { step: 'Prototyping', icon: '🎨' },
    { step: 'Usability testing', icon: '🔬' }
  ];

  return (
    <div className="toolkit-page">
      <Navigation />
      <section className="toolkit-section">
        <h2>Design Tool Kit</h2>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className="tool-item">
              <div className="tool-icon" style={{ backgroundColor: tool.color }}>
                {tool.icon}
              </div>
              <p>{tool.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="toolkit-section">
        <h2>My project workflow</h2>
        <div className="workflow-steps">
          {workflow.map((item, index) => (
            <div key={index} className="workflow-step">
              <div className="workflow-icon">{item.icon}</div>
              <h3>{item.step}</h3>
            </div>
          ))}
        </div>
      </section>
      <Contact />
    </div>
  );
}

export default Toolkit;