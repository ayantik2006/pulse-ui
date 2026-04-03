"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Mail, Phone, MapPin } from "lucide-react"

export default function Card3() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div 
      layout
      className="w-[320px] rounded-2xl bg-white border border-gray-200 shadow-sm overflow-hidden p-2 cursor-pointer transition-shadow hover:shadow-md"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="p-3">
        <div className="flex items-center gap-4">
          <img 
            src="https://i.pravatar.cc/150?u=a042581f4e29026704b" 
            alt="profile" 
            className="w-12 h-12 rounded-full object-cover border border-gray-100"
          />
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 text-base">Sarah Jenkins</h3>
            <p className="text-gray-500 text-xs">Product Manager</p>
          </div>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="text-gray-400"
          >
            <ChevronDown size={20} />
          </motion.div>
        </div>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: "auto", marginTop: 16 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="text-gray-600 text-sm overflow-hidden border-t border-gray-100 pt-3"
            >
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex items-center gap-2 text-xs font-medium">
                  <Mail size={14} className="text-gray-400" />
                  sarah.j@example.com
                </div>
                <div className="flex items-center gap-2 text-xs font-medium">
                  <Phone size={14} className="text-gray-400" />
                  +1 (555) 123-4567
                </div>
                <div className="flex items-center gap-2 text-xs font-medium">
                  <MapPin size={14} className="text-gray-400" />
                  Seattle, WA
                </div>
              </div>
              <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                Leading cross-functional teams to deliver exceptional digital products. Always looking for the next big challenge.
              </p>
              <div className="flex gap-2">
                <button 
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 py-1.5 bg-black text-white text-xs font-semibold rounded-lg hover:bg-gray-800 transition-colors shadow-sm cursor-pointer"
                >
                  Message
                </button>
                <button 
                  onClick={(e) => e.stopPropagation()}
                  className="flex-1 py-1.5 bg-gray-100 text-black text-xs font-semibold rounded-lg hover:bg-gray-200 transition-colors shadow-sm cursor-pointer"
                >
                  View Profile
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}