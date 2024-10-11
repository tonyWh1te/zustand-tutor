import Column from './components/Column/Column';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="columns">
        <Column state="PLANNED" />
        <Column state="IN_PROGRESS" />
        <Column state="COMPLETED" />
      </div>
    </div>
  );
}

export default App;
