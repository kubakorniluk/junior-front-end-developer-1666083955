import { useContext } from 'react';
import { TaskContext } from '../TaskContextProvider/TaskContextProvider';
import TabTitle from '../TabTitle/TabTitle';
import avatar from '../../assets/avatar.png';
import './ViewMessage.css';

const ViewMessage = () => {
    const { viewMessage } = useContext(TaskContext);

    const {
        title,
        author,
        created_at,
        content
    } = viewMessage;

    return (
        <section className="message-content">
            <TabTitle>{ title }</TabTitle>
            <div className="message-heading">
                <img 
                    className='card-avatar' 
                    src={ avatar } 
                    alt="User avatar" 
                />
                <h4 className="card-author">{ author }</h4>
                <span className="separator">-</span>
                <h4 className="card-date">{ created_at }</h4>
            </div>
            <p className="message-text">{ content }</p>
        </section>
    );
}
 
export default ViewMessage;