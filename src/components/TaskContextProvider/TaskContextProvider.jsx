import React, {
    useState,
    useEffect,
    createContext
} from 'react';

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
    // tasks object
    const [ tasks, setTasks ] = useState([]);
    // currently viewed task - selected by the id
    const [ currentTask, setCurrentTask ] = useState(1);
    // information about the business contexts that are connected to the task
    const [ taskInfo, setTaskInfo ] = useState([]);
    // set currently viewed content from business contexts
    const [ currentTaskContext, setCurrentTaskContext ] = useState(1);
    // currently viewed business context
    const [ viewedTask, setViewedTask ] = useState({})

    useEffect(() => {
        import('../../data/tasks.json')
        .then(data => {
            setTasks(data.default);
            //search for business context in task object that matches the current task
            setTaskInfo(
                data.default
                .find(i => i.id === currentTask).businessContext
            );
            setViewedTask(
                data.default
                .find(i => i.id === currentTask).businessContext
                .find(i => i.id === currentTaskContext)
            );
        })
    });

    const handleTask = (id) => { 
        setCurrentTask(id)
        setCurrentTaskContext(1) 
    };
    const handleCurrentTask = (id) => setCurrentTaskContext(id);

    let value = {
        tasks: tasks,
        currentTask: currentTask,
        taskInfo: taskInfo,
        currentTaskContext: currentTaskContext,
        viewedTask: viewedTask,
        handleTask,
        handleCurrentTask
    }
    return (
        <TaskContext.Provider value={ value }>
            { children }
        </TaskContext.Provider>    
    );
}
 
export default TaskContextProvider;