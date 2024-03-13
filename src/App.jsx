import './App.css';
import React, { useState } from 'react';

const articles = [
  {
    id: 1,
    title: 'Understaning the difference between grid-template and grid-auto',
    content: 'With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template-* and grid-auto-* properties. Specifically the difference between grid-template-rows/colums and grid-auto-rows/columns. Although I knew they were to d...'
  },
  {
    id: 2,
    title: 'Recreating the GitHub Contribution Grapgh with CSS Grid Layout.',
    content: 'React is a JavaScript library for building user interfaces.'
  },
  
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    setWordCount(countWords(term));
  };

  const countWords = (text) => {
    const regex = new RegExp(`\\b${searchTerm}`, 'gi'); 
    let count = 0;
    articles.forEach(article => {
      count += ((article.content + ' ' + article.title).match(regex) || []).length;
    });
    return count;
  };

  const highlightText = (text, term) => {
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  };

  return (
    <div className='container'>
    <div className='search-container'>
      <h1>Search</h1>
      <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            boxSizing: 'border-box'
          }}
        />
      <p><strong>{wordCount}</strong> <strong>posts</strong> were found.</p>
      <div>
        {articles.map(article => (
          <div key={article.id}>
            <h2 dangerouslySetInnerHTML={{__html: highlightText(article.title, searchTerm)}} />
            <p dangerouslySetInnerHTML={{__html: highlightText(article.content, searchTerm)}} />
            <br></br>
          </div>
          
        ))}
      </div>
    </div>
    <div className='divider'></div>
    <div className='article'>
      <div className='article-border'>
        <p><strong>bitsofcode.</strong> Articles on Frontend Development. All articles are written by <u>Ire Aderinokun,</u> Frontend Developer and User Interface Designer.</p>
        <div className='article-button'>
        <button className='button-1'>Follow @ireaderinokun</button>
        <button className='button-2'>19.1K followers</button>
        </div>
        </div>
    </div>
    </div>
  );
};

export default App;
