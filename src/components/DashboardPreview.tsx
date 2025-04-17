
import { motion } from "framer-motion";

export const DashboardPreview = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-full max-w-3xl mx-auto mt-12"
    >
      <div className="relative rounded-xl overflow-hidden glass-bg border border-white/10">
        <img 
          src="/lovable-uploads/231b9962-c8fc-468d-9c69-c03da4e72198.png"
          alt="AgentHub Dashboard Preview"
          className="w-full h-auto"
        />
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        
        {/* Glass reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
      </div>

      {/* Floating elements animation */}
      <motion.div
        className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-agent-blue/20 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-agent-blue/30 blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </motion.div>
  );
};
