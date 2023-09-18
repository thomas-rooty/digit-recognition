import {useRef, useEffect, useState, forwardRef, useImperativeHandle} from 'react';
import styled from "styled-components";


// eslint-disable-next-line react/prop-types
const Canvas = ({setUserHasDrawn, ...props}, ref) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.canvas.height = 300;
    context.canvas.width = 300;
    context.fillStyle = '#000000'
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.strokeStyle = 'white';
    context.lineJoin = 'round';
    context.lineWidth = 8;

    const startDrawing = (e) => {
      setIsDrawing(true);
      context.beginPath();
      context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    };

    const draw = (e) => {
      if (!isDrawing) return;
      setUserHasDrawn(true);
      context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      context.stroke();
    };

    const stopDrawing = () => {
      setIsDrawing(false);
      context.closePath();
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    return () => {
      canvas.removeEventListener('mousedown', startDrawing);
      canvas.removeEventListener('mousemove', draw);
      canvas.removeEventListener('mouseup', stopDrawing);
      canvas.removeEventListener('mouseout', stopDrawing);
    };
  }, [isDrawing]);

  useImperativeHandle(ref, () => ({
    clearCanvas() {
      setUserHasDrawn(false);
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');

      context.fillStyle = '#000000';
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    },
    submitCanvas() {
      const canvas = canvasRef.current;
      return canvas.toDataURL();
    }
  }));

  return (<ContainerCanvas>
    <canvas ref={canvasRef} {...props} />
  </ContainerCanvas>);
};


export default forwardRef(Canvas);


const ContainerCanvas = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;