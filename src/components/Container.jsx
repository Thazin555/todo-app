import React from "react";
import ListCreateForm from "./ListCreateForm";
import ListGroup from "./ListGroup";
import ListStatus from "./ListStatus";

const Container = (props) => {
  return (
    <div className={`container h-[80%] top-[12.5%] rounded flex flex-col shadow-xl ${props.toggleDark ? "dark:bg-slate-800": 'bg-white'}`}>
      <ListCreateForm addTask={props.addTask} toggleDark={props.toggleDark} />
      <ListGroup
        tasks={props.tasks}
        checkTask={props.checkTask}
        deleteTask={props.deleteTask}
        editTask={props.editTask}
        toggleDark={props.toggleDark}
      />
      <ListStatus tasks={props.tasks} toggleDark={props.toggleDark} />
    </div>
  );
};

export default Container;
