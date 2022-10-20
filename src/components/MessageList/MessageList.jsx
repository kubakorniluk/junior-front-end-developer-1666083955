import { useContext } from 'react';
import { TaskContext } from '../TaskContextProvider/TaskContextProvider';
import Message from '../Message/Message';
import './MessageList.css';

const MessageList = ({ data }) => {
    const { handleCurrentTask } = useContext(TaskContext)
    return (
        <section className="messages">
            { 
                data.map(({ 
                    id, 
                    author, 
                    title, 
                    content, 
                    created_at,
                    newTask
                }) =>
                    <Message 
                        key={id + 'm'}
                        id={id} 
                        author={author} 
                        title={title} 
                        content={content} 
                        created_at={created_at} 
                        handleTask={ handleCurrentTask } 
                        newTask={ newTask }
                    />
                ) 
            }
        </section>
    );
}
 
export default MessageList;