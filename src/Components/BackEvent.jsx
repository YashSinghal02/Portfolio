import React, { useEffect, useState, useCallback } from 'react';

const MovingShape = ({ onAnimationEnd }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const width = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
    const right = Math.floor(Math.random() * (window.innerWidth * 0.9 - (-50) + 1)) + (-50);
    const duration = Math.floor(Math.random() * (8 - 2 + 1)) + 4;
    const randomColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;

    setStyle({
      width: `${width}px`,
      right: `${right}px`,
      animationDuration: `${duration}s`,
      backgroundColor: randomColor,
    });
  }, []);

  return <div className="moving-shape" style={style} onAnimationEnd={onAnimationEnd} />;
};

const BackEvent = () => {
  const [shapes, setShapes] = useState([]);

  const createMovingShape = useCallback(() => {
    if (shapes.length > 9) return;
    setShapes(prevShapes => [...prevShapes, Date.now()]);
  }, [shapes]);

  const removeShape = useCallback((id) => {
    setShapes(prevShapes => prevShapes.filter(shapeId => shapeId !== id));
  }, []);

  useEffect(() => {
    createMovingShape();
    const interval = setInterval(createMovingShape, 4000);
    return () => clearInterval(interval);
  }, [createMovingShape]);

  return (
    <div>
      {shapes.map(id => (
        <MovingShape key={id} onAnimationEnd={() => removeShape(id)} />
      ))}
    </div>
  );
};

export default BackEvent;