import TaskShow from "./TaskShow";
import {useContext} from 'react';
import taskContext from '../Context/Tasks';

function Tasklist() {
    const {tasks} = useContext(taskContext);
     return ( 
                <div className="task-list">
                    {tasks.map((task,index)=>{
                        return <TaskShow key={index} task={task} />
                    })}
                </div>
    
          );
}

export default Tasklist;