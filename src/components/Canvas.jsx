import {useRef, useEffect, useState, forwardRef, useImperativeHandle} from 'react';
import styled from "styled-components";
import {useTools} from "../contexts/ToolsContext.jsx";
import {useCaptcha} from "../contexts/CaptchaContext.jsx";


// eslint-disable-next-line react/prop-types
const Canvas = ({setUserHasDrawn, isCaptcha ,  ...props}, ref) => {

  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const {
    handleCheckCaptcha,
    captchaDelock
  } = useCaptcha() || {};


  const {
    pencilWidth,
    backgroundColor,
    widthSize,
    heigthSize,
    pencilColor
  } = useTools() || {};

  // listEvents

  useEffect(() => {
    if (!isCaptcha) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      context.fillStyle = backgroundColor;
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    }
  }, [backgroundColor, isCaptcha]);

  useEffect(() => {
    if (!isCaptcha) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d')
      context.canvas.height = heigthSize;
      context.canvas.width = widthSize;
      context.fillStyle = backgroundColor;
      context.fillRect(0, 0, context.canvas.width, context.canvas.height)
    }
  }, [widthSize, heigthSize, isCaptcha]);



  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    context.canvas.height = !isCaptcha ? heigthSize : 200;
    context.canvas.width = !isCaptcha ? widthSize : 200;
    context.fillStyle = !isCaptcha ? backgroundColor : "#000000";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height)
  }, [])


  useEffect(() => {

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    context.strokeStyle = 'white';
    context.lineJoin = 'round';
    context.lineWidth = !isCaptcha ? pencilWidth : 8;

    const startDrawing = (e) => {
      setIsDrawing(true);
      context.beginPath();
      if (!isCaptcha) {
        context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      } else {
        const canvasRect = canvas.getBoundingClientRect();
        context.moveTo(e.clientX - canvasRect.left, e.clientY - canvasRect.top);

      }
    };

    const draw = (e) => {
      if (!isDrawing) return;
      setUserHasDrawn(true);
      context.strokeStyle = !isCaptcha ? pencilColor : "#ffffff";

      if (!isCaptcha) {
        context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      } else {
        const canvasRect = canvas.getBoundingClientRect();
        context.lineTo(e.clientX - canvasRect.left, e.clientY - canvasRect.top);
      }

      if (!isCaptcha && !captchaDelock) {
        handleCheckCaptcha();
      } else {
        context.stroke();
      }

    };

    const stopDrawing = () => {
      setIsDrawing(false);
      context.closePath();
    };

    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    window.addEventListener("click", (e) => {
      if (isDrawing) {
        stopDrawing(e);
      }
    })

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

      context.fillStyle = !isCaptcha ? backgroundColor : "#000000";
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
  display: flex;
  justify-content: center;
  align-items: center;
`;