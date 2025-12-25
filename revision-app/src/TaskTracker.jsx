import { useState } from "react";

function TaskTracker(){
  //initialize array
  const [tasks, setTasks] = useState([]);
  const [taskname, setName] = useState("");
  const [Urgent, setUrgent] = useState(false);

  //to add new task to array
  const addTask =() => {
    if (taskname.trim() === "") return;
    setTasks([...tasks, {name:taskname, urgent: Urgent }]);
    setName("");
    setUrgent(false);
  };

  //to remove the task from array
  const Remove = (taskId) => {
    setTasks(tasks.filter((_, index) => index !== taskId));
  };

  return (
    <div>
      <h1>Task Tracker</h1>
      {/*input*/}
      <input
        type="text" value={taskname}
        onChange={(e) => setName(e.target.value)}
        placeholder="Check To Mark Urgent">
      </input>
      <label>
        <input
          type="checkbox" checked={Urgent}
          onChange={(e) => setUrgent(e.target.checked)}>
        </input>Urgent<br/>
      </label>
      <button onClick={addTask}>Add Task</button>

      {/*conditional rendering of task array*/}
      {tasks.length === 0 ?
      (<p>No Task Available!</p>):
      (<ul>
        {tasks.map((task, index) =>(
          <li key={index}>
            {task.name} {task.urgent && "🔥"}
            <button onClick={() => Remove(index)}>Remove</button>
          </li>
        ))}
      </ul>)}
    </div>
  );
}
export default TaskTracker;