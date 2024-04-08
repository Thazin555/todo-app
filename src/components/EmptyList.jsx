import React from "react";
import EmptySvg from "../assets/icons/no-data.svg";

const EmptyList = (props) => {
  return (
    <div className="hidden last:block h-full overflow-auto">
      <img src={EmptySvg} className="w-64 mx-auto mt-[10%] mb-2" alt="" />
      <p className={`${props.toggleDark ? "dark:text-slate-200": "text-slate-900"} text-center tracking-wide`}>
        There are no todos
      </p>
    </div>
  );
};

export default EmptyList;
