import {createContext, useContext, useRef, useState} from "react";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import {
  API_URL,
  convertCanvasToImage,
  getCaptchaDelockFromLocalStorage,
  randomNumBetween1And9, setCaptchaDelockFromLocalStorage, sweetAlert
} from "../utils/index.js";
import Canvas from "../components/Canvas.jsx";
import styled from "styled-components";

const CaptchaContext = createContext();

const MySwal = withReactContent(Swal);


// eslint-disable-next-line react/prop-types
export const CaptchaProvider = ({ children }) => {


  const canvasRef = useRef(null);
  const [captchaDelock, setCaptchaDelock] = useState(getCaptchaDelockFromLocalStorage());


  const handleCheckCaptcha = async () => {
    if (!captchaDelock) {
      const nbr = randomNumBetween1And9();
      MySwal.fire({
        title : "Captcha :",
        html : <div>
          <ResetH5>To unlock the captcha, you must draw the number <b>{nbr}</b> ! </ResetH5>
          <Canvas style={{marginTop : "20px"}} ref={canvasRef} setUserHasDrawn={() => {}} isCaptcha={true} />
        </div>,
        showDenyButton: true,
        showConfirmButton: true,
        confirmButtonText: `Valider`,
        denyButtonText: `Annuler`,
      }).then( async (event) => {
        if (event.isConfirmed) {
          const image = await convertCanvasToImage(canvasRef);
          const formData = new FormData();
          formData.append("image", image);
          const response = await fetch(API_URL + "/recognize_digit/", {
            method: "POST",
            body: formData
          })
          const data = await response.json();

          if (data.digit && data.confidence) {
            if (data.digit === nbr) {
              setCaptchaDelockFromLocalStorage(true);
              setCaptchaDelock(true);
              Swal.fire({
                title: 'Good job!',
                text: `You have unlocked the captcha !`,
                icon: 'success',
                confirmButtonText: 'Continue'
              })
              return true;
            } else {
              Swal.fire({
                title: 'Wrong number !',
                text: `You have not unlocked the captcha !`,
                icon: 'error',
              })
              return false;
            }
          } else {
            sweetAlert("error", data.error)
            return false;
          }
        }
      })
    } else {
      return true;
    }

  }


  return (
      <CaptchaContext.Provider value={{handleCheckCaptcha, captchaDelock}} >
          {children}
      </CaptchaContext.Provider>
  )

};


export const useCaptcha = () => {
  return useContext(CaptchaContext);
}

const ResetH5 = styled.h5`
  margin: 0;
  padding: 0;
`;
