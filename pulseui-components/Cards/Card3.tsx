// import React, { useState } from 'react';
// import {motion} from "framer-motion"
// import { Card,CardContent,CardDescription,CardFooter,CardTitle } from './CardStructure/Card'
// function Card3() {
//     const [isOpen,setIsOpen] = useState(false);
//     const variants = {
//         open: {
//             height: "auto",
//             opacity: 1,
//         },
//         closed: {
//             height: 0,
//             opacity: 0,
//         },
//     };
//   return (
//     <div>
//       <motion.div>
//        <Card >
//         <CardTitle>Card 3</CardTitle>
//         <CardContent>
//                <CardDescription>Card 3</CardDescription>
//         </CardContent>
//         <CardFooter>
//             <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>
//         </CardFooter>
//         <motion.div
//             variants={variants}
//             initial="closed"
//             animate={isOpen ? "open" : "closed"}
//         >
//             <CardContent>
//                 <CardDescription>Card 3</CardDescription>
//             </CardContent>
//         </motion.div>
//        </Card>
//        </motion.div>
//     </div>
//   )
// }

// export default Card3
