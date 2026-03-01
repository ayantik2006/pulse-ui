import React from 'react'
import {motion} from 'framer-motion'
function Loader11() {
  return (
    <div>
       <div className="flex gap-2">
        <motion.div className="w-4 h-4 rounded-full bg-neutral-700 border-black border-2" animate={{y:["4px","-4px","4px"],backgroundColor: ["#000", "#fff", "#000"] }} transition={{duration:1, repeat:Infinity, }}/>
        <motion.div className="w-4 h-4 rounded-full bg-neutral-700 border-black border-2" animate={{y:["-4px","4px","-4px"],backgroundColor: ["#fff", "#000", "#fff"] }} transition={{duration:1, repeat:Infinity, }}/>
        <motion.div className="w-4 h-4 rounded-full bg-neutral-700 border-black border-2" animate={{y:["4px","-4px","4px"],backgroundColor: ["#000", "#fff", "#000"] }} transition={{duration:1, repeat:Infinity, }}/>
    </div>
    </div>
  )
}

export default Loader11
