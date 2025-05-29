import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import SkillCard from '../components/SkillCard';
import { skillsData } from '../data/skillsData';
import { projectsData } from '../data/projectsData';
import ProjectCard from '../components/ProjectCard';
import { useEffect, useState } from 'react';
import Hero from '../components/Hero';

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setIsTypingComplete(true);
    }
  }, [currentIndex, text]);

  return (
    <span className={isTypingComplete ? '' : 'typewriter-cursor'}>
      {displayText}
    </span>
  );
};

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Page flip animation variants
  const pageVariants = {
    initial: { 
      rotateY: 0,
      opacity: 1 
    },
    animate: { 
      rotateY: scrollY > 100 ? -180 : 0,
      opacity: scrollY > 100 ? 0 : 1,
      transition: { 
        duration: 0.8, 
        ease: "easeInOut" 
      }
    }
  };

  return (
    <>
      <Hero />
      <div>
        {/* Hero Section */}
        

        {/* About Section with Page Flip Animation */}
        <Section id="about" title="About Me">
          <motion.div 
            className="grid perspective-container" 
            style={{ 
              gridTemplateColumns: '1fr', 
              gap: '2.5rem',
            }}
          >
            <motion.div
              className="page-flip"
              initial={{ opacity: 0, rotateY: -10 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ 
                transformOrigin: "center left",
                background: "var(--color-dark)",
                padding: isMobile ? "1.5rem" : "2rem",
                borderRadius: "0.5rem",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
              }}
            >
              <p className="text-tertiary mb-4" style={{ fontSize: isMobile ? '0.95rem' : 'inherit' }}>
                Hello! I'm Rohan, a passionate full-stack web developer with expertise in creating 
                responsive and user-friendly web applications. I enjoy turning complex problems into 
                simple, beautiful and intuitive designs.
              </p>
              <p className="text-tertiary mb-4" style={{ fontSize: isMobile ? '0.95rem' : 'inherit' }}>
                My journey in web development started with HTML, CSS, and JavaScript, and has evolved to 
                include modern frameworks and libraries. I have experience working with the MERN stack 
                (MongoDB, Express.js, React, and Node.js), as well as with Java for backend development.
              </p>
              <p className="text-tertiary" style={{ fontSize: isMobile ? '0.95rem' : 'inherit' }}>
                Additionally, I have hands-on experience with WordPress and Shopify, allowing me to provide 
                comprehensive solutions for various client needs. I am constantly learning and staying 
                up-to-date with the latest technologies to deliver high-quality products.
              </p>
            </motion.div>
          </motion.div>
        </Section>

        {/* Skills Section with Flipping Cards */}
        <Section id="skills" title="My Skills" className="bg-dark">
          <div className="grid" style={{ 
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: isMobile ? '1rem' : '1.5rem'
          }}>
            {skillsData.map((skill, index) => (
              <div key={index} className="custom-cursor">
                <SkillCard skill={skill} />
              </div>
            ))}
          </div>
        </Section>

        {/* Featured Projects Section with Page Flip Animation */}
        <Section id="featured-projects" title="Featured Projects">
          <div className="grid" style={{ 
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: isMobile ? '1.5rem' : '2rem'
          }}>
            {projectsData.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                className="perspective-container"
                initial={{ opacity: 0, rotateY: 30, y: 50 }}
                whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          <div className="text-center" style={{ marginTop: isMobile ? '2rem' : '3rem' }}>
            <Link to="/projects" className="btn btn-outline">
              View All Projects
            </Link>
          </div>
        </Section>
      </div>
    </>
  );
};

export default Home; 