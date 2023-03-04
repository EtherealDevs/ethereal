import { useEffect, useState } from 'react';

const Star = ({ size, speed }) => {
  const [position, setPosition] = useState({ x: Math.random() * 100, y: Math.random() * 100 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPosition(prevPosition => ({
        y: (prevPosition.y + speed) % 100,
        x: prevPosition.x
      }));
    }, 50);

    return () => clearInterval(intervalId);
  }, [speed]);

  return (
    <div
      style={{
        position: 'absolute',
        left: `${position.x}%`,
        top: `${position.y}%`,
        fontSize: size,
        color: 'white',
        textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px yellow, 0 0 70px yellow, 0 0 80px yellow, 0 0 100px yellow, 0 0 150px yellow',
      }}
    >
      .
    </div>
  );
};

export default Star 
  