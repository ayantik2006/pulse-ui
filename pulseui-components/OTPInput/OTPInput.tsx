import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";

function OTPInput({
  digits,
  setOtp,
}: {
  digits: number;
  setOtp: (val: number) => void;
}) {
  const [countArr, setCountArr] = useState<Array<number>>([]);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    for (let x = 1; x <= digits; x++) {
      setCountArr((prev) => [...prev, x]);
    }
  }, []);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  return (
    <div className="flex gap-1 items-center justify-center w-fit h-fit rounded-md">
      {countArr.map((value, index) => {
        return (
          <div key={index} className="flex items-center gap-2">
            <Input
              min={0}
              max={9}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              onPaste={(e) => {
                const value = e.clipboardData.getData("text");
                const numValue = Number(value);
                console.log(numValue);
                if (Number.isNaN(numValue)) return;
                if (value.length === digits) {
                  for (let x = 0; x < digits; x++) {
                    const inputRef = inputRefs.current[x];
                    if (inputRef) {
                      inputRef.value = value.charAt(x);
                    }
                  }
                } else {
                  e.preventDefault();
                  return;
                }
              }}
              onKeyDown={(e) => {
                const key = e.key;
                if (
                  key == "Backspace" &&
                  inputRefs.current[index]?.value === "" &&
                  index !== 0
                ) {
                  e.preventDefault();
                  inputRefs.current[index - 1]?.focus();
                }
                if(key==="ArrowRight" && value!==digits){
                    inputRefs.current[index + 1]?.focus();
                }
                if(key==="ArrowLeft" && value!==1){
                    inputRefs.current[index - 1]?.focus();
                }
              }}
              onInput={(e) => {
                if (
                  e.currentTarget.value == "" ||
                  e.currentTarget.value == " "
                ) {
                  e.currentTarget.value = "";
                  return;
                }

                if (Number.isNaN(Number(e.currentTarget.value))) {
                  if (!Number.isNaN(Number(e.currentTarget.value.charAt(0)))) {
                    e.currentTarget.value = e.currentTarget.value.charAt(0);
                    return;
                  }
                }

                const value = Number(e.currentTarget.value);
                if (Number.isNaN(value)) {
                  e.currentTarget.value = "";
                  console.log(value.toString());
                  return;
                }
                if (value > 9) {
                  e.currentTarget.value = value.toString().charAt(0);
                  return;
                }
                inputRefs.current[index + 1]?.focus();
              }}
              onChange={() => {
                let otp = "";
                for (let x = 0; x < digits; x++) {
                  if (inputRefs.current[x]?.value)
                    otp += inputRefs.current[x]?.value;
                }
                setOtp(Number(otp));
              }}
              className={`w-full max-w-12 h-12 p-4 flex items-center justify-center outline-none border-2 border-neutral-400 dark:border-neutral-600 text-2xl ${value == 1 ? "rounded-l-md" : ""} ${value == digits ? "rounded-r-md" : ""} ${value == 1 ? "" : ""}`}
            />
            {/* {value!==digits && <div className="w-3 h-[2px] dark:bg-neutral-600 bg-neutral-400 rounded-sm" />} */}
          </div> 
        );
      })}
    </div>
  );
}

export default OTPInput;
