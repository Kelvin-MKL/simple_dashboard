import Sidebar from "./component/sidebar";
import MainFrame from "./component/mainFrame";
import "./App.css";

function App() {
  return (
    <div className='frame'>
      <Sidebar />

      <MainFrame />
    </div>
  );
}

export default App;
