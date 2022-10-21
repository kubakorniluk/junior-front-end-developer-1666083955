import { useContext } from 'react';
import { TaskContext } from '../TaskContextProvider/TaskContextProvider';
import Message from '../Message/Message';
import './MessageList.css';

const MessageList = () => {
    const { messages } = useContext(TaskContext)
    return (
        <section className="messages">
            { 
                messages.map(({ 
                    id, 
                    author, 
                    title, 
                    content, 
                    created_at,
                    newTask,
                    read
                }) =>
                    <Message 
                        key={ 'message' + id }
                        id={ id } 
                        author={ author } 
                        title={ title } 
                        content={ content } 
                        created_at={ created_at } 
                        newTask={ newTask }
                        read={ read }
                    />
                ) 
            }
        </section>
    );
}
 
export default MessageList;