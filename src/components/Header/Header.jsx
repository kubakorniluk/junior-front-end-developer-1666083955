import TabTitle from '../TabTitle/TabTitle';
import avatar from '../../assets/avatar.png';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <TabTitle>Task Browser</TabTitle>
            <img 
                className="card-avatar" 
                src={ avatar } 
                alt="User avatar" 
            />
        </header>
    );
}
 
export default Header;