import {useState} from 'react';
import TaskCreate from './TaskCreate';
import {useContext} from 'react';
import taskContext from '../Context/Tasks';

function TaskShow({task}) {
    const {editTaskById,DeleteTaskById} = useContext(taskContext);
    const [showEdit, setShowEdit] = useState(false)
    const handleClickDelete=()=>{
       // onDelete(task.id);   props used in this line
       DeleteTaskById(task.id);  // with context api
    };
    const handleClickUpdate=()=>{
        setShowEdit(!showEdit);
    }
    const handlesubmit=(id,updatedTittle,updatedTaskDesc)=>{
        setShowEdit(false);
       // onUpdate(id,updatedTittle,updatedTaskDesc);  props used
       editTaskById(id,updatedTittle,updatedTaskDesc); // context api
    }

    

    
    return ( 
    <div className="task-show">
        {showEdit 
            ?(<TaskCreate task={task} taskFormUpdate={true} onUpdate={handlesubmit}/>) 

            : ( <div>
            <h3 className="task-info">Your Task</h3>
            <p>{task.tittle}</p>
            <h3 className="task-info">To Do</h3>
            <p>{task.taskDesc}</p>
            <div>
                <button className="delete-button" onClick={handleClickDelete}>Delete</button>
                <button className="update-button" onClick={handleClickUpdate}>Update</button>
            </div>
            </div>) 
        }
       
        
        
    </div> );
}

export default TaskShow;