import { useEffect, useContext} from 'react';
import taskContext from './Context/Tasks';
import './App.css';
import TaskCreate from './Components/TaskCreate';
import Tasklist from './Components/TaskList';



function App() {
 const {fetcTasks} = useContext(taskContext);
  useEffect(()=>{fetcTasks();},[]);

 
  


  

  return (
    <div className="App">
      <TaskCreate />
      <h1>Tasks</h1>
      <Tasklist />
    </div>
  );
}

export default App;
