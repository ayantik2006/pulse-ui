import React, { useState } from 'react';
import {motion} from "framer-motion"
import { Card,CardContent,CardDescription,CardFooter,CardTitle } from './CardStructure/Card'
function Card3() {
    const [isOpen,setIsOpen] = useState(false);

  return (
    <div>
      <motion.div>
       <Card >
        <CardTitle>Op</CardTitle>
        <CardContent>
               <CardDescription></CardDescription>
        </CardContent>
        
       </Card>
       </motion.div>
    </div>
  )
}

export default Card3
