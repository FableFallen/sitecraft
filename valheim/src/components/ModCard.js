import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const ModCard = ({ mod }) => {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(1000px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div onClick={() => setFlipped(!flipped)}>
      <animated.div
        style={{
          opacity: opacity.to(o => 1 - o),
          transform,
        }}
      >
        {/* Front of the card with mod name */}
        <div className="mod-card-front">
          <h3>{mod.title}</h3>
        </div>
      </animated.div>

      <animated.div
        style={{
          opacity,
          transform: transform.to(t => `${t} rotateY(180deg)`),
        }}
      >
        {/* Back of the card with mod description */}
        <div className="mod-card-back">
          <p>{mod.description}</p>
          <a href={mod.url} target="_blank" rel="noopener noreferrer">
            Download
          </a>
        </div>
      </animated.div>
    </div>
  );
};

export default ModCard;
