// QuestionComponent.js
import React from 'react';
import './QuestionComponent.css'; // Import the CSS file here

const QuestionComponent = ({ question, options, onOptionSelect }) => {
    return (
        <div className="question-container background"> {/* Use the class name here */}
            <h2 className="question">{question}</h2> {/* Use the class name here */}
            <div className="options"> {/* Use the class name here */}
                {options.map((option, index) => (
                    <button className="qbutton" key={index} onClick={() => onOptionSelect(option.value)}>
                        {option.value}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default QuestionComponent;
