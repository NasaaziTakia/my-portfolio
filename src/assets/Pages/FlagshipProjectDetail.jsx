import "../CSS/ProjectDetails.css";
import Navigation from '../Components/Navigation';

function FlagshipProjectDetail() {
  const project = {
    title: 'Hospital Management system',
    subtitle: 'Digitizing Care for Better Health',
    description: 'City Care Hospital manages patients, staff, and appointments digitally, reducing errors and delays, and delivering faster, better care.',
    purpose: 'The system helps hospitals manage patients, staff, appointments, and schedules in one organized platform. It reduces errors and delays, makes work easier for staff, and ensures patients receive faster, better, and more reliable care.',
    problemSolved: 'Many hospitals in Uganda still use paper-based records, causing lost files, long waits, and poor staff communication. This system digitizes patient records, organizes appointments and schedules, and improves staff communication, enabling faster and better healthcare services.',
    figmaUrl: 'https://www.figma.com/design/Q6RkllXdw8wbqodNdGXlZa/Nasaazi-Takia?node-id=1347-343&t=mYoXtZR8EdqAeayN-0'
  };

  const designProcess = [
    {
      title: 'User Research & Empathy',
      description: 'I conducted in-depth user research by interviewing and observing doctors, nurses, and hospital administrators to understand their daily challenges and workflows. This helped me identify pain points and ensure the system would address real user problems effectively.'
    },
    {
      title: 'Competition Analysis',
      description: 'I analyzed existing hospital management systems to understand the market and identify their strengths and weaknesses. This research informed design decisions and helped position our solution as user-friendly and efficient.'
    },
    {
      title: 'Ideation',
      description: 'I actively participated in ideation sessions with the product team, generally brainstorming innovative design and workflow such as patient registration, appointment booking, and staff scheduling through discussion and feedback from product managers and developers.'
    },
    {
      title: 'Wireframes',
      description: 'I created wireframes and low-fidelity interfaces to map out layouts, navigation, and user flow of the system. These early-stage designs helped us establish the structure and organize content effectively before committing to detailed designs.'
    },
    {
      title: 'Prototypes',
      description: 'I developed polished high-fidelity designs and interactive prototypes that reflected the final look and feel of the system.'
    },
    {
      title: 'Usability Testing & Refinement',
      description: 'I conducted usability testing sessions with hospital staff to identify areas of confusion or friction. Based on the feedback, I refined the design and iterated on features to create a smooth and efficient user experience.'
    }
  ];

  return (
    <div className="project-detail-page">
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

      <div className="project-section">
        <h2>Project Purpose</h2>
        <p>{project.purpose}</p>
      </div>

      <div className="project-section">
        <h2>Problem solved</h2>
        <p>{project.problemSolved}</p>
      </div>

      <div className="design-process">
        <h2>Design Process</h2>
        <p className="process-subtitle">My end-to-end journey, from insight to impact that guided delivery</p>

        <div className="process-grid">
          {designProcess.map((process, index) => (
            <div key={index} className="process-card">
              <div className="process-image-placeholder">Image</div>
              <h3>{process.title}</h3>
              <p>{process.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FlagshipProjectDetail;