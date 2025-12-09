import { Link } from 'react-router-dom';
import '../CSS/Portfolio.css';
import Navigation from '../Components/Navigation'; 
import mayondo from '../Images/mayondo.png';
import hospitalImage from '../Images/hospital.png';


function Portfolio() {
  const projects = [
    {
      id: 'hospital-management',
      title: 'Hospital Management system',
      description:
        'I designed the system for City Care Hospital to improve the management of daily activities, including patients, staff, appointments, and schedules. By bringing everything into one organized platform, the system reduces delays and errors, makes staff work easier, and ensures patients receive faster, better care. My role covered end-to-end UX design, including project research and competitor analysis, wireframing, high-fidelity prototyping, and usability testing, ensuring the system is intuitive, efficient, and user-friendly.',
    },
    {
      id: 'stock-sales',
      title: 'Stock and Sales Management system',
      description:
        'I designed a mobile application for Mayondo Furniture Workshop to improve how the business manages its stock and sales operations. The system allows salespersons to record sales, track inventory, and manage customer orders in real time. By combining these key functions into one simple platform, the system reduces manual errors, saves time, and helps the business operate more efficiently. It also focuses on clear visual and data representation to make it easy for users with low digital literacy to navigate and use effectively.',
    },
  ];
 

  return (
    <div className="portfolio-page">
      <Navigation />
      {/* Flagship Project */}
      <section className="flagship-section">
        <h2 className="section-title">Flagship Project</h2>
        {/* CHANGED: Use 'flagship-card' class for unique styling */}
        <div className="project-card flagship-card">
          <div className="project-image-placeholder">
             <img 
                        src={hospitalImage}
                        alt="Hospital Management System"
                      />
          </div>
          <div className="project-content">
            <h3 className="project-title">{projects[0].title}</h3>
            <p className="project-description">{projects[0].description}</p>
            {/* IMPROVED: Dynamic link based on project id */}
            <Link to={`/portfolio/ProjectDetails`}>
              <button className="btn-details">Project Details</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Other Project */}
      <section className="other-projects-section">
        <h2 className="section-title">Other Project</h2>
          <div className="project-card other-card">
          <div className="project-image-placeholder">
                         <img 
                        src={mayondo}
                        alt="Stock and Sales Management System"
                      />
          </div>
          <div className="project-content">
            <h3 className="project-title">{projects[1].title}</h3>
            <p className="project-description">{projects[1].description}</p>
            {/* IMPROVED: Dynamic link based on project id */}
            <Link to={`/portfolio/OtherProjectDetail`}>
              <button className="btn-details">Project Details</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;