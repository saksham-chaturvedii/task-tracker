import { useState } from "react";

import Header from "./components/Header";
import Task from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor's Appointment",
      day: "On 2nd Jan, 2022 at 2:30 PM",
      reminder: false,
    },
    {
      id: 2,
      text: "Meeting with Client",
      day: "On 3nd Jan, 2022 at 11:30 AM",
      reminder: false,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "On 4th Jan, 2022 at 6:30 PM",
      reminder: false,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header title="Task Tracker" />
      {/* <Header /> default i.e., with no props */}
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Task tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
}

export default App;
