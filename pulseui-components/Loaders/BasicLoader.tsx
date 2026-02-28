import { motion } from "framer-motion";

function BasicLoader({color="black",size=10, thickness=4}) {
  return (
    <div className={`rounded-full animate-spin`}
    style={{
        borderTopColor:color,
        borderWidth:thickness+"px",
        height:size+"px",
        width:size+"px"
    }}>
    </div>
  )
}

export default BasicLoader