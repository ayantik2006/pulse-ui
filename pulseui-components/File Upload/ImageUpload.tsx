import { ImageUp, Paperclip, Upload, X } from "lucide-react";
import { useRef, useState } from "react";
import Image from "next/image";

function ImageUpload() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedImagePath,setSelectedImagePath]=useState("");

  return (
    <div className="flex flex-col gap-2">
      <div
        className={`max-w-[22rem] h-[7rem] border-2 border-neutral-300 rounded-lg border-dashed flex flex-col items-center justify-center cursor-pointer duration-300 hover:bg-neutral-100 gap-2 ${isDragging ? "border-neutral-800 bg-neutral-100" : ""}`}
        onClick={() => {
          fileInputRef.current?.click();
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={(e) => {
          e.preventDefault();
          setIsDragging(false);
        }}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          setFiles(Array.from(e.dataTransfer.files));
        }}
      >
        <ImageUp
          className={`stroke-neutral-500 duration-300 ${isDragging ? "drop-shadow-[5px_7px_2px_gray] -translate-1" : ""} `}
          size={32}
        />
        <p className="text-[0.9rem] font-semibold text-neutral-500 text-center px-2">
          Click to upload or drag and drop image files
        </p>
        <input
          type="file"
          className="hidden"
          accept="image/*"
          ref={fileInputRef}
          multiple={true}
          onChange={(e) => {
            if (e.target.files) setFiles(Array.from(e.target.files));
          }}
          draggable
        />
      </div>
      {files.length !== 0 && (
        <div className="flex gap-2 flex-wrap">
          {files.map((file, index) => (
            <div
              className="bg-neutral-100 max-w-[22rem] h-12 rounded flex items-center justify-between gap-2 px-2"
              key={index}
            >
              <Image src={URL.createObjectURL(file)} width="40" height="40" alt="uploaded image" className="rounded cursor-pointer hover:scale-[1.05] duration-300" onClick={()=>{
                setSelectedImagePath(URL.createObjectURL(file));
              }}/>
              <X
                size={15}
                className="hover:stroke-red-700 cursor-pointer duration-300"
                onClick={() => {
                  const newFiles: File[] = [];
                  files.map((file2, index2) => {
                    if (index2 !== index) newFiles.push(file2);
                  });
                  setFiles(newFiles);
                }}
              />
            </div>
          ))}
        </div>
      )}
      {selectedImagePath!=="" && <div className="fixed inset-0 w-[100vw] h-[100vh] bg-[#ffffff16] z-80 backdrop-blur-[0.3rem] flex items-center justify-center" onClick={()=>{
        setSelectedImagePath("");
      }}>
        <div className="w-fit h-fit shadow-[0_0_8px_gray] rounded-md bg-white z-100">
            <Image src={selectedImagePath} height={600} width={600} alt="image selected" className="rounded-md"/>
        </div>
      </div>}
    </div>
  );
}

export default ImageUpload;
