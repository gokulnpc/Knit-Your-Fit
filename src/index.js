import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import ResultPage from './ResultPage';
import { QuizProvider } from './QuizContext';

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
