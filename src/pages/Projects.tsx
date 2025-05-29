import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  // Extract unique tags from all projects
  const uniqueTags = ['All', ...Array.from(new Set(
    projectsData.flatMap(project => project.tags)
  ))];
  
  // Filter projects based on selected tag
  const filteredProjects = filter === 'All'
    ? projectsData
    : projectsData.filter(project => project.tags.includes(filter));

  return (
    <div style={{ paddingTop: '6rem' }}>
      <Section id="projects" title="My Projects">
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="flex" style={{ 
            flexWrap: 'wrap', 
            gap: '0.5rem', 
            justifyContent: 'center' 
          }}>
            {uniqueTags.map((tag) => (
              <motion.button
                key={tag}
                onClick={() => setFilter(tag)}
                className={filter === tag ? 'bg-secondary text-primary' : 'bg-dark text-tertiary'}
                style={{ 
                  padding: '0.5rem 1rem', 
                  borderRadius: '9999px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </div>
        
        <motion.div 
          className="grid"
          style={{ 
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '2rem'
          }}
          layout
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div style={{ 
              gridColumn: '1 / -1', 
              textAlign: 'center', 
              color: 'var(--color-tertiary)',
              padding: '2.5rem 0'
            }}>
              No projects found with the selected filter.
            </div>
          )}
        </motion.div>
      </Section>
    </div>
  );
};

export default Projects; 