import React, { useState } from "react";
import toast from "react-hot-toast";

const ListCreateForm = (props) => {
  const [text, setText] = useState("");
  const handleTextInput = (event) => {
    setText(event.target.value);
  };

  const handleAdd = (event) => {
    // console.log(event.keyCode);
    if (event.keyCode === 13) {
      props.addTask(text);
      setText("");
      props.toggleDark
        ? toast("List created!", {
            icon: "👌",
            style: {
              borderRadius: "10px",
              background: "#334155",
              color: "#fff",
            },
          })
        : toast.success("List created!");
    }
  };

  return (
    <div
      className={`${
        props.toggleDark
          ? "dark:border-slate-900 dark:shadow-slate-900"
          : "border-gray-400 shadow-gray-400"
      } border-b-2 shadow-md`}
    >
      <div className="px-5">
        <input
          type="text"
          className={`w-full my-3 bg-transparent border-2 border-slate-400 outline-none rounded-full px-4 py-2  text-sm ${
            props.toggleDark ? "dark:text-white" : "text-gray-900"
          }`}
          placeholder="Create a new todo..."
          value={text}
          onChange={handleTextInput}
          onKeyUp={handleAdd}
        />
      </div>
    </div>
  );
};

export default ListCreateForm;
