// Logo.tsx
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

interface LogoProps {
  source: string;
  alt: string;
}

const Logo: React.FC<LogoProps> = ({ source, alt }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const logoAnimation = useSpring({
    marginLeft: inView ? '0%' : '-100%',
    opacity: inView ? 1 : 0,
    config: { duration: 150 },
  });

  return (
    <animated.div ref={ref} style={logoAnimation} className="logo-container">
      <img src={source} alt={alt} style={{ maxWidth: '100%', maxHeight: '100%', height: 'auto' }} />
    </animated.div>
  );
};

export default Logo;
