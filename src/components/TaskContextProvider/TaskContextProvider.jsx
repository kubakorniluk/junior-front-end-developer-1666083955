import {
    useState,
    useEffect,
    createContext
} from 'react';

export const TaskContext = createContext();

const TaskContextProvider = ({ children }) => {
    // tasks object
    const [ tasks, setTasks ] = useState([]);
    // currently viewed task - selected by the id
    const [ currentTask, setCurrentTask ] = useState(3);
    // show messages which are connected with current task
    const [ messages, setMessages ] = useState([])
    // decide which message to show by the message id
    const [ currentMessage, setCurrentMessage ] = useState(1)
    // currently viewed message content
    const [ viewMessage, setViewMessage ] = useState({})

    useEffect(() => { import('../../data/tasks.json').then(data => setTasks(data.default)) });
    
    useEffect(() => {
        if (tasks.length > 0) {
            setMessages(tasks.find(i => i.id === currentTask).businessContext)
        }   
    }, [tasks, currentTask]);

    useEffect(() => {
        // if (messages.length > 0) {
        //     setViewMessage(() => {
        //         if( messages.find(i => i.read === true) ) {
        //             return messages.find(i => i.read === true)
        //         } else { return messages.find(i => i.read === false) }
        //     })
        // }
        if(messages.length > 0) {
            setViewMessage(messages.find(i => i.id === currentMessage))
        }
    }, [messages, currentMessage]);

    const handleTask = (id) => { 
        setCurrentTask(id)
        setCurrentMessage(1)
    };

    const handleCurrentMessage = (id) => {
        setCurrentMessage(id)
        setViewMessage(() => {
            if( messages.length > 0 ) {
                return messages.find( i => i.id === currentMessage );
            }
        })
        let findTask = tasks.find(i => i.id === currentTask);
        let findMessage = findTask.businessContext.find(i => i.id === id);
        findMessage.newTask = false;
        findMessage.read = true;
    };

    let value = {
        tasks: tasks,
        currentTask: currentTask,
        messages: messages,
        currentMessage: currentMessage,
        viewMessage: viewMessage,
        handleTask,
        handleCurrentMessage
    }
    return (
        <TaskContext.Provider value={ value }>
            { children }
        </TaskContext.Provider>    
    );
}
 
export default TaskContextProvider;