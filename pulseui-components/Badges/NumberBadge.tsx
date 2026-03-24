function NumberBadge({number}:{number:number}) {
  return (
    <div className={`bg-red-600 text-white font-semibold flex items-center justify-center rounded-full p-1 ${number>=99?"w-8 h-8":"w-6 h-6"} `}>
        <p className="text-[0.8rem]">
            {number<=99?number:"99+"}
        </p>
    </div>
  )
}

export default NumberBadge