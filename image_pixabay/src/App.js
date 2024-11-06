import './App.css';
import SearchBar from './Components/SearchBar';


function App() {
  return (
    <div>
      <div className='navBar'>
        <h4 className='logo'>Vision Explorar II</h4>
        <nav>
          <SearchBar />
        </nav>
        <button>Register</button>
        <button>Login</button>
      </div>
    </div>
  );
}

export default App;
