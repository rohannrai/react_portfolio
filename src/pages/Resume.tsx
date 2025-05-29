import React, { useState, useEffect } from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';

const Resume: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={{ paddingTop: '6rem' }}>
      <Section id="resume" title="Resume">
        <motion.div
          className="bg-dark rounded-lg shadow-lg"
          style={{ 
            padding: isMobile ? '1rem' : '2rem',
            marginBottom: '2rem' 
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-light" style={{ 
            fontSize: isMobile ? '1.5rem' : '2rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            borderBottom: '2px solid var(--color-secondary)',
            paddingBottom: '0.5rem'
          }}>Education</h2>
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 className="text-secondary" style={{ 
              fontSize: isMobile ? '1.25rem' : '1.5rem', 
              fontWeight: '600' 
            }}> Bachelors of Computer Application</h3>
            <p className="text-tertiary" style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
               Delhi Skill and Entrepreneurship University • 2022-2025
            </p>
            <p className="text-light" style={{ 
              marginTop: '0.75rem',
              fontSize: isMobile ? '0.9rem' : '1rem'
            }}>
              Relevant coursework in algorithms, data structures, and web development.
            </p>
          </div>
          
          <h2 className="text-light" style={{ 
            fontSize: isMobile ? '1.5rem' : '2rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            borderBottom: '2px solid var(--color-secondary)',
            paddingBottom: '0.5rem'
          }}>Work Experience</h2>
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 className="text-secondary" style={{ 
              fontSize: isMobile ? '1.25rem' : '1.5rem', 
              fontWeight: '600' 
            }}>Frontend Developer</h3>
            <p className="text-tertiary" style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
               Scoutbizz International • 31march 2025 - 30 may 2025
            </p>
            <ul style={{ 
              listStyleType: 'disc', 
              marginLeft: '1.5rem',
              marginTop: '0.75rem',
              color: 'var(--color-light)',
              fontSize: isMobile ? '0.9rem' : '1rem'
            }}>
              <li>Developed responsive web applications</li>
              <li>Collaborated with design team to implement user interfaces</li>
              <li>Improved application performance </li>
            </ul>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 className="text-secondary" style={{ 
              fontSize: isMobile ? '1.25rem' : '1.5rem', 
              fontWeight: '600' 
            }}>Web Development Intern</h3>
            <p className="text-tertiary" style={{ fontSize: isMobile ? '0.9rem' : '1rem' }}>
              Codsoft • june 2024 - july 2024
            </p>
            <ul style={{ 
              listStyleType: 'disc', 
              marginLeft: '1.5rem',
              marginTop: '0.75rem',
              color: 'var(--color-light)',
              fontSize: isMobile ? '0.9rem' : '1rem'
            }}>
              <li>Assisted in building  website using HTML, CSS, and JavaScript</li>
              <li>Implemented responsive design principles</li>
              <li>Gained experience with version control using Git</li>
            </ul>
          </div>
          
          <h2 className="text-light" style={{ 
            fontSize: isMobile ? '1.5rem' : '2rem', 
            fontWeight: 'bold', 
            marginBottom: '1rem',
            borderBottom: '2px solid var(--color-secondary)',
            paddingBottom: '0.5rem'
          }}>Skills</h2>
          <div className="grid" style={{ 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '1.5rem'
          }}>
            <div>
              <h3 className="text-secondary" style={{ 
                fontSize: isMobile ? '1.25rem' : '1.5rem', 
                fontWeight: '600',
                marginBottom: '0.75rem'
              }}>Technical Skills</h3>
              <ul style={{ 
                listStyleType: 'disc', 
                marginLeft: '1.5rem',
                color: 'var(--color-light)',
                fontSize: isMobile ? '0.9rem' : '1rem'
              }}>
                <li>React, TypeScript, JavaScript</li>
                <li>HTML5, CSS3</li>
                <li>Git, GitHub</li>
                <li>Node.js, Express</li>
              </ul>
            </div>
            <div>
              <h3 className="text-secondary" style={{ 
                fontSize: isMobile ? '1.25rem' : '1.5rem', 
                fontWeight: '600',
                marginBottom: '0.75rem'
              }}>Soft Skills</h3>
              <ul style={{ 
                listStyleType: 'disc', 
                marginLeft: '1.5rem',
                color: 'var(--color-light)',
                fontSize: isMobile ? '0.9rem' : '1rem'
              }}>
                <li>Problem Solving</li>
                <li>Communication</li>
                <li>Team Collaboration</li>
                <li>Time Management</li>
              </ul>
            </div>
          </div>
        </motion.div>
        
        <div className="text-center" style={{ marginBottom: '2rem' }}>
          <motion.a 
            href="/RohanRaiCV.pdf" 
            download 
            className="btn btn-primary"
            style={{ padding: isMobile ? '0.75rem 1.5rem' : '1rem 2rem' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume PDF
          </motion.a>
        </div>
      </Section>
    </div>
  );
};

export default Resume; 