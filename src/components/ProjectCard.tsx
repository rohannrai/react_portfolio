import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      className="bg-dark rounded-lg shadow-lg"
      style={{ 
        overflow: 'hidden', 
        transition: 'all 0.3s ease',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: isMobile ? 0 : -5 }}
    >
      <div className="relative" style={{ overflow: 'hidden' }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full"
          style={{ 
            height: isMobile ? '12rem' : '16rem', 
            objectFit: 'cover',
            transition: 'transform 0.5s ease-in-out'
          }}
          onMouseOver={(e) => {
            if (!isMobile) e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseOut={(e) => {
            if (!isMobile) e.currentTarget.style.transform = 'scale(1)';
          }}
        />
        <div 
          className="absolute bg-primary"
          style={{ 
            inset: 0, 
            opacity: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(10, 25, 47, 0.7)',
            transition: 'opacity 0.3s ease'
          }}
          onMouseOver={(e) => {
            if (!isMobile) e.currentTarget.style.opacity = '1';
          }}
          onMouseOut={(e) => {
            if (!isMobile) e.currentTarget.style.opacity = '0';
          }}
          onClick={(e) => {
            if (isMobile) {
              const currentOpacity = e.currentTarget.style.opacity;
              e.currentTarget.style.opacity = currentOpacity === '1' ? '0' : '1';
            }
          }}
        >
          <div className="flex" style={{ gap: '1rem' }}>
            <motion.a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Live Demo
            </motion.a>
            <motion.a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Source Code
            </motion.a>
          </div>
        </div>
      </div>
      
      <div style={{ 
        padding: isMobile ? '1rem' : '1.5rem', 
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column'
      }}>
        <h3 className="text-light" style={{ 
          fontSize: isMobile ? '1.1rem' : '1.25rem', 
          fontWeight: 'bold', 
          marginBottom: '0.5rem' 
        }}>
          {project.title}
        </h3>
        <p className="text-tertiary" style={{ 
          marginBottom: '1rem',
          fontSize: isMobile ? '0.9rem' : '1rem',
          flexGrow: 1
        }}>
          {project.description}
        </p>
        <div className="flex" style={{ 
          flexWrap: 'wrap', 
          gap: isMobile ? '0.35rem' : '0.5rem' 
        }}>
          {project.tags.map((tag, index) => (
            <motion.span
              key={index}
              className="text-secondary"
              style={{ 
                padding: isMobile ? '0.15rem 0.35rem' : '0.25rem 0.5rem', 
                fontSize: isMobile ? '0.65rem' : '0.75rem', 
                borderRadius: '0.25rem',
                backgroundColor: 'var(--color-dark)',
                border: '1px solid var(--color-secondary)'
              }}
              whileHover={{ y: -2 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 