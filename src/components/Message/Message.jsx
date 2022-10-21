import { useContext } from 'react';
import { TaskContext } from '../TaskContextProvider/TaskContextProvider';
import avatar from '../../assets/avatar.png';
import './Message.css';

const Message = ({
    id, 
    author, 
    title, 
    content, 
    created_at,
    newTask,
    read
}) => {

    const { currentMessage, handleCurrentMessage } = useContext(TaskContext)

    const ifReadChangeBgColor = () => read === true ? 'card-read' : 'card-unread';

    const ifActiveChangeBgColor = () => id === currentMessage ? 'card-active' : null;

    return (
        <div 
            className={ `card ${ ifReadChangeBgColor() } ${ ifActiveChangeBgColor() }` }
            onClick={ () => handleCurrentMessage(id) }
        >
            <div className="card-heading">
                <h4 className="card-author">
                    <img 
                        className='card-avatar' 
                        src={ avatar } 
                        alt="User avatar" 
                    />
                    <span 
                        className="card-new" 
                        style={ newTask ? { display: 'block' } : { display: 'none' } }
                    >
                        New
                    </span>
                    { author }
                </h4>
                <h4 className="card-date">{ created_at }</h4>
            </div>
            <h3 className="card-title">{ title }</h3>
            <p className="card-description">{ content }</p>
        </div>
    );
}
 
export default Message;