import Star from './Star.jsx'
import { useMemo } from 'react';

  

  const StarField = ({ numStars }) => {
    const stars = useMemo(() => {
      return Array.from({ length: numStars }, (_, i) => (
        <Star key={i} speed={(i + 1) * 0.0001} />
      ));
    }, [numStars]);
  
    return (
      <div style={{ position: 'fixed', width: '100%', height: '100%', overflow: 'hidden' }} className="bg-gradient-to-t from-black via-[#23182D] to-black">
        {stars}
      </div>
    );
  };
  export default StarField
  
