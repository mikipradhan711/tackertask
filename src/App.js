import {useState} from 'react'
import Header from './component/Header'
import AddTask from './component/AddTask'
import Tasks from './component/Tasks'
import './index.css'
import React from 'react'

const App = () => {
  const [showAddTask, setShowAddtask] = useState(false)
  const [tasks, setTasks] = useState([
    {
   id:1,
   text:'doctor appointment',
   day: 'feb 14th 10 pm ',
   reminder:' true',
 },
 {
   id:2,
   text:' Meeting',
   day: 'feb 16th 10 pm ',
   reminder:' true',
 },
 {
     id:3,
     text:' dance',
     day: 'feb 15th 10 pm ',
     reminder:' false',
   },
 

]
)
/* Add Task in form........................................... */
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
 setTasks([...tasks, newTask])
 // console.log(task);
}
/* Delete Task................................................ */
const deleteTask =(id) =>{
     //console.log('delete',id)
     setTasks(tasks.filter((task)=>task.id !==id))
}
 /* toggle reminder.............................................. */
 const toggleReminder = (id) =>{
   setTasks(tasks.map((task)=> 
   task.id=== id ? {...task,reminder:!task.reminder}:task
   ))
   
 }
  return (
    <>
    <div className = 'container'> 
    <h1>welcome to React App</h1>
       <Header onAdd={() => setShowAddtask(!showAddTask)} showAdd={showAddTask}/> 
      {showAddTask &&<AddTask  onAdd={addTask}/>} 
      {tasks.length>0 ? (< Tasks tasks={tasks} onDelete={deleteTask} onToggle = {toggleReminder} />):('No Tasks is available') }

    </div>
    </>
  )
}
  
export default App
