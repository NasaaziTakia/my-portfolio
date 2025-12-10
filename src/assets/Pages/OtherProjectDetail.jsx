import Navigation from '../Components/Navigation';
import React from 'react';
import "../CSS/OtherProjectDetail.css";
import Myrole from '../Images/Myrole.png';
import userpersona from '../Images/userpersona.png';
import empathymap from '../Images/empathymap.png';
import userflow from '../Images/userflow.png';
import wireframes from '../Images/wireframe.jpeg';
import lowfidelity from '../Images/low-fi.png';

const OtherProjectDetail = () => {
  return (
    <div className="project-detail-container">
      <Navigation />
      {/* Header */}
      <header className="project-header">
        <h1 className="project-title">Mayondo Stock and Sales Management</h1>
        <p className="project-subtitle">A mobile app solution for efficient inventory and sales tracking</p>
      </header>

      {/* Project Overview */}
      <section className="section">
        <h2 className="section-title">Project Overview</h2>
        <div className="section-content">
          <p>Mayondo Wood and Furniture is a Ugandan company that sells wood products and produces custom furniture. Currently, manual stock, sales, and delivery processes cause errors and delays.</p>
          <p>This project involves creating a mobile app to streamline these operations, allowing attendants and managers to track stock, record sales, generate receipts, and manage deliveries efficiently.</p>
        </div>
      </section>

      {/* Project Objective */}
      <section className="section">
        <h2 className="section-title">Project Objective</h2>
        <div className="section-content">
          <p>To digitize Mayondo wood Furniture manual processes by providing a mobile app that:</p>
          <ul className="feature-list">
            <li className="feature-item">Allows attendants to update stock and record sales in real time</li>
            <li className="feature-item">Automates receipt generation and transport surcharge calculation</li>
            <li className="feature-item">Gives managers easy access to sales and stock reports</li>
            <li className="feature-item">Reduces errors and saves time to enhance operational efficiency</li>
            <li className="feature-item">Improves customer experience by enabling faster, more accurate service</li>
          </ul>
        </div>
      </section>

      {/* Key Features */}
      <section className="section">
        <h2 className="section-title">Key Features</h2>
        <div className="section-content">
          <ul className="feature-list">
            <li className="feature-item">
              <strong>Stock Management:</strong> Allows attendants to add, update, and view stock levels in real time, including product details such as name, type, quantity, and price.
            </li>
            <li className="feature-item">
              <strong>Sales Recording:</strong> Enables attendants to record each sale quickly, including product name, quantity, price, and payment method.
            </li>
            <li className="feature-item">
              <strong>Receipt Generation:</strong> Automatically generates detailed receipts showing customer name, items purchased, total cost, and date of transaction.
            </li>
            <li className="feature-item">
              <strong>Transport Surcharge Automation:</strong> Automatically calculates and adds a 5% surcharge for customers requesting delivery services.
            </li>
          </ul>
        </div>
      </section>

      {/* Design Approach */}
      <section className="section">
        <h2 className="section-title">Design Approach</h2>
        <div className="section-content">
          <p>A user-centered and iterative process focused on functionality, usability, and scalability. It began with gathering user and system requirements, followed by creating visual models and prototypes to define structure and flow.</p>
          <p>Interfaces were designed for clarity and ease of use, while development aligned with technical feasibility. Continuous feedback and testing guided refinements to ensure the final product met user needs and project goals effectively.</p>
        </div>
      </section>

      {/* My Roles */}
      <section className="section">
        <h2 className="section-title">My Roles</h2>
        <div className="section-content">
          <p>I aimed to understand the real problems faced by users in managing and selling furniture by conducting informal interviews and observations.</p>
          <p>The goal was to synthesize insights gathered during the empathize stage and clearly articulate the core problems to address with the mobile app.</p>
        </div>
        <div className="section-image">
          <img src={Myrole} alt="My Role Illustration" />
        </div>
      </section>

      {/* Design Thinking Process */}
      <section className="section">
        <h2 className="section-title">Design Thinking Process</h2>
        <div className="section-content">
          <p>Focuses on understanding user needs and creating practical, user-centered solutions. Its iterative approach encourages creativity, testing, and continuous improvement, ensuring the final product effectively solves real user problems.</p>
          
          <div className="process-steps">
            <div className="process-step">
              <h3 className="process-step-title">Empathize</h3>
              <p>Interview Questions:</p>
              <ul className="feature-list">
                <li className="feature-item">How do you currently record and manage furniture sales?</li>
                <li className="feature-item">What challenges do you face when tracking stock and generating receipts?</li>
                <li className="feature-item">How do you handle customer orders or deliveries?</li>
                <li className="feature-item">What features would you find most useful in a mobile app for managing sales?</li>
              </ul>
              <p>Key Insights Derived:</p>
              <ul className="feature-list">
                <li className="feature-item">Manual record-keeping often leads to misplaced or incomplete sales data.</li>
                <li className="feature-item">Attendants sometimes make errors in receipts, especially when totals are calculated manually.</li>
                <li className="feature-item">Managers struggle to quickly check stock availability when customers ask.</li>
                <li className="feature-item">Users prefer a simple system that doesn't require complex logins or training.</li>
                <li className="feature-item">Most users relied on notebooks or verbal communication for stock updates.</li>
              </ul>
            </div>
            
            <div className="process-step">
              <h3 className="process-step-title">Define</h3>
              <p>Problem Statement:</p>
              <p>Sales attendants struggle with managing stock and generating accurate receipts manually. All tracking relies on manual receipts, which can be misplaced or miswritten.</p>
              <p>Additional challenges:</p>
              <ul className="feature-list">
                <li className="feature-item">Stock-taking and sales calculations are only done monthly, making it harder to monitor real-time performance</li>
                <li className="feature-item">Commissions are recorded separately and do not appear on receipts, which can cause confusion.</li>
              </ul>
            </div>
            
            <div className="process-step">
              <h3 className="process-step-title">Ideate</h3>
              <p>Creative solutions were developed based on user insights:</p>
              <ul className="feature-list">
                <li className="feature-item">Mobile app with simple interface for recording sales</li>
                <li className="feature-item">Real-time stock updates with alerts for low inventory</li>
                <li className="feature-item">Automated receipt generation with commission tracking</li>
                <li className="feature-item">Simple reporting dashboard for managers</li>
              </ul>
            </div>
            
            <div className="process-step">
              <h3 className="process-step-title">Design</h3>
              <p>The design process included:</p>
              <ul className="feature-list">
                <li className="feature-item">User flow creation</li>
                <li className="feature-item">Sketching and wireframing</li>
                <li className="feature-item">Brainstorming</li>
                <li className="feature-item">Visual designs</li>
                <li className="feature-item">Prototype development</li>
              </ul>
            </div>
            
            <div className="process-step">
              <h3 className="process-step-title">Prototype</h3>
              <p>Low and high-fidelity prototypes were created to test key functionality:</p>
              <ul className="feature-list">
                <li className="feature-item">Stock management interface</li>
                <li className="feature-item">Sales recording workflow</li>
                <li className="feature-item">Receipt generation process</li>
                <li className="feature-item">Reporting dashboard</li>
              </ul>
            </div>
            
            <div className="process-step">
              <h3 className="process-step-title">Usability Testing</h3>
              <p>I conducted usability tests with four participants to assess how easily they could navigate the app and complete key tasks. Their feedback revealed areas that needed clearer navigation, simpler workflows, and better labeling.</p>
              <p>I refined the designs based on their responses and tested again to ensure the improvements aligned with what users expected and needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* User Persona */}
      <section className="section">
        <h2 className="section-title">User Persona</h2>
        <div className="section-content">
          <div className="persona-card">
            <img src={userpersona} alt="User Persona Illustration" />
          </div>
        
        </div>
      </section>

      {/* Empathy Map */}
      <section className="section">
        <h2 className="section-title">Empathy Map</h2>
        <div className="section-content">
          <div className="empathy-map">
             <img src={empathymap} alt="Empathy Map Illustration" />
           </div>
        </div>
      </section>

      {/* User Flow */}
<section className="section">
  <h2 className="section-title">User Flow</h2>
  <div className="section-content user-flow-content"> {/* Add the new class here */}
    <img src={userflow} alt="User Flow Illustration" />
  </div>
</section>

      {/* Wireframes */}
      <section className="section">
        <h2 className="section-title">Wireframes</h2>
        <div className="section-content">
         <img src={wireframes} alt="Wireframes Illustration" />
        </div>
      </section>
      {/* Low Fidelity Prototypes */}
      <section className="section">
        <h2 className="section-title">Low Fidelity Designs</h2>
        <div className="section-content">
          <img src={lowfidelity} alt="Low Fidelity Prototypes Illustration" />
        </div>
      </section>

      {/* Design System */}
      <section className="section">
        <h2 className="section-title">Design System</h2>
        <div className="section-content">
          <div className="design-system">
            <div className="color-palette">
              <h3>Colors</h3>
              
              <div className="color-swatch">
                <div className="color-sample" style={{ backgroundColor: '#3e921f' }}></div>
                <div className="color-info">
                  <p>Green Normal</p>
                  <p>#3e921f</p>
                  <p>rgb(62, 146, 31)</p>
                </div>
              </div>
              
              <div className="color-swatch">
                <div className="color-sample" style={{ backgroundColor: '#38831c' }}></div>
                <div className="color-info">
                  <p>Green Normal:hover</p>
                  <p>#38831c</p>
                  <p>rgb(56, 131, 28)</p>
                </div>
              </div>
              
              <div className="color-swatch">
                <div className="color-sample" style={{ backgroundColor: '#2f6e17' }}></div>
                <div className="color-info">
                  <p>Green Dark</p>
                  <p>#2f6e17</p>
                  <p>rgb(47, 110, 23)</p>
                </div>
              </div>
              
              <div className="color-swatch">
                <div className="color-sample" style={{ backgroundColor: '#f19f24' }}></div>
                <div className="color-info">
                  <p>Orange Normal</p>
                  <p>#f19f24</p>
                  <p>rgb(241, 159, 36)</p>
                </div>
              </div>
              
              <div className="color-swatch">
                <div className="color-sample" style={{ backgroundColor: '#d06902' }}></div>
                <div className="color-info">
                  <p>Orange Normal</p>
                  <p>#d06902</p>
                  <p>rgb(208, 105, 2)</p>
                </div>
              </div>
              
              <div className="color-swatch">
                <div className="color-sample" style={{ backgroundColor: '#9c4f02' }}></div>
                <div className="color-info">
                  <p>Orange Dark</p>
                  <p>#9c4f02</p>
                  <p>rgb(156, 79, 2)</p>
                </div>
              </div>
              
              <div className="color-swatch">
                <div className="color-sample" style={{ backgroundColor: '#cf2626' }}></div>
                <div className="color-info">
                  <p>Red Normal</p>
                  <p>#cf2626</p>
                  <p>rgb(207, 38, 38)</p>
                </div>
              </div>
              
              <div className="color-swatch">
                <div className="color-sample" style={{ backgroundColor: '#000000' }}></div>
                <div className="color-info">
                  <p>Black Normal</p>
                  <p>#000000</p>
                  <p>rgb(0, 0, 0)</p>
                </div>
              </div>
            </div>
            
            <div className="typography">
              <h3>Typography</h3>
              
              <div className="typography-sample">
                <h1>Mayondo Furniture Workshop</h1>
                <p>Heading 1</p>
              </div>
              
              <div className="typography-sample">
                <h2>Mayondo Furniture Workshop</h2>
                <p>Heading 2</p>
              </div>
              
              <div className="typography-sample">
                <h3>Mayondo Furniture Workshop</h3>
                <p>Heading 3</p>
              </div>
              
              <div className="typography-sample">
                <p>Mayondo Furniture Workshop</p>
                <p>Paragraph</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* High Fidelity Designs */}
      <section className="section">
        <h2 className="section-title">High Fidelity Designs</h2>
        <div className="section-content">
          <div className="design-showcase">
            <div className="design-image">
              <img src="https://via.placeholder.com/400x300?text=Home+Screen" alt="Home Screen" />
            </div>
            <div className="design-image">
              <img src="https://via.placeholder.com/400x300?text=Sales+Screen" alt="Sales Screen" />
            </div>
            <div className="design-image">
              <img src="https://via.placeholder.com/400x300?text=Stock+Management" alt="Stock Management" />
            </div>
            <div className="design-image">
              <img src="https://via.placeholder.com/400x300?text=Reports+Screen" alt="Reports Screen" />
            </div>
          </div>
        </div>
      </section>

      {/* Usability Testing */}
      <section className="section">
        <h2 className="section-title">Usability Testing</h2>
        <div className="section-content">
          <p>I conducted usability tests with four participants to assess how easily they could navigate the app and complete key tasks. Their feedback revealed areas that needed clearer navigation, simpler workflows, and better labeling.</p>
          
          <div className="testing-insights">
            <div className="insight-card">
              <p className="insight-text">"The report section should not be editable. I expected reports to be read-only and felt that having edit options could lead to mistakes or unauthorized changes."</p>
              <p className="insight-source">- Cissyln</p>
            </div>
            
            <div className="insight-card">
              <p className="insight-text">"Users should be able to download reports directly from the app. This would make it easier for managers to keep records and share updates."</p>
              <p className="insight-source">- Musimenta</p>
            </div>
            
            <div className="insight-card">
              <p className="insight-text">"The registration process should be on one screen instead of two separate screens. The split made the process longer."</p>
              <p className="insight-source">- Lutalo Allan</p>
            </div>
          </div>
          
          <p>I refined the designs based on their responses and tested again to ensure the improvements aligned with what users expected and needed.</p>
        </div>
      </section>
    </div>
  );
};

export default OtherProjectDetail;