import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutUs="About us" />
    {/* <Navbar /> */}

    <div className="container" my-5>
    <TextForm heading="Enter the text" />
    </div>
    
    </>
  );
}

export default App;
