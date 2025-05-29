import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary">
      <motion.div
        className="flex"
        style={{ gap: '0.5rem' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="bg-secondary"
            style={{ 
              width: '1rem', 
              height: '1rem', 
              borderRadius: '50%'
            }}
            animate={{
              y: [-10, 0, -10],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Loader; 