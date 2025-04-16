
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-20 pb-10 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-20 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-0"></div>
      
      {/* Blue glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-agent-blue/5 blur-[120px] z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-agent-blue/10 blur-[100px] z-0"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1 
          className="text-6xl md:text-8xl font-bold tracking-tight my-4 text-glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          AGENTHUB
        </motion.h1>
        
        <motion.div
          className="relative mx-auto my-12 w-48 h-48 md:w-64 md:h-64"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-agent-blue-light to-agent-blue-dark opacity-80 blue-pulse blur-sm"></div>
          <div className="absolute inset-2 rounded-full bg-agent-blue/20 backdrop-blur-sm grid-bg"></div>
          <div className="absolute inset-0 rounded-full bg-transparent border border-agent-blue/50 blue-pulse"></div>
          <div className="absolute inset-8 rounded-full bg-transparent border border-agent-blue-light/30"></div>
        </motion.div>
        
        <motion.p 
          className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto my-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Manage your AI agents with unprecedented control and efficiency
        </motion.p>
        
        <motion.a 
          href="#waitlist" 
          className="inline-block bg-agent-blue hover:bg-agent-blue-light text-white px-8 py-3 rounded-md text-lg font-medium transition-colors blue-glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          Join the Waitlist
        </motion.a>
      </div>
    </section>
  );
}
