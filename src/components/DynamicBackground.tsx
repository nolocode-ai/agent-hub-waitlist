
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export const DynamicBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Transform mouse position to gradual movement values
  const moveX = useTransform(springX, [-1000, 1000], [-20, 20]);
  const moveY = useTransform(springY, [-1000, 1000], [-20, 20]);
  const rotate = useTransform(springX, [-1000, 1000], [-5, 5]);
  const scale = useTransform(springY, [-1000, 1000], [0.8, 1.2]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Update motion values based on mouse position
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Background grid with parallax effect */}
      <motion.div
        className="fixed inset-0 grid-bg opacity-20 z-0"
        style={{
          x: moveX,
          y: moveY,
          rotate: rotate,
        }}
      />

      {/* Animated gradient orbs */}
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
          x: useTransform(springX, [-1000, 1000], [20, -20]),
          y: useTransform(springY, [-1000, 1000], [20, -20]),
          scale: useTransform(springY, [-1000, 1000], [1.2, 0.8]),
        }}
      />
    </>
  );
};
