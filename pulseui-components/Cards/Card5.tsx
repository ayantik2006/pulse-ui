"use client"
import { Card, CardContent, CardFooter, CardTitle, CardDescription } from "@/pulseui-components/Cards/CardStructure/Card"
import { Twitter, Github, Linkedin, MapPin } from "lucide-react"

export default function Card5() {
    return (
        <Card className="w-[320px] rounded-[2rem] bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border-none overflow-hidden group">
            <div className="relative h-32 w-full">
                <img
                    src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop"
                    alt="cover"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 p-1 bg-white rounded-full">
                    <img
                        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                        alt="profile"
                        className="w-20 h-20 rounded-full object-cover border-4 border-white"
                    />
                </div>
            </div>

            <CardContent className="pt-14 pb-6 px-6 text-center">
                <CardTitle className="text-xl font-extrabold text-gray-900">Alex Morgan</CardTitle>
                <CardDescription className="text-blue-600 font-medium text-sm mt-1">UX/UI Designer</CardDescription>

                <div className="flex items-center justify-center gap-1 text-gray-400 text-xs mt-3 font-medium">
                    <MapPin size={14} />
                    London, UK
                </div>

                <p className="mt-4 text-sm text-gray-500 leading-relaxed">
                    Crafting digital experiences that merge beauty with functionality. Coffee enthusiast.
                </p>
            </CardContent>

            <CardFooter className="px-6 pb-6 pt-0 flex justify-center gap-4">
                <button className="w-10 h-10 rounded-full bg-gray-50 text-gray-600 flex items-center cursor-pointer justify-center hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    <Twitter size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-50 text-gray-600 flex items-center cursor-pointer justify-center hover:bg-gray-100 hover:text-gray-900 transition-colors">
                    <Github size={18} />
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-50 text-gray-600 flex items-center cursor-pointer justify-center hover:bg-blue-50 focus:outline-none hover:text-blue-700 transition-colors">
                    <Linkedin size={18} />
                </button>
            </CardFooter>
        </Card>
    )
}