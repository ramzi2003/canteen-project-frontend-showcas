import Dashboard from './pages/Dashboard/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import Header from './components/Header/Header';


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
