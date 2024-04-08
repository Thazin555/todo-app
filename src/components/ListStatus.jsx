import React from "react";

const ListStatus = (props) => {
  return (
    <div className={`mt-auto text-end px-5 pb-5 ${props.toggleDark ? "dark:text-slate-300": "text-slate-900"}`}>
      {props.tasks.filter((task) => task.isDone === true).length} /{" "}
      {props.tasks.length} todos completed
    </div>
  );
};

export default ListStatus;
