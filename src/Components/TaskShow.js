import {useState} from 'react';
import TaskCreate from './TaskCreate';
function TaskShow({task,onDelete,onUpdate}) {
    const [showEdit, setShowEdit] = useState(false)
    const handleClickDelete=()=>{
        onDelete(task.id);
    };
    const handleClickUpdate=()=>{
        setShowEdit(!showEdit);
    }
    const handlesubmit=(id,updatedTittle,updatedTaskDesc)=>{
        setShowEdit(false);
        onUpdate(id,updatedTittle,updatedTaskDesc);
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