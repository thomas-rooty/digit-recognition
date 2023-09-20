import Swal from 'sweetalert2'
import ImageOne from '../assets/predi/one.png';
import ImageTwo from '../assets/predi/two.png';
import ImageThree from '../assets/predi/three.png';
import ImageFour from '../assets/predi/four.png';
import ImageFive from '../assets/predi/five.png';
import ImageSix from '../assets/predi/six.png';
import ImageSeven from '../assets/predi/seven.png';
import ImageEight from '../assets/predi/eight.png';
import ImageNine from '../assets/predi/nine.png';


export const API_URL = "https://djangoai.eu-4.evennode.com"

export const randomNumBetween1And9 = () => {
  return Math.floor(Math.random() * 9) + 1;
}

const getImageByNumber = (number) => {
  switch (number) {
    case 1:
      return ImageOne;
    case 2:
      return ImageTwo;
    case 3:
      return ImageThree;
    case 4:
      return ImageFour;
    case 5:
      return ImageFive;
    case 6:
      return ImageSix;
    case 7:
      return ImageSeven;
    case 8:
      return ImageEight;
    case 9:
      return ImageNine;
    default:
      return ImageOne;
  }
}

export const sweetAlert = (status, predi, acc, idPredi) => {

  if (status === "error") {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  } else if (status === "predi") {
    Swal.fire({
      title: 'Your predi is ' + (acc * 100).toFixed(2) + '%',
      text: 'If is not correct, please click on the red button to say us the correct number. If is correct, please click on the correct button to do again.',
      imageUrl: getImageByNumber(predi),
      imageWidth: 64,
      imageHeight: 64,
      imageAlt: 'Your predi is ' + predi,
      showDenyButton: true,
      confirmButtonText: `Correct`,
      denyButtonText: `Predict error`,
    }).then((result) => {
      if (result.isDenied) {
        Swal.fire({
          title: 'Please, write the correct number',
          input: 'text',
          inputAttributes: {
            autocapitalize: 'off'
          },
          showCancelButton: true,
          confirmButtonText: 'Send',
          showLoaderOnConfirm: true,
          preConfirm: async (number) => {
            const req = await fetch(API_URL + "/edit_preditction/", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                id: idPredi,
                label: number
              })
            })
            const res = await req.json()

            if (res.status === "success") {
              Swal.fire({
                title: 'Thanks for helping us!',
                text : 'By helping us, you are helping the world!',
                icon: 'success'
              })
            } else {
              Swal.fire({
                title: 'Oops...',
                text : 'Something went wrong!',
                icon: 'error'
              })
            }
          }
        })
      }
    })
  }

};

export const getCaptchaDelockFromLocalStorage = () => {
  console.log(localStorage.getItem("captchadelock") ?? false);
  return localStorage.getItem("captchadelock") ?? false;
}

export const setCaptchaDelockFromLocalStorage = (value) => {
  localStorage.setItem("captchadelock", value);
}

export const convertCanvasToImage = async (canvas) => {
  const image = canvas.current.submitCanvas();
  return await fetch(image).then(r => r.blob());
}