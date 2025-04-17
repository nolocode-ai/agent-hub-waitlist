
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export const DynamicBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // More responsive spring configuration
  const springConfig = { damping: 10, stiffness: 300 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Increased range of movement for more dramatic effect
  const moveX = useTransform(springX, [-1000, 1000], [-40, 40]);
  const moveY = useTransform(springY, [-1000, 1000], [-40, 40]);
  const rotate = useTransform(springX, [-1000, 1000], [-10, 10]);
  const scale = useTransform(springY, [-1000, 1000], [0.7, 1.3]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // More precise centering calculation
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Background grid with enhanced parallax effect */}
      <motion.div
        className="fixed inset-0 grid-bg opacity-30 z-0"
        style={{
          x: moveX,
          y: moveY,
          rotate: rotate,
        }}
      />

      {/* Animated gradient orbs with more dynamic movement */}
      <motion.div
        className="fixed left-1/4 top-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-agent-blue/5 blur-[120px] z-0"
        style={{
          x: moveX,
          y: moveY,
          scale,
        }}
      />
      <motion.div
        className="fixed right-1/4 bottom-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-agent-blue/10 blur-[100px] z-0"
        style={{
          x: useTransform(springX, [-1000, 1000], [40, -40]),
          y: useTransform(springY, [-1000, 1000], [40, -40]),
          scale: useTransform(springY, [-1000, 1000], [1.3, 0.7]),
        }}
      />
    </>
  );
};
