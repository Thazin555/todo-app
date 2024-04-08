import React, { useState } from "react";

const List = (props) => {
  const [isEdit, setIsEdit] = useState(false);

  const [editText, setEditText] = useState(props.job);

  const handleCheck = () => {
    props.checkTask(props.id);
  };

  const handleDelBtn = () => {
    props.deleteTask(props.id);
  };

  const handleEditBtn = () => {
    setIsEdit(true);
  };

  const handleEditInput = (event) => {
    setEditText(event.target.value);
  };

  const handleNewJobUpdate = (event) => {
    // console.log(event.keyCode);
    if (event.keyCode === 13 || event.keyCode === 27) {
      props.editTask(props.id, editText);
      setIsEdit(false);
    }
  };

  return (
    <div
      className={`${
        props.isDone
          ? props.toggleDark
            ? "dark:bg-transparent dark:opacity-60"
            : "bg-gray-100 opacity-60"
          : ""
      } group border border-slate-400 flex items-center justify-between px-3 py-2 rounded-lg font-light mb-3 ${
        props.toggleDark ? "dark:hover:bg-slate-700" : "hover:bg-slate-200"
      } duration-200`}
    >
      <div className="flex items-center gap-1.5">
        <input
          type="checkbox"
          className="accent-purple-400"
          onChange={handleCheck}
          checked={props.isDone}
          disabled={isEdit}
        />
        {isEdit ? (
          <input
            type="text"
            value={editText}
            className={`bg-transparent border-2 border-slate-600 rounded text-sm p-1  focus-visible:outline-none w-96 ${
              props.toggleDark ? "dark:text-white" : "text-black"
            }`}
            onChange={handleEditInput}
            onKeyUp={handleNewJobUpdate}
            autoFocus={isEdit}
          />
        ) : (
          <p
            className={`${
              props.toggleDark ? "dark:text-slate-200" : "text-black"
            } ${props.isDone && "line-through dark:text-slate-500"}`}
          >
            {props.job}
          </p>
        )}
      </div>

      <div className="flex gap-3">
        <button
          className={`${
            props.isDone
              ? "opacity-0 pointer-events-none"
              : props.toggleDark
              ? "dark:bg-gray-300 action-btn"
              : "bg-slate-500 action-btn"
          }`}
          onClick={handleEditBtn}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
            <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
          </svg>
        </button>
        <button
          onClick={handleDelBtn}
          className={`${
            props.toggleDark ? "dark:bg-slate-500" : "bg-white"
          } action-btn`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4 stroke-1"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default List;
