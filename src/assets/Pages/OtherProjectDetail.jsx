import "../CSS/ProjectDetails.css";
import Navigation from '../Components/Navigation';

function OtherProjectDetail() {
  const project = {
    title: 'Stock and Sales Management system',
    subtitle: 'Streamlining Furniture Business Operations',
    description: 'Mayondo Wood and Furniture is a Ugandan company that sells wood products and produces custom furniture.',
    purpose: 'This project involves creating a mobile app to streamline these operations, allowing attendants and managers to track stock, record sales, generate receipts, and manage deliveries efficiently.',
    problemSolved: 'Currently, manual stock, sales, and delivery processes cause errors and delays.',
    figmaUrl: 'https://www.figma.com/design/YOUR_STOCK_SALES_DESIGN_URL',
    keyFeatures: [
      'Stock Management: Allows attendants to add, update, and view stock levels in real time',
      'Sales Recording: Enables attendants to record each sale quickly, including product name, quantity, price, and payment method',
      'Receipt Generation: Automatically generates detailed receipts showing customer name, items purchased, total cost, and date of transaction',
      'Transport Surcharge Automation: Automatically calculates and adds a 5% surcharge for customers requesting delivery services'
    ],
    designApproach: 'A user-centered and iterative process focused on functionality, usability, and scalability. It began with gathering user and system requirements, followed by creating visual models and prototypes to define structure and flow.',
    myRoles: 'UX Designer, conducting research, creating wireframes, developing prototypes, and performing usability testing.'
  };

  return (
    <div className="project-detail-page pdf-layout">
      <Navigation />
      
      <div className="project-header">
        <h1>{project.title}</h1>
        <p className="project-subtitle">{project.subtitle}</p>
        <p>{project.description}</p>
        <a 
          href={project.figmaUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn-view-designs"
        >
          View Designs
        </a>
      </div>

      <div className="pdf-section">
        <h2>Project Overview</h2>
        <p>{project.description}</p>
      </div>

      <div className="pdf-section">
        <h2>Project Objective</h2>
        <p>{project.purpose}</p>
      </div>

      <div className="pdf-section">
        <h2>Problem Solved</h2>
        <p>{project.problemSolved}</p>
      </div>

      <div className="pdf-section">
        <h2>Key Features</h2>
        <ul>
          {project.keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="pdf-section">
        <h2>Design Approach</h2>
        <p>{project.designApproach}</p>
      </div>

      <div className="pdf-section">
        <h2>My Roles</h2>
        <p>{project.myRoles}</p>
      </div>

      <div className="pdf-section">
        <h2>Design Thinking Process</h2>
        <div className="process-flow">
          <div className="process-step">
            <h3>Empathize</h3>
            <p>Conducted user interviews and observations to understand user needs and pain points.</p>
          </div>
          <div className="process-step">
            <h3>Define</h3>
            <p>Created user personas and problem statements based on research insights.</p>
          </div>
          <div className="process-step">
            <h3>Ideate</h3>
            <p>Brainstormed solutions and created initial sketches and wireframes.</p>
          </div>
          <div className="process-step">
            <h3>Design</h3>
            <p>Developed high-fidelity designs and interactive prototypes.</p>
          </div>
          <div className="process-step">
            <h3>Usability Testing</h3>
            <p>Conducted testing sessions and refined the design based on feedback.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtherProjectDetail;