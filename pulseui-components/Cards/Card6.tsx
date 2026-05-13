"use client"

import { Card, CardContent } from "@/pulseui-components/Cards/CardStructure/Card"
import { ShoppingBag, Star } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export default function Card6() {
  const [activeSize, setActiveSize] = useState('M')

  return (
    <Card className="w-[320px] rounded-3xl bg-[#f6f6f6] border-none shadow-sm overflow-hidden isolate relative">
      {/* Decorative background blob */}
      <div className="absolute -top-20 -right-20 w-48 h-48 bg-orange-400 rounded-full blur-3xl opacity-20 -z-10" />

      <CardContent className="p-6 flex flex-col items-center">
        <div className="w-full flex justify-between items-center mb-4">
          <span className="bg-white px-3 py-1 rounded-full text-xs font-bold text-gray-800 shadow-sm flex items-center gap-1">
            <Star size={12} className="fill-orange-400 text-orange-400"/> 4.8
          </span>
          <button className="w-8 h-8 flex cursor-pointer items-center justify-center bg-white rounded-full text-gray-400 shadow-sm hover:text-red-500 transition-colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
        </div>

        <motion.img 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000" 
          className="w-[240px] h-[160px] object-contain drop-shadow-2xl rotate-[-15deg] hover:rotate-[-5deg] hover:scale-110 transition-all duration-500 my-4"
        />

        <div className="w-full text-left mt-4">
          <h3 className="text-2xl font-black text-gray-900 leading-tight">Nike Air Max</h3>
          <p className="text-gray-500 text-sm font-medium mt-1">Men's Running Shoes</p>
        </div>

        <div className="w-full flex gap-2 mt-5">
          {['S', 'M', 'L', 'XL'].map(size => (
            <button 
              key={size}
              onClick={() => setActiveSize(size)}
              className={`w-10 h-10 rounded-xl font-bold cursor-pointer text-sm transition-all ${
                activeSize === size 
                ? 'bg-neutral-900 text-white shadow-md' 
                : 'bg-white text-gray-600 hover:bg-neutral-200 shadow-sm'
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        <div className="w-full mt-6 flex gap-3">
          <div className="flex-1">
            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Price</p>
            <p className="text-2xl font-black text-gray-900 mt-1">$125</p>
          </div>
          <button className="flex-[2] cursor-pointer bg-orange-500 hover:bg-orange-600 text-white rounded-2xl flex items-center justify-center gap-2 font-bold shadow-lg shadow-orange-500/30 transition-all active:scale-95">
            <ShoppingBag size={18} />
            Buy Now
          </button>
        </div>
      </CardContent>
    </Card>
  )
}