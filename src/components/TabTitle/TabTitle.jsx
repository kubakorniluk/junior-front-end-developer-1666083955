import './TabTitle.css';

const TabTitle = ({ children }) => {
    return (
        <h2 className="tab-title">{ children }</h2>
    );
}
 
export default TabTitle;