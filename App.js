import logo from './logo.svg';
import './App.css';
import KeyPadComponent from "./Calculator";
 
function App() {
  return (
    <div className="App">
      <header className="Calculator">
      <h1>React Calculator</h1>
      <KeyPadComponent />
      </header>
    </div>
  );
}
 
export default App;    