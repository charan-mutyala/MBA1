import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Content = () => {
  const [tutorials, setTutorials] = useState([]);
  const [selectedTutorial, setSelectedTutorial] = useState(null);
  const [searchTitle, setSearchTitle] = useState('');

  useEffect(() => {
    // Fetch all tutorials when the component mounts
    axios
      .get('http://localhost:8082/tutorials')
      .then((response) => {
        setTutorials(response.data);
      })
      .catch((error) => {
        console.error('Error fetching tutorials:', error);
      });
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const handleTutorialClick = (tutorial) => {
    // Set the selected tutorial when a title is clicked
    setSelectedTutorial(tutorial);
  };

  const handleSearchChange = (event) => {
    setSearchTitle(event.target.value);
    // Clear the selected tutorial when searching
    setSelectedTutorial(null);
  };

  // Filter tutorials based on the searchTitle
  const filteredTutorials = tutorials.filter((tutorial) =>
    tutorial.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', maxWidth: '800px', margin: 'auto', marginTop: '50px' }}>
      {/* Navigation Bar */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', gridColumn: 'span 2' }}>
        <div>
          <h2>All Tutorials</h2>
        </div>
        <div>
          {/* Logout Link */}
          <Link to="/" style={{ marginRight: '20px' }}>
            Logout
          </Link>
        </div>
      </nav>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by title"
        value={searchTitle}
        onChange={handleSearchChange}
        style={{ width: '100%', padding: '5px', marginBottom: '20px', gridColumn: 'span 2' }}
      />

      {selectedTutorial ? (
        /* Selected Tutorial Details in Separate Boxes */
        <>
          <div>
            <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
              <h6>Title</h6>
              <h2>{selectedTutorial.title}</h2>
            </div>
            <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
              <h6>Description</h6>
              <p>{selectedTutorial.description}</p>
            </div>
          </div>
          <div>
            <div style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
              <h6>Content</h6>
              <p>{selectedTutorial.content}</p>
            </div>
          </div>
        </>
      ) : (
        /* Tutorial Titles List */
        <>
          {filteredTutorials.length > 0 ? (
            <ul className="list-group" style={{ gridColumn: 'span 2' }}>
              {filteredTutorials.map((tutorial) => (
                <li
                  key={tutorial.id}
                  className={`list-group-item ${selectedTutorial === tutorial ? 'active' : ''}`}
                  onClick={() => handleTutorialClick(tutorial)}
                  style={{ cursor: 'pointer' }}
                >
                  {tutorial.title}
                </li>
              ))}
            </ul>
          ) : (
            <p style={{ textAlign: 'center' }}>No matching tutorials found.</p>
          )}
        </>
      )}
    </div>
  );
};

export default Content;
