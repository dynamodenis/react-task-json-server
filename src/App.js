import {useState, useEffect}  from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
import {Header} from './components/Header'
import Tasks from './components/Tasks'
function App() {
  const [showAddForm, setAddForm] = useState(false)
  const [tasks, setTask] = useState([])

  // On Page load call the db.json/tasks
  useEffect(()=>{
    const getTasks = async () => {
      const getServerTasks = await fetchTasks()
      // Set the tasks
      setTask(getServerTasks);
    }
    getTasks()
  },[])

  // Fetch Tasks function
  const fetchTasks = async () =>{
    const res = await fetch("http://localhost:5000/tasks")
    const data = await res.json()
    return data
  }

  // Fetch A Single function
  const fetchTask = async (id) =>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()
    return data
  }

  // Add a Task
  const addTask = async task => {
    // const id = Math.floor(Math.random() * 10000) + 1
    // // Create a new task object
    // const newTask = {id, ...task}
    // setTask([...tasks, newTask])
    const res = await fetch("http://localhost:5000/tasks", {
      method:"POST",
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(task)
    })

    const data = await res.json()

    // Set tasks
    setTask([...tasks, data])

  
  }
  // Delete a task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{method:'DELETE'})
    setTask(tasks.filter(task => task.id !== id))
  }
  // Toggle Tasks
  const reminderToggle = async (id) => {
    const taskToggle = await fetchTask(id)
    const updateTask = {...taskToggle,reminder:taskToggle.reminder}
    // Update the data
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method:"PUT",
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(updateTask)
    })

    const data = await res.json()

    setTask(tasks.map((task) => task.id === id ? {...task, reminder :!data.reminder} : task))
  }
  return (
    <Router>
      <div className="container">
        <Header onAdd = {() => setAddForm(!showAddForm)} showForm = {showAddForm}/>
        {/* Set routes */}
        <Route path="/" exact render={(props) => (
          <>
            {showAddForm && <AddTask addTask = {addTask}/>}
          {tasks.length > 0 ?<Tasks tasks = {tasks} onDelete={deleteTask} onToggle = {reminderToggle}/> : "No Tasks For You"}
          </>
        )}/>
        <Route path="/about" component={About}/>
        <Footer/>
      </div>
      
      
    </Router>
  );
}

export default App;

