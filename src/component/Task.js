import Todo from "./Todo"



const Task = ({tasks, onDelete, onToggle }) => {
    return (
    <>
        {tasks.map((task) => (
        <Todo key={task.id}
         task={task} 
         onDelete={onDelete}
         onToggle={onToggle}
         />
        ))}
    </>
  )
}

export default Task