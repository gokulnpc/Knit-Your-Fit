// App.js
import React, { useContext } from 'react';
import { QuizContext } from './QuizContext';
import QuestionComponent from './QuestionComponent';
import './App.css'; // Import the CSS file here
function App() {
  const { currentQuestionId, questions, handleOptionSelect, goBack, answers } = useContext(QuizContext);
  const currentQuestion = questions.find(q => q.id === currentQuestionId);

  const renderSelectedOptions = () => {
    return Object.entries(answers).map(([questionId, answer], index) => (
      <div key={index} className="selected-option">
        {`${questionId.replace(/([A-Z])/g, ' $1').toLowerCase()}: ${answer}`} {/* This will add spaces before capital letters and convert them to lowercase */}
      </div>
    ));
  };
  console.log(currentQuestionId, currentQuestion);
  if (currentQuestionId === "end") {
    return (
      <div className="selected-options">
        {renderSelectedOptions()}
      </div>
    );
  }

  return (
    <div className="app-container">
      <div className="question-container">
        <QuestionComponent
          question={currentQuestion.text}
          options={currentQuestion.options}
          onOptionSelect={handleOptionSelect}
        />
        {currentQuestionId !== "gender" && (
          <button onClick={goBack} className="back-button">Back</button>
        )}
      </div>
    </div>
  );
}

export default App;
