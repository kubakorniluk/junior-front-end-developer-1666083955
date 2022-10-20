import TaskContextProvider from './components/TaskContextProvider/TaskContextProvider';
import Main from './components/Main/Main';
import TaskList from './components/TaskList/TaskList';
import ContextTab from './components/ContextTab/ContextTab';
import './App.css';

const App = () => {
  return (
    <TaskContextProvider>
      <Main>
        <TaskList />
        <ContextTab />
      </Main>
    </TaskContextProvider>
  );
}

export default App;
