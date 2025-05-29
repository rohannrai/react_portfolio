import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import portfoliopic from '../assets/Portfoliopic.jpg';

const PHOTO_URL = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXQlMjBtYW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60";

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/rohannrai', icon: <FaGithub /> },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/rohan-rai-20b0b825b/', icon: <FaLinkedin /> },
  { name: 'Twitter', url: 'https://twitter.com/your-username', icon: <FaTwitter /> },
];

const Hero = () => {
  return (
    <section
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Poppins, Inter, sans-serif',
        padding: '0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Animated SVG Blob */}
      <svg
        style={{
          position: 'absolute',
          top: '-10%',
          left: '-10%',
          width: '900px',
          height: '900px',
          zIndex: 0,
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
        viewBox="0 0 900 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ scale: 0.9 }}
          animate={{ scale: [0.9, 1.05, 0.9] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          d="M 600 100 Q 900 300 700 600 Q 500 900 200 700 Q 0 500 200 200 Q 400 0 600 100 Z"
          fill="url(#blob-gradient)"
        />
        <defs>
          <linearGradient id="blob-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a084e8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#232046" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>
      <div className="hero-wrapper" style={{ width: '100%' }}>
        <div
          className="hero-container"
          style={{
            width: '100%',
            maxWidth: 1200,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            padding: '0 2rem',
            margin: '0 auto',
            flexWrap: 'wrap',
          }}
        >
          {/* Left: Text & Socials */}
          <div className="hero-text" style={{ flex: 1, minWidth: 320, maxWidth: 540 }}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              style={{ marginBottom: '1.5rem' }}
            >
              <span style={{
                color: '#a084e8',
                fontWeight: 600,
                fontSize: '1.1rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}>
                 ROHAN RAI
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              style={{
                fontSize: '3.2rem',
                fontWeight: 800,
                color: '#fff !important',
                lineHeight: 1.1,
                marginBottom: '1.2rem',
                letterSpacing: '-1.5px',
                textShadow: '0 0 20px rgba(160, 132, 232, 0.3)',
              }}
            >
              Web developer<br />and UI designer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{
                fontSize: '1.25rem',
                color: '#a084e8',
                marginBottom: '2.2rem',
                fontWeight: 500,
                lineHeight: 1.5,
                maxWidth: 420,
                opacity: 0.9,
              }}
            >
              I build beautiful, high-performance web experiences with React, TypeScript, and modern design. Let's create something amazing together!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{ display: 'flex', gap: '1.2rem', marginBottom: '2.2rem', flexWrap: 'wrap' }}
            >
              <Link to="/projects" style={{
                background: 'rgba(255,255,255,0.08)',
                color: '#fff',
                border: '1.5px solid rgba(255,255,255,0.2)',
                borderRadius: '2rem',
                padding: '0.85rem 2.2rem',
                fontWeight: 600,
                fontSize: '1.1rem',
                boxShadow: '0 2px 12px 0 rgba(160,132,232,0.08)',
                transition: 'all 0.2s ease',
                backdropFilter: 'blur(6px)',
                cursor: 'pointer',
                textDecoration: 'none',
              }}>
                See the Latest Works
              </Link>
              <Link to="/contact" style={{
                background: 'rgba(160,132,232,0.2)',
                color: '#fff',
                border: '1.5px solid rgba(160,132,232,0.3)',
                borderRadius: '2rem',
                padding: '0.85rem 2.2rem',
                fontWeight: 600,
                fontSize: '1.1rem',
                boxShadow: '0 2px 12px 0 rgba(160,132,232,0.08)',
                transition: 'all 0.2s ease',
                backdropFilter: 'blur(6px)',
                cursor: 'pointer',
                textDecoration: 'none',
              }}>
                Contact Me
              </Link>
            </motion.div>
            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              style={{ display: 'flex', gap: '1.2rem', marginTop: '1rem' }}
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  style={{
                    fontSize: '1.7rem',
                    color: '#fff',
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: '50%',
                    width: 44,
                    height: 44,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                  onMouseOver={e => e.currentTarget.style.background = '#a084e8'}
                  onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>
          </div>
          {/* Right: Floating Photo */}
           <motion.div
            className="hero-image"
            style={{
              flex: 1,
              minWidth: 320,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: 340,
                height: 340,
                borderRadius: '50%',
                overflow: 'hidden',
                boxShadow: '0 8px 32px 0 rgba(160,132,232,0.18)',
                border: '8px solid #232046',
                background: '#232046',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={portfoliopic as string}
                alt="Rohan Rai"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
              />

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 