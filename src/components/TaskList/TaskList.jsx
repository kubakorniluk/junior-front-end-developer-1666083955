import { useContext } from 'react';
import { TaskContext } from '../TaskContextProvider/TaskContextProvider';
import TabTitle from '../TabTitle/TabTitle';
import Task from '../Task/Task';
import './TaskList.css';

const TaskList = () => {
    const { tasks } = useContext(TaskContext);
    return (
        <aside className="task-tab">
            <TabTitle>Your tasks</TabTitle>
            <ul className="task-list">
                {
                    //map data to an array of Task components
                    tasks.map( task => 
                        <Task key={task.id} data={task}/>
                    )
                }
            </ul>
        </aside>
    );
}
 
export default TaskList;