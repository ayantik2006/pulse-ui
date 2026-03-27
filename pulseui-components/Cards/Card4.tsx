// //reflective card
// import React,{useEffect} from 'react';
// import 


// function Card4() {
//       useEffect(() => {
//     let stream :any= null;

//     const startWebcam = async () => {
//       try {
//         stream = await navigator.mediaDevices.getUserMedia({
//           video: {
//             width: { ideal: 640 },
//             height: { ideal: 480 },
//             facingMode: 'user'
//           }
//         });

//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//       } catch (err) {
//         console.error('Error accessing webcam:', err);
//       }
//     };

//     startWebcam();

//     return () => {
//       if (stream) {
//         stream.getTracks().forEach(track => track.stop());
//       }
//     };
//   }, []);

//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Card4
