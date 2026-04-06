import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

function DatePicker1({
  selectedDate,
  selectedMonth,
  selectedYear,
}: {
  selectedDate: (date: number) => void;
  selectedMonth: (date: number) => void;
  selectedYear: (date: number) => void;
}) {
  const [currentDate, setCurrentDate] = useState(new Date().getDate());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const startingDay = new Date(currentYear, currentMonth - 1, 1).getDay() + 1;
  const noOfDays = new Date(currentYear, currentMonth, 0).getDate();
  const [days, setDays] = useState<Array<number | null>>([]);
  const [tempSelectedDate, setTempSelectedDate] = useState(currentDate);

  const months = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    const newDays: Array<number | null> = [];
    for (let i = 1; i < startingDay; i++) {
      newDays.push(null);
    }
    for (let i = 1; i <= noOfDays; i++) {
      newDays.push(i);
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setDays(newDays);
  }, [currentMonth, currentYear, noOfDays, startingDay]);

  useEffect(() => {
    selectedDate(new Date().getDate());
    selectedMonth(new Date().getMonth() + 1);
    selectedYear(new Date().getFullYear());
  }, []);

  return (
    <div className="p-1 border-2 rounded dark:border-neutral-700 w-fit dark:bg-neutral-900 dark:text-neutral-100">
      <div className="flex flex-col gap-1 items-center px-4 py-4 border-2 rounded border-neutral-300 dark:border-neutral-700">
        <div className="flex items-center justify-between gap-18 mb-4">
          <button
            className="cursor-pointer bg-neutral-200 ml-3 rounded-full p-2 hover:bg-neutral-300 duration-300 dark:bg-neutral-800 dark:hover:opacity-90"
            onClick={() => {
              if (currentMonth === 1) {
                setCurrentMonth(12);
                setCurrentYear((prev) => {
                  return prev - 1;
                });
              } else {
                setCurrentMonth((prev) => {
                  return prev - 1;
                });
              }
            }}
          >
            <ChevronLeft size={14} />
          </button>
          <p className="text-xl font-semibold">
            {months[currentMonth] + " " + currentYear}
          </p>
          <button
            className="cursor-pointer bg-neutral-200 hover:bg-neutral-300 duration-300 mr-3 rounded-full p-2 dark:bg-neutral-800 dark:hover:opacity-90"
            onClick={() => {
              if (currentMonth === 12) {
                setCurrentMonth(1);
                setCurrentYear((prev) => {
                  return prev + 1;
                });
              } else {
                setCurrentMonth((prev) => {
                  return prev + 1;
                });
              }
            }}
          >
            <ChevronRight size={14} />
          </button>
        </div>
        <div className="flex gap-[1.5rem]">
          <p className="text-lg font-semibold text-red-600">Su</p>
          <p className="text-lg font-semibold">Mo</p>
          <p className="text-lg font-semibold">Tu</p>
          <p className="text-lg font-semibold">We</p>
          <p className="text-lg font-semibold">Th</p>
          <p className="text-lg font-semibold">Fr</p>
          <p className="text-lg font-semibold">Sa</p>
        </div>
        <div className="grid grid-cols-7 gap-3">
          {days.map((day, index) => (
            <div
              key={index}
              className={`flex items-center justify-center p-1 w-9 h-9 text-center rounded cursor-pointer ${day === tempSelectedDate && day !== currentDate ? "bg-neutral-300 dark:bg-neutral-950" : ""} ${day === currentDate && currentMonth === new Date().getMonth() + 1 ? "bg-blue-900 text-white font-semibold" : "duration-300 "} ${day !== tempSelectedDate && day!==currentDate ? "hover:bg-neutral-200 dark:hover:bg-neutral-800" : ""}`}
              onClick={() => {
                setTempSelectedDate(Number(day) || 0);
                selectedDate(Number(day) || 0);
                selectedMonth(currentMonth);
                selectedYear(currentYear);
              }}
            >
              <p className={`${index % 7 === 0 ? "text-red-600" : ""}`}>
                {day || ""}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DatePicker1;
