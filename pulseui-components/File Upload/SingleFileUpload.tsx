import { Paperclip, Upload, X } from "lucide-react";
import { useRef, useState } from "react";

function SingleFileUpload({
  onFileChange,
}: {
  onFileChange: (files: File) => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div
        className={`max-w-[20rem] h-[7rem] border-2 border-neutral-300 rounded-lg border-dashed flex flex-col items-center justify-center cursor-pointer duration-300 hover:bg-neutral-100 gap-2 ${isDragging ? "border-neutral-800 bg-neutral-100" : ""}`}
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
          setFileName(e.dataTransfer.files?.[0].name);
          onFileChange(e.dataTransfer.files[0]);
        }}
      >
        <Upload
          className={`stroke-neutral-500 duration-300 ${isDragging ? "drop-shadow-[5px_7px_2px_gray] -translate-1" : ""} `}
          size={32}
        />
        <p className="text-[0.9rem] font-semibold text-neutral-500 text-center px-2">
          Click to upload or drag and drop
        </p>
        <input
          type="file"
          className="hidden"
          ref={fileInputRef}
          onChange={(e) => {
            setFileName(String(e.target.files?.[0]?.name));
            if (e.target.files?.[0]) onFileChange(e.target.files?.[0]);
          }}
          draggable
        />
      </div>
      {fileName !== "" && (
        <div className="bg-neutral-100 max-w-[20rem] h-8 rounded flex items-center justify-between gap-2 px-2">
          <Paperclip size={15} className=" stroke-neutral-600" />
          <p className="overflow-clip max-w-[16rem] h-7 text-neutral-500 ">
            {fileName}
          </p>
          <X
            size={15}
            className="hover:stroke-red-700 cursor-pointer duration-300"
            onClick={() => {
              if (fileInputRef.current) {
                fileInputRef.current.value = "";
              }
              setFileName("");
            }}
          />
        </div>
      )}
    </div>
  );
}

export default SingleFileUpload;
