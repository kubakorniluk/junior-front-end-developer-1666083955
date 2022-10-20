import { useContext } from 'react';
import TabTitle from '../TabTitle/TabTitle';
import MessageList from '../MessageList/MessageList';
import ViewMessage from '../ViewMessage/ViewMessage';
import { TaskContext } from '../TaskContextProvider/TaskContextProvider';
import './ContextTab.css';

const ContextTab = () => {
    const { 
        taskInfo, 
        viewedTask
    } = useContext(TaskContext);

    return (
        <section className="business-tab">
            <TabTitle>Business Context</TabTitle>
            <main className="tab-content">
                <MessageList data={taskInfo} />
                <ViewMessage  context={viewedTask}/>
            </main>
        </section>
    );
}
 
export default ContextTab;