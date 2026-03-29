function BasicLoader({color="black",size=40, thickness=6}) {
  return (
    <div className={`rounded-full animate-spin z-0`}
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