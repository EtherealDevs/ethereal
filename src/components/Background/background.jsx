import Star from './Star.jsx'
import { useMemo } from 'react';

  

  const StarField = ({ numStars }) => {
    const stars = useMemo(() => {
      return Array.from({ length: numStars }, (_, i) => (
        <Star key={i} speed={(i + 1) * 0.001} />
      ));
    }, [numStars]);
  
    return (
      <div style={{ position: 'fixed', width: '100%', height: '100%', overflow: 'hidden' }} className="bg-black">
        {stars}
      </div>
    );
  };
  export default StarField
  
