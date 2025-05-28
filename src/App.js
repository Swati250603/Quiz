import './App.css';
import Quiz from './Component/Quiz';
import Timer from './Component/Timer';

function App() {
  return (
    <div className="App">
      <div className='p-6 bg-white rounded shadow-md w-full max-w-xl mx-auto relative'>
        <div className="flex justify-end mb-4">
        <Timer/>
        <Quiz/>
        </div>
      </div>
    </div>
  );
}

export default App;
