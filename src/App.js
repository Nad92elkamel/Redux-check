import './App.css';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <div className="App">
      <div className='todo'>
      <h2>To Do App</h2>
      <AddTask/>
      <ListTask/>
      </div>
    </div>
  );
}

export default App;
