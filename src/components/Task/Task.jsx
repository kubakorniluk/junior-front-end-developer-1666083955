import { useContext } from 'react';
import { TaskContext } from '../TaskContextProvider/TaskContextProvider';
import './Task.css';

const Task = ({ data }) => {
    const { id, status, title } = data;
    
    const { handleTask } = useContext(TaskContext);

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
    
    let ifBlockedChangeTitleColor = ( status === 'blocked' ) ? {color: '#aeaeae'} : {color: '#000000'} 
    return ( 
        <li className="task" onClick={ ( status !== 'blocked' ) ? () => handleTask(id) : null }> 
            <span 
                className="task-icon"
                style={{color: handleStatus().color}}
            >
                { handleStatus().content }
            </span>
            <h4 
                className="task-title"
                style={ ifBlockedChangeTitleColor }
            >
                { title }
            </h4>
        </li> 
    );
}
 
export default Task;