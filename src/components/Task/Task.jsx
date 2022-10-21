import { useContext } from 'react';
import { TaskContext } from '../TaskContextProvider/TaskContextProvider';
import './Task.css';

const Task = ({ data }) => {
    const { 
        id, 
        status, 
        title 
    } = data;
    
    const { handleTask, currentTask } = useContext(TaskContext);

    //decide which styling to use based on task status
    const handleStatus = () => {
        switch(status) {
            case 'done':
                return {
                    content: '✔',
                    color: '#3BFFAC'
                };
                break;
            case 'active':
                return {
                    content: '➤',
                    color: '#80DCFF'
                };
                break;
            case 'blocked':
                return {
                    content: '✖',
                    color: '#aeaeae'
                };
                break;
            default:
                return {
                        content: '➤',
                        color: '#80DCFF'
                };
                break;
        }
    }

    let ifBlockedRemoveCursor = ( status === 'blocked' ) ? 'task-blocked' : null;

    let ifMatchedIdSetToActive = ( id === currentTask ) ? 'task-active' : null;

    return ( 
        <li 
            className={`task ${ifBlockedRemoveCursor}`}
            onClick={ ( status !== 'blocked' ) ? () => handleTask(id) : null }
        > 
            <span 
                className="task-icon"
                style={{color: handleStatus().color}}
            >
                { handleStatus().content }
            </span>
            <h4 className={`task-title ${ifMatchedIdSetToActive}`}>{ title }</h4>
        </li> 
    );
}
 
export default Task;