import { useEffect, useState } from 'react';
import './App.css';
import TaskCreate from './Components/TaskCreate';
import Tasklist from './Components/TaskList';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask= async (tittle,taskDesc)=>{
   const response = await axios.post('http://localhost:3004/tasks',{
      tittle,
      taskDesc
    })
    const createdTasks=[...tasks,response.data];

    setTasks(createdTasks);
  };
  const fetcTasks= async ()=>{
    const response = await axios.get('http://localhost:3004/tasks')
    setTasks(response.data);
  }

  useEffect(()=>{fetcTasks();},[]);

  const DeleteTaskById= async (id)=>{
     await axios.delete(`http://localhost:3004/tasks/${id}`);
  const afterDeletingTask=  tasks.filter((task)=>{
      return task.id !== id;
    });

    setTasks(afterDeletingTask);
  };
  const editTaskById= async(id,updatedTittle,updatedTaskDesc)=>{
    await axios.put(`http://localhost:3004/tasks/${id}`,{
      tittle:updatedTittle,
      taskDesc:updatedTaskDesc
    });
    const updatedTask=  tasks.map((task)=>{
      if(task.id===id)
      {
        return {id,tittle:updatedTittle,taskDesc:updatedTaskDesc}
      }
        return task
      });
  
      setTasks(updatedTask);
    };
  


  

  return (
    <div className="App">
      <TaskCreate onCreate={createTask}/>
      <h1>Tasks</h1>
      <Tasklist tasks={tasks} onDelete={DeleteTaskById} onUpdate={editTaskById}/>
    </div>
  );
}

export default App;
