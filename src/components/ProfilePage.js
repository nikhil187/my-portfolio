import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ProfilePage() {
  return (
    <div className="profile-container">
      {/* Header Section */}
      <div className="profile-header">
        <Container>
          <Row className="align-items-center">
            <Col md={4} className="text-center">
              <div className="profile-image-container">
                <img 
                  src="/images/profile.jpeg"  // Ensure this path is correct
                  alt="Profile"
                  className="profile-image"
                />
              </div>
            </Col>
            <Col md={8}>
              <div className="profile-intro">
                <h1>NIKHIL SHETTY L</h1>
                <h3 className="text-gradient">Master's Student</h3>
                <div className="social-links">
                  <a href="https://github.com/nikhil187" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/nikhil-shetty-bb78b3210/" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="mailto:lakshmishettynikhil@gmail.com">
                    <i className="bi bi-envelope-fill"></i>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Content */}
      <Container className="profile-content">
        {/* About Section */}
        <section className="profile-section">
          <h2 className="section-title">About Me</h2>
          <div className="section-content">
            <p>
              Passionate student pursuing Master's in Computer Science at SUNY Albany. 
              Experienced in full-stack development with a strong foundation in modern technologies 
              and a keen interest in solving complex problems.
            </p>
          </div>
        </section>

        {/* Research Experience Section */}
        <section className="profile-section">
          <h2 className="section-title">Research Experience</h2>
          <div className="section-content">
            <h4>Research Assistant</h4>
            <p>
              As a Research Assistant, I developed a domain-specific dataset of 3,000 MCQs focused on C language fundamentals to enhance MCQ training models. 
              I built an AI-powered MCQ generation model using NLP techniques, enabling automatic question creation from text. 
              My work improved the relevance and quality of questions for automated assessment systems.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="profile-section">
          <h2 className="section-title">Education</h2>
          <div className="section-content">
            <div className="education-card">
              <div className="education-year">2024 - Present</div>
              <div className="education-details">
                <h4>Master of Science in Computer Science</h4>
                <h5>State University of New York at Albany</h5>
                <p>GPA: 3.33</p>
              </div>
            </div>
            <div className="education-card">
              <div className="education-year">2020 - 2024</div>
              <div className="education-details">
                <h4>Bachelor's in Computer Science and Engineering</h4>
                <h5>Anurag University, Hyderabad, India</h5>
                <p>GPA: 3.23/4.0</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="profile-section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="section-content">
            <div className="skills-container">
              <div className="skill-category">
                <h4>Languages</h4>
                <div className="skill-tags">
                  {['C/C++', 'Java', 'Python', 'JavaScript', 'SQL', 'HTML/CSS'].map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4>Frameworks & Libraries</h4>
                <div className="skill-tags">
                  {['ReactJS', 'NodeJS', 'Spring API', 'FastAPI', 'OpenCV', 'TensorFlow'].map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
              <div className="skill-category">
                <h4>Tools & Platforms</h4>
                <div className="skill-tags">
                  {['Git', 'AWS', 'Google Cloud', 'Docker', 'MongoDB', 'PostgreSQL'].map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="profile-section">
          <h2 className="section-title">Work Experience</h2>
          <div className="section-content">
            <div className="experience-card">
              <div className="experience-header">
                <h4>Software Developer Intern</h4>
                <span className="company-name">Advit Software Solutions</span>
                <span className="experience-date">Jan 2023 – May 2024</span>
              </div>
              <ul className="experience-details">
                <li>Contributed to Srvme, an on-demand services platform</li>
                <li>Assisted in API development for service booking</li>
                <li>Integrated Stripe & Razorpay for secure transactions</li>
                <li>Supported real-time tracking implementation</li>
              </ul>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}

export default ProfilePage;