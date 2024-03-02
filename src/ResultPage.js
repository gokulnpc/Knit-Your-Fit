import React, { useContext } from 'react';
import { QuizContext } from './QuizContext';
import { Link } from 'react-router-dom';

function ResultPage() {
    const { answers, questions } = useContext(QuizContext);

    return (
        <div>
            <h2>Your Answers</h2>
            {answers.length > 0 ? (
                <ul>
                    {answers.map((answer, index) => (
                        <li key={index}>{`${questions[index]}: ${answer}`}</li>
                    ))}
                </ul>
            ) : (
                <p>No answers to display. Seems like you haven't taken the quiz yet.</p>
            )}
            <Link to="/">Try again</Link>
        </div>
    );
}

export default ResultPage;
