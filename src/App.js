// App.js
import React, { useContext } from 'react';
import { QuizContext } from './QuizContext';
import QuestionComponent from './QuestionComponent';
import { useNavigate } from 'react-router-dom';
import './App.css'; // Import the CSS file here
import shirt from './shirt.jpg';
function App() {
  const { currentQuestionId, questions, handleOptionSelect, goBack, answers } = useContext(QuizContext);
  const currentQuestion = questions.find(q => q.id === currentQuestionId);
  const navigate = useNavigate();
  const handleDesignClick = () => {
    navigate('/design');
  };

  const handleConsultantClick = () => {
    navigate('/consultant');
  };

  const renderSelectedOptions = () => {
    const optionsArray = Object.entries(answers).map(([questionId, answer]) => {
      const formattedQuestionId = questionId.replace(/([A-Z])/g, ' $1').toLowerCase().trim();
      return `${formattedQuestionId}: ${answer}`;
    });
    const optionsText = optionsArray.join(', ');

    return (
      <div className="app-container">
        <p className="selected-options-paragraph">{optionsText}</p>
        <div className="image-container">
          <img src={shirt} alt="Custom Shirt Design" style={{ maxWidth: '20%', height: 'auto' }} />
        </div>
        <div className="button-container">
          <button className="black-white" onClick={handleDesignClick}>Confirm Order</button>
          <button onClick={() => window.location.href = "/"}>Design Again</button>
          <p className="refund-policy">Refund Policy: Return and Refund Policy</p>
        </div>
      </div>
    );
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
          <button onClick={goBack} className="qbuttonb">Back</button>
        )}
        {currentQuestionId === "gender" && (
          <button onClick={() => window.location.href = "/"} className="qbuttonb">Back</button>
        )}
      </div>
    </div>
  );
}

export default App;
