import './App.css';
import Todo from './components/Todo';
// import Input from './components/Input';

function App() {
  return (
  <div className='App'>
    <h1>How is today going to be?</h1>
    <div className="list">
    <Todo/>
    </div>
  </div>
);
}

export default App;
