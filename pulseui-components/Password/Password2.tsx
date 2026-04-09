import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Check, Eye, EyeOff, LockKeyhole, X } from "lucide-react";
import { useEffect, useState } from "react";

function Password2({
  onPasswordChange,
  passwordValid,
}: {
  onPasswordChange: (password: string) => void;
  passwordValid: (isValid: boolean) => void;
}) {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isCond1True, setIsCond1True] = useState(false);
  const [isCond2True, setIsCond2True] = useState(false);
  const [isCond3True, setIsCond3True] = useState(false);
  const [isCond4True, setIsCond4True] = useState(false);
  const [percentDisplay, setPercentDisplay] = useState(0);

  useEffect(() => {
    let successValue = 0;
    if (isCond1True) successValue++;
    if (isCond2True) successValue++;
    if (isCond3True) successValue++;
    if (isCond4True) successValue++;
    if (successValue === 4) passwordValid(true);
    else passwordValid(false);
  }, [isCond1True, isCond2True, isCond3True, isCond4True, passwordValid]);

  return (
    <div className="w-full">
      <div className="flex flex-col gap-6">
        <div
          className={`duration-300 rotate-45 w-25 h-25 bg-transparent border-8 rounded-full mx-auto flex items-center justify-center ${percentDisplay == 1 ? "dark:border-t-white border-t-neutral-800" : ""} ${percentDisplay == 2 ? "dark:border-t-white dark:border-r-white border-t-neutral-800 border-r-neutral-800" : ""} ${percentDisplay == 3 ? "dark:border-t-white dark:border-r-white dark:border-b-white border-t-neutral-800 border-r-neutral-800 border-b-neutral-800" : ""} ${percentDisplay == 4 ? "dark:border-t-white dark:border-r-white dark:border-b-white dark:border-l-white border-t-neutral-800 border-r-neutral-800 border-b-neutral-800 border-l-neutral-800" : ""}`}
        >
          <p className="text-2xl dark:text-neutral-300 -rotate-45 font-semibold text-neutral-800">
            {(percentDisplay * 100) / 4}%
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <InputGroup className="w-full border-2 border-neutral-400">
            <InputGroupInput
              placeholder="Password"
              id="password"
              className="selection:bg-blue-700"
              type={isPasswordVisible ? "text" : "password"}
              onInput={(e) => {
                const passwd = e.currentTarget.value;
                setPassword(passwd);
                onPasswordChange(passwd);
                const c1 = passwd.length >= 8;
                let c2 = false;
                let c3 = false;
                let c4 = false;
                for (const char of passwd) {
                  const ascii = char.charCodeAt(0);
                  if (ascii >= 65 && ascii <= 90) {
                    c4 = true;
                  } else if (ascii >= 97 && ascii <= 122) {
                    c3 = true;
                  } else if (ascii >= 48 && ascii <= 57) {
                    c2 = true;
                  }
                }
                setIsCond1True(c1);
                setIsCond2True(c2);
                setIsCond3True(c3);
                setIsCond4True(c4);
                setPercentDisplay(0);
                if (c1) setPercentDisplay((prev) => prev + 1);
                if (c2) setPercentDisplay((prev) => prev + 1);
                if (c3) setPercentDisplay((prev) => prev + 1);
                if (c4) setPercentDisplay((prev) => prev + 1);
              }}
            />
            <InputGroupAddon>
              <LockKeyhole />
            </InputGroupAddon>
            <InputGroupAddon
              align="inline-end"
              className="cursor-pointer"
              onClick={() => {
                setIsPasswordVisible((prev) => !prev);
              }}
            >
              {isPasswordVisible && <EyeOff />}
              {!isPasswordVisible && <Eye />}
            </InputGroupAddon>
          </InputGroup>
          <div className="flex flex-col">
            <h1 className="text-sm font-semibold text-neutral-600 dark:text-neutral-300  mb-3">
              Must Contain:
            </h1>
            <div className="flex flex-col gap-3 pl-1">
              <div
                className={`flex items-center gap-1 ${isCond1True ? "border border-green-900 p-2 pb-3 rounded-md dark:bg-[#011e05] bg-green-100 " : "border border-neutral-800 p-2 pb-3 rounded-md"}`}
              >
                <div>
                  {isCond1True ? (
                    <Check size={12} className="mt-[0.4rem] stroke-green-700" />
                  ) : (
                    <X size={12} className="mt-[0.4rem] stroke-neutral-600" />
                  )}
                </div>
                <p
                  className={`text-[0.75rem] mt-[0.3rem] ${isCond1True ? "text-green-700" : "text-neutral-600"}`}
                >
                  At least 8 characters
                </p>
              </div>
              <div
                className={`flex items-center gap-1 ${isCond2True ? "border border-green-900 p-2 pb-3 rounded-md dark:bg-[#011e05] bg-green-100" : "border border-neutral-800 p-2 pb-3 rounded-md"}`}
              >
                <div>
                  {isCond2True ? (
                    <Check size={12} className="mt-[0.4rem] stroke-green-700" />
                  ) : (
                    <X size={12} className="mt-[0.4rem] stroke-neutral-600" />
                  )}
                </div>
                <p
                  className={`text-[0.75rem] mt-[0.3rem] ${isCond2True ? "text-green-700" : "text-neutral-600"}`}
                >
                  At least 1 number
                </p>
              </div>
              <div
                className={`flex items-center gap-1 ${isCond3True ? "border border-green-900 p-2 pb-3 rounded-md dark:bg-[#011e05] bg-green-100" : "border border-neutral-800 p-2 pb-3 rounded-md"}`}
              >
                <div>
                  {isCond3True ? (
                    <Check size={12} className="mt-[0.4rem] stroke-green-700" />
                  ) : (
                    <X size={12} className="mt-[0.4rem] stroke-neutral-600" />
                  )}
                </div>
                <p
                  className={`text-[0.75rem] mt-[0.3rem] ${isCond3True ? "text-green-700" : "text-neutral-600"}`}
                >
                  At least 1 lowercase letter
                </p>
              </div>
              <div
                className={`flex items-center gap-1 ${isCond4True ? "border border-green-900 p-2 pb-3 rounded-md dark:bg-[#011e05] bg-green-100" : "border border-neutral-800 p-2 pb-3 rounded-md"}`}
              >
                <div>
                  {isCond4True ? (
                    <Check size={12} className="mt-[0.4rem] stroke-green-700" />
                  ) : (
                    <X size={12} className="mt-[0.4rem] stroke-neutral-600" />
                  )}
                </div>
                <p
                  className={`text-[0.75rem] mt-[0.3rem] ${isCond4True ? "text-green-700" : "text-neutral-600"}`}
                >
                  At least 1 uppercase letter
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Password2;
