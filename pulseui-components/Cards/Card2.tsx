"use client"
import { Card, CardContent, CardFooter, CardTitle, CardDescription } from "./CardStructure/Card"

export default function Card2() {
  return (
    <Card className="w-[320px] rounded-2xl shadow-lg border border-neutral-100 bg-white overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-400 w-full" />
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="bg-blue-50 text-blue-600 font-bold px-3 py-1 rounded-full text-xs">
            Full-time
          </div>
          <div className="text-gray-400 text-sm">2d ago</div>
        </div>
        <CardTitle className="text-xl font-bold text-gray-800">Senior Frontend Engineer</CardTitle>
        <CardDescription className="mt-1 text-gray-500 text-sm font-medium">
          Tech Nova Inc. • San Francisco, CA (Remote)
        </CardDescription>

        <div className="mt-6 flex flex-wrap gap-2 text-xs text-gray-600 font-medium">
          <span className="bg-gray-100 px-2 py-1 rounded-md">React</span>
          <span className="bg-gray-100 px-2 py-1 rounded-md">TypeScript</span>
          <span className="bg-gray-100 px-2 py-1 rounded-md">Tailwind</span>
        </div>
      </CardContent>

      <div className="border-t border-gray-100 w-full" />

      <CardFooter className="p-6 flex justify-between items-center bg-gray-50/50">
        <span className="text-lg font-bold text-gray-800">$120k <span className="text-sm font-medium text-gray-500">/ yr</span></span>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-xl transition-colors text-sm shadow-sm hover:shadow-md cursor-pointer">
          Apply Now
        </button>
      </CardFooter>
    </Card>
  )
}