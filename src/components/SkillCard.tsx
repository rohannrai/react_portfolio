import React from 'react';

export interface SkillProps {
  name: string;
  icon: string;
  color: string;
}

const SkillCard = ({ skill }: { skill: SkillProps }) => {
  return (
    <div
      className="bg-dark shadow-lg"
      style={{ 
        padding: '1rem', 
        borderRadius: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 2px 8px 0 rgba(160, 132, 232, 0.08)',
      }}
    >
      <div 
        style={{ 
          width: '3rem', 
          height: '3rem', 
          marginBottom: '0.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: skill.color,
        }}
      >
        <img 
          src={skill.icon} 
          alt={skill.name} 
          className="skill-icon-img"
          style={{ width: '100%', height: '100%', display: 'block !important', opacity: '1 !important' }}
        />
      </div>
      <p className="text-light" style={{ textAlign: 'center', fontWeight: '500' }}>
        {skill.name}
      </p>
    </div>
  );
};

export default SkillCard; 