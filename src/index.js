// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import ResultPage from './ResultPage';
import { QuizProvider } from './QuizContext';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <QuizProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/results" element={<ResultPage />} />
        </Routes>
      </Router>
    </QuizProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
