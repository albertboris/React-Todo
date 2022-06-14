import React,{useState, useEffect} from "react";
import Header from "./component/Header";
import Task from "./component/Task";
import AddTask from "./component/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([])

useEffect(() => {
  const todos = getLocalTodos();
  setTasks(todos)
}, []);

// useEffect(() => {
// saveLocalTodos();
// }, [tasks])

const saveLocalTodos = (t) => {
  localStorage.setItem("tasks", JSON.stringify(t));
  };
const getLocalTodos = async() => {
  let todoLocal =  []
     if (localStorage.getItem("tasks") ) {
       todoLocal = JSON.parse(localStorage.getItem("tasks"));
     }
     return todoLocal;
  }

//Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    const todos = getLocalTodos();
    console.log(todos);
    todos.concat(newTask)
    saveLocalTodos(todos);
    setTasks([...tasks, newTask]);
  }




  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) =>
    task.id !== id))
  }
  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
    task.id === id ? {...task, reminder: 
      !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 
      ?<Task tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
       : 'No Task To Show'}
      
    </div>
  );
}

export default App;
