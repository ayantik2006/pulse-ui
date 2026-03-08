"use client"

import Image from "next/image";

function Avatar1({src,alt,className, size}:{src:string,alt:string,className:string,size:number}) {
  return (
    <div className={`${className} w-${String(size)} h-${String(size)} bg-amber-700`}>
        {/* <Image className="rounded-full" src={src} height={size} width={size} alt=""/> */}

    </div>
  )
}

export default Avatar1