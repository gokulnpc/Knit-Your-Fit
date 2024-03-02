import React, { useState } from 'react';
import './QuestionComponent.css'; // Make sure the CSS file is correctly imported


const QuestionComponent = ({ question, options, onOptionSelect, selectedOption }) => {
    return (
        <div>
            <div className="question">{question}</div>
            <div className="options">
                {options.map((option, index) => (
                    <div
                        key={index}
                        className={`option ${selectedOption === option ? 'selected' : ''}`}
                        onClick={() => onOptionSelect(option)}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default QuestionComponent;
