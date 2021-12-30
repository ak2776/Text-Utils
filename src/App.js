import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
// import TextForm from './components/TextForm';

function App() {
  // const [darkMode, setDarkMode] = useState(false);   //whether dark mode is enabled or not
  return (
    <>
    <Navbar title="TextUtils" aboutUs="About us"/>
    {/* <Navbar /> */}

    <div className="container" my-5>
    {/*<TextForm heading="Enter the text" /> */}
    <About/>
    </div>
    
    
    </>
  );
}

export default App;
