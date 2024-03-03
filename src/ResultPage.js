// ResultPage.js
import React, { useContext } from 'react';
import { QuizContext } from './QuizContext';

function ResultPage() {
    const { answers } = useContext(QuizContext);

    return (
        <div>
            <h2>Your Answers:</h2>
            <ul>
                {Object.entries(answers).map(([questionId, answer], index) => (
                    <li key={index}>{`${questionId}: ${answer}`}</li>
                ))}
            </ul>
        </div>
    );
}

export default ResultPage;
