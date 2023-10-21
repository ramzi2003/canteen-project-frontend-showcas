import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import './App.css';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Header/>
      <Sidebar />
      <Dashboard/>
    </div>
  );
}

export default App;
