// import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState, useEffect } from "react"
// function App() {
//   const name = 'Sahiti'
//   return (
//     <div className="App">
//       <h1>Hello from React</h1>
//       <h2>Hey {name} {1 ? 'Yes' : 'No'}</h2>
//     </div>
//   );
// }

// class App extends React.Component{
//   render(){
//     return <h1>Hey from App Class</h1>
//   }
// }

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
useEffect(()=>{
  const getTasks = async() =>{
    const taskFromServer = await fetchTasks()
    setTasks(taskFromServer)
  }
  getTasks();
}, [])

const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()
  console.info(data);
  return data;
}

const addTask = (obj) => {
  const id = Math.floor(Math.random() * 10000) + 1
  console.info(id)
  const newTask = {id, ...obj}
  setTasks([...tasks, newTask])
}

const deleteTask = (id) => {
  setTasks(tasks.filter((task)=> task.id !== id))
}

const toggleRemind = (id) => {
  setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder}: task))
}
  return (
    <div className='container'>
      <Header title='Hey again' onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      <Header/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      { tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask}
        onToggle={toggleRemind}/> ) : ('No Tasks To Show')
      }
      
    </div>
  )
}
export default App;
