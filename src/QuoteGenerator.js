// src/QuoteGenerator.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/quotes/random');
      const data = response.data;
      setQuote(data.quote);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching the quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote(); // Fetch a quote when the component mounts
  }, []);

  return (
    <div>
      <h1>Random Quote Generator</h1>
      <div style={{ margin: '20px 0', fontSize: '24px', fontStyle: 'italic' }}>
        "{quote}"
      </div>
      <div style={{ marginBottom: '20px', fontSize: '20px', fontWeight: 'bold' }}>
        - {author}
      </div>
      <button onClick={fetchQuote}>Get New Quote</button>
    </div>
  );
};

export default QuoteGenerator;
