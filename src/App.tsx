import Column from './components/Column/Column';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="columns">
        <Column status="PLANNED" />
        <Column status="ONGOING" />
        <Column status="DONE" />
      </div>
    </div>
  );
}

export default App;
