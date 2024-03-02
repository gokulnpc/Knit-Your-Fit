import React from 'react';
import QuestionComponent from './QuestionComponent'; // Import the QuestionComponent
import { useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';
import './App.css'; // Make sure to import your main CSS file
import { QuizContext } from './QuizContext';

function App() {
  const { currentQuestionIndex, questions, handleOptionSelect, goToPreviousQuestion, selectedOptions, setCurrentQuestionIndex } = useContext(QuizContext);
  const navigate = useNavigate();
  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Now you can use navigate because it's within a component rendered by Router
      navigate('/results');
    }
  };

  const options = [
    ['Red', 'Blue', 'Green', 'Yellow'],
    ['Cat', 'Dog', 'Bird', 'Fish'],
    ['Pizza', 'Burger', 'Pasta', 'Salad'],
    ['Reading', 'Gaming', 'Traveling', 'Sports'],
    ['Action', 'Comedy', 'Horror', 'Drama']
  ];

  // Render the QuestionComponent with props
  return (
    <div className="app-container">
      <div className="question-container">
        <QuestionComponent
          question={questions[currentQuestionIndex]}
          options={options[currentQuestionIndex]}
          onOptionSelect={handleOptionSelect}
          selectedOption={selectedOptions[currentQuestionIndex]}
        />
        <div className="navigation-buttons">
          {currentQuestionIndex > 0 && (
            <button onClick={goToPreviousQuestion}>Previous</button>
          )}
          {currentQuestionIndex < questions.length - 1 && (
            <button onClick={goToNextQuestion}>Next</button>
          )}
          {currentQuestionIndex === questions.length - 1 && (
            <button onClick={goToNextQuestion}>Finish</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
