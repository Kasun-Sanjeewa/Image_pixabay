import './App.css';
import SearchBar from './Components/SearchBar';
import { useState } from 'react';
import ImageList from './Components/ImageList';
import searchImages from './api'

function App() {

  const [imageList, setImage] = useState([]);

  const getValue = async (term) => {
    const result = await searchImages(term);

    setImage(result);

  }

  return (
    <div>
      <div className='navBar'>
        <h4 className='logo'>Vision Explorar Pro</h4>
        <SearchBar getResult={getValue} />
        <nav>
          <button className='RL-Button' id='Register'>Register</button>
          <button className='RL-Button'>Login</button>
        </nav>
      </div>
      <ImageList imageListProp={imageList} />
    </div>
  );
}

export default App;
