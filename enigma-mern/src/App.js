import "./App.css";
import Sidebar from "./components/sidebar";
import Chatbox from "./components/chatbox";
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
      <div className='app-body'>
        <Sidebar />
        <Chatbox />
      </div>
    </div>
  );
}

export default App;
