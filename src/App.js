import React, { useState, createContext, useContext } from 'react';
import './App.css';
import ImageComponent from './components/ImageComponent';
import Search from './forms/Searchbar';
import { ImageContext } from './contexts/imageContext';

// const ImageContext = createContext(imageSources);

function App() {
  // Define state for filtered images
  const [filteredImages, setFilteredImages] = useState([]);

  return (
      <div className="App">
        <ImageContext.Provider value={{setFilteredImages, filteredImages}}>
        <header className="App-header">
          <div>
            <Search/>
          </div>
          </header>
          <section className="App-content">
            {/* Render the ImageComponent and pass the filtered images */}
            <ImageComponent/>
          </section>
        </ImageContext.Provider>
      </div>
  );
}

export default App;
