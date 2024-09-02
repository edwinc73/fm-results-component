import { useEffect, useState } from "react";
import data from "../data.json";
import SummaryItem from "./SummaryItem";
import Button from "./Button";

function Summary() {
  console.log(data);

  const [coloredData, setColoredData] = useState(data);
  const bgColors = [
    "bg-light-red",
    "bg-orange-yellow",
    "bg-green-teal",
    "bg-cobalt-blue",
  ];
  const textColors = [
    "text-light-red",
    "text-orange-yellow",
    "text-green-teal",
    "text-cobalt-blue",
  ];

  // add color to data

  useEffect(() => {
    setColoredData((prev) =>
      prev.map((item, index) => {
        return {
          ...item,
          bgColor: bgColors[index],
          textColor: textColors[index],
        };
      })
    );
  }, []);

  return (
    <section
      id="summary"
      className="p-7 rounded-b-[2rem] md:rounded-l-[0rem] md:rounded-r-[2rem] flex-col flex gap-6 md:w-1/2 md:p-9"
    >
      <h1 className="text-dark-blue font-hanken font-bold text-xl">Summary</h1>
      <div className="flex flex-col gap-3">
        {coloredData.map((item) => (
          <SummaryItem data={item} key={item.category} />
        ))}
      </div>
      <Button>Continue</Button>
    </section>
  );
}

export default Summary;
