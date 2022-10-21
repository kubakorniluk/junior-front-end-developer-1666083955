import TaskContextProvider from '../TaskContextProvider/TaskContextProvider';
import Header from '../Header/Header';
import Main from '../Main/Main';
import TaskList from '../TaskList/TaskList';
import ContextTab from '../ContextTab/ContextTab';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <TaskContextProvider>
          <TaskList />
          <ContextTab />
        </TaskContextProvider>
       </Main>
    </>
  );
}

export default App;
