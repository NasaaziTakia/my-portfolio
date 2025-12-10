import { useParams } from 'react-router-dom';
import "../CSS/ProjectDetails.css";
import Navigation from '../Components/Navigation';

// Import your images
import research from '../Images/research.jpg';
import analysis from '../Images/analysis.jpg';
import ideation from '../Images/ideation.jpg';
import wireframe from '../Images/wireframes.jpg';
import prototype from '../Images/prototype.jpg';
import testing from '../Images/testing.jpg';

function ProjectDetail() {
  const { id } = useParams();

  const projectData = {
    'hospital-management': {
      title: 'Hospital Management System',
      subtitle: 'Digitizing Care for Better Health',
      description: 'City Care Hospital manages patients, staff, and appointments digitally, reducing errors and delays, and delivering faster, better care.',
      purpose: 'The system helps hospitals manage patients, staff, appointments, and schedules in one organized platform. It reduces errors and delays, makes work easier for staff, and ensures patients receive faster, better, and more reliable care.',
      problemSolved: 'Many hospitals in Uganda still use paper-based records, causing lost files, long waits, and poor staff communication. This system digitizes patient records, organizes appointments and schedules, and improves staff communication, enabling faster and better healthcare services.',
      figmaUrl: 'https://www.figma.com/design/Q6RkllXdw8wbqodNdGXlZa/Nasaazi-Takia?node-id=1347-343'
    },
    'stock-sales': {
      title: 'Stock and Sales Management System',
      subtitle: 'Streamlining Furniture Business Operations',
      description: 'Mobile application for Mayondo Furniture Workshop to manage stock and sales efficiently.',
      purpose: 'The system helps furniture businesses track inventory, record sales, and manage customer orders in real-time, reducing manual errors and improving operational efficiency.',
      problemSolved: 'Manual record-keeping led to inventory discrepancies and delayed order processing. This mobile solution provides real-time tracking and simple data visualization for users with low digital literacy.',
      figmaUrl: 'https://www.figma.com/design/YOUR_LINK_HERE'
    }
  };

  const project = projectData[id] || projectData['hospital-management'];

  // FULL ORIGINAL DESCRIPTIONS restored from your screenshot
  const designProcess = [
    {
      title: 'User Research & Empathy',
      description: 'I conducted in-depth user research by interviewing and observing doctors, receptionists, and administrators to understand their daily challenges and workflows. This helped me empathize with their needs and pain points, ensuring the system would address real user problems effectively.',
      image: research
    },
    {
      title: 'Competition Analysis',
      description: 'I analyzed existing hospital management systems to understand the market and identify opportunities for improvement. This research informed design decisions and helped position our system as a more intuitive and user-friendly solution.',
      image: analysis
    },
    {
      title: 'Ideation',
      description: 'I actively participated in ideation sessions with the product team, generating multiple solutions for improving hospital workflows such as patient registration, appointment booking, and staff scheduling. Ideas were refined through discussion and feedback from product managers and developers.',
      image: ideation
    },
    {
      title: 'Wireframes',
      description: 'I created wireframes and low-fidelity interfaces to map out layouts, navigation, and user flows. These early designs allowed quick feedback from stakeholders and iterative improvements before moving to high-fidelity prototypes.',
      image: wireframe
    },
    {
      title: 'Prototypes',
      description: 'I developed polished high-fidelity designs and interactive prototypes that reflected the final look and feel of the system. These were tested with users to ensure usability and effectiveness, and refined continuously based on their feedback.',
      image: prototype
    },
    {
      title: 'Usability Testing & Refinement',
      description: 'I conducted usability testing sessions with hospital staff to identify areas of confusion or friction. Based on the feedback, I refined designs to ensure the system was intuitive, efficient, and aligned with real-world hospital needs.',
      image: testing
    }
  ];

  return (
    <div className="project-detail-page">
      <Navigation />

      <div className="project-header">
        <h1>{project.title}</h1>
        <p className="project-subtitle">{project.subtitle}</p>
        <p>{project.description}</p>
        <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer" className="btn-view-designs">
          View Designs on Figma
        </a>
      <div className="project-section">
        <h2>Project Purpose</h2>
        <p>{project.purpose}</p>
      </div>

      <div className="project-section">
        <h2>Problem Solved</h2>
        <p>{project.problemSolved}</p>
      </div>
      </div>
      <div className="design-process">
        <h2>Design Process</h2>
        <p className="process-subtitle">My end-to-end journey, from insight to impact</p>

        <div className="process-grid">
          {designProcess.map((step, index) => (
            <div key={index} className="process-card">
              <div className="process-image-placeholder">
                <img src={step.image} alt={step.title} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;