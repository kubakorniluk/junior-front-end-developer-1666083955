import { useState, useEffect } from 'react';
import Task from '../Task/Task';
import './TaskList.css';

const TaskList = () => {
    const [ tasks, setTasks ] = useState([]);

    //import task list
    useEffect(() => {
        import('../../data/tasks.json')
        .then(data => setTasks(data.default))
    })

    const title = <h2 className="task-tab-title">Your tasks</h2>

    return (
        <aside className="task-tab">
            { title }
            <ul className="task-list">
                {
                    //map data to an array of Task components
                    tasks.map( i => 
                        <Task key={i.id} data={i}/>
                    )
                }
            </ul>
        </aside>
    );
}
 
export default TaskList;