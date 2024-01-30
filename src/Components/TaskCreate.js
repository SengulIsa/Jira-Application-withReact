import {useState} from 'react';

function TaskCreate({onCreate,task,taskFormUpdate,onUpdate}) {
    const [tittle, setTittle] = useState(task ? task.tittle : '');
    const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : '');

    const handleChange= (event)=>{
        setTittle(event.target.value);
    };
    const handleTaskChange=(event)=>{
        setTaskDesc(event.target.value);
    };
    const handlesubmit=(event)=>{
        event.preventDefault();
        if(taskFormUpdate){
            onUpdate(task.id,tittle,taskDesc);
        }
        else{
            onCreate(tittle,taskDesc);
        }
        
        setTittle('');
        setTaskDesc('');
    }
    return ( 
    <div>{taskFormUpdate
             ?
        <div className="task-update">
            <h3>Please Edit To Task!</h3>
            <form className="task-form">
                <label className="task-label"> Edit Header</label>
                <input value={tittle} onChange={handleChange} className="task-input"/>
                <label className="task-label">Edit to Task</label>
                <textarea value={taskDesc} onChange={handleTaskChange} className="task-input" rows={5}/>
                <button className="task-button edit-button " onClick={handlesubmit}>Edit</button>
            </form>
        </div> 
        : 
        <div className="task-create">
            <h3>Please Add Task!</h3>
            <form className="task-form">
                <label className="task-label">Header</label>
                <input value={tittle} onChange={handleChange} className="task-input"/>
                <label className="task-label">Please Enter Task</label>
                <textarea value={taskDesc} onChange={handleTaskChange} className="task-input" rows={5}/>
                <button className="task-button" onClick={handlesubmit}>Create</button>
            </form>
        </div>
        }
    </div>
     );
}

export default TaskCreate;