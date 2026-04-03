// "use client"

// import { useState } from "react"

// export default function FoldCard() {
//   const [open, setOpen] = useState(false)

//   return (
//     <div
//       className="w-[300px] h-[400px] mt-10"
//       style={{ perspective: "1000px" }}
//     >
//       <div className="relative w-full h-full">

//         {/* BACK PAGE */}
//         <div className="absolute inset-0 bg-white border rounded-lg p-5 shadow">
//           <h2 className="text-lg font-semibold mb-2">Inside</h2>
//           <p className="text-sm text-gray-600">
//             This is the content inside the card. Keep it simple and readable.
//           </p>
//         </div>

//         {/* FRONT COVER */}
//         <div
//           onClick={() => setOpen(!open)}
//           className="absolute inset-0 bg-black text-white rounded-lg flex items-center justify-center cursor-pointer"
//           style={{
//             transformOrigin: "left",
//             transform: open ? "rotateY(-160deg)" : "rotateY(0deg)",
//             transition: "transform 0.5s ease",
//             backfaceVisibility: "hidden",
//           }}
//         >
//           <span className="text-lg font-semibold">
//             {open ? "Close" : "Open"}
//           </span>
//         </div>

//       </div>
//     </div>
//   )
// }