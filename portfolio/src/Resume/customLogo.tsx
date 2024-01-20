import React from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';

interface LogoProps {
  id: number;
  source: string;
  alt: string;
}

const Logo: React.FC<LogoProps> = ({ id, source, alt }) => {
  const [{ x }, set] = useSpring(() => ({ x: 0 }));

  const bind = useDrag(({ down, movement: [mx] }) => {
    set({ x: down ? mx : 0 });
  });

  return (
    <animated.img
      {...bind()}
      key={id}
      src={source}
      alt={alt}
      style={{ transform: x.to((val) => `translate3d(${val}px, 0, 0)`) }}
    />
  );
};

export default Logo;
