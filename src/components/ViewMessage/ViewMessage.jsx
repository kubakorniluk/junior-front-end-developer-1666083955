import TabTitle from '../TabTitle/TabTitle';
import './ViewMessage.css';

const ViewMessage = ({ context }) => {
    const {
        author,
        title,
        content,
        created_at
    } = context;

    return (
        <section className="message-content">
            <TabTitle>{ title }</TabTitle>
            <div className="message-heading">
                <h4 className="card-author">{ author }</h4>
                <span className="separator">-</span>
                <h4 className="card-date">{ created_at }</h4>
            </div>
            <p className="message-text">{ content }</p>
        </section>
    );
}
 
export default ViewMessage;