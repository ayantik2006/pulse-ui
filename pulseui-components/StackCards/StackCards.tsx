import { animate, LayoutGroup, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

function StackCards() {
  const x = useMotionValue(0);
  const [images, setImages] = useState([
    "https://img.magnific.com/free-photo/waterfall-chae-son-national-park-lampang-thailand_554837-639.jpg",
    "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=",
    "https://www.shutterstock.com/image-photo/serenity-summer-day-durmitor-national-600nw-2623341111.jpg",
    "https://i.pinimg.com/videos/thumbnails/originals/84/d0/1f/84d01f4c4031ea1af5211c32f0df54f0.0000000.jpg",
  ]);

  return (
    <LayoutGroup>
      <motion.div className="m-2">
        <motion.div className="flex gap-2">
          {[...images].map((img, index) => {
            return (
              <motion.div
                key={img}
                className="w-fit h-fit cursor-grab"
                whileTap={{
                  cursor: "grabbing",
                }}
                style={{
                  zIndex: 10 + index * 10,
                }}
              >
                <motion.div
                  className="absolute w-70 h-100"
                  layout
                  layoutId={img}
                  transition={{
                    layout: {
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    },
                  }}
                  style={{
                    bottom: -index * 10,
                    x: index == images.length - 1 ? x : 0,
                  }}
                  drag={index == images.length - 1 ? "x" : undefined}
                  dragConstraints={{
                    left: -288,
                    right: 288,
                  }}
                  initial={{
                    x: 0,
                  }}
                  onDragEnd={async (_, data) => {
                    if (Math.abs(data.offset.x) < 288) {
                      animate(x, 0, {
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      });
                    } else {
                    //   animate(x,280,{
                    //     duration:0.16,
                    //     type:"spring"
                    //   }) 
                      setImages((prev) => {
                        const temp = [...prev];
                        const last = temp.pop();

                        if (last) temp.unshift(last);

                        return temp;
                      });
                    }
                  }}
                >
                  <Image
                    src={img}
                    fill
                    alt="image"
                    draggable={false}
                    className="object-cover p-2 bg-white rounded-md shadow-[0_0_3px_gray]"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </LayoutGroup>
  );
}

export default StackCards;
