import './Task.css';
const Task = (props) => {
    
    const { status, title, businessContext } = props.data;

    //decide which styling to use based on task status
    const handleStatus = () => {
        switch(status) {
            case 'done':
                return {
                    content: '✔',
                    marginRight: '1em',
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
    
    let ifBlockedChangeTitleColor = status === 'blocked' ? {color: '#aeaeae'} : {color: '#000000'} 

    return ( 
        <li className="task"> 
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