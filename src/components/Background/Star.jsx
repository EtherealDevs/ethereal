import { useEffect, useState } from 'react';

const Star = ({ speed }) => {
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
      <div className='text-2xl' style={{ position: 'absolute', left: `${position.x}%`, top: `${position.y}%`, color: 'white' }}>
        .
      </div>
    );
  };

export default Star 
  