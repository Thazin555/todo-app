import React from "react";
import List from "./List";
import EmptyList from "./EmptyList";

const ListGroup = (props) => {
  return (
    <div className="p-5 h-full overflow-y-auto overflow-x-hidden">
      <EmptyList toggleDark={props.toggleDark} />
      {props.tasks.map((task) => (
        <List
          key={task.id}
          id={task.id}
          job={task.job}
          isDone={task.isDone}
          checkTask={props.checkTask}
          deleteTask={props.deleteTask}
          editTask={props.editTask}
          toggleDark={props.toggleDark}
        />
      ))}
    </div>
  );
};

export default ListGroup;
