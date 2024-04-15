import React, { useState } from "react";
import Cover from "./components/Cover";
import Container from "./components/Container";
import Heading from "./components/Heading";
import ListCreateForm from "./components/ListCreateForm";
import ListGroup from "./components/ListGroup";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [tasks, setTask] = useState([
    { id: 1, job: "Schedule a dentist appointment.", isDone: false },
    { id: 2, job: "Complete one online course module.", isDone: false },
    { id: 3, job: "Plan a weekend outing.", isDone: false },
  ]);

  const [toggleDark, setToggleDark] = useState(false);

  const addTask = (job) => {
    const newJob = {
      id: Date.now(),
      job,
      isDone: false,
    };
    setTask([...tasks, newJob]);
  };

  const checkTask = (id) => {
    setTask(
      tasks.map((task) => {
        if (task.id === id) {
          task.isDone = !task.isDone;
        }
        return task;
      })
    );
  };

  const deleteTask = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newJob) => {
    setTask(
      tasks.map((task) => {
        if (task.id === id) {
          task.job = newJob;
        }
        return task;
      })
    );
  };

  const darkMode = () => {
    // console.log(toggleDark);
    setToggleDark(!toggleDark);
  };

  return (
    <div className="dark">
      <div
        className={`${
          toggleDark ? "dark:bg-slate-950" : "bg-gray-100"
        } h-screen relative`}
      >
        <Cover />
        <Heading darkMode={darkMode} toggleDark={toggleDark} />
        <Container
          tasks={tasks}
          addTask={addTask}
          checkTask={checkTask}
          deleteTask={deleteTask}
          editTask={editTask}
          toggleDark={toggleDark}
        />
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default App;
