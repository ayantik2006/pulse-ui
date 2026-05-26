import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

interface itemsType {
  id: string;
  label: string;
}

function FilterSelector({
  items,
  onSelection,
}: {
  items: itemsType[];
  onSelection: (values: number[]) => void;
}) {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  return (
    <div>
      <div className="flex gap-2 flex-wrap w-full max-w-100 mb-5">
        {selectedItems.map((selectedItem, index) => {
          return (
            <motion.div
              key={selectedItem}
              layoutId={`filter-${selectedItem}`}
              className="bg-neutral-400/10 dark:bg-neutral-800 px-3 py-1.5 rounded-4xl border border-neutral-500 border-dashed cursor-pointer flex items-center"
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 30,
              }}
            >
              <p className="text-sm">{items[selectedItem].label}</p>
              <X
                size={12}
                className="ml-2.5 mt-[0.1rem] stroke-neutral-500 hover:stroke-neutral-800 dark:hover:stroke-white"
                onClick={() => {
                  setSelectedItems((prev) =>
                    {
                        const newList=prev.filter((item) => item != selectedItem);
                        onSelection(newList);
                        return newList;
                    },
                  );
                }}
              />
            </motion.div>
          );
        })}
      </div>
      <div className="w-full max-w-100 h-fit p-4 border-2 rounded-md flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <p className="text-sm font-semibold">Select filter</p>
          <button
            className="text-sm text-neutral-500 cursor-pointer hover:text-neutral-800 dark:hover:text-white/50 duration-300"
            onClick={() => {
              setSelectedItems([]);
              onSelection([]);
            }}
          >
            Clear filters
          </button>
        </div>
        <div className="flex gap-2 flex-wrap">
          {selectedItems.length == items.length && (
            <div>
              <p className="text-neutral-600 text-sm italic">All filters selected </p>
            </div>
          )}
          {items.map((item, index) => {
            if (!selectedItems.includes(index))
              return (
                <motion.div
                  key={index}
                  layoutId={`filter-${index}`}
                  className="bg-neutral-400/10 dark:bg-neutral-800 px-3 py-1.5 rounded-4xl border border-neutral-500 border-dashed cursor-pointer"
                  onClick={() => {
                    setSelectedItems((prev) => {
                        const newList=[...prev, index];
                        onSelection(newList);
                        return newList;
                    });
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                  }}
                >
                  <p className="text-sm">{item.label}</p>
                </motion.div>
              );
          })}
        </div>
      </div>
    </div>
  );
}

export default FilterSelector;
