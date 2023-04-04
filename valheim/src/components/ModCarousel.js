import React, { useState } from 'react';
import { useSprings, animated } from 'react-spring';
import ModCard from './ModCard';

const ModCarousel = ({ mods }) => {
    const [index, setIndex] = useState(0);

    const to = (i) => {
        const position = (i - index) % mods.length;
        const angle = (position * 360) / mods.length;
        return `rotateY(${angle}deg) translateZ(300px)`;
    };

    const springs = useSprings(
        mods.length,
        mods.map((_, i) => ({
            transform: to(i),
            config: { mass: 5, tension: 500, friction: 80 },
        })),
    );

    const handleScroll = (e) => {
        if (e.deltaY > 0) {
            setIndex((prevIndex) => (prevIndex + 1) % mods.length);
        } else {
            setIndex((prevIndex) => (prevIndex - 1 + mods.length) % mods.length);
        }
    };

    return (
        <div
            onWheel={handleScroll}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                perspective: '1000px',
                height: '400px',
            }}
        >
            {springs.map((spring, i) => (
                <animated.div style={spring} key={i} className={i === index ? 'active-card' : ''}>
                    <ModCard mod={mods[i]} />
                </animated.div>
            ))}
        </div>
    );
};

export default ModCarousel;
