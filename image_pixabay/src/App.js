import './App.css';
import SearchBar from './Components/SearchBar';
import { useState } from 'react';
import ImageList from './Components/ImageList';
import VideoList from './Components/VideoList';
import searchImages from './api';
import searchVideos from './videoAPI';

function App() {
  const [activePage, setActivePage] = useState('images'); // Track active page (images or videos)
  const [imageList, setImageList] = useState([]);
  const [videoList, setVideoList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const getValue = async (term, page = 1, type = activePage) => {
    if (type === 'images') {
      const result = await searchImages(term, page);
      if (page === 1) {
        setImageList(result); // Replace images for a new search
      } else {
        setImageList((prevImages) => [...prevImages, ...result]); // Append images for "Load More"
      }
    } else if (type === 'videos') {
      const result = await searchVideos(term, page); // Fetch videos for video search
      if (page === 1) {
        setVideoList(result); // Replace videos for a new search
      } else {
        setVideoList((prevVideos) => [...prevVideos, ...result]); // Append videos for "Load More"
      }
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term); // Store search term for later use
    setCurrentPage(1); // Reset page count
    getValue(term, 1, activePage); // Fetch first page of results
  };

  const loadMoreResults = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    getValue(searchTerm, nextPage, activePage); // Fetch the next page of results
  };

  const handlePageSwitch = (pageType) => {
    setActivePage(pageType); // Update active page
    setCurrentPage(1); // Reset page count for new category
    if (pageType === 'images') {
      setVideoList([]); // Clear video results when switching to images
      getValue(searchTerm, 1, 'images'); // Fetch images with existing search term
    } else if (pageType === 'videos') {
      setImageList([]); // Clear image results when switching to videos
      getValue(searchTerm, 1, 'videos'); // Fetch videos with existing search term
    }
  };

  const handleLogoClick = () => {
    window.location.reload();
  }

  return (
    <div>
      <div className='navBar'>
        <h4 className='logo' onClick={handleLogoClick}>Vision Explorer Pro</h4>
        <SearchBar getResult={handleSearch} />
        <nav>
          <button
            className='RL-Button'
            id='Image'
            onClick={() => handlePageSwitch('images')}
          >
            Image
          </button>
          <button
            className='RL-Button'
            id='Video'
            onClick={() => handlePageSwitch('videos')}
          >
            Video
          </button>
        </nav>
      </div>

      {/* Welcome Message */}
      {!searchTerm && imageList.length === 0 && videoList.length === 0 && (
        <div className="welcome-message">
          <h1>Welcome to Vision Explorer</h1>
          <p>Search for stunning images and videos effortlessly.</p>
        </div>
      )}

      {activePage === 'images' ? (
        <ImageList imageListProp={imageList} />
      ) : (
        <VideoList videoListProp={videoList} />
      )}

      {((activePage === 'images' && imageList.length > 0) || (activePage === 'videos' && videoList.length > 0)) && (
        <button onClick={loadMoreResults} className="load-more-button">Load More</button>
      )}
    </div>
  );
}

export default App;
