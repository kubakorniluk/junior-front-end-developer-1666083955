import TabTitle from '../TabTitle/TabTitle';
import MessageList from '../MessageList/MessageList';
import ViewMessage from '../ViewMessage/ViewMessage';
import './ContextTab.css';

const ContextTab = () => {
    return (
        <section className="business-tab">
            <TabTitle>Business Context</TabTitle>
            <main className="tab-content">
                <MessageList />
                <ViewMessage />
            </main>
        </section>
    );
}
 
export default ContextTab;