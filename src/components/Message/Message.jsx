import './Message.css';

const Message = ({ 
    id, 
    author, 
    title, 
    content, 
    created_at, 
    handleTask,
    newTask
}) => {
    return (
        <div className="card" onClick={ () => handleTask(id) }>
            <div className="card-heading">
                <h4 className="card-author">
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