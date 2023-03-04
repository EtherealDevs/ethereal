import Star from './Star.jsx'
import { useMemo } from 'react';

  

const StarField = ({ numStars }) => {
  const stars = useMemo(() => {
    return Array.from({ length: numStars }, (_, i) => (
      <Star key={i} size={Math.floor(Math.random() * 20) + 1} speed={(i + 1) * 0.0001} />
    ));
  }, [numStars]);

  return (
    <div className='bg-background' style={{ position: 'fixed', width: '100%', height: '100%', overflow: 'hidden' }}>
      {stars}
    </div>
  );
};
  export default StarField
  
